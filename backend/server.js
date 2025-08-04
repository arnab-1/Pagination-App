const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

//app.use('/api/items',itemRoutes);
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Sarver is running successfully on port ${PORT}`);
    
});

