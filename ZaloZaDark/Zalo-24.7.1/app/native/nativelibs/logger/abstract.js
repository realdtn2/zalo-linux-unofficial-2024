const cannotCreateInstanceOnAbstractClass = 'Cannot create instance directly on abstract class';

class AbstractLog {
  constructor(options) {
    if (new.target == 'AbstractLog') {
      throw TypeError(cannotCreateInstanceOnAbstractClass);
    }
    this.options = options;
  }

  combineMessage(texts) {
    const message = [];
    for (let text of texts) {
      message.push(text);
    }
    return message.join(' ');
  }

  configTransport(transports) {
    if (new.target == 'AbstractLog') {
      throw TypeError(cannotCreateInstanceOnAbstractClass);
    }
    this.transports = transports;
  }

  configLevel(levels) {
    if (new.target == 'AbstractLog') {
      throw TypeError(cannotCreateInstanceOnAbstractClass);
    }
    this.levels = levels;
  }

  configFormat(formats) {
    if (new.target == 'AbstractLog') {
      throw TypeError(cannotCreateInstanceOnAbstractClass);
    }
    this.formats = formats;
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
}

class LogTransportBase {
  constructor(transports) {
    if (new.target == 'LogTransportBase') {
      throw TypeError(cannotCreateInstanceOnAbstractClass);
    }
    this.transports = transports;
    return this;
  }
}

class LogLevelBase {
  constructor(levels) {
    if (new.target == 'LogLevelBase') {
      throw TypeError(cannotCreateInstanceOnAbstractClass);
    }
    this.levels = levels;
    return this;
  }
}

class LogFormatBase {
  constructor(format) {
    if (new.target == 'LogConfigBase') {
      throw TypeError(cannotCreateInstanceOnAbstractClass);
    }
    if (typeof format !== 'string') {
      throw TypeError('Format should be a string');
    }
    this.format = format;
    return this;
  }
}

module.exports = {
  AbstractLog,
  LogTransportBase,
  LogLevelBase,
  LogFormatBase,
};