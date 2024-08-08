 let ZMacCall = require('./binding.js');
// var XMLHttpRequest = XMLHttpRequest || require('xmlhttprequest').XMLHttpRequest;
var runZMAC = true;
const NO_INSTANCE_ERROR = -100;
//======================================
//======================================

const 	LOGIN_URL = "https://vlogin.zaloapp.com/login",
		GENID_URL = "http://api.conf.talk.zing.vn/genuid",
		CONFIG_URL = "http://api.conf.talk.zing.vn/zls?action=call_config";

class VCMac{	
	logEvent(name){
		// console.log(new Array(5).join("="), name, new Array(5).join("="));
	}
	logStep(name){
		// let ans = this.authenObject;
		// console.log(new Array(40).join("="));
		// console.log("------ "+name.toUpperCase()+" -------");
		// console.log(new Array(40).join("="));
	}
	constructor(){
		this.onEventFire = this.onEventFire.bind(this);		
		this.logEvent("Start Constructor");
		this.instance = ZMacCall.MainApp();
		this.logEvent("End Constructor");
		this.authenObject = {
			_session: "",
			_genPeerId: 0,
			_config: ""
		};
		this.render = false;
		this.getVideoFrame = this.getVideoFrame.bind(this);
		this.getVideoFrameLocal = this.getVideoFrameLocal.bind(this);
		this.openRender = ()=>{this.render = false};
		this.openRender = this.openRender.bind(this);
	}	

	///////////incoming call
	incomingCall(data){
		this.logStep("incomingCall");
		this.instance.incomingCall();

	}

	startDesktopCapture(){
		this.instance.startDesktopCapture();
	}
	stopDesktopCapture(){
		this.instance.stopDesktopCapture();
	}

	//////////////////
	holdAudio(hold, local = false){
		this.instance.holdAudio(hold, local);
	}
	mute(isMute){
		this.instance.mute(isMute);
	}
	stopCapture(isStop){
		this.instance.stopCapture(isStop);
	}

	getOsInfo(){
		let _osInfo = '';
		try{
			if(process){
				if(process.platform) _osInfo += process.platform;
				if(process.arch) _osInfo += ' ' + process.arch;
			}
		}catch(e){
			console.error(e);
		}
		return _osInfo;
	}

	setConfigData(config, caller = true, isVideoCall = true){
		return new Promise((resolve, reject)=>{
			let _configJson, _userId, _partnerId, _protocol, _callId, _genSession, _config, _enableChangeZRTP = false;
			_configJson = JSON.stringify(config.settings);
			_userId = config.fromId;
			_partnerId = config.toId;
			_protocol = config.protocol;
			_callId = config.callId;
			_genSession = config.sessId;

			let _logPath = '',
				_osInfo = this.getOsInfo(),
				_clientVersion = this.parseIntFallback(config.clientVersion, 0);
			try{				
				let electron = require('electron');
				let dir = electron.remote.app.getPath('userData');
				if(config.settings.logDebug && dir){
					let path = require('path');
					_logPath = path.join(dir, 'call.log');			
					console.log("setconfig::logPath", _logPath);		
				}
			}catch(e){
				console.error(e);
			}
			
			

			let _servers = config.servers;

			// console.log("setConfigData::set config", config);		
			if(config.changeZRTP)
				_enableChangeZRTP = !!(config.changeZRTP.enable == 1 );

			let onDone= (res)=>{
				this.logStep("done get config state");
					// console.log("setConfigData:::", res);
					_config = res;									
					this.instance.setConfig(_configJson, _userId, _partnerId, _protocol, _callId, _genSession, _config, _enableChangeZRTP, isVideoCall, _logPath, _osInfo, _clientVersion);
					// console.log("setMediaConfig", config.audioConfig, config.extendData);
					if(!caller){				
						this.instance.setMediaConfig(config.audioConfig || "", config.extendData);
					}
					if(_servers && caller){
						// _servers.forEach(v=>{
						// 	this.instance.setConfigServer(v.rtcpaddr, v.rtpaddr);
						// });	
						// console.log('set servers', _servers);
						this.instance.setListServers(JSON.stringify(_servers));
					}else{
						// console.log("setConfigData::setConfigData no server ??? ",config);
						this.instance.setConfigServer(config.rtcpIP, config.rtpIP);
					}			
					
					resolve(true);
			};
			if(config.zrtc_config){
				onDone(JSON.stringify(config.zrtc_config));
				return;
			}
			this.getConfigState()
				.then((res)=>{
					onDone(res);		
				})
				.catch((e)=>{
					reject(e);
					console.error(e);
				})
		});
		
	}

	updateCallerInfo(audioConfig, extendData){
		this.instance.updateCallerInfo(audioConfig, extendData);
	}

	bindGetPeerId(callback){		
		this.getPeerIdCallback = callback;
	}
	error(args){
		// console.log.call(this, args);
		// console.log(args);		
	}
	log(args){
		// console.log.call(this, args);		
		// console.log(args);		
	}

	getCallInfo(){
		return this.instance.getCallInfo();
	}

	getJsonStats406(startNetworkType  = 0, endNetworkType = 0){
		return this.instance.getJsonStats406(startNetworkType, endNetworkType);
	}

	getListDevices(){
		return this.instance.getListDevices();
	}
	
	parseIntFallback(input, val){
		try{
			let x = parseInt(input);
			return x;
		}catch(e){
			return val;
		}

	}

	setAudioVolume(input, output){
		try{
			input = this.parseIntFallback(input, 150);
			output = this.parseIntFallback(output, 150);
			console.error(input, output);

			return this.instance.setAudioVolume(input, output);
		}catch(e){
			return false;
		}
	}

	changeAudioDevice(inputId, outputId){
		try{
			inputId = this.parseIntFallback(inputId, -10);
			outputId = this.parseIntFallback(outputId, -10);
			this.instance.changeAudioDevice(inputId, outputId);
		}catch(e){
			console.error(e);
		}
	}
	changeVideoDevice(id){
		if(!id) id = '__id_default__zzzz_' + Date.now(); 
		this.instance.changeVideoDevice(id);
	}
	setAgc(auto){
		auto = !!auto;
		this.instance.setAgc(auto);
	}

	getExtendData(){
		return this.instance.getExtendData();
	}

	getActiveAudioCodecs(){
		return this.instance.getActiveAudioCodecs();
	}

	getEventMessage(){
		if(this.instance){			
			return this.instance.getEventMessage();		
		}else{
			return NO_INSTANCE_ERROR;
		}
	}
	getVideoFrame(buff){
		if(this.instance){
			let x = this.instance.getVideoFrame(buff);		
			/*if(x){
				console.log("get video frame width height", x.width, x.height);
			}else{
				console.log(x);
			}*/
			return x;
		}
	}

	getVideoFrameLocal(buff){
		if(this.instance)
			return this.instance.getVideoFrameLocal(buff);		
	}
	changeMinMaxMobileBitrate(){
		this.instance.changeMinMaxMobileBitrate();
	}

	setStartRender(a){
		this.callStart = a;
	}
	onEventFire(){		
		//flag start
		//window.draw();
		if(this.callStart) this.callStart();
		// let a = this.instance.getVideoFrame();
		// console.log(a);
	}

	check(){
		try{
			return (this.instance.test(123) == 123);
		}catch(e){
			return false;
		}
		// console.log("Response must be 123: " , this.instance.test(123));
		// let x = new Buffer(10);
		// let y = new Uint8ClampedArray(x, 0, 10);
		// console.log("test Buffer ");
		// console.log(y);
		// this.instance.testBuffer(x);
		// y = new Uint8ClampedArray(x,0, 5);
		// console.log(y);
		// console.log("end test Buffer");
	}

	setState(){
		if(!this.authenObject._session || !this.authenObject._config){
			// console.log(new Array(5).join("="), "setState::Error::need Authentiate first", new Array(5).join("="));			
		}else{
			this.logStep("set state");
			if(this.getPeerIdCallback) {				
				this.getPeerIdCallback(this.authenObject._genPeerId);
			}
			this.instance.setState(this.authenObject._session, this.authenObject._genPeerId, this.authenObject._config);
		}
	}
	stop(){
		if(this.instance) this.instance.stop();
		if(this.instance) delete this.instance;
		if(this.authenObject) delete this.authenObject;
	}

	makeCall(){
		this.logStep("make call");
		this.instance.makeCall();
		// this.onEventFire();
	}

	setCallback(){
		let cb = this.onEventFire.bind(this);
		this.instance.setCallback(cb);
	}

	//======================================
	// Request for authenication	
	//======================================
	authenication(){		
		this.logStep("start authenication");
		let ans = this.authenObject;
		return new Promise((resolve, reject)=>{			
			let doLogin = ()=>{
				this.sendHttp(LOGIN_URL, null , false, 2000)
					.then((res)=>{
						console.log(new Array(40).join("="));
						console.log("login success",res);
						console.log(new Array(40).join("="));
						let ret = JSON.parse(res);
						if(ret.err == 0 && ret.data.err == 0){							
							ans._session = ret.data.session;
							doGenPeerIdState();
						}else{
							throw new Error(ret.err || ret.data.err);
						}						
						
					}).catch((e)=>{												
						this.error(e);
						reject(e);
					});
			},
			doGenPeerIdState = ()=>{
				this.sendHttp(GENID_URL, null, false, 2000)
					.then((res)=>{
						console.log(new Array(40).join("="));
						console.log(res);
						console.log(new Array(40).join("="));
						let ret = JSON.parse(res);
						if(ret.err == 0 && ret.data.id){
							ans._genPeerId = ret.data.id;
							// console.error(ret.data.id);
							doGetConfigState();
						}else{
							throw new Error(ret.err || ret.data);
						}

					}).catch((e)=>{
						reject(e);
						this.error(e);
					});
			},
			doGetConfigState = ()=>{
				this.sendHttp(CONFIG_URL, null, false, 2000)
					.then((res)=>{			
						// console.log(new Array(40).join("="));
						// console.log(res);
						// console.log(new Array(40).join("="));			
						let ret = JSON.parse(res);
						ret = ret.config;
						// ret = JSON.stringify(ret);
						// console.log(ret);
						// ret = JSON.parse(ret);
						if(ret.constructor === Object){
							console.log("object====");
						}else{
							console.log("lsdfsldfds========= ",typeof ret);
						}
						//compactObj(ret);
						// for(let k in ret)
						// 	if(!ret[k]) {
						// 		console.log("deleted 2", k);
						// 		delete ret[k];
						// 	}
						ans._config = JSON.stringify(ret);
						// console.log(ans._config);
						resolve(ans);
					}).catch((e)=>{
						reject(e);
						this.error(e);
					});
			};
			doLogin();	
		});		
	}

	getConfigState(){
		return new Promise((resolve, reject)=>{
			this.sendHttp(CONFIG_URL, null, false, 2000)
				.then((res)=>{
					let ret = JSON.parse(res);
					ret = ret.config;
					resolve(JSON.stringify(ret));
				})
				.catch((e)=>{
					reject(e);
					this.error(e);
				})
		})
	}
	addParamsToUrl(url, params){
		if(!params || (typeof params !== Object) ) return url;
		let res = [];
		for(let k in params)
			if(params.hasOwnProperty(k)){
				res.push(k + "=" + params[k]);
			}
		if(res.length == 0) return url;
		return url + "?" + res.join("&");
	}
	sendHttp(url, query = null, post = false, timeout = null){
		return new Promise((resolve, reject)=>{			
            let request = new XMLHttpRequest();                             
                      

            if(timeout) request.timeout = timeout;                
           	request.open(post ? "POST":"GET", url, true);
            request.setRequestHeader('Accept', 'application/json, text/plain, */*');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            request.onerror = (e)=>{reject(e)};
            request.onabort = (e)=>{reject(e)};
            if(timeout) request.ontimeout = (e)=>{reject(e)};

            request.onreadystatechange = (res)=>{            	
            	// console.log("http state change ", request.readyState);
            	if (request.readyState == 4) {            	            		
            		if(request.status == 200){
            			resolve(request.responseText);	
            		}else{
            			reject(request.responseText);
            		}       				
    			}
            }    
                               
            request.send(query ? query : null);
		});		
	}
	//======================================	

}

const instance = new VCMac();
module.exports = instance;
//======================================
//=====================================
