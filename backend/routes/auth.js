<<<<<<< HEAD
const { register, update_profile_pic, login} = require("../controllers/usercontroller");
=======
const { register, update_profile_pic} = require("../controllers/usercontroller");
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c

  
const router = require("express").Router();

router.post("/register", register);
<<<<<<< HEAD
router.post("/login", login);
=======
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c
router.post("/update_user_profile/:user_id", update_profile_pic )

module.exports = router;