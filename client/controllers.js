angular.module('app.controllers', [])

.controller('TodoList', function($scope) {

	$scope.todos = [];

	$scope.getItems = function() {
		fetch("/list")
		.then(function(res) {
			return res.json()
		})
		.then(function(items){
			$scope.todos = items;
			$scope.$apply();
			console.log($scope.todos);
		})
	}

	$scope.addItem = function(item) {
		fetch("/list", {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({'item' : item})
			})
		.then(function(res) {
			return res.json()
		})
		.then(function(items){
			$scope.todos = items;
			$scope.$apply();
		})
		$scope.todoItem = '';
	}

	$scope.removeItem = function(index) {
		console.log('index at delete on client', index);
		fetch ('/list', {
		    method: 'DELETE',
		    headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({'index' : index })
		})
		.then(function(res){
			return res.json();
		})
		.then(function(items) {
			$scope.todos = items;
			$scope.$apply();
		})
		.catch(function(err){
			console.log('Error in removeItem', err)
		})
	}

	angular.element(document).ready(function () {
		$scope.getItems();
	})
})

