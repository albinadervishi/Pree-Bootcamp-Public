const Product = require('../model/product.model');

// module.exports.index = (request, response) => {  
//     response.json({   
//        message: "Hello World"
//     });
// }

module.exports.findAllProducts = (req, res) => {
    Product.find() 
         .then((allProducts) =>{
            res.json({products: allProducts })
         })
         .catch ((err) => {
         res.json({ message: "Something went wrong", error: err})
         });
}

module.exports.createProduct = (request, response) => {
    console.log(request)
    Product.create(request.body) 
        .then(product => response.json(product))
        .catch(err => response.json(err));
}
