const express = require("express");

const router = express.Router();
const productControllers = require("../controllers/productControllers");

// router.get("/", productControllers.getAllProducts);
router.get("/", productControllers.getProducts);

router.post("/", productControllers.addProducts);

router.get("/:id", productControllers.getProductById);

// router.put("/:id", productControllers.putProducts);

// router.delete("/:id", productControllers.deleteproducts);

module.exports = router;
