var app = angular.module('save_easy', ['$strap.directives']);

app.controller('FormCtrl', function ($scope) 
{

	var storage_id = "save_easy";
	$scope.tasks = [];
	$scope.perst_tasks = JSON.parse(localStorage.getItem(storage_id));
	if($scope.perst_tasks != null)
	{
		for(var i =0; i < $scope.perst_tasks.length; i++)
		{
			var amount = parseInt($scope.perst_tasks[i].amount);
			$scope.perst_tasks[i].amount = amount;
			$scope.tasks.push($scope.perst_tasks[i]);
		}
	}
	else
	{
		$scope.perst_tasks = [];
	};
	
	$scope.submit = function()
	{
		$scope.tasks.push({description:$scope.description,date:$scope.date,amount:parseInt($scope.amount),category:$scope.category});
		localStorage.setItem(storage_id, JSON.stringify($scope.tasks));
		$scope.showstate = true;
		$scope.description = '';
		$scope.date = '';
		$scope.amount = '';
		$scope.category = '';
	}

	$scope.settings = function()
	{
		
	}

	$scope.clear_data = function()
	{
		$scope.tasks = [];
		$scope.perst_tasks = [];
		localStorage.clear();
		$scope.showstate = false;

	}

	if($scope.perst_tasks.length > 0)
	{
		$scope.showstate = true;
	}
	else
	{
		$scope.showstate = false;	
	}
	
	console.log($scope.tasks);
});