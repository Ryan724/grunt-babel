'use strict';
var fs = require('fs');

exports.babel = {
	compile: function (test) {
		var es5Path = './es5';
		var es5FileNames = fs.readdirSync(es5Path);
		for(var i = 0 ; i < es5FileNames.length ; i ++){
				var es5FileName = "/"+es5FileNames[i];
				var code = fs.readFileSync(es5Path+es5FileName, 'utf8');
				test.ok(/function/.test(code),es5FileName+"不包含函数");
				if(fs.exists(es5Path+es5FileName)){
					var map = fs.readFileSync(es5Path+es5FileName+".map", 'utf8');
					test.deepEqual(JSON.parse(map).sources, ['test/fixture.js']);
					test.ok(/\/\/# sourceMappingURL=/+es5FileName+/.map\n$/.test(code));
				}
		}
		test.done();
	}
};
