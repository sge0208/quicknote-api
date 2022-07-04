const mongoose = require("mongoose");

// TODO replace <password> with the password for quicknote-admin
const URI = `mongodb+srv://quicknote-admin:11100208g@cluster0.jpi1j0w.mongodb.net/?retryWrites=true&w=majority`;

mongoose
    .connect(URI)
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((err) => {
        console.log(err);
    });

const NoteSchema = new mongoose.Schema({
    title: { type: String },
    text: { type: String },
});
