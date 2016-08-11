
describe('directive: crossapp-build-list-item', function() {
  var element, scope;
  
  beforeEach(module(
		  'crossApp.common',
		  'crossApp.build'
		  ));
  
  beforeEach(inject(function ($templateCache) {
	            var templateUrl = 'modules/build/components/list-item/list-item.template.html';
	            var html='<div ng-class="(item.build.result)?\'build_border_success\':\'build_border_danger\'" class="build build_border"> <h4  ng-class="(item.build.result)?\'text-success\':\'text-danger\'" >Build</h4> <div class="row"><div ng-if="item.build.debug" class="col-xs-6 .col-md-4"><img class="build_pc" ng-src="assets/img/pc.png"><h6>Debug</h6></div>	<div ng-if="item.build.release" class="col-xs-6 .col-md-4"><img class="build_pc" ng-src="assets/img/pc.png"><h6>Release</h6></span></div></div>	<div class="row build_time"><div class="col-xs-12">{{(item.build.build_time)}}</div></div></div>';
	               $templateCache.put(templateUrl, html);	      
  }));
  
  beforeEach(inject(function($compile,$rootScope) {

		scope = $rootScope.$new();
	    
	    var html = '<crossapp-build-list-item ng-click="clickHandler()" class="col-sm-2 col-5" item="data"></crossapp-build-list-item>';
	    scope.clickHandler = angular.noop;
	    scope.data={build:{result:50,debug:true,release:true}};
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