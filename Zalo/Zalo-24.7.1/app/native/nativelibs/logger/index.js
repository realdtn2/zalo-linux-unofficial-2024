const { AbstractLog, LogTransportBase, LogLevelBase, LogFormatBase } = require('./abstract');
const buildConfig = require('./logger.config');

let ipcRenderer;
const isWeb = () => {
    try {
        if (__PLATFORM__ === 'WEB') return true;
    } catch (e) {
        return false;
    }
    return false;
}
if (!isWeb()) {
    ipcRenderer = require('electron').ipcRenderer;
}

let remote, fs, path, os, app;
const ZALO_LOG_RENDERER_RECEIVE_MESSAGE = 'zalo_log_render_receive_message';
const ZALO_LOG_RENDERER_RECEIVE_BATCH_MESSAGES = 'zalo_log_renderer_receive_batch_messages';
const ZALO_MAIN_RECEIVE_LOG_MESSAGE = 'zalo_main_receive_log_message';
const maxSize = 1024 * 1024;

let writeStream;
let isLoggerInitiated = false;
let ZaloLogger;
let batchMessages = [];

let onLogWeb = false;
let offLog = false;

class Log extends AbstractLog {
  constructor(options) {
    super(options);
    const keys = Object.keys(options);
    for (let key of keys) {
      if (options && options[key])
      this[key] = options[key];
    }
  }

  initForApp () {
    if (!writeStream) {
      fs = require('fs');
      writeStream = fs.createWriteStream(findLogPath(), { flags: 'a' });
    }
    const needLogRotation = getStreamSize(writeStream) > maxSize;
    if (needLogRotation) {
      writeStream = archiveLog(writeStream);
      if (writeStream) writeStream = null;
      this.openStream();
    }
    return this;
  }

  setPlatform(platform) {
    this.transports.platform = platform;
    if (platform !== 'WEB') {
      this.initForApp()
    }
    return this;
  }

  openStream() {
    if (!writeStream) {
      fs = require('fs');
      writeStream = fs.createWriteStream(findLogPath(), { flags: 'a' });
    }
  }

  warn() {
    const message = this.combineMessage(arguments);
    const data = {
      byName: this.byName,
      message,
      time: this.getTime(),
      level: this.levels.warn,
      browser: true,
      file: false
    };
    this.transports.send(data);
  }
  warnF() {
    const message = this.combineMessage(arguments);
    const data = {
      byName: this.byName,
      message,
      time: this.getTime(),
      level: this.levels.warn,
      browser: true,
      file: true
    };
    this.transports.send(data);
  }

  debug() {
    const message = this.combineMessage(arguments);
    const data = {
      byName: this.byName,
      message,
      time: this.getTime(),
      level: this.levels.debug,
      browser: true,
      file: false
    };
    this.transports.send(data);
  }
  debugF() {
    const message = this.combineMessage(arguments);
    const data = {
      byName: this.byName,
      message,
      time: this.getTime(),
      level: this.levels.debug,
      browser: true,
      file: true
    };
    this.transports.send(data);
  }

  info() {
    const message = this.combineMessage(arguments);
    const data = {
      byName: this.byName,
      message,
      time: this.getTime(),
      level: this.levels.info,
      browser: true,
      file: false
    };
    this.transports.send(data);
  }
  infoF() {
    const message = this.combineMessage(arguments);
    const data = {
      byName: this.byName,
      message,
      time: this.getTime(),
      level: this.levels.info,
      browser: true,
      file: true
    };
    this.transports.send(data);
  }

  error() {
    const message = this.combineMessage(arguments);
    const data = {
      byName: this.byName,
      message,
      time: this.getTime(),
      level: this.levels.error,
      browser: true,
      file: true
    };
    this.transports.send(data);
  }
  errorF() {
    const message = this.combineMessage(arguments);
    const data = {
      byName: this.byName,
      message,
      time: this.getTime(),
      level: this.levels.error,
      browser: true,
      file: true
    };
    this.transports.send(data);
  }
}

function findLogPath(appName = 'ZaloApp') {
  // const appName = 'Zalo-v2';
  remote = require('electron').remote;
  os = require('os');
  app = require('electron').app;
  const appController = remote ? remote.app : app;
  const homeDir = os.homedir ? os.homedir() : process.env['HOME'];

  let dir;
  switch (process.platform) {
    case 'linux': {
      dir = prepareDir(appController.getPath('userData'))
        .or(homeDir, '.config', appName)
        .or(process.env['XDG_DATA_HOME'], appName)
        .or(homeDir, '.local', 'share', appName)
        .result;
      break;
    }

    case 'darwin': {
      dir = prepareDir(appController.getPath('userData'))
        .or(homeDir, 'Library', 'Application Support', appName)
        .result;
      break;
    }

    case 'win32': {
      dir = prepareDir(appController.getPath('userData'))
        .or(homeDir, 'AppData', 'Roaming', appName)
        .result;
      break;
    }
  }

  if (dir) {
    path = require('path');
    return path.join(dir, 'log.log');
  } else {
    return false;
  }
}

function prepareDir(dirPath) {
  // jshint -W040
  if (!this || this.or !== prepareDir || !this.result) {
    if (!dirPath) {
      return { or: prepareDir };
    }

    //noinspection JSCheckFunctionSignatures
    path = require('path');
    dirPath = path.join.apply(path, arguments);
    mkDir(dirPath);

    try {
      fs = require('fs');
      fs.accessSync(dirPath, fs.W_OK);
    } catch (e) {
      return { or: prepareDir };
    }
  }

  return {
    or: prepareDir,
    result: (this ? this.result : false) || dirPath
  };
}

function mkDir(dirPath, root) {
  path = require('path');
  const dirs = dirPath.split(path.sep);
  const dir = dirs.shift();
  root = (root || '') + dir + path.sep;

  try {
    fs = require('fs');
    fs.mkdirSync(root);
  } catch (e) {
    if (!fs.statSync(root).isDirectory()) {
      throw new Error(e);
    }
  }

  return !dirs.length || mkDir(dirs.join(path.sep), root);
}

function getStreamSize(stream) {
  if (!stream) {
    return 0;
  }

  if (stream.logSizeAtStart === undefined) {
    try {
      fs = require('fs');
      stream.logSizeAtStart = fs.statSync(stream.path).size;
    } catch (e) {
      stream.logSizeAtStart = 0;
    }
  }

  return stream.logSizeAtStart + stream.bytesWritten;
}

function archiveLog(stream) {
  if (stream.end) {
    stream.end();
  }

  try {
    fs = require('fs');
    fs.renameSync(stream.path, stream.path.replace(/log$/, 'old.log'));
    stream = null;
  } catch (e) {
    console.log('Could not rotate log', e);
  }
}

class LogLevel extends LogLevelBase {
  constructor(levels) {
    super();
    if (levels && !(levels instanceof 'Array') && (typeof level == 'object')) {
      return levels;
    }
    return {
      debug: 'DEBUG',
      warn: 'WARN ',
      info: 'INFO ',
      error: 'ERROR'
    };
  }
}

class LogFormat extends LogFormatBase {
  constructor(format) {
    super(format);
  }
}

class LogTransport extends LogTransportBase {
  constructor(transports) {
    super(transports);
    if (transports && Array.isArray(transports)) {
      return transports;
    }
    this.file = 'FILE';
    this.browser = 'BROWSER';
  }

  getTime() {
    const time = new Date();
    const day = time.getDate();
    const month = time.getMonth() + 1;
    const year = time.getFullYear();
    const hour = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    const minute = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    const second = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
    return `${day}/${month}/${year}-${hour}:${minute}:${second}`;
  }

  send(data) {
    if (!buildConfig[data.byName].browser && !buildConfig[data.byName].file) {
      return;
    }
    if(offLog) return;
    if (this.platform === 'WEB') {
      if(!onLogWeb) return;
      const messageFormat = `[${this.getTime()}]: ${data.level}: ${data.message}`;
      switch (data.level) {
        case 'DEBUG': console.debug('%c' + messageFormat, 'color: #0eae4a;'); break;
        case 'WARN ': console.warn(messageFormat); break;
        case 'ERROR': console.error(messageFormat); break;
        case 'INFO ': console.info('%c' + messageFormat, 'color: #029ee0'); break;
        default: console.info('%c' + messageFormat, 'color: #0299ee0'); break;
      }
      return;
    }
    ipcRenderer = require('electron').ipcRenderer;
    if (ipcRenderer) {
      ipcRenderer.send(ZALO_MAIN_RECEIVE_LOG_MESSAGE, data);
    } else {
      if (isLoggerInitiated && ZaloLogger && !ZaloLogger.isDestroyed()) {
        ZaloLogger.webContents.send(ZALO_LOG_RENDERER_RECEIVE_MESSAGE, data);
      } else {
        if (batchMessages && Array.isArray(batchMessages)) {
          batchMessages.push(data);
        } else {
          batchMessages = [];
          batchMessages.push(data);
        }
      }
    }
  }
  writeMessageToLogFile(data) {
    try {
      writeStream.write(data);
    } catch (e) {
      console.log(e);
    }
  }
}

function setTargetWebContent(logger) {
  if (!ZaloLogger) {
    ZaloLogger = logger;
    isLoggerInitiated = true;
  }
  if (Array.isArray(batchMessages) && batchMessages.length > 0 && ZaloLogger && !ZaloLogger.isDestroyed()) {
    ZaloLogger.webContents.send(ZALO_LOG_RENDERER_RECEIVE_BATCH_MESSAGES, batchMessages);
  }
}

const levels = new LogLevel();
const format = new LogFormat('[%DD%/%MM%/%YYYY%-%hh%:%mm%:%ss%] %level% : %name%: %message%');
const transports = new LogTransport();

const options = {
  levels,
  format,
  transports,
};

module.exports.findLogPath = findLogPath;
module.exports.prepareDir = prepareDir;
module.exports.mkDir = mkDir;
module.exports.getStreamSize = getStreamSize;
module.exports.archiveLog = archiveLog;
module.exports.levels = levels;
module.exports.transports = transports;
module.exports.setTargetWebContent = setTargetWebContent;
module.exports.setOnLogWeb = (val)=>{onLogWeb = !!val}
module.exports.setOffLog = (val)=>{offLog = !!val}


module.exports.Core = new Log(Object.assign(options, { byName: 'Core' }));
module.exports.Son = new Log(Object.assign(options, { byName: 'Son' }));
module.exports.Anh = new Log(Object.assign(options, { byName: 'Anh' }));
module.exports.Toan = new Log(Object.assign(options, { byName: 'Toan' }));
module.exports.Dang = new Log(Object.assign(options, { byName: 'Dang' }));
module.exports.Bach = new Log(Object.assign(options, { byName: 'Bach' }));
module.exports.Dung = new Log(Object.assign(options, { byName: 'Dung' }));
module.exports.Huynh = new Log(Object.assign(options, { byName: 'Huynh' }));
module.exports.Tai = new Log(Object.assign(options, { byName: 'Tai' }));
module.exports.Thien = new Log(Object.assign(options, { byName: 'Thien' }));
module.exports.Tri = new Log(Object.assign(options, { byName: 'Tri' }));
module.exports.Kha = new Log(Object.assign(options, { byName: 'Kha' }));
module.exports.Dat = new Log(Object.assign(options, { byName: 'Dat' }));
module.exports.Hai = new Log(Object.assign(options, { byName: 'Hai' }));
module.exports.Vi = new Log(Object.assign(options, { byName: 'Vi' }));