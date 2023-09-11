const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "Users",
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Notes", NoteSchema);