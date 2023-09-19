const { Router } = require('express');
const router = Router();
const getCharById = require('../controllers/getCharById')
const login = require('../controllers/login')
const {deleteFav, postFav} = require('../controllers/handleFovorites')

router.get ('/character/:id', (req, res) =>{
    getCharById(req,res);
})
// router.get ('/login', (req, res) => {
//     login(req, res);
// })
router.post ('/login', (req, res) => {
    login(req, res);
})
router.post('/fav', (req, res) => {
    postFav(req, res);
})
router.delete('/fav/:id', (req,res) => {
    deleteFav(req,res);
})
module.exports= router;