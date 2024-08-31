const PRINT_PERF_LOG = false;
const lastStep = {};
function createMark(level) {
  if (!lastStep[level]) {
    lastStep[level] = 0;
  }
  lastStep[level] += 1;
  return level * 1e2 + lastStep[level];
}

if (!global.perf) {
  let now = () => Date.now();
  const MARK = {
    /* 1               */ STARTUP: createMark(1),
    /*    1.1          */ MIGRATION_DONE: createMark(2),
    /*    1.2          */ MAIN_SCRIPT: createMark(2),
    /*        1.2.1    */ LOADED_MAIN_SCRIPT: createMark(3),
    /*        1.2.2    */ MAIN_APP_READY: createMark(3),

    /*    1.3          */ LOADED_STARTUP_SCRIPT: createMark(2),
    /*        1.3.1    */ STARTUP_BEFORE_HEAVY: createMark(3),
    /*        1.3.2    */ CREATE_MAIN_WINDOW: createMark(3),
    /*        1.3.3    */ SHOW_MAIN_WINDOW: createMark(3),
    /*        1.3.4    */ MAIN_WINDOW_LOADING: createMark(3),
    /*        1.3.5    */ MAIN_WINDOW_LOADED: createMark(3),

    /*    1.2          */ APP_STARTUP: createMark(2),
    /*        1.2.1    */ LOAD_APP_SCRIPT: createMark(3),
    /*        1.2.2    */ APP_DID_MOUNT: createMark(3),
    /*        1.2.3    */ CHATBOX_DID_MOUNT: createMark(3),
    /* 2               */ SELECT_CONVERSATION: createMark(1),
    /*    2.1          */ SELECTED_CONVERSATION: createMark(2),
  };
  global.perf = {
    ...MARK,
    perfRecords: [],
    record: (mark) => {
      if (!mark) mark = 0; // undefined mark
      const record = [mark, now()];
      if (PRINT_PERF_LOG) console.debug(`perf: ${record[0]}-${record[1]}`);
      global.perf.perfRecords.push(record);
    },
  };
}
