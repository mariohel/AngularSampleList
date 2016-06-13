'use strict';

(function() {
	angular.module('crossApp.build')
		.directive('crossappBuildListItem', [
		   BuildListItemDirective
		])
	;

	function BuildListItemDirective(){
		return {
		  restrict: 'EA',
		  templateUrl: 'modules/build/components/list-item/list-item.template.html',
		  scope: {
		  	item: '='
		  },
		  link: BuildListItemLink
		};
	}
		
	function BuildListItemLink(scope, element, attributes) {
		scope.Math = window.Math; // for Performing Abs in view	           
	}
})();