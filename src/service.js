require('dotenv').config();
const express = require('express')
const app = express()
const path = require('path');
const connection = require('./config/database')
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

const webRouter = require('./routes/web');
const configViewEngine = require('./config/viewEngine');

//config req.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// connection.query(
//   'SELECT * FROM Users',
//   function(err,results,fields){
//     console.log(results)
//   }
// );

configViewEngine(app);

app.use('/',webRouter);

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})