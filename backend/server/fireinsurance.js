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
  email: String,
  propertyValue: String,
  coverageType: String,
  premium: Number,
  panNumber: String,
  aadharNumber: String,
  phoneNumber: String,
});

app.post('/api/users', async (req, res) => {
  const {
    email,
    propertyValue,
    coverageType,
    premium,
    panNumber,
    aadharNumber,
    phoneNumber,
  } = req.body;

  console.log('Received Email:', email);
  console.log('Received PropertyValue:',propertyValue);
  console.log('Received CoverageType:',coverageType);
  console.log('Received Premium:',premium);
  console.log('Received PanNumber:',panNumber);
  console.log('Received AadharNumber:',aadharNumber);
  console.log('Received PhoneNumber:',phoneNumber);

  try {
    if (!email || !propertyValue || !coverageType || !premium || !panNumber || !aadharNumber || !phoneNumber) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const newUser = new User({
      email,
      propertyValue,
      coverageType,
      premium,
      panNumber,
      aadharNumber,
      phoneNumber,
    });

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
