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
  email: String,
  damageType: String,
  damageDescription: String,
  carRegistrationNumber: String,
  registrationAddress: String,
  aadharNumber: String,
  phoneNumber: String,
});

app.post('/api/Signin', async (req, res) => {
  const { email, password } = req.body;
  console.log('Received Email:', email);
  console.log('Received Password:', password);
  const user = await User.findOne({ email });
  console.log(user);

  if (user) {
    // Compare the provided password with the stored hashed password
    const isPasswordValid = password === user.password ? true : false;
    console.log('isPasswordValid:' + isPasswordValid)
    if (isPasswordValid) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid password');
    }
  } else {
    res.status(404).send('User not found');
  }
});

app.post('/api/users', async (req, res) => {
  const {
    email,
    damageType,
    damageDescription,
    carRegistrationNumber,
    registrationAddress,
    aadharNumber,
    phoneNumber,
  } = req.body;

  console.log('Received Email:', email);
  console.log('Received damageType:',damageType);
  console.log('Received damageDescription:',damageDescription);
  console.log('Received carRegistrationNumber:',carRegistrationNumber);
  console.log('Received registrationAddress:',registrationAddress);
  console.log('Received aadharNumber:',aadharNumber);
  console.log('Received phoneNumber:',phoneNumber);

  try {
    if (!email || !damageType || !damageDescription || !carRegistrationNumber || !registrationAddress || !aadharNumber || !phoneNumber) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Create a new user with the provided data
    const newUser = new User({
      email,
      damageType,
      damageDescription,
      carRegistrationNumber,
      registrationAddress,
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

