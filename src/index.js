const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exended: false}));

//importando as class controllers...
require("./app/controllers/index")(app);



app.listen(3000);