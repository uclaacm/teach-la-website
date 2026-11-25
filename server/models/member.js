const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const MemberModel = mongoose.model("Members", MemberSchema)
module.exports = MemberModel