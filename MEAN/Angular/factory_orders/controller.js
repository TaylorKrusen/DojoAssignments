var appModule = angular.module('myApp',[]);

appModule.controller('productsController', ['$scope','productFactory', function ($scope, productFactory){
    // this function is resetting the products object that is served up on the page
    function setProducts(){
        $scope.products=productFactory.products
    }
    setProducts();

    // CREATE method. Reset the model we are passing in
    $scope.add_product = function(){
        productFactory.add_product($scope.newProduct, setProducts);
        $scope.newProduct = {};
    }
    // DESTROY
    $scope.delete_product = function(index){
        productFactory.delete_product(index, setProducts);
    }
}])

appModule.controller('ordersController', ['$scope', 'productFactory', function($scope, productFactory) {
    function setProducts(){
        $scope.products=productFactory.products
    }
    setProducts();


    $scope.buy = function(index) {
        productFactory.buy(index, setProducts)
    }

}]);
