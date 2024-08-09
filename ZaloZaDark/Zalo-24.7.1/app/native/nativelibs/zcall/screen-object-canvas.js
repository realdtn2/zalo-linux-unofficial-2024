const defaultConfig = {
	width : 360,
	height: 480
}
//"canvas type"

class ZScreenObject{

	constructor(canvas, config, name, getSizeContainer){
		if(!config) config = defaultConfig;
		this.canvas = canvas;
		this.enable = true;
		this.config = config;
		this.frameBuff = new Buffer(1920*1080*4);
		this.name = name;
		this.getSizeContainer = getSizeContainer;
		
		this.gl = this.createCanvas(this.canvas);
		if(!this.gl){
			this.enable = false;
			return;
		}

		this.setSizeCanvas(config);
		// this.initDrawGl();
		this.drawScene = this.drawScene.bind(this);
		this.drawBuff = this.drawBuff.bind(this);
		this.getFrame = this.getFrame.bind(this);		
		this.stop = this.stop.bind(this);
	}

	stop(){
		console.log("stop screen object draw");
		this.enable = false;
	}

	setSourceFrame(source){
		this.source = source;
	}

	setSizeCanvas(config){
		if(!this.enable || !this.gl) return;		
		this.canvas.width = config.width;
		this.canvas.height = config.height;
		this.config = config;
	}

	error(){
		console.error(...arguments);
	}
	info(){
		console.info(...arguments);
	}

	createCanvas(canvas) {
		let gl = null;  
	  	// Try to grab the standard context. If it fails, fallback to experimental.
	  	gl = canvas.getContext('2d');  
	  // If we don't have a GL context, give up now
	  	if (!gl) {
	    	this.error('Unable to initialize cavas 2d. Your browser may not support it.');
	  	}  
	  	return gl;
	}
	//render by hand
	render(){	
		if(this.enable) 
			this.drawScene();
	}
	//render automatically
	startRender(){
		this.lastTime = new Date().getTime();		
		requestAnimationFrame(this.drawScene);
	}
	getFrame(){
		return this.source(this.frameBuff);
	}
	drawScene(){		
		if(!this.enable) return;
		let data = this.getFrame();
		if(data){
			this.drawBuff(data);			
		}
	}
	_shouldUpdate(rWidth, rHeight, uiMode, width, height){
		let _should = (rWidth != this._lastrWidth
				|| rHeight != this._lastrHeight
				|| uiMode != this._lastuiMode
				|| width != this._width
				|| height != this._height);
		if(_should){
			this._lastrHeight = rHeight;
			this._lastrWidth = rWidth;
			this._lastuiMode = uiMode;
			this._width = width;
			this._height = height;
		}
		return _should;
	}
	resizeContainer(width, height){
		let rWidth, rHeight, uiMode;
		if( (!this._lastResize || (Date.now() - this._lastResize >= 1000)) && !this._resize ){
			this._resize = true;
			requestAnimationFrame(()=>{
				this._resize = false;
				[rWidth, rHeight, uiMode] = this.getSizeContainer();
				if(this._shouldUpdate(rWidth, rHeight, uiMode, width, height)){
					let scale = Math.min(rWidth/ width, rHeight / height);
					let cWidth = Math.round(100*scale * width/rWidth) , cHeight = Math.round(100 * height * scale/ rHeight);
					this.canvas.style.width = `${cWidth}%`;
					this.canvas.style.height = `${cHeight}%`;
					if(this.name == 'localScreen'){			
						if(uiMode === 1){
							this.canvas.style.top = `${100-cHeight}%`;
							this.canvas.style.left = `${100-cWidth}%`;
						}else{
							this.canvas.style.top = `${Math.floor((100 - cHeight)/2)}%`;				
							this.canvas.style.left = `${Math.floor((100 - cWidth)/2)}%`;
						}			
					}else{
						this.canvas.style.top = `${Math.floor((100 - cHeight)/2)}%`;			
					}		
				}						
				this._lastResize = Date.now();
			})
		}		
		if(width != this.config.width || height != this.config.height){
			this.setSizeCanvas({width: width, height: height});
		}
		
	}
	drawBuff(data){
		let buff = this.frameBuff , width = data.width, height = data.height;
		if(width ==0 || height == 0) return;
		let lenBuff = width * height * 4;
		if(lenBuff <=0){			
			return;	
		} 
		let gl = this.gl;			
		let dataTypedArray = new Uint8ClampedArray(buff.slice(0, lenBuff));		
		let imageData = new ImageData(dataTypedArray, width, height);
		this.resizeContainer(width, height);		

		gl.putImageData(imageData, 0, 0);	

		// window.gc();
		dataTypedArray = null;
		imageData = null;	
	}

}	
module.exports = ZScreenObject;