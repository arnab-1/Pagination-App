const mongoose = require('mongoose');

const Item = require('../models/Items');


mongoose.connect('mongodb://localhost:27017/paginationDB').then( async () => {
    console.log('MySQL seeding connected');

    await Item.deleteMany({});

    const sampleItem = Array.from({ length : 100} , (_ , i) => ({
        name : `Item no ${i+1}`,
        description : `This is the description of Item ${i + 1}`,
        price : (Math.random() * 100).toFixed(2)
    }));

    await Item.insertMany(sampleItem);
    console.log('Item Inserted successfully');
    
    
}).catch(error => {
    console.error('Sending Fail',error.message);
    process.exit(1);
}) ;