const Jokes = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Jokes.find() 
         .then((allDaJokes) =>{
            res.json({jokes: allDaJokes })
         })
         .catch ((err) => {
         res.json({ message: "Something went wrong", error: err})
         });
}

module.exports.findOneSingleJoke =(req, res) => {
    Jokes.findOne({_id: req.params.id })
         .then(oneSingleJoke => {
            res.json({jokes: oneSingleJoke})
         })
         .catch((err) => {
            res.json({message: "Something went wrong", error: err})
         });
}

module.exports.createNewJoke = (req, res) => {
    Jokes.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ jokes: newlyCreatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
    }

    module.exports.updateExistingJoke = (req, res) => {
        Jokes.findOneAndUpdate(
            {_id: req.params.id },
            req.body,
            {new: true, runValidators: true }
        )
        .then(updatedJoke =>{
            res.json({jokes : updatedJoke})
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err })
        });
    }

    module.exports.deleteAnExistingJoke = (req, res) =>{
        Jokes.deleteOne({_id: req.params.id })
             .then(result => {
                res.json({result: result})
             })
             .catch((err) => {
                res.json({message : "Something went wrong", error: err})
             });
    }