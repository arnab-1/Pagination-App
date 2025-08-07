const express = require('express');
const router = express.Router();
const items = require('../data/mockData');
const Item = require('../models/Items');


router.get('/',async (req,res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const start = (page - 1)* limit;
    // const end = page* limit;
    // I can compute end as = start + limit
    //const end = start + limit;
    const totalItems = await Item.countDocuments();
    const paginatedItems = await Item.find().skip(start).limit(limit);


    res.json({
        totalItems ,
        totalPages : Math.ceil(totalItems/limit),
        currentPage : page,
        items : paginatedItems
    });


});

module.exports = router;