# example-of-node-robotframework-test-project

Example TestCases of [NodeRobotFrameworkTestRunner](https://github.com/samick17/node-robotframework-test-runner) 



1. nodejs library for robotframework testcases(e.g. sut-lib.js)
2. RobotFramework TestCases(e.g. testcases-failed / testcases-passed)

```
var TestRunner = require('node-robotframework-test-runner');
var pathOfSoftwareUnderTestingLibrary = './sut-lib.js';
var pathOfRobotframeworkTestCasesDirectory = './testcases-passed';
TestRunner.run(pathOfSoftwareUnderTestingLibrary, pathOfRobotframeworkTestCasesDirectory)
.then((data) => {
    console.log(data[0]);
    console.log('done!!!');
    process.exit();
}, (err) => {
    console.log(err);
    process.exit();
});
```