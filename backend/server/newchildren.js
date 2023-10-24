const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/login', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

app.use(bodyParser.json());
app.use(cors());

const User = mongoose.model('User', {
  parentName: String,
  childName: String,
  childAge: Number,
  dateOfBirth: String,
  purpose: String,
  sumAssured: Number,
  premiumPaymentTerm: String,
});


app.post('/api/users', async (req, res) => {
  const user = req.body;
  console.log('Received User Data:', user);

  try {
    if (!user) {
      return res.status(400).json({ message: 'Please provide user data' });
    }

    // Log the user data to the terminal.
    console.log('User Data Saved:', user);

    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

function hashPassword(password) {
  // For simplicity, using SHA-256 (not recommended for production)
  return crypto.createHash('sha256').update(password).digest('hex');
}

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
