var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope,$http) {

// dane tabeli
  $http.get("data.json").then(
     function (response) 
      { 
        $scope.columns = response.data;
        length=$scope.columns.length;
      });


//wyświetla tabelę
	 $scope.showTable=true;


//ukrywa tabelę
    $scope.functionLogOut=function() 
    {
		    $scope.showTable=false;
    };

//wybiera id klikniętego wiersza i pozwala na jego edycję, a poźniej zapis
    $scope.editingData = {};
    
    for (var i = 0; i < length; i++)
    {
      $scope.editingData[$scope.columns[i].id] = false;
    }

    $scope.modify = function(column)
    {
        $scope.editingData[column.id] = true;
    };

    $scope.update = function(column)
    {
        $scope.editingData[column.id] = false;

        //przestaje podświetlać 
        $scope.selected=null;
    };

	$scope.highlight =function(column)
	{
        //podświetla wybrany wiersz
	      $scope.selected=column.id;
	};


//dodaje nowy wiersz
   $scope.functionAdd=function() 
   {
	var newcolumn = {
   	 	"column1":$scope.addColumn1,
   	 	"column2":$scope.addColumn2,
   		"column3":$scope.addColumn3,
   	 	"column4":$scope.addColumn4
 	}
		$scope.columns.push(newcolumn);
   	};

//usuwa wybrany wiersz
   $scope.functionDelete=function(index) {
   		var index = $scope.columns.indexOf(index);
  		$scope.columns.splice(index, 1);   
   };

});
