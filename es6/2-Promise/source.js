import nodeunit from 'nodeunit'; 
import 'babel-core/polyfill'; 
let delay ={
	delay:function (ms) {
	    ms = Number(ms);
	    ms = Number.isNaN(ms) ? +0 : Math.max(ms, +0);
	    return new Promise(resolve => setTimeout(resolve, ms));
	}
	/**
	 * @param {[type]}
	 * @param {[type]}
	 */
	,addDelay : function (promise, ms) {
	    ms = Number(ms);
	    ms = Number.isNaN(ms) ? +0 : Math.max(ms, +0);

	    let resolve, reject;
	    const p = new Promise((r, rr) => { resolve = r; reject = rr; });

	    const resolvedToPromise = Promise.resolve(promise);
	    resolvedToPromise.then(
	        v => setTimeout(() => resolve(v), ms),
	        r => setTimeout(() => reject(r), ms)
	    );
	    return p;
	}
}
var test = function(test){
	let endTimer,
		startTimer=(new Date()).getTime();
	delay.delay(1000).then(()=>{
		endTimer=(new Date()).getTime()
		console.log(endTimer-startTimer) //1015 左右
	});
    test.done();
};

exports.obj={test};

