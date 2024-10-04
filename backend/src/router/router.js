const express = require('express');
const router = express.Router();

const { addAirbnbItems, getAirbnb } = require('../Controlers/getAirbnb')
const {  getairbnbWithPriceRange } = require('../Controlers/getairbnbWithPriceRange')

// router.post('/airbnb', addAirbnbItems)
router.get('/getairbnb', getAirbnb)
router.get('/getairbnbWithPriceRange', getairbnbWithPriceRange)


module.exports = router;