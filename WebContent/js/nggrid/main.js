var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope) {
    $scope.myData = [{name: "Moroni", country: 'China', age: 50, gender:'D'},
                     {name: "Tiancum", country: 'USA', gender:'D'},
                     {name: "Jacob", age: 27, gender:'F'},
                     {name: "Nephi", age: 29, gender:'D'},
                     {name: "Enos", age: 34, gender:'D'}];
    $scope.gridOptions = { 
       
        //showGroupPanel: true,
        //jqueryUITheme: true,
        enablePinning: true,
        
        columnDefs: [{ field: "name", width: 100, pinned: true},
                     { field: "country", width: 100 },
                     { field: "age", width: 100 },
                     { field: "gender", width: 350 }],
        //jqueryUIDraggable: true,
        data: 'myData'
    };
});