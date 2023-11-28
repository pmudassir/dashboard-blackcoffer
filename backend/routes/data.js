const router = require('express').Router();
const Data = require('../models/Data');

router.get('/', async (req, res) => {
    const data = await Data.find({ "intensity": { "$gt": 6 } });
    console.log(data);
    return res.status(200).json(data);
})

module.exports = router