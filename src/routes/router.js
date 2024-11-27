const express = require("express");
const { getOrders } = require("../controllers/controller");
const router = express.Router();

router.get("/orders", getOrders);

module.exports = router;
