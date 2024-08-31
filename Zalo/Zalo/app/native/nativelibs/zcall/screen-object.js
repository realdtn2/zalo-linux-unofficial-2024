const defaultConfig = {
	width : 360,
	height: 480
}
///"webgl"

class ZScreenObject{

	constructor(canvas, config, name, getSizeContainer){
		if(!config) config = defaultConfig;
		this.canvas = canvas;
		this.enable = true;
		this.config = config;

		this.frameBuff = new Buffer(1920*1080*4);		
		this.name = name;
		this.getSizeContainer = getSizeContainer;

		this.gl = this.createWebGL(this.canvas);
		if(!this.gl){
			this.enable = false;
			return;
		}
		this.initWebGL();
		
		this.initDrawGl();
		this.drawScene = this.drawScene.bind(this);
		this.drawBuff = this.drawBuff.bind(this);
		this.getFrame = this.getFrame.bind(this);
		this.stop = this.stop.bind(this);

		this.setSizeCanvas(config);
	}

	stop(){
		this.enable = false;
	}

	setSourceFrame(source){
		this.source = source;
	}

	initWebGL(){
		if(!this.enable) return;
		let gl = this.gl;
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LEQUAL);
		gl.clear(gl.COLOR_BUFFER_BIT, gl.DEPTH_BUFFER_BIT);		
	}

	setSizeCanvas(config){
		if(!this.enable || !this.gl) return;
		this.gl.viewport(0,0, config.width, config.height);
		this.canvas.width = config.width;
		this.canvas.height = config.height;
		this.config = config;
		if(config.width && config.height){
			this._initBuffer(config.width, config.height);	
		}		
	}

	error(){
		console.error(...arguments);
	}
	info(){
		console.info(...arguments);
	}

	createWebGL(canvas) {
		let gl = null;  
	  	// Try to grab the standard context. If it fails, fallback to experimental.
	  	gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');  
	  // If we don't have a GL context, give up now
	  	if (!gl) {
	    	this.error('Unable to initialize WebGL. Your browser may not support it.');
	  	}  
	  	return gl;
	}


	getShader(gl, id, type){		
		let shaderScript, theSource, currentChild, shader;
		shaderScript = document.getElementById(id);
		
		if(!shaderScript) return null;	

		theSource = shaderScript.text;

		if(!type){
			switch (shaderScript.type) {
				case 'x-shader/x-fragment':
					type = gl.FRAGMENT_SHADER;
					break;
				case 'x-shader/x-vertex':			
					type = gl.VERTEX_SHADER;
					break;
				default:				
					return null;				
			}		
		}
		shader = gl.createShader(type);
		gl.shaderSource(shader, theSource);
		this.info(theSource);
		gl.compileShader(shader);	

		if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
			this.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader)); 
			gl.deleteShader(shader);
			return null;
		}
		return shader;
	}

	createProgramFromScripts(gl, arrIds){
		let program = gl.createProgram();
		for(let i = 0; i < arrIds.length; i++){
			let x = this.getShader(gl, arrIds[i]);
			gl.attachShader(program, x);
		}			
		gl.linkProgram(program);
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
	    	this.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(program));
	  	}  	
	  	return program;
	}

	initDrawGl(){
	    // console.log("initDrawGl");
	    this._array = new Float32Array([
           0.0,  0.0,
           1.0,  0.0,
           0.0,  1.0,
           0.0,  1.0,
           1.0,  0.0,
           1.0,  1.0]);
	    this.program = this.createProgramFromScripts(this.gl, ["2d-vertex-shader", "2d-fragment-shader"]);
	    this.gl.useProgram(this.program);  	   
	}


	render(){
		if(this.enable) this.drawScene();
	}
	startRender(){
		this.lastTime = new Date().getTime();		
		requestAnimationFrame(this.drawScene);
	}
	getFrame(){
		return this.source(this.frameBuff);
	}
	drawScene(){		
		if(!this.enable) return;
		// this.info("drawScene");
		let data = this.getFrame();
		if(data){			
			this.drawBuff(data.width, data.height);			
		}
		// requestAnimationFrame(this.drawScene);
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
	_initBuffer(width, height){
		let gl = this.gl, program = this.program;

		let texture = gl.createTexture();
      	gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  		// let dstX =20, dstY = 30, dstWidth = width, dstHeight = height;
  		let dstX =0, dstY = 0, dstWidth = width, dstHeight = height;

  		let positionLocation = gl.getAttribLocation(program, "a_position"); 
    
    	let u_imageLoc = gl.getUniformLocation(program, "u_image"),
    		u_matrixLoc = gl.getUniformLocation(program, "u_matrix"),
    		positionBuffer = gl.createBuffer();


    
    	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    	gl.bufferData(gl.ARRAY_BUFFER, this._array, gl.STATIC_DRAW);
    	gl.enableVertexAttribArray(positionLocation);
    	gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);    
    
    	let clipX = dstX / gl.canvas.width  *  2 - 1,
    		clipY = dstY / gl.canvas.height * -2 + 1,
    		clipWidth = dstWidth  / gl.canvas.width  *  2,
    		clipHeight = dstHeight / gl.canvas.height * -2;

    	gl.uniformMatrix3fv(u_matrixLoc, false, [
	        clipWidth, 0, 0,
	        0, clipHeight, 0,
	        clipX, clipY, 1,
	      ]);
	}

	drawBuff(width, height){		
		let gl = this.gl, 
			buff = this.frameBuff;
		let lenBuff = width* height * 4;

		this.resizeContainer(width, height);		
		let dataTypedArray = buff.slice(0, lenBuff);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, dataTypedArray);		
    	gl.drawArrays(gl.TRIANGLES, 0, 6);
	}
}	

module.exports = ZScreenObject;