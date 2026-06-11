const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Database Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));

// Routes (to be added)
// app.use('/api/auth', require('./src/routes/auth'));
// app.use('/api/posts', require('./src/routes/posts'));
// app.use('/api/courses', require('./src/routes/courses'));
// app.use('/api/assignments', require('./src/routes/assignments'));
// app.use('/api/profile', require('./src/routes/profile'));
// app.use('/api/notifications', require('./src/routes/notifications'));

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'Server running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;