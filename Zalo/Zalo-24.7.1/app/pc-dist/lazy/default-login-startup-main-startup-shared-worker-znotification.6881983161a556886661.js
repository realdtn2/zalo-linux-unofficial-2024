(this.webpackJsonp=this.webpackJsonp||[]).push([[3],{"3xbP":function(e,E,t){"use strict";t.d(E,"a",(function(){return _})),t.d(E,"c",(function(){return S})),t.d(E,"d",(function(){return R})),t.d(E,"b",(function(){return a}));const _=Object.freeze({CHILD_WINDOW_CLOSED:"CHILD_WINDOW_CLOSED",CHILD_WINDOW_ALIVE:"CHILD_WINDOW_ALIVE"}),S="1",R=Object.freeze({MAIN_WINDOW:"MAIN_WINDOW",CHILD_WINDOW:"CHILD_WINDOW"}),a="1"},y485:function(e,E,t){"use strict";t.r(E);var _=t("VTBJ");let S=function(e){return e.NOTIFY="NOTIFY",e.REQUEST="REQUEST",e.REQUEST_SYNC="REQUEST_SYNC",e.SUBSCRIBE="SUBSCRIBE",e.UNSUBSCRIBE="UNSUBSCRIBE",e.ONCE="SUBSCRIBE_ONCE",e.PROVIDE="PROVIDE",e.STOP_PROVIDE="STOP_PROVIDE",e.RAW_SEND="RAW_SEND",e}({});var R=t("fsQs");let a=function(e){return e.MINIMIZE="minimize",e.MAXIMIZE_TOGGLER="toggle-maximize",e.EXPAND_MAIN_WINDOW="main-window-expand",e.IS_MAXIMIZED="check-maximize",e.IS_FULLSCREEN="check-fullscreen",e.FULLSCREEN_TOGGLER="toggle-fullscreen",e.FLASH_FRAME="flash-frame",e.FOCUS="focus-window",e.CLOSE_WINDOW="close-window",e.HIDE="hide-window",e.SHOW_INACTIVE="show-inactive",e.SHOW="show",e.QUIT="quit",e.SHOW_OPEN_DIALOG="show-open-dialog",e.SHOW_SAVE_DIALOG="show-save-dialog",e.SHOW_OPEN_DIALOG_SYNC="show-open-dialog-sync",e.SHOW_SAVE_DIALOG_SYNC="show-save-dialog-sync",e.VISIBILITY_CHANGE="visibility-change",e.HIDE_WINDOW_COMPLETE="hide-window-complete",e.OPEN_PHOTO_VIEWER_DEVTOOL="open-photo-viewer-devtool",e[e.UNLOAD_ZLOG=R.s]="UNLOAD_ZLOG",e}({});const p={minimize:{apiKey:a.MINIMIZE,type:S.REQUEST},maximizeToggler:{apiKey:a.MAXIMIZE_TOGGLER,type:S.REQUEST},expandMainWindow:{apiKey:a.EXPAND_MAIN_WINDOW,type:S.REQUEST},isMaximized:{apiKey:a.IS_MAXIMIZED,type:S.REQUEST},isFullScreen:{apiKey:a.IS_FULLSCREEN,type:S.REQUEST},fullscreenToggler:{apiKey:a.FULLSCREEN_TOGGLER,type:S.REQUEST},flashFrame:{apiKey:a.FLASH_FRAME,type:S.REQUEST},focus:{apiKey:a.FOCUS,type:S.REQUEST},closeWindow:{apiKey:a.CLOSE_WINDOW,type:S.REQUEST},hide:{apiKey:a.HIDE,type:S.REQUEST},showInactive:{apiKey:a.SHOW_INACTIVE,type:S.REQUEST},show:{apiKey:a.SHOW,type:S.REQUEST},quit:{apiKey:a.QUIT,type:S.REQUEST},showOpenDialog:{apiKey:a.SHOW_OPEN_DIALOG,type:S.REQUEST},showSaveDialog:{apiKey:a.SHOW_SAVE_DIALOG,type:S.REQUEST},showOpenDialogSync:{apiKey:a.SHOW_OPEN_DIALOG_SYNC,type:S.REQUEST},showSaveDialogSync:{apiKey:a.SHOW_SAVE_DIALOG_SYNC,type:S.REQUEST},onVisibilityChange:{apiKey:a.VISIBILITY_CHANGE,type:S.SUBSCRIBE},removeListenVisibilityChange:{apiKey:a.VISIBILITY_CHANGE,type:S.UNSUBSCRIBE},onHideWindowComplete:{apiKey:a.HIDE_WINDOW_COMPLETE,type:S.SUBSCRIBE},removeListenHideWindowComplete:{apiKey:a.HIDE_WINDOW_COMPLETE,type:S.UNSUBSCRIBE},openPhotoViewerDevtool:{apiKey:a.OPEN_PHOTO_VIEWER_DEVTOOL,type:S.REQUEST},onUnloadZLog:{apiKey:a.UNLOAD_ZLOG,type:S.SUBSCRIBE},removeListenUnloadZLog:{apiKey:a.UNLOAD_ZLOG,type:S.UNSUBSCRIBE}};let i=function(e){return e.Z_URI_REQUEST="z-uri-request",e.Z_URI_OPEN_CONV="z-uri-open-conv",e.Z_URI_OPEN_ZAVI="z-uri-open-zavi",e.CHECK_ON_START_UP="check-startup-open-conv-request",e.CHECK_ARG_LINK="check-arg-link",e}({});const N={onNewRequest:{apiKey:i.Z_URI_REQUEST,type:S.SUBSCRIBE},removeListenNewRequest:{apiKey:i.Z_URI_REQUEST,type:S.UNSUBSCRIBE},onRequestOpenConv:{apiKey:i.Z_URI_OPEN_CONV,type:S.SUBSCRIBE},removeListenRequestOpenConv:{apiKey:i.Z_URI_OPEN_CONV,type:S.UNSUBSCRIBE},onRequestOpenZavi:{apiKey:i.Z_URI_OPEN_ZAVI,type:S.SUBSCRIBE},removeListenRequestOpenZavi:{apiKey:i.Z_URI_OPEN_ZAVI,type:S.UNSUBSCRIBE},checkOpenConvReq:{apiKey:i.CHECK_ON_START_UP,type:S.REQUEST},checkArgvLink:{apiKey:i.CHECK_ARG_LINK,type:S.RAW_SEND}};let C=function(e){return e.RENDERER_READY="renderer-ready",e.REQUEST_SHOW_PREFERENCE="preferences",e.REQUEST_SHOW_ABOUT="about",e.BEFORE_QUIT_APP="app-before-quit",e.NETWORK_TIMEOUT_ERR="CHECK_NETWORK_TIMEOUT_ERR",e.BEFORE_CLOSE_APP="before-close",e.SHOW_FROM_TRAY="show-from-tray",e.NOTI_CLICK="noti-click",e.NOTI_CREATE="noti-create",e.NOTI_READY="noti-ready",e.DB_FAIL="signal-db-fail",e.DB_CORRUPTION="signal-db-corruption",e.HIDE_APP_BEFORE_QUIT="z-hide-app-before-quit",e.BU_CONFIRM_RESTART="bu-confirm-restart",e.RESTART_APP_FOR_BACKUP="bu-ask-restart",e.BU_REJECT_BACKUP="bu-reject-backup",e.BU_DB_READY="bu-db-ready",e.BU_DB_CHANGE_INTERVAL="bu-db-change-interval",e.OS_RESTART="os-force-restart",e.QUIT_APP_NOW="do-quit",e.OS_CONFIRM_RESTART="os-confirm-restart",e.ZAM_RESET_DB="ZAM_RESET_DB",e.CONFIRM_QUIT="before-quit",e.Z_NET_ERR="znet-error-code",e.SHOW_OPEN_FILE_POPUP="zfile-popup",e.RECEIVE_ARGUMENTS="receive-arguments",e.SHOW_TOAST_FROM_MAIN="show-toast-from-main",e.REGISTER_PROCESS="zmain_register_process",e.PING="zping",e.RECEIVE_RELAUNCH_MODE="receive-relaunch-mode",e.LANGUAGE_CHANGE="language-change",e.ENABLE_NET_HANDLER="enable-net-handler",e.MONITOR_MEMORY="start-monitor-app-memory-usage",e.UPDATE_CURRENT_USERID="ChatApp-receive-userId",e.GET_PROXY_CONFIG="proxy-get",e.SET_PROXY_CONFIG="proxy-set",e.BADGE_COUNT="badge-count",e.CERT_CONFIG="cert-config",e.BEFORE_APP_RESTART_SILENTLY="app-before-restart-silently",e.AFTER_APP_RESTART_SILENTLY="app-after-restart-silently",e}({});const o={notifyRendererReady:{apiKey:C.RENDERER_READY,type:S.NOTIFY},onRequestShowAbout:{apiKey:C.REQUEST_SHOW_ABOUT,type:S.SUBSCRIBE},onRequestShowPreference:{apiKey:C.REQUEST_SHOW_PREFERENCE,type:S.SUBSCRIBE},removeListenShowAbout:{apiKey:C.REQUEST_SHOW_ABOUT,type:S.UNSUBSCRIBE},removeListenShowPreference:{apiKey:C.REQUEST_SHOW_PREFERENCE,type:S.UNSUBSCRIBE},beforeAppQuit:{apiKey:C.BEFORE_QUIT_APP,type:S.SUBSCRIBE},removeListenBeforeAppQuit:{apiKey:C.BEFORE_QUIT_APP,type:S.UNSUBSCRIBE},beforeAppClose:{apiKey:C.BEFORE_CLOSE_APP,type:S.SUBSCRIBE},removeListenBeforeAppClose:{apiKey:C.BEFORE_CLOSE_APP,type:S.UNSUBSCRIBE},checkNetworkTimeout:{apiKey:C.NETWORK_TIMEOUT_ERR,type:S.REQUEST},requestShowFromTray:{apiKey:C.SHOW_FROM_TRAY,type:S.SUBSCRIBE},removeListenRequestShowFromTray:{apiKey:C.SHOW_FROM_TRAY,type:S.UNSUBSCRIBE},notifyClickNoti:{apiKey:C.NOTI_CLICK,type:S.NOTIFY},onClickNoti:{apiKey:C.NOTI_CLICK,type:S.SUBSCRIBE},removeListenClickNoti:{apiKey:C.NOTI_CLICK,type:S.UNSUBSCRIBE},onRequestRestartAppForBackup:{apiKey:C.RESTART_APP_FOR_BACKUP,type:S.SUBSCRIBE},removeListenBackupRestartReq:{apiKey:C.RESTART_APP_FOR_BACKUP,type:S.UNSUBSCRIBE},notifyDbFail:{apiKey:C.DB_FAIL,type:S.NOTIFY},notifyDbCorruption:{apiKey:C.DB_CORRUPTION,type:S.NOTIFY},requestHideBeforeQuit:{apiKey:C.HIDE_APP_BEFORE_QUIT,type:S.RAW_SEND},confirmRestartBu:{apiKey:C.BU_CONFIRM_RESTART,type:S.NOTIFY},rejectRestartBu:{apiKey:C.BU_REJECT_BACKUP,type:S.NOTIFY},notifyBuReady:{apiKey:C.BU_DB_READY,type:S.NOTIFY},changeBuInterval:{apiKey:C.BU_DB_CHANGE_INTERVAL,type:S.NOTIFY},onOsRequestRestart:{apiKey:C.OS_RESTART,type:S.SUBSCRIBE},removeListenOsRestart:{apiKey:C.OS_RESTART,type:S.UNSUBSCRIBE},requestQuitAppImmediately:{apiKey:C.QUIT_APP_NOW,type:S.REQUEST},osConfirmRestart:{apiKey:C.OS_CONFIRM_RESTART,type:S.REQUEST},restartByZAM:{apiKey:C.ZAM_RESET_DB,type:S.REQUEST},onConfirmAppQuit:{apiKey:C.CONFIRM_QUIT,type:S.SUBSCRIBE},removeListenConfirmAppQuit:{apiKey:C.CONFIRM_QUIT,type:S.UNSUBSCRIBE},onNetErr:{apiKey:C.Z_NET_ERR,type:S.SUBSCRIBE},removeListenNetErr:{apiKey:C.Z_NET_ERR,type:S.UNSUBSCRIBE},onRequestShowOpenFile:{apiKey:C.SHOW_OPEN_FILE_POPUP,type:S.SUBSCRIBE},removeListenShowOpenFile:{apiKey:C.SHOW_OPEN_FILE_POPUP,type:S.UNSUBSCRIBE},onReceiveArgument:{apiKey:C.RECEIVE_ARGUMENTS,type:S.SUBSCRIBE},removeListenReceiveArguments:{apiKey:C.RECEIVE_ARGUMENTS,type:S.UNSUBSCRIBE},onShowToastFromMain:{apiKey:C.SHOW_TOAST_FROM_MAIN,type:S.SUBSCRIBE},removeListenToastFromMain:{apiKey:C.SHOW_TOAST_FROM_MAIN,type:S.UNSUBSCRIBE},registerProcess:{apiKey:C.REGISTER_PROCESS,type:S.NOTIFY},onPing:{apiKey:C.PING,type:S.PROVIDE},removeListenPing:{apiKey:C.PING,type:S.STOP_PROVIDE},requestCreateNoti:{apiKey:C.NOTI_CREATE,type:S.REQUEST},onRequestShowNoti:{apiKey:C.NOTI_CREATE,type:S.SUBSCRIBE},notifyNotiReady:{apiKey:C.NOTI_READY,type:S.REQUEST},notifyRelaunchMode:{apiKey:C.RECEIVE_RELAUNCH_MODE,type:S.RAW_SEND},changeLanguage:{apiKey:C.LANGUAGE_CHANGE,type:S.RAW_SEND},enableNetHandler:{apiKey:C.ENABLE_NET_HANDLER,type:S.REQUEST},monitorMemory:{apiKey:C.MONITOR_MEMORY,type:S.REQUEST},updateCurrentUserId:{apiKey:C.UPDATE_CURRENT_USERID,type:S.RAW_SEND},getProxyConfig:{apiKey:C.GET_PROXY_CONFIG,type:S.REQUEST},setProxyConfig:{apiKey:C.SET_PROXY_CONFIG,type:S.RAW_SEND},updateBadgeCount:{apiKey:C.BADGE_COUNT,type:S.REQUEST},updateCertConfig:{apiKey:C.CERT_CONFIG,type:S.NOTIFY},beforeAppRestartSilently:{apiKey:C.BEFORE_APP_RESTART_SILENTLY,type:S.SUBSCRIBE},removeListenBeforeAppRestartSilently:{apiKey:C.BEFORE_APP_RESTART_SILENTLY,type:S.UNSUBSCRIBE},afterAppRestartSilently:{apiKey:C.AFTER_APP_RESTART_SILENTLY,type:S.SUBSCRIBE},removeListenAfterAppRestartSilently:{apiKey:C.AFTER_APP_RESTART_SILENTLY,type:S.UNSUBSCRIBE}};let A=function(e){return e.GET_PHOTOVIEWER_URL="get-photo-viewer-url",e.GET_CHILD_WINDOW_URL="get-child-url",e.CLIPBOARD_CHANGE="clipboard-change",e.GET_IMEI="get-imei",e.GET_RESOURCE_DIR="get-resource-dir",e.CHECK_IDLE_UPDATE_BUSY="check-updater-busy",e.GET_RECENT_FILE="get-recent-file",e.GET_AUTH_DOMAIN="get-auth-domain",e.GET_AUTH_DOMAIN_READY="get-auth-domain-ready",e.GET_AUTH_DOMAIN_REPLY="get-auth-domain-reply",e}({});const n={getPhotoviewerUrl:{apiKey:A.GET_PHOTOVIEWER_URL,type:S.REQUEST},getChildUrl:{apiKey:A.GET_CHILD_WINDOW_URL,type:S.REQUEST},onClipboardChange:{apiKey:A.CLIPBOARD_CHANGE,type:S.SUBSCRIBE},removeListenClipboardChange:{apiKey:A.CLIPBOARD_CHANGE,type:S.UNSUBSCRIBE},onRequestImei:{apiKey:A.GET_IMEI,type:S.PROVIDE},removeListenRequestImei:{apiKey:A.GET_IMEI,type:S.STOP_PROVIDE},getResourceDir:{apiKey:A.GET_RESOURCE_DIR,type:S.REQUEST},onCheckIdleUpdaterBusy:{apiKey:A.CHECK_IDLE_UPDATE_BUSY,type:S.PROVIDE},removeListenCheckIdleUpdateBusy:{apiKey:A.CHECK_IDLE_UPDATE_BUSY,type:S.STOP_PROVIDE},getRecentFiles:{apiKey:A.GET_RECENT_FILE,type:S.REQUEST},authError:{apiKey:A.GET_AUTH_DOMAIN,type:S.NOTIFY},getAuthDomainReady:{apiKey:A.GET_AUTH_DOMAIN_READY,type:S.NOTIFY},getAuthDomainReply:{apiKey:A.GET_AUTH_DOMAIN_REPLY,type:S.PROVIDE}};let y=function(e){return e.DOWNLOAD_CONTROLLER_CHANNEL="new-download-channel",e.DOWNLOAD_CONFIG_CHANGE="download-config-change",e.INVALID_EXTS_CHANGE="invalid-file-exts-change",e.DOWNLOAD_THUMB_TEMP="download-thumb-temp",e}({});const O={sendDownloadRequest:{apiKey:y.DOWNLOAD_CONTROLLER_CHANNEL,type:S.REQUEST},onDownloadResp:{apiKey:y.DOWNLOAD_CONTROLLER_CHANNEL,type:S.SUBSCRIBE},removeListenDownloadResp:{apiKey:y.DOWNLOAD_CONTROLLER_CHANNEL,type:S.UNSUBSCRIBE},updateDownloadConfig:{apiKey:y.DOWNLOAD_CONFIG_CHANGE,type:S.REQUEST},updateInvalidFileExts:{apiKey:y.INVALID_EXTS_CHANGE,type:S.REQUEST},downloadThumbTemp:{apiKey:y.DOWNLOAD_THUMB_TEMP,type:S.REQUEST}};let I=function(e){return e.REQUEST_CHANNEL="shared-worker-req-events",e.RESPONSE_CHANNEL="shared-worker-resp-events",e.FAIL_LOAD_LIB_SQLITE3="fail-load-sqlite3",e.NOTIFY_STATUS_LOAD_LIB_SQLITE3="status-load-sqlite3",e.OPEN_DB_FAIL="db-open-fail",e.IPC_DB_AUTHENTICATED="db-authenticated",e.IPC_DB_CLIENT_CONNECTED="db-client-connected",e.IPC_START_CLOSE_DBS="db-start-close-dbs",e.IPC_FINISH_CLOSE_DBS="db-finish-close-dbs",e.SYNC_MSG_ABORT="sync-msg-abort",e.DB_CORRUPTION_DETECTOR="z-db-corruption-detector",e}({});const T={sendRequest:{apiKey:I.REQUEST_CHANNEL,type:S.REQUEST},processRequest:{apiKey:I.REQUEST_CHANNEL,type:S.SUBSCRIBE},removeListenNewRequest:{apiKey:I.REQUEST_CHANNEL,type:S.UNSUBSCRIBE},sendResponse:{apiKey:I.RESPONSE_CHANNEL,type:S.REQUEST},processResponse:{apiKey:I.RESPONSE_CHANNEL,type:S.SUBSCRIBE},removeListenNewResponse:{apiKey:I.RESPONSE_CHANNEL,type:S.UNSUBSCRIBE},onFailedLoadSqlite:{apiKey:I.FAIL_LOAD_LIB_SQLITE3,type:S.SUBSCRIBE},checkFailedLoadSqlite:{apiKey:I.FAIL_LOAD_LIB_SQLITE3,type:S.REQUEST},updateAvailableSqliteState:{apiKey:I.NOTIFY_STATUS_LOAD_LIB_SQLITE3,type:S.NOTIFY},notifyOpenDBFailed:{apiKey:I.OPEN_DB_FAIL,type:S.NOTIFY},authenticateDb:{apiKey:I.IPC_DB_AUTHENTICATED,type:S.NOTIFY},onReceiveSession:{apiKey:I.IPC_DB_AUTHENTICATED,type:S.SUBSCRIBE},removeListenNewSession:{apiKey:I.IPC_DB_AUTHENTICATED,type:S.UNSUBSCRIBE},notifyDbConnected:{apiKey:I.IPC_DB_CLIENT_CONNECTED,type:S.NOTIFY},requestCloseDbs:{apiKey:I.IPC_START_CLOSE_DBS,type:S.NOTIFY},onRequestCloseDbs:{apiKey:I.IPC_START_CLOSE_DBS,type:S.SUBSCRIBE},removeListenRequestCloseDbs:{apiKey:I.IPC_START_CLOSE_DBS,type:S.UNSUBSCRIBE},notifyFinishCloseDb:{apiKey:I.IPC_FINISH_CLOSE_DBS,type:S.NOTIFY},abortSyncMsg:{apiKey:I.SYNC_MSG_ABORT,type:S.NOTIFY},getDatabaseHealthStatus:{apiKey:I.DB_CORRUPTION_DETECTOR,type:S.REQUEST}};let U=function(e){return e.SIGNAL_OS_CLOSE_MAIN_CHANNEL="signal_OS_CLOSE_MAIN",e.CROSS_LOG_QOS_CHANNEL="cross_OS_LOG_QOS",e.CROSS_LOG_QOS_CONFIG="cross_OS_LOG_QOS_config",e.CROSS_LOG_QOS_READY_CHANNEL="cross_OS_LOG_QOS_READY",e.CROSS_LOG_ACTION_CHANNEL="cross_OS_LOG_ACTION",e.CROSS_LOG_ACTION_READY_CHANNEL="cross_OS_LOG_ACTION_READY",e.CROSS_ACTION_LOG_999_CHANNEL="cross_ACTION_LOG_999_CHANNEL",e.LOAD_SHELL_QOS="load-shell-qos",e.RECENT_CRASH="check-recently-crash",e.MAIN_UNCAUGHT_ERROR="main-process-uncaught-error",e.LOG="log",e.LOG_GA="log-ga",e.SEND_VIEWKEY="receive-viewerkey",e}({});const r={crossQosLog:{apiKey:U.CROSS_LOG_QOS_CHANNEL,type:S.REQUEST},crossQosConfig:{apiKey:U.CROSS_LOG_QOS_CONFIG,type:S.NOTIFY},notifyOsCloseMain:{apiKey:U.SIGNAL_OS_CLOSE_MAIN_CHANNEL,type:S.NOTIFY},notifyQosReady:{apiKey:U.CROSS_LOG_QOS_READY_CHANNEL,type:S.NOTIFY},onQosLog:{apiKey:U.CROSS_LOG_QOS_CHANNEL,type:S.SUBSCRIBE},onActionLog999:{apiKey:U.CROSS_ACTION_LOG_999_CHANNEL,type:S.SUBSCRIBE},removeListenActionLog999:{apiKey:U.CROSS_ACTION_LOG_999_CHANNEL,type:S.UNSUBSCRIBE},removeListenQosLog:{apiKey:U.CROSS_LOG_QOS_CHANNEL,type:S.UNSUBSCRIBE},notifyActionLogReady:{apiKey:U.CROSS_LOG_ACTION_READY_CHANNEL,type:S.NOTIFY},onActionLog:{apiKey:U.CROSS_LOG_ACTION_CHANNEL,type:S.SUBSCRIBE},removeListenActionLog:{apiKey:U.CROSS_LOG_ACTION_CHANNEL,type:S.UNSUBSCRIBE},onMainUncaughtError:{apiKey:U.MAIN_UNCAUGHT_ERROR,type:S.SUBSCRIBE},removeListenMainUncaughtError:{apiKey:U.MAIN_UNCAUGHT_ERROR,type:S.UNSUBSCRIBE},sendLog:{apiKey:U.LOG,type:S.NOTIFY},sendLogGa:{apiKey:U.LOG_GA,type:S.NOTIFY},sendViewerkey:{apiKey:U.SEND_VIEWKEY,type:S.NOTIFY},onReceiveViewerkey:{apiKey:U.SEND_VIEWKEY,type:S.SUBSCRIBE},removeListenViewerkey:{apiKey:U.SEND_VIEWKEY,type:S.UNSUBSCRIBE},loadShellQos:{apiKey:U.LOAD_SHELL_QOS,type:S.REQUEST},checkRecentCrash:{apiKey:U.RECENT_CRASH,type:S.REQUEST}};let s=function(e){return e.LOGIN="login",e.LOGIN_STEP="login-step",e.USER_NOT_LOGGED_IN="signal_USER_NOT_LOGGED_IN",e.LOGIN_SUCCESS="login-success",e.LOGIN_AFTER_INSTALL="login-after-install",e.CLEAR_ZAVI_COOKIE="clear-all-zavi-cookies",e}({});const L={login:{apiKey:s.LOGIN,type:S.RAW_SEND},updateLoginStep:{apiKey:s.LOGIN_STEP,type:S.RAW_SEND},loginAfterInstall:{apiKey:s.LOGIN_AFTER_INSTALL,type:S.RAW_SEND},onUserNotLogged:{apiKey:s.USER_NOT_LOGGED_IN,type:S.SUBSCRIBE},removeListenUserNotLogged:{apiKey:s.USER_NOT_LOGGED_IN,type:S.UNSUBSCRIBE},notifyLoginSuccess:{apiKey:s.LOGIN_SUCCESS,type:S.REQUEST},onLoginSuccess:{apiKey:s.LOGIN_SUCCESS,type:S.SUBSCRIBE},removeListenLoginSuccess:{apiKey:s.LOGIN_SUCCESS,type:S.UNSUBSCRIBE},clearZaviCookie:{apiKey:s.CLEAR_ZAVI_COOKIE,type:S.REQUEST}};let B=function(e){return e.SEND_METRICS="send-metrics",e.RESPONSE_METRICS="response-metrics",e}({});const D={sendMessage:{apiKey:B.SEND_METRICS,type:S.NOTIFY},onMessage:{apiKey:B.RESPONSE_METRICS,type:S.SUBSCRIBE}};var l=t("3xbP");const c=Object(_.a)(Object(_.a)({},l.a),{},{CLOSE_ALL_CHILDS:"close-all-childs"}),K={onChildWindowClose:{apiKey:c.CHILD_WINDOW_CLOSED,type:S.SUBSCRIBE},removeListenChildWindowClose:{apiKey:c.CHILD_WINDOW_CLOSED,type:S.UNSUBSCRIBE},closeAllChilds:{apiKey:c.CLOSE_ALL_CHILDS,type:S.REQUEST}};let P=function(e){return e.START_SCREENCAP="screen-capture",e.GET_CLIPBOARD="get-clipboard",e.RESTART_SCREENCAP="restart-cap",e.REWRITE_CLIPBOARD="rewrite-clipboard",e.CHANGE_SCREENCAP_STATUS="change-screencap-status",e.SCREENSHOT_SHORTCUT_RESULT="screenshot-shortcut-result",e.SCREENSHOT_CAPTURE_SHORTCUT="screen-capture-shortcut",e.SCREEN_CAPTURE_RESPONSE_ACCEPT="screen-capture-response-accept",e.SCREEN_CAPTURE_RESPONSE_NO_PERMISSION="screen-capture-response-no-permission",e.EVENT_OS_CHANGED="event-os-changed",e.SCREEN_CAPTURE_RESPONSE_SEND2ME="screen-capture-response-send2me",e.FORWARD_SCREENCAP="forward_screencap",e.WARNING_INSTALL_ROSETTA="warning_install_rosetta",e}({});const u={start:{apiKey:P.START_SCREENCAP,type:S.REQUEST},getClipboard:{apiKey:P.GET_CLIPBOARD,type:S.REQUEST},restart:{apiKey:P.RESTART_SCREENCAP,type:S.REQUEST},rewriteClipboard:{apiKey:P.REWRITE_CLIPBOARD,type:S.REQUEST},onChangeStatus:{apiKey:P.CHANGE_SCREENCAP_STATUS,type:S.SUBSCRIBE},removeListenChangeStatus:{apiKey:P.CHANGE_SCREENCAP_STATUS,type:S.UNSUBSCRIBE},onScreenshotShortcut:{apiKey:P.SCREENSHOT_SHORTCUT_RESULT,type:S.SUBSCRIBE},removeScreenshotShortcut:{apiKey:P.SCREENSHOT_SHORTCUT_RESULT,type:S.UNSUBSCRIBE},onScreenCapture:{apiKey:P.SCREENSHOT_CAPTURE_SHORTCUT,type:S.SUBSCRIBE},removeListenScreenCapture:{apiKey:P.SCREENSHOT_CAPTURE_SHORTCUT,type:S.UNSUBSCRIBE},onCaptureAccept:{apiKey:P.SCREEN_CAPTURE_RESPONSE_ACCEPT,type:S.SUBSCRIBE},removeListenCaptureAccept:{apiKey:P.SCREEN_CAPTURE_RESPONSE_ACCEPT,type:S.UNSUBSCRIBE},onCaptureNoPermission:{apiKey:P.SCREEN_CAPTURE_RESPONSE_NO_PERMISSION,type:S.SUBSCRIBE},removeListenCaptureNoPermission:{apiKey:P.SCREEN_CAPTURE_RESPONSE_NO_PERMISSION,type:S.UNSUBSCRIBE},onEventOs:{apiKey:P.EVENT_OS_CHANGED,type:S.SUBSCRIBE},removeListenEventOs:{apiKey:P.EVENT_OS_CHANGED,type:S.UNSUBSCRIBE},onSend2Me:{apiKey:P.SCREEN_CAPTURE_RESPONSE_SEND2ME,type:S.SUBSCRIBE},removeListenSend2Me:{apiKey:P.SCREEN_CAPTURE_RESPONSE_SEND2ME,type:S.UNSUBSCRIBE},onForwardScreencap:{apiKey:P.FORWARD_SCREENCAP,type:S.SUBSCRIBE},removeListenForwardScreencap:{apiKey:P.FORWARD_SCREENCAP,type:S.UNSUBSCRIBE},onWarningInstallRosetta:{apiKey:P.WARNING_INSTALL_ROSETTA,type:S.SUBSCRIBE},removeListenWarningInstallRosetta:{apiKey:P.WARNING_INSTALL_ROSETTA,type:S.UNSUBSCRIBE}};let d=function(e){return e.CALL_REQUEST="call-request",e.CALL_SEND_SIGNAL="call-send-signal",e.CALL_SERVER_REQUEST="call-server-request",e.CALL_LOCAL_REQUEST="call-local-request",e.CALL_UPDATE="call-update",e.CALL_ACTIVE_NATIVE_APP="call_active_native_app",e.PC_SHUTTING_DOWN="pc-shutting-down",e.STOP_SHARING="stop-sharing",e.SEND_TO_NATIVE="call-send-to-native",e.ZAVI_SEND_TO_NATIVE="zavi-call-send-to-native",e.CALL_INIT="call-init",e.ZAVI_CALL_INIT="zavi-call-init",e.CALL_RESPONSE_LIST_DEVICE="call-response-listDevice",e.START_ROOM_CALL="call-start-roomid",e.END_ROOM_CALL="call-end-roomid",e}({});const H={onRequestCallFromServer:{apiKey:d.CALL_SERVER_REQUEST,type:S.SUBSCRIBE},removeListenRequestCallFromServer:{apiKey:d.CALL_SERVER_REQUEST,type:S.UNSUBSCRIBE},onRequestCallFromLocal:{apiKey:d.CALL_LOCAL_REQUEST,type:S.SUBSCRIBE},removeListenRequestCallFromLocal:{apiKey:d.CALL_LOCAL_REQUEST,type:S.UNSUBSCRIBE},onCallUpdate:{apiKey:d.CALL_UPDATE,type:S.SUBSCRIBE},removeListenCallUpdate:{apiKey:d.CALL_UPDATE,type:S.UNSUBSCRIBE},onCallActiveNative:{apiKey:d.CALL_ACTIVE_NATIVE_APP,type:S.SUBSCRIBE},removeListenCallActiveNative:{apiKey:d.CALL_ACTIVE_NATIVE_APP,type:S.UNSUBSCRIBE},onPcShuttingDown:{apiKey:d.PC_SHUTTING_DOWN,type:S.SUBSCRIBE},removeListenPcShuttingDown:{apiKey:d.PC_SHUTTING_DOWN,type:S.UNSUBSCRIBE},onStopSharing:{apiKey:d.STOP_SHARING,type:S.SUBSCRIBE},removeListenStopSharing:{apiKey:d.STOP_SHARING,type:S.UNSUBSCRIBE},onCallSignal:{apiKey:d.CALL_SEND_SIGNAL,type:S.SUBSCRIBE},removeListenCallSignal:{apiKey:d.CALL_SEND_SIGNAL,type:S.UNSUBSCRIBE},onCallRequest:{apiKey:d.CALL_REQUEST,type:S.SUBSCRIBE},removeListenCallRequest:{apiKey:d.CALL_REQUEST,type:S.UNSUBSCRIBE},initCall:{apiKey:d.CALL_INIT,type:S.RAW_SEND},sendDataToNative:{apiKey:d.SEND_TO_NATIVE,type:S.RAW_SEND},zaviInitCall:{apiKey:d.CALL_INIT,type:S.NOTIFY},zaviSendDataToNative:{apiKey:d.ZAVI_SEND_TO_NATIVE,type:S.NOTIFY},onCallResponseDevices:{apiKey:d.CALL_RESPONSE_LIST_DEVICE,type:S.ONCE},removeListenCallDevices:{apiKey:d.CALL_RESPONSE_LIST_DEVICE,type:S.UNSUBSCRIBE},startRoomCall:{apiKey:d.START_ROOM_CALL,type:S.NOTIFY},endRoomCall:{apiKey:d.END_ROOM_CALL,type:S.RAW_SEND}};let m=function(e){return e.OPEN_IN_APP_PAYMENT="open-in-app-payment",e.CLOSE_IN_APP_PAYMENT="close-in-app-payment",e}({});const G={openUrl:{apiKey:m.OPEN_IN_APP_PAYMENT,type:S.REQUEST},closeInAppPayment:{apiKey:m.CLOSE_IN_APP_PAYMENT,type:S.REQUEST}};let v=function(e){return e.SETUP="active-deactive:setup",e.ACTIVE="active-deactive:active",e.DEACTIVE="active-deactive:deactive",e.CREATE_TIMER="active-deactive:create-timer",e.CLEAR_TIMER="active-deactive:clear-timer",e.GET_IDLE_TIME="active-deactive:get-idle-time",e}({});const F={getIdleTime:{apiKey:v.GET_IDLE_TIME,type:S.REQUEST},setup:{apiKey:v.SETUP,type:S.NOTIFY},createTimer:{apiKey:v.CREATE_TIMER,type:S.NOTIFY},clearTimer:{apiKey:v.CLEAR_TIMER,type:S.NOTIFY},onActiveFromBackground:{apiKey:v.ACTIVE,type:S.SUBSCRIBE},onDeactiveFromBackground:{apiKey:v.DEACTIVE,type:S.SUBSCRIBE},offActiveFromBackground:{apiKey:v.ACTIVE,type:S.UNSUBSCRIBE},offDeactiveFromBackground:{apiKey:v.DEACTIVE,type:S.UNSUBSCRIBE}};let g=function(e){return e.REQUEST_UPDATE="update-is-avail",e.BINARY_UPDATED="binary-updated",e.REQUEST_CHECK_UPDATE="z-check-for-update",e.MANUAL_BINARY_UPDATED="z-manual-binary-updated",e.FALLBACK_UPDATE="fallback-update",e.RESOURCE_UPDATE="resources-updated",e.RESOURCE_RELOAD_SAFE="resources-reload-safe",e.BINARY_RELOAD_SAFE="binary-reload-safe",e.MANUAL_BINARY_RELOAD_SAFE="manual-binary-reload-safe",e.RECEIVE_UPDATE_INFO="receive-update-info",e.MANUAL_UPDATE_INSTALLING="z-manual-update-installing",e.MANUAL_UPDATE_DOWNLOADING="z-manual-update-downloading",e.MANUAL_UPDATE_CHECKED="z-manual-update-checked",e.MANUAL_UPDATE_CHECKED_ONLY="z-manual-update-checked-only",e.MANUAL_UPDATE_CHECKED_ONLY_ERR="z-manual-update-checked-only-err",e.MANUAL_UPDATE_ERR="z-manual-update-err",e.MANUAL_UPDATE_DOWNLOAD_CHECK="z-manual-check-download-update",e.MANUAL_UPDATE_DOWNLOAD_CHECK_ONLY="z-manual-check-download-update-only",e.OPEN_UPDATE_PAGE="OPEN_UPDATE_PAGE",e.UNCAUGHT_ERR="updater-uncaught-error",e}({});const W={requestUpdate:{apiKey:g.REQUEST_UPDATE,type:S.REQUEST},requestCheckUpdate:{apiKey:g.REQUEST_CHECK_UPDATE,type:S.NOTIFY},onNewUpdate:{apiKey:g.BINARY_UPDATED,type:S.SUBSCRIBE},onNewManualUpdate:{apiKey:g.MANUAL_BINARY_UPDATED,type:S.SUBSCRIBE},onFallbackUpdate:{apiKey:g.FALLBACK_UPDATE,type:S.SUBSCRIBE},removeListenNewUpdate:{apiKey:g.BINARY_UPDATED,type:S.UNSUBSCRIBE},removeListenNewManualUpdate:{apiKey:g.MANUAL_BINARY_UPDATED,type:S.UNSUBSCRIBE},removeListenFallbackUpdate:{apiKey:g.FALLBACK_UPDATE,type:S.UNSUBSCRIBE},onResourceUpdate:{apiKey:g.RESOURCE_UPDATE,type:S.SUBSCRIBE},removeResourceUpdate:{apiKey:g.REQUEST_UPDATE,type:S.UNSUBSCRIBE},onManualUpdateInstalling:{apiKey:g.MANUAL_UPDATE_INSTALLING,type:S.SUBSCRIBE},removeListenManualUpdateInstalling:{apiKey:g.REQUEST_UPDATE,type:S.UNSUBSCRIBE},onManualUpdateDownloading:{apiKey:g.MANUAL_UPDATE_DOWNLOADING,type:S.SUBSCRIBE},removeListenManualUpdateDownloading:{apiKey:g.MANUAL_UPDATE_DOWNLOADING,type:S.UNSUBSCRIBE},onManualUpdateChecked:{apiKey:g.MANUAL_UPDATE_CHECKED,type:S.SUBSCRIBE},removeListenManualUpdateChecked:{apiKey:g.MANUAL_UPDATE_CHECKED,type:S.UNSUBSCRIBE},onManualUpdateCheckedOnly:{apiKey:g.MANUAL_UPDATE_CHECKED_ONLY,type:S.SUBSCRIBE},removeListenManualUpdateCheckedOnly:{apiKey:g.MANUAL_UPDATE_CHECKED_ONLY,type:S.UNSUBSCRIBE},onManualUpdateCheckOnlyErr:{apiKey:g.MANUAL_UPDATE_CHECKED_ONLY_ERR,type:S.SUBSCRIBE},removeListenManualUpdateCheckOnlyErr:{apiKey:g.MANUAL_UPDATE_CHECKED_ONLY_ERR,type:S.UNSUBSCRIBE},onManualUpdateErr:{apiKey:g.MANUAL_UPDATE_ERR,type:S.SUBSCRIBE},removeListenManualUpdateErr:{apiKey:g.MANUAL_UPDATE_ERR,type:S.UNSUBSCRIBE},requestCheckDownloadUpdate:{apiKey:g.MANUAL_UPDATE_DOWNLOAD_CHECK,type:S.RAW_SEND},requestCheckDownloadUpdateOnly:{apiKey:g.MANUAL_UPDATE_DOWNLOAD_CHECK_ONLY,type:S.NOTIFY},requestResourceReload:{apiKey:g.RESOURCE_RELOAD_SAFE,type:S.NOTIFY},requestBinaryReload:{apiKey:g.BINARY_RELOAD_SAFE,type:S.NOTIFY},requestManualBinaryReload:{apiKey:g.MANUAL_BINARY_RELOAD_SAFE,type:S.NOTIFY},openUpdatePage:{apiKey:g.OPEN_UPDATE_PAGE,type:S.NOTIFY},onReceiveUpdateInfo:{apiKey:g.RECEIVE_UPDATE_INFO,type:S.ONCE},onUncaughtError:{apiKey:g.UNCAUGHT_ERR,type:S.UNSUBSCRIBE},removeListenUncaughtError:{apiKey:g.UNCAUGHT_ERR,type:S.UNSUBSCRIBE}};let M=function(e){return e.SHOW_SHARED_WORKER="show-shared-worker",e.SHARED_WORKER_START="shared-worker-start",e.SHARED_WORKER_HANDLE="shared-worker-handle",e.SHARED_WORKER_PING="shared-worker-ping",e.SHARED_WORKER_DISPOSE="shared-worker-dispose",e.SHARED_WORKER_PROGRESS="shared-worker-progress",e.SHARED_WORKER_RESP="shared-worker-resp",e.SHARED_WORKER_RUN="shared-worker-run",e.SHARED_WORKER_ABORT="shared-worker-abort",e.SHARED_WORKER_UPDATE_PARAMS="shared-worker-update-params",e[e.UNLOAD_ZLOG=R.s]="UNLOAD_ZLOG",e}({});const h={show:{apiKey:M.SHOW_SHARED_WORKER,type:S.NOTIFY},start:{apiKey:M.SHARED_WORKER_START,type:S.NOTIFY},register:{apiKey:M.SHARED_WORKER_HANDLE,type:S.NOTIFY},ping:{apiKey:M.SHARED_WORKER_PING,type:S.NOTIFY},dispose:{apiKey:M.SHARED_WORKER_DISPOSE,type:S.NOTIFY},updateProgress:{apiKey:M.SHARED_WORKER_PROGRESS,type:S.NOTIFY},onReceiveUpdateProgress:{apiKey:M.SHARED_WORKER_PROGRESS,type:S.SUBSCRIBE},removeListenUpdateProgress:{apiKey:M.SHARED_WORKER_PROGRESS,type:S.UNSUBSCRIBE},responseResult:{apiKey:M.SHARED_WORKER_RESP,type:S.NOTIFY},onReceiveResult:{apiKey:M.SHARED_WORKER_RESP,type:S.SUBSCRIBE},removeListenResult:{apiKey:M.SHARED_WORKER_RESP,type:S.UNSUBSCRIBE},runTask:{apiKey:M.SHARED_WORKER_RUN,type:S.NOTIFY},onRequestRunTask:{apiKey:M.SHARED_WORKER_RUN,type:S.SUBSCRIBE},removeListenRunTask:{apiKey:M.SHARED_WORKER_RUN,type:S.UNSUBSCRIBE},abortTask:{apiKey:M.SHARED_WORKER_ABORT,type:S.NOTIFY},onRequestAbortTask:{apiKey:M.SHARED_WORKER_ABORT,type:S.SUBSCRIBE},removeListenAbortTask:{apiKey:M.SHARED_WORKER_ABORT,type:S.UNSUBSCRIBE},updateTaskParams:{apiKey:M.SHARED_WORKER_UPDATE_PARAMS,type:S.NOTIFY},onRequestUpdateTaskParams:{apiKey:M.SHARED_WORKER_UPDATE_PARAMS,type:S.SUBSCRIBE},removeListenUpdateTaskParams:{apiKey:M.SHARED_WORKER_UPDATE_PARAMS,type:S.UNSUBSCRIBE},onUnloadZLog:{apiKey:M.UNLOAD_ZLOG,type:S.SUBSCRIBE},removeListenUnloadZLog:{apiKey:M.UNLOAD_ZLOG,type:S.UNSUBSCRIBE}};let Q=function(e){return e.EXEC="exec",e.EXEC_RAW="exec_raw",e.REMOTE_EVENTS="remote_events",e.CANCEL="cancel",e}({});const Y={cancel:{apiKey:Q.CANCEL,type:S.REQUEST},execRaw:{apiKey:Q.EXEC_RAW,type:S.REQUEST},exec:{apiKey:Q.EXEC,type:S.REQUEST},onRemoteEvents:{apiKey:Q.REMOTE_EVENTS,type:S.SUBSCRIBE}};let f=function(e){return e.TRIGGER_AUTO_DOWNLOAD="trigger-auto-download",e}({});const w={onRequestTriggerAutoDownload:{apiKey:f.TRIGGER_AUTO_DOWNLOAD,type:S.SUBSCRIBE},removeListenTriggerAutoDownload:{apiKey:f.TRIGGER_AUTO_DOWNLOAD,type:S.UNSUBSCRIBE}};let V=function(e){return e.GET_HEAP="gett-heap",e.WRITE_HEAP="write-heap",e}({});const b={getHeap:{apiKey:V.GET_HEAP,type:S.REQUEST},writeHeap:{apiKey:V.WRITE_HEAP,type:S.NOTIFY}},k={listeners:{},provider:{}};function z(e,E){let t=e.split("."),_=E;for(let S of t)_[S]=_[S]||{},_=_[S];return _}function q(e,E,t){const{apiKey:_}=t,S=k.listeners[_];z(e,$zsub)[t.name]=e=>{-1==S.indexOf(e)&&S.push(e),k.provider[_]||(k.provider[_]=E[t.name](((...e)=>{for(let E of S)E(...e)})))}}function Z(e,E,t){const{apiKey:_}=t,S=k.listeners[_];z(e,$zsub)[t.name]=e=>{const _=S.indexOf(e);-1!=_&&S.splice(_,1),S.length<=0&&(E[t.name](),delete k.provider[t.apiKey])}}function $(e,E,t){for(let a in t){var R;const p=t[a];switch(k.listeners[p.apiKey]=null!==(R=k.listeners[p.apiKey])&&void 0!==R?R:[],p.type){case S.SUBSCRIBE:q(e,E,Object(_.a)({name:a},p));break;case S.UNSUBSCRIBE:Z(e,E,Object(_.a)({name:a},p))}}}globalThis.$zsub={},$("$zwindow",$zwindow,p),$("$zuri",$zuri,N),$("$zapp",$zapp,o),$("$zresource",$zresource,n),$("$zdownload",$zdownload,O),$("$zdb",$zdb,T),$("$zupdater",$zupdater,W),$("$zsharedWorker",$zsharedWorker,h),$("$zlogger",$zlogger,r),$("$zlogin",$zlogin,L),$("$zMetric",$zMetric,D),$("$zmulti",$zmulti,K),$("$zscreencap",$zscreencap,u),$("$zcall",$zcall,H),$("$zFeatures.activeDeactive",$zFeatures.activeDeactive,F),$("$zFeatures.mainless",$zFeatures.mainless,Y),$("$zFeatures.syncDownload",$zFeatures.syncDownload,w),$("$zcloud",$zcloud,b),$("$zInAppPayment",$zInAppPayment,G)}}]);
//# sourceMappingURL=../sourcemaps/lazy/default-login-startup-main-startup-shared-worker-znotification.6881983161a556886661.js.map