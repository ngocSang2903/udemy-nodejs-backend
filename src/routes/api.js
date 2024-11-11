const express =  require('express');
const routerAPI = express.Router();
const {getUsers,postUser,putUser,deleteUser} = require('../controllers/apiController')

routerAPI.get('/users',getUsers);
routerAPI.post('/users',postUser);
routerAPI.put('/users',putUser);
routerAPI.delete('/users',deleteUser);

module.exports = routerAPI;