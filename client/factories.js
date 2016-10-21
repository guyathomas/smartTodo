angular.module('app.services', [])

.factory('ToDoApp', function($http) {
  var listItems = [];
  return {
    listItems: listItems
  }
})