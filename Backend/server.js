const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: ["http://localhost:8100",  "http://localhost"]
};

app.use(cors(corsOptions));

// Connect Database
connectDB();

// Init middleware
app.use(express.json({extended: false}))

app.get('/', (req, res) => {
  res.send('API Running')
})

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/validation', require('./routes/api/validation'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))