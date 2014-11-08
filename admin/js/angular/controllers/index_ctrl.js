App.controller('indexCtrl', ['$scope', 'Data', function ($scope, Data) {
  Data.exploits.query().$promise.then(function(exploit) {
    $scope.TotalExploit = exploit.length;
  });;

  Data.tools.query().$promise.then(function(tools) {
    $scope.TotalTools = tools.length;
  });;
  Data.dorks.query().$promise.then(function(dorks) {
    $scope.TotalDorks = dorks.length;
  });;
}]);