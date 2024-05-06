const router = require("express").Router()
const StudentModel = require("../models/student")
const bcrypt = require("bcrypt")

router.post('/student', (req, res) => {
    const { name, roll_no, class_code, password } = req.body
    bcrypt.hash(password, 10)
        .then(hash => {
            StudentModel.create({ name, roll_no, class_code, password: hash })
                .then(res.send("success"))
                .catch(err => res.json(err))
        })
        .catch(err => res.json(err))
})

module.exports = router