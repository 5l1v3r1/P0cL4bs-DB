App.controller('dorksCtrl', ['$scope', 'Data', function ($scope, Data) {
  Data.dorks.query().$promise.then(function(dorks) {
    $scope.Dorks = dorks;
  });;
}]);