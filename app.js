function FormCtrl($scope)
{
	var storage_id = "save_easy";
	$scope.tasks = [];
	$scope.perst_tasks = JSON.parse(localStorage.getItem(storage_id));
	$scope.submit = function()
	{
		$scope.tasks.push({description:$scope.description,date:$scope.date,amount:$scope.amount,category:$scope.category});
		localStorage.setItem(storage_id, JSON.stringify($scope.tasks));
		$scope.showstate = true;
		$scope.description = '';
		$scope.date = '';
		$scope.amount = '';
		$scope.category = '';
	}

	if($scope.perst_tasks.length > 0)
	{
		$scope.showstate = true;
	}
	else
	{
		$scope.showstate = false;	
	}
	

}