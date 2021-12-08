const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Minimum length of 3 is required for Author name"]
    }
}, { timestamps: true }
)

module.exports = mongoose.model("Author", AuthorSchema);