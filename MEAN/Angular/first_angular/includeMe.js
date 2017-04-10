var appModule = angular.module('app', []);
console.log(appModule);
appModule.controller('divController', ['$scope', function($scope){
    $scope.myName = 'Taylor';
    $scope.myFavoriteLanguage = 'Japanese and Javascript';
    $scope.myFavoriteJSLibrary = 'Angular';
}])
