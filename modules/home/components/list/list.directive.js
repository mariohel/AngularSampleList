(function() {
	'use strict';
	angular.module('crossApp.home')
		.directive('crossappHomeList', [
			'$rootScope', 
			'HomeService',
			HomeListDirective
		])
	;

	function HomeListDirective($rootScope,homeService){
		return {
		  restrict: 'EA',
		  templateUrl: 'modules/home/components/list/list.template.html',
		  scope: {
		  	data: '='
		  },
		  link: function (scope, element, attributes) {
				
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
		          
		          scope.deleteItem=function(item){
		        	  var index=scope.data.indexOf(item);
		        	  if(scope.data.length>index)
		        	  scope.data.splice(index,1);
		        	  console.log(item._id);
		        	  homeService.deleteItem(item._id);
		          };
		          
		          /**
		           * Set Row Background depending on state
		           */
		          scope.getStateBackground=function(state){
		        	  switch (state) {
						case 'Running':
							return 'list_item_running';
						case 'Rejected':
						case 'Fail':
							return 'list_item_fail';
						case 'Accepted':
						case 'Complete':
							return 'list_item_success';
						default:
							return 'list_item_disabled';
		        	  }
		        	  	  	
		        	  
		        	  return 'list_item_disabled';				
		          };
		         
			}
		}
	}
		
	
})();