const express = require('express');
const cors = require('cors');   
const socket = require('socket.io');
const app = express();
app.use(cors())   
const port = 8000;

app.use(express.json(), express.urlencoded({ extended: true }));

require('./config/mongoose.config');  
routes=require('./routes/team.routes');
routes(app);

const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`) 
});
    

const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

io.on("connection", socket => {
    console.log('New client connected, socket id: ' + socket.id);
    
    socket.on("toServer", data => {
        socket.broadcast.emit("toClient", data);
    });
    socket.on('disconnect', () => {
        console.log('Client disconnected')
    });
});