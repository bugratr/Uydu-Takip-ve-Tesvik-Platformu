const express = require('express');
const router = express.Router();
const Uydu = require('../models/Uydu');

router.get('/', async (req, res) => {
    try {
        const uydular = await Uydu.find();
        res.json(uydular);
    } catch (error) {
        res.status(500).send("Sunucu hatası");
    }
});

// Diğer API endpointleri...

module.exports = router;
