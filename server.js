const express = require('express')
const app = express()
const db = require('./db');


const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body

app.get('/', function (req, res) {
    res.send('Hello ')
    })
    // app.get('/about', function (req, res) {
    // res.send('Founder of MNC - Khanjan ')
    // })
    // app.get('/data', function (req, res) {
    //     var RandomData = [ {
    //         name:"Khanjan",
    //         age:19,
    //         degree:"B.Tech",
    //         location:"Vadodara"},
    //         {
    //             name:"Veer",
    //             age:19,
    //             degree:"B.Tech",
    //             location:"Borsad"},
    //     ]
        
    // res.send(RandomData)
    // })

   //Import Route Files
   const PersonRoutes = require('./routes/PersonRoutes');

   //Use Router
   app.use('/person', PersonRoutes);

    app.listen(8080, ()=>{
        console.log('Server is running on port 8080')
    })