const express = require('express');
const router = express.Router();

const { addAirbnbItems, getAirbnb } = require('../Controlers/airbnbController')

// router.post('/airbnb', addAirbnbItems)
router.get('/getairbnb', getAirbnb)


module.exports = router;