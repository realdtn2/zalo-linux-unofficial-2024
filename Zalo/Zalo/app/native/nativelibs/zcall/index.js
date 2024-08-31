var VCMac = require('./vcmac.js');
var ZScreenObject = require('./screen-object.js');
var ZScreenCanvasObject = require('./screen-object-canvas.js');

const NO_INSTANCE_ERROR = -100;

class ZVCMac{
	constructor(){		
		this.localScreen = null;
		this.reomoteScreen = null;
		this.zmac = VCMac;
		this.enableCheckEventMessage = false;
		this.doCheckEventMessage = this.doCheckEventMessage.bind(this);
		this.callback = this.callback.bind(this);
		this.bindCanvas = this.bindCanvas.bind(this);
	}
	bindCanvas(localCanvas, remoteCanvas, canvasMode = false, getSizeLocalContainer, getSizeRemoteContainer){	
		let zmac = this.zmac;
		if(canvasMode){
			this.localScreen = new ZScreenCanvasObject(localCanvas, {width: 640, height: 480}, "localScreen", getSizeLocalContainer);
			this.remoteScreen = new ZScreenCanvasObject(remoteCanvas, {width: 360, height: 480}, "remoteScreen", getSizeRemoteContainer);	
		}else{
			this.localScreen = new ZScreenObject(localCanvas, {width: 640, height: 480}, "localScreen", getSizeLocalContainer);
			this.remoteScreen = new ZScreenObject(remoteCanvas, {width: 360, height: 480}, "remoteScreen", getSizeRemoteContainer);	
		}
		

		this.localScreen.setSourceFrame(zmac.getVideoFrameLocal);
		this.remoteScreen.setSourceFrame(zmac.getVideoFrame);

		// let changeTitle = (text)=>{ document.title = text;};				

		// zmac.bindGetPeerId(changeTitle);
		
		// zmac.check();
		// zmac.authenication().then((res)=>{			
		// 	zmac.setState();
		// 	zmac.setCallback();
		// 	zmac.makeCall();
		// 	localScreen.setSourceFrame(zmac.getVideoFrameLocal);
		// 	remoteScreen.setSourceFrame(zmac.getVideoFrame);	
		// 	localScreen.startRender();

		// 	let runRemote = ()=>{
		// 			remoteScreen.startRender();
		// 		};				
		// 	zmac.setStartRender(runRemote);
		// }).catch((e)=>{console.error(e);});		
	}
	stop(){		
		this.enableCheckEventMessage = false;
		if(this.localScreen) {
			this.localScreen.stop();
			delete this.localScreen;		
		}
		if(this.remoteScreen){			
			this.remoteScreen.stop();
			delete this.remoteScreen;
		}
		if(this.zmac)
			this.zmac.stop();
	}

	bindCallbackEventMessage(fn){
		this.callbackEventMessage = fn;
	}

	checkEventMessage(){
		if(this.enableCheckEventMessage){
			this.doCheckEventMessage();
		}
	}
	render(){		
		//
		if(this.localScreen) this.localScreen.render();
		if(this.remoteScreen) this.remoteScreen.render();
	}

	startRender(){
		console.log("===== start render =====");
		if(this.localScreen) this.localScreen.startRender();
		if(this.remoteScreen) this.remoteScreen.startRender();
	}
	getActiveAudioCodecs(){
		return this.zmac.getActiveAudioCodecs();
	}

	holdAudio(hold, local){
		this.zmac.holdAudio(hold, local);
	}

	mute(isMute){
		this.zmac.mute(!!isMute);
	}
	
	stopCapture(isStop){
		this.zmac.stopCapture(!!isStop);
	}

	getCallInfo(){
		return this.zmac.getCallInfo();
	}

	getJsonStats406(startNetworkType  = 0, endNetworkType = 0){
		return this.zmac.getJsonStats406(startNetworkType, endNetworkType);
	}

	changeAudioDevice(inputId, outputId){			
		this.zmac.changeAudioDevice(inputId, outputId);
	}

	setAudioVolume(input, output){
		return this.zmac.setAudioVolume(input, output);
	}

	changeVideoDevice(id){
		this.zmac.changeVideoDevice(id);
	}
	setAgc(auto){
		this.zmac.setAgc(auto);
	}
	startDesktopCapture(){
		this.zmac.startDesktopCapture();
	}
	stopDesktopCapture(){
		this.zmac.stopDesktopCapture();
	}
	changeMinMaxMobileBitrate(){
		this.zmac.changeMinMaxMobileBitrate();
	}

	getExtendData(){
		return this.zmac.getExtendData();
	}

	callback(data){
		console.log("===== callback =====", data.type);
		if(this.callbackEventMessage) this.callbackEventMessage(data);
	}
	
	getListDevices(){
		return this.zmac.getListDevices();
	}

	testConnect(){
		let config = '{"fromId":113733669,"nativeCallPopup":{"zrtpInitTimeThreshold":3,"calleePhone":"84976239499","voiceRequestTimeThreshold":3,"calleeStatus":0},"protocol":3,"toId":156444475,"status":3,"changeZRTP":{"enable":1,"threshold":5},"settings":{"voipResetTime":5,"dynamicFptime":1,"logDebug":1,"checkPkgRec":7,"checkPkgSent":10,"voipFTime3G":20,"checkTimeOut":1500,"dynamicBitrate":1,"voipFTimeWifi":20},"rtpIP":"120.138.74.196:8019","msg":"","tip":{"goodMsg":"","lowMsg":"Nếu đường truyền ảnh hưởng nhiều đến chất lượng thoại, vui lòng kết thúc cuộc gọi và thử lại.","veryGoodMsg":"","timeout":3},"sessId":"ObWyi2vdOK5WQIg37cjcHMDWUBTqPLGGNrPQcdaq9H9DT16tCNHSSajY8e4qMNXWVMadapPJUMuWGpikSr0nas0ugjjYJATEB5cE_JTCjYiZLfY4Cq6oNZ5RWubqEjbDN4pnecfta6ecwfa-U2XfH4C","fec":{"enable":2,"tableLookup":[[-1,3,1],[15,0,0],[25,2,1],[35,3,2],[40,2,2]]},"servers":[{"rtpaddr":"120.138.74.196:8020","rtcpaddr":"120.138.74.196:4004"},{"rtpaddr":"120.138.74.197:8020","rtcpaddr":"120.138.74.197:4004"},{"rtpaddr":"123.30.139.60:8020","rtcpaddr":"123.30.139.60:4004"},{"rtpaddr":"120.138.74.214:8020","rtcpaddr":"120.138.74.214:4004"},{"rtpaddr":"49.213.113.10:8020","rtcpaddr":"49.213.113.10:4004"}],"rtcpIP":"120.138.74.196:4003"}';
		config = JSON.parse(config);		
		config.callId = 10;
		this.makeCall(config);
	}
	test(){
		return this.zmac.check();
	}

	doCheckEventMessage(){		
		let x = this.zmac.getEventMessage();
		if(x){				
			if(x == NO_INSTANCE_ERROR) {
				console.error("no instance error, stop getEventMessage");
				return;
			}			
			console.log(x);
			try{
				x = JSON.parse(x);
				this.callback(x);
			}catch(e){
				console.error(e);
			}		
			// console.log(x);			
		}
		//requestAnimationFrame(this.waitCheckEventMessage);
	}



	updateCallerInfo(audioConfig, extendData){
		this.zmac.updateCallerInfo(audioConfig, extendData);
	}

	incomingCall(config, isVideoCall = true){		
		return new Promise((resolve, reject)=>{
			if(this.enableCheckEventMessage){
				// console.error("in another call");
				reject();
				return;
			}			
			// this.test();
			this.zmac.setConfigData(config, false, isVideoCall)
				.then(()=>{
					this.zmac.incomingCall();
					this.enableCheckEventMessage = true;
					resolve(true);
				})
				.catch((e)=>{
					console.log(e);
					reject(e);
				})	
		});
	}
	makeCall(config, isVideoCall = true){
		return new Promise((resolve, reject)=>{
			// console.log("index::start make Call", config);
			// this.test();
			this.zmac.setCallback();
			this.zmac.setConfigData(config, true, isVideoCall)
				.then(()=>{				
					this.zmac.makeCall();
					//requestAnimationFrame(this.waitCheckEventMessage);
					this.enableCheckEventMessage = true;
					resolve(true);
				})
				.catch((e)=>{
					console.error(e);
					reject(e);
				});	
		});
		
	}
}
const instance = new ZVCMac();
module.exports = instance;