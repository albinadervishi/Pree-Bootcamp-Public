const express = require('express');
const cors = require('cors')    
const app = express();
app.use(cors())   
const port = 8000;

app.use(express.json(), express.urlencoded({ extended: true }));
require('./routes/person.route')(app);

const AllMyProductRoutes = require("./routes/person.route");
AllMyProductRoutes(app);
require('./config/mongoose.config');  
require('./routes/person.route')(app);

    
app.listen(port, () => console.log(`Listening on port: ${port}`) );