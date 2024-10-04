const AIRBNBITEMS = require('../models/airbnbItemModel')

// exports.addAirbnbItems = async (req, res) => {
//     const { icon } = req.body
//     // console.log(req.body);

//     icon.map(async (item) => {
//         const { pathName, src, title, host, status, isPresent } = item
//         const _airbnb = new AIRBNBITEMS({
//             pathName, src, title, host, status, isPresent
//         })
//         await _airbnb.save()
//     })

// }

exports.getAirbnb = async (req, res) => {
    try {
        const { pathName } = req.query;
        switch (pathName) {
            case '':
                return res.status(400).json({
                    success: false,
                    message: "Path name is required"
                });

            case '/icon':
                const airbnbpresentItems = await AIRBNBITEMS.find({ pathName, isPresent: true });
                const airbnbItems = await AIRBNBITEMS.find({ pathName, isPresent: false });
                if (airbnbItems.length && airbnbpresentItems.lenght === 0) {
                    return res.status(404).json({
                        success: false,
                        message: "No Airbnb items found for the given path name"
                    });
                }
                return res.status(200).json({
                    success: true,
                    airbnbItems,
                    airbnbpresentItems
                });

            default:
                const others = await AIRBNBITEMS.find({ pathName });
                if (others.length  === 0) {
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
