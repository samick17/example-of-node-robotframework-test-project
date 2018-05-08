/*
 * @Author: Samick.Hsu <boneache@gmail.com>
 * @Description: Example of node library under testing
 * @CreatedDate: 2018/05/08
 */
//
(function() {

	var factDef = {
		name: 'factorial',
		fn: function (n) {
			if(n > 0) {
				return n * factDef.fn( n - 1);
			} else {
				return 1;
			}
		},
		doc: 'Calculate and return the result of Factorial function.'
	};

	module.exports = [
	factDef
	];
})();