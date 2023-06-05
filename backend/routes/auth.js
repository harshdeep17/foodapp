const { register, update_profile_pic} = require("../controllers/usercontroller");

  
const router = require("express").Router();

router.post("/register", register);
router.post("/update_user_profile/:user_id", update_profile_pic )

module.exports = router;