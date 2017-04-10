appModule.factory('productFactory', function(){
    // our factory is JUST a function that returns an object.
    var factory = {};
    factory.products = [
        {name:'Bacon', quantity:5, price:7.99},
        {name:'Snowboard', quantity:5, price:459.20},
        {name:'iPhone', quantity:5, price:503.00}
    ];

// CREATE
    factory.add_product = function(data, callback){
        data.quantity = 50
        factory.products.push(data);
        callback();
    }
// DESTROY
    factory.delete_product = function (index, callback){
        factory.products.splice(index,1);
        callback();
    }
// UPDATE
    factory.buy = function(index, callback) {
        dat_product = factory.products[index]
        if (dat_product.quantity >= 1){
            dat_product.quantity--
        }
        callback();
    }
    // most important step! return object to be used by other angular code.
    return factory;
});
