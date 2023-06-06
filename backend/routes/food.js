const router = require("express").Router();

const {foodmenu} = require('../controllers/foodcontroller')

router.get('/foodmenu', foodmenu);


module.exports = router;