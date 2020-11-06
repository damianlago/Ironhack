const express = require('express')
const router = express.Router()

const Park = require('../models/park.model')

// Aquí los endpoints
router.get('/new', (req, res) => res.render('parks/new-park'))

router.post('/new', (req, res) => {
    const {
        name,
        description,
        active
    } = req.body

    Park.create({
            name,
            description,
            active
        })
        .then(() => res.redirect('/parks'))
        .catch(err => console.log(err))
})

module.exports = router