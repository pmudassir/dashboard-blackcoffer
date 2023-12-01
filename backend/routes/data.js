const router = require('express').Router();
const Data = require('../models/Data');

// router.get('/', async (req, res) => {
//     const data = await Data.find();
//     console.log(data);
//     return res.status(200).json(data);
// })

router.get("/intensity", async (req, res) => {
    try {
        const data = await Data.find({"intensity": {"$exists": true}, "topic": {"$exists": true}});
        console.log(data);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error);
    }

})

module.exports = router