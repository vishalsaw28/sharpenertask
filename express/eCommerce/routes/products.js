const express = require("express");

const router = express.Router();
const productControllers = require("../controllers/productControllers");

router.get("/", productControllers.getProducts);

router.post("/", productControllers.postProducts);

router.get("/:id", productControllers.fetchId);

router.put("/:id", productControllers.putProducts);

router.delete("/:id", productControllers.deleteproducts);

module.exports = router;
