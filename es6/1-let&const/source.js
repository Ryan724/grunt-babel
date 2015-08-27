import nodeunit from 'nodeunit'; 
var testSomething = function(test){
    test.expect(7);
    test.ok(true, "this assertion should pass");
    test.equal(1,'1', "this assertion should equal");
    test.notEqual(1,2, "this assertion should notEqual");
    test.deepEqual(1,1, "this assertion should deepEqual");
    test.notDeepEqual(1,2, "this assertion should notDeepEqual");
    test.strictEqual(1,1, "this assertion should strictEqual");
    test.notStrictEqual(1,2, "this assertion should notStrictEqual");
    test.done();
};
var testLetVar = function(test){
    var a = [];
    for (let i = 0; i < 10; i++) {
        a[i] =  () =>{return i};
    }
    test.equal(a[6](),6, "a[6]() 应该等于6");
    test.done();
};
exports.obj={testLetVar};

