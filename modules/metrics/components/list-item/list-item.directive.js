'use strict';

(function() {
	angular.module('crossApp.metrics')
		.directive('crossappMetricsListItem', [
		   MetricsListItemDirective
		])
	;

	function MetricsListItemDirective(){
		return {
		  restrict: 'EA',
		  templateUrl: 'modules/metrics/components/list-item/list-item.template.html',
		  scope: {
		  	item: '='
		  },
		  link: MetricsListItemLink
		};
	}
		
	function MetricsListItemLink(scope, element, attributes) {
		
		scope.Math = window.Math; // for Performing Abs in view		
           
	}
})();