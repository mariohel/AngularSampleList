(function() {
	'use strict';
	angular.module('crossApp.unitTest')
		.directive('crossappUnitTestItemDetail', [
		    UnitTestListItemDirective
		])
	;

	function UnitTestListItemDirective(){
		return {
		  restrict: 'EA',
		  templateUrl: 'modules/unitTest/components/item-detail/item-detail.template.html',
		  scope: {
		  	item: '=',
		  	visible:'='
		  },
		  link: UnitTestItemDetailLink
		};
	}
		
	function UnitTestItemDetailLink(scope, element, attributes) {		
		   
	}
})();