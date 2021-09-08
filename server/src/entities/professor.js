const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const professorSchema = new Schema({
    _id: {type: mongoose.ObjectId, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    branchesTeaching: [
        {
            branchId: {type: mongoose.ObjectId, required},
            year: {type: Number, required: true},
            totalClassesHeld: {type: Number, default: 0}
        }
    ]
});

const Professor = mongoose.model("professor", professorSchema);

module.exports = Professor;