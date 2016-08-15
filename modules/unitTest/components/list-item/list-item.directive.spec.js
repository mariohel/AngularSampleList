
describe('directive: crossapp-unitTest-list-item', function() {
  var element, scope;
  
  beforeEach(module(
		  'crossApp.common',
		  'crossApp.unitTest'
		  ));
  
  beforeEach(inject(function ($templateCache) {
	            var templateUrl = 'modules/unitTest/components/list-item/list-item.template.html';
	            var html='<div ng-class="(item.unitTest.result)?\'unitTest_border_success\':\'unitTest_border_danger\'" class="unitTest unitTest_border"> <h4  ng-class="(item.unitTest.result)?\'text-success\':\'text-danger\'" >Build</h4> <div class="row"><div ng-if="item.unitTest.debug" class="col-xs-6 .col-md-4"><img class="unitTest_pc" ng-src="assets/img/pc.png"><h6>Debug</h6></div>	<div ng-if="item.unitTest.release" class="col-xs-6 .col-md-4"><img class="unitTest_pc" ng-src="assets/img/pc.png"><h6>Release</h6></span></div></div>	<div class="row unitTest_time"><div class="col-xs-12">{{(item.unitTest.unitTest_time)}}</div></div></div>';
	               $templateCache.put(templateUrl, html);	      
  }));
  
  beforeEach(inject(function($compile,$rootScope) {

		scope = $rootScope.$new();
	    
	    var html = '<crossapp-unitTest-list-item ng-click="clickHandler()" class="col-sm-2 col-5" item="data"></crossapp-unitTest-list-item>';
	    scope.clickHandler = angular.noop;
	    scope.data={unitTest:{result:50,debug:true,release:true}};
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