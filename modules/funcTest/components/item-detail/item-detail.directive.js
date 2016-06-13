'use strict';

(function() {
	angular.module('crossApp.funcTest')
		.directive('crossappFuncTestItemDetail', [
		    FuncTestListItemDirective
		])
	;

	function FuncTestListItemDirective(){
		return {
		  restrict: 'EA',
		  templateUrl: 'modules/funcTest/components/item-detail/item-detail.template.html',
		  scope: {
		  	item: '=',
		  	visible:'='
		  },
		  link: FuncTestItemDetailLink
		};
	}
		
	function FuncTestItemDetailLink(scope, element, attributes) {		
		   
	}
})();