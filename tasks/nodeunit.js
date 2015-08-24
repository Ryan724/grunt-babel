'use strict';
var fs = require('fs');

exports.babel = {
	compile: function (test) {
		var code = fs.readFileSync('test/tmp/fixture.js', 'utf8');
		test.ok(/function/.test(code),"es6->es5不包含函数");
		var map = fs.readFileSync('test/tmp/fixture.js.map', 'utf8');
		test.deepEqual(JSON.parse(map).sources, ['test/fixture.js']);
		test.ok(/\/\/# sourceMappingURL=fixture.js.map\n$/.test(code));
		test.done();
	}
};
