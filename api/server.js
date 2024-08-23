const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000; 

app.use(cors());
app.use(express.static('public'));

// Import route modules
const getNewsRoutes = require('./routes/getNews');


// Use route modules
app.use('/', getNewsRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
