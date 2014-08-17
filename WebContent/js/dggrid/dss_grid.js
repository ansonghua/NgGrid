

app =angular.module('dssGrid', [])
.directive('dssgrid', function () {
    return {
        restrict: 'E',
        scope: {
            gridData: '=',
            onRowClicked: '&'
        },
        templateUrl: '../templates/dssGrid.html',
        link: function (scope, element, attrs) {
        }
    };
});