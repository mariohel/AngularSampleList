(function() {
	'use strict';
	angular.module('crossApp.build')
		.directive('crossappBuildItemDetail', [
		   BuildListItemDirective
		])
	;

	function BuildListItemDirective(){
		return {
		  restrict: 'EA',
		  templateUrl: 'modules/build/components/item-detail/item-detail.template.html',
		  scope: {
		  	item: '=',
		  	visible:'='
		  },
		  link: BuildItemDetailLink
		};
	}
		
	function BuildItemDetailLink(scope, element, attributes) {		
		   
	}
})();