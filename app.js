angular.module('myApp', [])


.controller('mainController', function($scope) {

})


.directive('deseTabs', function() {
  return {
    scope: true,
    replace: true,
    restrict: 'E',
    transclude: true,
    template: ' \
    <div class=""> \
    <div class="tab-group flex items-center mt2"> \
    <div class="col-6 center py1 size-7 pointer" ng-repeat="tab in tabs" \
    ng-class="{ \'is-active\': currentTab == $index }" ng-click="selectTab($index)"> \
    {{tab}} \
    </div> \
    </div> \
    <ul class="contained list-reset" ng-transclude></ul> \
    </div>',
    controller: function($scope) {
      $scope.currentTab = 0;

      $scope.tabs = [];

      $scope.selectTab = function(index) {
        $scope.currentTab = index;
      };

      return $scope;
    }
  }
})

.directive('datTab', function() {
  return {
    require: '^deseTabs',
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: true,
    template: '<li ng-show="showTab()" ng-transclude></li>',
    link: function(scope, element, attrs, deseTabs) {
      var tabId = deseTabs.tabs.length;

      scope.showTab = function() {
        return tabId == deseTabs.currentTab;
      };

      deseTabs.tabs.push(attrs.datHeading);
    }
  }
});
