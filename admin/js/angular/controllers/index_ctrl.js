App.controller('indexCtrl', ['$scope', 'Data', function ($scope, Data) {
  Data.exploit.query().$promise.then(function(exploit) {
    $scope.TotalExploit = exploits.length;
  });;

  Data.tools.query().$promise.then(function(tools) {
    $scope.TotalTools = tools.length;
  });;
  Data.dorks.query().$promise.then(function(dorks) {
    $scope.TotalDorks = dorks.length;
  });;
}]);