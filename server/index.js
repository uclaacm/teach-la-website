const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const MemberModel = require('./models/member')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI || process.env.MONGODB_URI || "mongodb://localhost:27017/teachla")

app.post('/login', (req, res) => {
    const {email, password} = req.body
    MemberModel.findOne({email: email})
    .then(user => {
        if (user) {
            if (user.password === password) {
                res.json("Success")
            } else {
                res.json("The password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    })
    
})

app.post('/register', (req, res) => {
    MemberModel.create(req.body)
    .then(Members => res.status(201).json(Members))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.listen(3001, () => {
    console.log("server is running")
})