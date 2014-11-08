App.factory('Data', ['$resource',
 function($resource) {
  return {
  	exploits : $resource('exploits/data.json'),
  	tools : $resource('tools/data.json', {id: '@id'}),
  	dorks : $resource('dorks/data.json')
  	
  }
}]);