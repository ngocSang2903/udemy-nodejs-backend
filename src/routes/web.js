const express =  require('express');
const router = express.Router();
const {getHome, getView, postCreateUser, getViewCreate} = require('../controllers/homeController')

router.get('/', getHome)
router.get('/hoisangit',getView)
router.get('/create-user-view',getViewCreate)
router.post('/create-user',postCreateUser)

module.exports = router;