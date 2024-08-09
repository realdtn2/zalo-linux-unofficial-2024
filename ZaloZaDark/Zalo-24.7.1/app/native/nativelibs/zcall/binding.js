function getLib(){
    if(process.platform === 'win32'){
        if(process.arch === 'x64') return require('./zcall_x64.node');
        return require('./zcall_ia32.node');
    }else if(process.platform === 'darwin'){
    	return require('./zcall_mac.node');
    }else{
        return {error: 'not support'};
    }
}
module.exports = getLib();