'use strict';

(function() {
	angular.module('crossApp.unitTest')
		.directive('crossappUnitTestListItem', [
		   UnitTestListItemDirective
		])
	;

	function UnitTestListItemDirective(){
		return {
		  restrict: 'EA',
		  templateUrl: 'modules/unitTest/components/list-item/list-item.template.html',
		  scope: {
		  	item: '='
		  },
		  link: UnitTestListItemLink
		};
	}
		
	function UnitTestListItemLink(scope, element, attributes) {
		
		 	scope.options = {
		        tooltipEvents: [],
		        showTooltips: true,
		        tooltipCaretSize: 0,
		        responsive:true,
		        onAnimationComplete: function () {
		            this.showTooltip(this.segments, true);
		        },
		    };
	
		    var chartData = {
		        "data": scope.item.unitTest.chart_data,
		            "labels": ["", ""],
		            "colors": ['#5cb85c', '#edc94d']
		    };
	
		    scope.chartData = chartData;	
           
	}
})();