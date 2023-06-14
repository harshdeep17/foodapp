const {addItem, removeItem, fetchItems, updateItem} = require("../controllers/cartController");

  
const router = require("express").Router();

router.post("/addtocart", addItem);
router.delete("/removeitem/:userId/:foodProductId", removeItem);
router.patch("/updateitem/:userId", updateItem);
router.get("/fetchitems/:userId", fetchItems);

module.exports = router;