appModule.factory('productFactory', function(){
    // our factory is JUST a function that returns an object.
    var factory = {};
    factory.products = [
        {name:'Bacon', quantity:50, price:7.99},
        {name:'Snowboard', quantity:50, price:459.20},
        {name:'iPhone', quantity:50, price:503.00}
    ];

    factory.add_product = function(data, callback){
        data.quantity = 50
        factory.products.push(data);
        callback();
    }
    factory.delete_product = function (id, callback){
        factory.products.splice(id,1);
        callback();
    }
    // most important step! return object to be used by other angular code.
    return factory;
});
