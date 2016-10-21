angular.module('app.controllers', [])

.controller('TodoList', function($scope) {

	$scope.todos = [
		'Get Milk',
		'Get Cookies',
		'Eat Cookies & Milk'
	]

	$scope.addItem = function(item) {
		$scope.todos.push(item);
		$scope.todoItem = '';
	}

	$scope.removeItem = function(index) {
		$scope.todos.splice(index, 1);
	}
});