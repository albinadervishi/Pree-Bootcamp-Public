const Player = require('../model/team.model');

module.exports.findAllPlayers = (req, res) => {
    Player.find() 
         .then((allPlayers) =>{res.json({players: allPlayers})})
         .catch ((err) => {res.json({ message: "Something went wrong", error: err})});
}

module.exports.ChangeStatusGame = (request, response) => {
    Player.findOne({_id: request.params.id})
    .then(user => {
        user[request.params.game] = request.body.status;
        return user.save();
    })
    .then(saveResult => response.json(saveResult))
    .catch(err => response.json(err));
}

module.exports.createPlayer = (request, response) => {
    Player.exists({ firstName: request.body.firstName })  
        .then(userExists => {
            if (userExists) {
                return Promise.reject({errors : {firstName:{message:"this firstname is used before"}}});
            }else{
            return Player.create(request.body)
        }
        }) 
        .then(player => response.json(player))
        .catch(err => response.json(err));
}

module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}