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
  yearlyPremium: String,
  age: String,
  gender: String, // You can change this to radio buttons for 'Male' and 'Female'
  occupation: String,
  policyTerm: String,
});

app.post('/api/Endowment', async (req, res) => {
  const { email, yearlyPremium, age, gender, occupation, policyTerm } = req.body;
  console.log('Received Email:', email);
  console.log('Received Yearly Premium:', yearlyPremium);
  console.log('Received Age:', age);
  console.log('Received Gender:', gender);
  console.log('Received Occupation:', occupation);
  console.log('Received Policy Term:', policyTerm);

  try {
    if (!email || !yearlyPremium || !age || !gender || !occupation || !policyTerm) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Hash the password (use a strong hashing library like bcrypt in production)
    // Note: You don't need password hashing in this context as there is no password field in the form.

    const newUser = new User({
      email,
      yearlyPremium,
      age,
      gender,
      occupation,
      policyTerm,
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

