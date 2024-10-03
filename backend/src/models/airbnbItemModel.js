const mongoose = require("mongoose");


const AIRBNBITEMS = new mongoose.Schema(
    {
        pathName: {
            type: String,
            required: true,
            trim: true,
        },
        src: [
            {
                type: String,
                required: true,
                trim: true,
            }
        ],
        title: {
            type: String,
            required: true,
            trim: true,
        },
        host: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            trim: true,
        },
        unit: {
            type: String,
            required: true,
            trim: true,
        },

    }
)

module.exports = mongoose.model("AIRBNBITEMS", AIRBNBITEMS);