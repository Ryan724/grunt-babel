import nodeunit from 'nodeunit'; 
var testSomething = function(test){
    test.expect(1);
    test.ok(true, "this assertion should pass");
    test.done();
};

var testSomethingElse = function(test){
    test.ok(false, "this assertion should fail");
    test.done();
};
exports.obj={testSomething,testSomethingElse};
