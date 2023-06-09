const router = require("express").Router();

<<<<<<< HEAD
const {foodmenu, foodproduct} = require('../controllers/foodcontroller')

router.get('/foodmenu', foodmenu);
router.get('/foodproduct/:foodId', foodproduct);
=======
const {foodmenu} = require('../controllers/foodcontroller')

router.get('/foodmenu', foodmenu);
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c


module.exports = router;