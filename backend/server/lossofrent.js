// server.js
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
  policyHolder: String,
  contactEmail: String,
  insuredEvent: String,
  rentLostAmount: String,
  alternativeAccommodationCost: String,
  password: String,
  usertype: String,
});

app.post('/api/signin', async (req, res) => {
  const { contactEmail, password, usertype } = req.body;
  
  console.log('Received Contact Email:', contactEmail);
  console.log('Received Password:', password);
  console.log('Received usertype:', usertype);
  
  const user = await User.findOne({ contactEmail });
  
  if (user) {
    // Compare the provided password with the stored hashed password
    const isPasswordValid = password === user.password ? true : false;
    const isUserType = usertype === user.usertype ? true : false;
    
    if (isPasswordValid && isUserType) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  } else {
    res.status(404).send('User not found');
  }
});

app.post('/api/users', async (req, res) => {
  const {
    policyHolder,
    contactEmail,
    insuredEvent,
    rentLostAmount,
    alternativeAccommodationCost,
    password,
    usertype,
  } = req.body;

  console.log('Received Policy Holder:', policyHolder);
  console.log('Received Contact Email:', contactEmail);
  console.log('Received Insured Event:', insuredEvent);
  console.log('Received Rent Lost Amount:', rentLostAmount);
  console.log('Received Alternative Accommodation Cost:', alternativeAccommodationCost);
  console.log('Received usertype:', usertype);

  try {
    if (!policyHolder || !contactEmail || !insuredEvent || !rentLostAmount || !alternativeAccommodationCost || !password || !usertype) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Hash the password (use a strong hashing library like bcrypt in production)
    const hashedPassword = hashPassword(password);

    const newUser = new User({
      policyHolder,
      contactEmail,
      insuredEvent,
      rentLostAmount,
      alternativeAccommodationCost,
      password: hashedPassword,
      usertype,
    });

    await newUser.save();

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
