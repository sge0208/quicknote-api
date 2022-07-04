const mongoose = require("mongoose");

// TODO replace <password> with the password for quicknote-admin
const URI = `mongodb+srv://quicknote-admin:11100208g@cluster0.jpi1j0w.mongodb.net/?retryWrites=true&w=majority`;

async function connect() {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB!");
    } catch (err) {
        console.log(err);
    }
}

module.exports = { connect };
