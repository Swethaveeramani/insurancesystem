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
  name: String,
  age: Number,
  gender: String,
  occupation: String,
  policyAmount: Number,
  maritalStatus: String,
  aadharNumber: String,
  panNumber: String,
  secondPolicyHolderName: String,
  address: String,
  familyMembers: Number,
  premium: Number,
});

app.post('/api/users', async (req, res) => {
  const user = req.body;
  console.log('Received User Data:', user);

  try {
    if (!user) {
      return res.status(400).json({ message: 'Please provide user data' });
    }

    // Save the user data to the database
    const newUser = new User(user);
    await newUser.save();

    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
