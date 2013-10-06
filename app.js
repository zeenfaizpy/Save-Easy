function FormCtrl($scope)
{
	$scope.tasks = [];
	$scope.submit = function()
	{
		$scope.tasks.push({description:$scope.description,date:$scope.date,amount:$scope.amount,category:$scope.category});
		$scope.showstate = true;
		$scope.description = '';
		$scope.date = '';
		$scope.amount = '';
		$scope.category = '';
	}
	$scope.showstate = false;
}