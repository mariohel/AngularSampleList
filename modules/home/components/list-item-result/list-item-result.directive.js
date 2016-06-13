'use strict';

(function() {
	angular.module('crossApp.home')
		.directive('crossappHomeListItemResult', [
		   '$rootScope', 
			HomeListItemResultDirective
		])
	;

	function HomeListItemResultDirective($sce,$rootScope){
		return {
		  restrict: 'EA',
		  templateUrl: 'modules/home/components/list-item-result/list-item-result.template.html',
		  scope: {
		  	item: '='
		  },
		  link: HomeListItemResultLink
		};
	}
		
	function HomeListItemResultLink(scope, element, attributes) {
		
		
        /**
  		 * Show Text Depending on State 
  		 */          
          scope.getText=function(state){
        	  var text="";
        	  switch (state) {
				case 'Rejected':
					text= '<h5>Change Rejected</h5><h3>Metrics Reduction</h3>';
					break;
				case 'Fail':
					text= '<h3>Failure</h3>';
					break;
				case 'Accepted':
					text='<h5>Change Accepted</h5><h3>Auto-Merged</h3>';
					break;
				case 'Complete':
					text= '<h3>Complete</h3>';
					break;
        	  }
        	  	  	
        	  
        	  return text;				
          };         
         
          /**
    		 * Set Class for Text Depending on State 
    		 */          
            scope.getClass=function(state){
          	  switch (state) {
  				case 'Rejected':
  				case 'Fail':
  	  				return 'text-danger';
  					break;
  				case 'Accepted':
  					return 'text-warning';
  					break;
  				case 'Complete':
  					return 'text-success';
  					break;
          	  }
          	  	  	
          	  
          	  return '';				
            };
           
	}
})();