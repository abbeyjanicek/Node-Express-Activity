//requires: express
const express = require('express');
const app = express();


//uses
app.use(express.static('server/public'));
//app.use(bodyParser.urlencoded({extended: true});

//global variables
let port = 5000;

//spin up server
app.listen(port, () => {
    console.log('server is up on', port);
});