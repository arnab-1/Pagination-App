const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        MONGO_URI='mongodb://localhost:27017/paginationDB';
       // MONGO_URI='mongodb://localhost:27017/paginationDB'

        await mongoose.connect(MONGO_URI);
        console.log('MySQL connected properly');
        

    } catch (error) {
        console.error('MySQL not connected ',error.message);
        process.exit(1);
    }
};


module.exports = connectDB;
