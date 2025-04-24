const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const auth = require('./routes/auth')

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', auth);

app.get('/', (req, res) =>{
    res.send("api is runnig");
});

const PORT = process.env.PORT||6000;
app.listen(PORT, () => {
    console.log(`Server is running on:${PORT}`);
    
})