(function() {
	'use strict';
	angular.module('crossApp.funcTest')
		.directive('crossappFuncTestListItem', [
		   FuncTestListItemDirective
		])
	;

	function FuncTestListItemDirective(){
		return {
		  restrict: 'EA',
		  templateUrl: 'modules/funcTest/components/list-item/list-item.template.html',
		  scope: {
		  	item: '='
		  },
		  link: FuncTestListItemLink
		};
	}
		
	function FuncTestListItemLink(scope, element, attributes) {
		
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
		        "data": scope.item.funcTest.chart_data,
		            "labels": ["", ""],
		            "colors": ['#5cb85c', '#edc94d']
		    };
	
		    scope.chartData = chartData;	
           
	}
})();