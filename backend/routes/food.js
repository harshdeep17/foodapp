const router = require("express").Router();

const {foodmenu, foodproduct} = require('../controllers/foodcontroller')

router.get('/foodmenu/:category', foodmenu);
router.get('/foodproduct/:id', foodproduct);


module.exports = router;