	app.controller('myCtrl', function($scope) {
		$scope.accounts = {
		        columns: [{name:'gender', headerText:'Gender'},{name:'age', headerText:'Age'}],       		        
		        rows: [{gender: 'F', age:'30'}, { gender: "M",age:'40'}, { gender: "F",age:'50'}]	      
		};
		
		
		$scope.displayRow = function(aRow){
			alert(aRow.age);
			
		}
	}
	);