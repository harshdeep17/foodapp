const router = require("express").Router();

const {foodmenu, foodproduct} = require('../controllers/foodcontroller')

router.get('/foodmenu', foodmenu);
router.get('/foodproduct/:foodId', foodproduct);


module.exports = router;