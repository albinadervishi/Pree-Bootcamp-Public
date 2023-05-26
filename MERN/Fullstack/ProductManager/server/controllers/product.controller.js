const Product = require('../model/product.model');

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

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

