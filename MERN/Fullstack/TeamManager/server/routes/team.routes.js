const PlayerController = require('../controllers/team.controller');  

module.exports = (app) => {
    app.get('/api/players', PlayerController.findAllPlayers);
    app.patch('/api/players/:id/:game', PlayerController.ChangeStatusGame)
    app.post('/api/players/new', PlayerController.createPlayer);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
}