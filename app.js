const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

let app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',(req, res) => {
    res.send("Server started")
})

app.listen(3000, (err, res) => {
    if(err){
        console.log("Error occurred "+err.toString());
    } else {
        console.log("Server is listening on port 3000")
    }
})