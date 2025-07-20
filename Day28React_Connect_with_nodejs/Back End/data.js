const mongoose = require("mongoose");
const Schema =mongoose.Schema;

// this will be our new database structure
const DataSchema = new Schema(
    {
        id: Number,
        message: String
    },
    {timestamps: true}
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);