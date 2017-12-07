const express = require('express');
const LocalUser    = require('../models/localuser.js');

const router = express.Router();

router.get('/', (req,res) => {
    LocalUser.getProfile((err,profile) => {
        if (err) {
            res.json({
                success: false,
                message: `Error getting profile: ${err}`
            })
        } else {
            res.json({
                success: true,
                profile: profile
            })
        }
    });
});

router.get('/:url', (req,res) => {
    let url = req.params.url;
    LocalUser.getForeignProfile(url,(err,profile) => {
        if (err) {
            res.json({
                success: false,
                message: `Error getting foreign profile: ${err}`
            })
        } else {
            res.json({
                success: true,
                profile: profile
            })
        }
    });
});

module.exports = router;
