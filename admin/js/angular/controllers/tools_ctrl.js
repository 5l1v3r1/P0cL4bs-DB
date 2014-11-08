App.controller('toolsCtrl', ['$scope', 'Data', function ($scope, Data) {
  Data.tools.query().$promise.then(function(tools) {
    $scope.Tools = tools;
  });;
}]);