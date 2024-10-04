const AIRBNBITEMS = require('../models/airbnbItemModel')

exports.getairbnbWithPriceRange = async (req, res) => {
    try {
        const { pathName, minPrice, maxPrice } = req.query;

        switch (pathName) {
            case '/':
                return res.status(400).json({
                    success: false,
                    message: "Path name is required"
                });


            default:
                const others = await AIRBNBITEMS.find({ pathName, price: { $gte: minPrice, $lte: maxPrice } });
                if (others.length === 0) {
                    return res.status(404).json({
                        success: false,
                        message: "No Airbnb items found for the given path name"
                    });
                }
                return res.status(200).json({
                    success: true,
                    others
                });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error. Please try again later."
        });
    }
};
