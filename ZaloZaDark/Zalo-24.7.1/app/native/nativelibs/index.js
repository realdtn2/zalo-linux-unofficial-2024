let arch;
var instance = module.exports = {
    fileUtils: () => {
        return require('./file-utils/index.js');
    },
    winUtils : ()=>{    	
    	return require('./win-utils/index.js');
    },
    zcall : ()=>{
    	return require('./zcall/index.js');
    },
    sqlite3 : ()=>{
    	return require('./sqlite3/index.js');
    },
    dbUtils : ()=>{
        return require('./db-cross-v4/dist/binding.js');
    },
    v8Profiles : ()=>{
        return require('./v8-profiles/index.js');
    },
    zimage: (options) => {
        return require('./zimage/index.js')(options)
    },
    zaloLogger: () => {
        return require('./logger/index.js');
    },
    zjxl: () => {
        return require('./zjxl/index.js');
    }
}
//////////////////////////////
function test(){
	//if(instance.officeThumbnail().generate_preview.constructor === Function){
		//console.log('office-thumbnail OK');
	//}

	//instance.zcall().test();
	instance.zimage().then(console.error).catch(console.error);
}
// test();

