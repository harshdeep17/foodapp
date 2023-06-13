const {addItem, removeItem, fetchItem, updateItem} = require("../controllers/cartController");

  
const router = require("express").Router();

router.post("/addtocart", addItem);
router.post("/removeitem", removeItem);
router.post("/updateitem", fetchItem);
router.post("/fetchitems", updateItem);

module.exports = router;