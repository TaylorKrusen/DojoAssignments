var appModule = angular.module('myApp',[]);

appModule.controller('productsController', ['$scope','productFactory', function ($scope, productFactory){
    function setProducts(){
        $scope.products=productFactory.products
    }

    setProducts();

    // CREATE method. Be sure to reset the model we are passing in
    $scope.add_product = function(){
        productFactory.add_product($scope.newProduct, function(){
            setProducts();
        });
        $scope.newProduct = {};
    }
    $scope.delete_product = function(id){
        productFactory.delete_product(id, function(){
            setProducts();
        })
    }
}])

appModule.controller('ordersController', [
    '$scope',
    'productFactory',
    function($scope, productFactory) {
        function setProducts(data) {
            $scope.products=productFactory.products
        }

        setProducts();
        productFactory.index(setProducts);
        $scope.update = function(id) {
            productFactory.update({id: id, quantity: 1}, setProducts);
        }
    }
]);
