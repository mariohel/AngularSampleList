/**
 * The main Module 
 *
 * @type {angular.Module}
 */

'use strict';
(function () { 
	angular.module('crossApp', [
	                            'ngRoute',
	                            'ui.bootstrap', 
	                            'ngAnimate',
	                            'ngSanitize',
	                            'chart.js',
	                            // App modules
	                            'crossApp.common',
	                            'crossApp.home',
                                'crossApp.metrics',
                                'crossApp.build',
                                'crossApp.funcTest',
                                'crossApp.unitTest'
	                            ]);
})();
