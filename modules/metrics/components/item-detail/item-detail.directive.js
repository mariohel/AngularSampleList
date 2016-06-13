'use strict';

(function() {
	angular.module('crossApp.metrics')
		.directive('crossappMetricsItemDetail', [
		   MetricsListItemDirective
		])
	;

	function MetricsListItemDirective(){
		return {
		  restrict: 'EA',
		  templateUrl: 'modules/metrics/components/item-detail/item-detail.template.html',
		  scope: {
		  	item: '=',
		  	visible:'='
		  },
		  link: MetricsItemDetailLink
		};
	}
		
	function MetricsItemDetailLink(scope, element, attributes) {		
		   
	}
})();