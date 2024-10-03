const express = require('express');
const router = express.Router();

const { addAirbnbItems } = require('../Controlers/airbnbController')

router.post('/airbnb', addAirbnbItems)


module.exports = router;