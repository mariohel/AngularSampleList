
describe('directive: crossapp-metrics-list-item', function() {
  var element, scope;
  
  beforeEach(module(
		  'crossApp.common',
		  'crossApp.metrics'
		  ));
  
  beforeEach(inject(function ($templateCache) {
	            var templateUrl = 'modules/metrics/components/list-item/list-item.template.html';
	            var html='<div ng-class="(item.metrics.result)?\'metrics_border_success\':\'metrics_border_danger\'" class="metrics metrics_border"> <h4  ng-class="(item.metrics.result)?\'text-success\':\'text-danger\'" >Build</h4> <div class="row"><div ng-if="item.metrics.debug" class="col-xs-6 .col-md-4"><img class="metrics_pc" ng-src="assets/img/pc.png"><h6>Debug</h6></div>	<div ng-if="item.metrics.release" class="col-xs-6 .col-md-4"><img class="metrics_pc" ng-src="assets/img/pc.png"><h6>Release</h6></span></div></div>	<div class="row metrics_time"><div class="col-xs-12">{{(item.metrics.metrics_time)}}</div></div></div>';
	               $templateCache.put(templateUrl, html);	      
  }));
  
  beforeEach(inject(function($compile,$rootScope) {

		scope = $rootScope.$new();
	    
	    var html = '<crossapp-metrics-list-item ng-click="clickHandler()" class="col-sm-2 col-5" item="data"></crossapp-metrics-list-item>';
	    scope.clickHandler = angular.noop;
	    scope.data={metrics:{result:50,debug:true,release:true}};
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