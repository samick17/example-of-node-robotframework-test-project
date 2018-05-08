/*
 * @Author: Samick.Hsu <boneache@gmail.com>
 * @Description: Example of how to execute test-runner
 * @CreatedDate: 2018/05/08
 */
//
var TestRunner = require('node-robotframework-test-runner');

//TestRunner.run('./sut-lib.js', './testcases-failed')
TestRunner.run('./sut-lib.js', './testcases-passed')
.then((data) => {
	console.log(data[0]);
	console.log('done!!!');
	process.exit();
}, (err) => {
	console.log(err);
	process.exit();
});