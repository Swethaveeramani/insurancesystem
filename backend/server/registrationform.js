const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');
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
  email: String,
  phone: String,
  policyTerm: String,
  gender: String,
  dateOfBirth: String,
  maritalStatus: String,
  occupation: String,
  annualIncome: String,
  address: String,
  healthCondition: String,
  usertype: String,
});

app.post('/api/Signin', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    res.status(200).send('Login successful');
  } else {
    res.status(404).send('User not found');
  }
});

app.post('/api/users', async (req, res) => {
  const {
    name,
    email,
    phone,
    policyTerm,
    gender,
    dateOfBirth,
    maritalStatus,
    occupation,
    annualIncome,
    address,
    healthCondition,
  } = req.body;

  try {
    if (
      !name ||
      !email ||
      !phone ||
      !policyTerm ||
      !gender ||
      !dateOfBirth ||
      !maritalStatus ||
      !occupation ||
      !annualIncome ||
      !address ||
      !healthCondition
    ) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const newUser = new User({
      name,
      email,
      phone,
      policyTerm,
      gender,
      dateOfBirth,
      maritalStatus,
      occupation,
      annualIncome,
      address,
      healthCondition,
      usertype: 'user', // Assuming all users are of type 'user'
    });
    await newUser.save();

    // Display the received details in the terminal
    console.log('Received Name:', name);
    console.log('Received Email:', email);
    console.log('Received Phone:', phone);
    console.log('Received Policy Term:', policyTerm);
    console.log('Received Gender:', gender);
    console.log('Received Date of Birth:', dateOfBirth);
    console.log('Received Marital Status:', maritalStatus);
    console.log('Received Occupation:', occupation);
    console.log('Received Annual Income:', annualIncome);
    console.log('Received Address:', address);
    console.log('Received Health Condition:', healthCondition);

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
