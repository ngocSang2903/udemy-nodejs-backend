require('dotenv').config();
const express = require('express')
const app = express()
const path = require('path');
const connection = require('./config/database')
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');

const configViewEngine = require('./config/viewEngine');

//config req.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))



configViewEngine(app);

app.use('/',webRouter);
app.use('/v1/api',apiRouter);

(async ()=>{
  try{
    await connection();
    app.listen(port,hostname, () => {
      console.log(`Example app listening on port ${port}`);
    })
  }catch(error){
    console.log(error);
  }
})();


