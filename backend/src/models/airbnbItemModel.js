const mongoose = require("mongoose");


const AIRBNBITEMS = new mongoose.Schema(
    {
        pathName: {
            type: String,
            required: true,
            trim: true,
        },
        isPresent:{
            type: Boolean
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
            trim: true,
        },
        host: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            trim: true,
        },
        unit: {
            type: String,
            trim: true,
        },

    }
)

module.exports = mongoose.model("AIRBNBITEMS", AIRBNBITEMS);