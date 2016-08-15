
describe('directive: crossapp-funcTest-list-item', function() {
  var element, scope;
  
  beforeEach(module(
		  'crossApp.common',
		  'crossApp.funcTest'
		  ));
  
  beforeEach(inject(function ($templateCache) {
	            var templateUrl = 'modules/funcTest/components/list-item/list-item.template.html';
	            var html='<div ng-class="(item.funcTest.result)?\'funcTest_border_success\':\'funcTest_border_danger\'" class="funcTest funcTest_border"> <h4  ng-class="(item.funcTest.result)?\'text-success\':\'text-danger\'" >Build</h4> <div class="row"><div ng-if="item.funcTest.debug" class="col-xs-6 .col-md-4"><img class="funcTest_pc" ng-src="assets/img/pc.png"><h6>Debug</h6></div>	<div ng-if="item.funcTest.release" class="col-xs-6 .col-md-4"><img class="funcTest_pc" ng-src="assets/img/pc.png"><h6>Release</h6></span></div></div>	<div class="row funcTest_time"><div class="col-xs-12">{{(item.funcTest.funcTest_time)}}</div></div></div>';
	               $templateCache.put(templateUrl, html);	      
  }));
  
  beforeEach(inject(function($compile,$rootScope) {

		scope = $rootScope.$new();
	    
	    var html = '<crossapp-funcTest-list-item ng-click="clickHandler()" class="col-sm-2 col-5" item="data"></crossapp-funcTest-list-item>';
	    scope.clickHandler = angular.noop;
	    scope.data={funcTest:{result:50,debug:true,release:true}};
	    element = $compile(html)(scope);
	    scope.$digest();
  }));
  
  
  describe('element', function() {
    it("click should be called", function() {
    	var isolateScope = element.isolateScope();
    	spyOn(scope, 'clickHandler');
    	element.click();
    	expect(scope.clickHandler).toHaveBeenCalled();
    });
  });  

});