function bootstrap() {
  require('./libs/perf-tracing/runtime');
  perf.record(perf.STARTUP);
  require('./main-dist/migration');
  perf.record(perf.MIGRATION_DONE);
  if (require('electron').app.requestSingleInstanceLock()) {
    perf.record(perf.MAIN_SCRIPT);
    require('./main-dist/main');
    require('./pc-dist/zadark-main.min');
  } else {
    require('./main-dist/second-instance');
  }
}

bootstrap();
