const Author = require('../model/author.model');

module.exports.findAllAuthors = (req, res) => {
    Author.find() 
         .then((allAuthors) =>{res.json({authors: allAuthors })})
         .catch ((err) => {res.json({ message: "Something went wrong", error: err})});
}

module.exports.getAuthor = (request, response) => {
    Author.findOne({ _id: request.params.id })
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

module.exports.createAuthor = (request, response) => {
    Author.exists({ firstName: request.body.firstName })  
        .then(userExists => {
            if (userExists) {
                return Promise.reject({errors : {firstName:{message:"this firstname is used before"}}});
            }else{
            return Author.create(request.body)
        }
        }) 
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

module.exports.updateAuthor = (request, response) => {
    Author.exists({ firstName: request.body.firstName })  
    .then(userExists => {
        if (userExists) {
            return response.json("This user already exists");
        }else{
            Author.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
    .then(updatedAuthor => response.json(updatedAuthor))
    .catch(err => response.json(err))
}
})
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}