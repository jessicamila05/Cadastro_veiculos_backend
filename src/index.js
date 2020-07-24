const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exended: false}));

require("./controllers/authController")(app);
require("./controllers/vehiclesController")(app);


app.listen(3000);