/**
 * Enabling HTML Variables displayed by Angular
 * Example in view :
 * <div ng-bind-html="stuff.content | rawHtml"></div>
 */


'use strict';
(function () { 
	angular.module('crossApp.common')
	.filter('rawHtml', ['$sce', function($sce){
	  return function(val) {
	    return $sce.trustAsHtml(val);
	  };
	}]);
})();
