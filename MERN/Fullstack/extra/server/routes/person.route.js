const UserController = require('../controllers/person.controller');  

module.exports = (app) => {
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.getUser);
    app.post('/api/users/new', UserController.createUser);
    app.patch('/api/users/edit/:id', UserController.updateUser);
    app.delete('/api/users/:id', UserController.deleteUser);
}