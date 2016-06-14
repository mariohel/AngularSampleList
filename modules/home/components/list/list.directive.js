'use strict';

(function() {
	angular.module('crossApp.home')
		.directive('crossappHomeList', [
			'$rootScope', 
			HomeListDirective
		])
	;

	function HomeListDirective($rootScope){
		return {
		  restrict: 'EA',
		  templateUrl: 'modules/home/components/list/list.template.html',
		  scope: {
		  	data: '='
		  },
		  link: HomeListLink
		};
	}
		
	function HomeListLink(scope, element, attributes) {
		
		/**
		 * Toggle Selected Item in the DataGrid
		 */
         scope.selectIndex = function(index) {        	 
           scope.selectedIndex = (scope.selectedIndex!=index)?index:-1;
          };
          
        /**
  		 * Show Type of Progress Bar 
		 * Possible Values [''(default),'success','danger']
  		 */
          scope.getProgress=function(result){
        	  if(result && result>0)return 'success'; 	// Success Status
              else if(result && result<0)return 'danger'; // Failure Status        	  	
        	  
        	  return '';	// Running Status					
          };
          
          /**
           * Set Row Background depending on state
           */
          scope.getStateBackground=function(state){
        	  switch (state) {
				case 'Running':
					return 'list_item_running';
					break;
				case 'Rejected':
				case 'Fail':
					return 'list_item_fail';
					break;
				case 'Accepted':
				case 'Complete':
					return 'list_item_success';
					break;
				case 'Pending':
				default:
					return 'list_item_disabled';
					break;
        	  }
        	  	  	
        	  
        	  return 'list_item_disabled';				
          };
         
	}
})();