import nodeunit from "nodeunit"
{
  let a = 10;
  var b = 1;
}
exports.test=function(test){
	test.ok(a,"aa");
}
