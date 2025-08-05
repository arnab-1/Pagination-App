const express = require('express');
const router = express.Router();
const items = require('../data/mockData');

router.get('/',(req,res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const start = (page - 1)* limit;
    // const end = page* limit;
    // I can compute end as = start + limit
    const end = start + limit;
    const paginatedItems = items.slice(start,end);

    res.json({
        totalItems : items.length,
        totalPages : Math.ceil(items.length/limit),
        currentPage : page,
        items : paginatedItems
    });


});

module.exports = router;