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
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phoneNumber: String,
  usertype: String,
});

app.post('/api/login', async (req, res) => {
  const { email, password, usertype } = req.body;
  console.log('Received Email:', email);
  console.log('Received Password:', password);
  console.log('Received usertype:', usertype);
  const user = await User.findOne({ email });
  console.log(user);
  console.log('usertype:' + usertype)
  if (user) {
    console.log('usertype:' + usertype, user.usertype)
    // Compare the provided password with the stored hashed password
    const isPasswordValid = password === user.password ? true : false;
    const isUserType = usertype === user.usertype ? true : false;
    console.log('isPasswordValid:' + isPasswordValid)
    console.log('isUserType:' + isUserType)
    if (isPasswordValid && isUserType) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid password');
    }
  } else {
    res.status(404).send('User not found');
  }
});

app.post('/api/users', async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;
  console.log('Received Email:', email);
  console.log('Received Password:', password);
  console.log('Received FirstName:', firstName);
  console.log('Received LastName:', lastName);
  console.log('Received PhoneNumber:', phoneNumber);

  try {
    if (!email || !password || !firstName || !lastName || !phoneNumber) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Hash the password (use a strong hashing library like bcrypt in production)
    const hashedPassword = hashPassword(password);

    const newUser = new User({ firstName, lastName, email, password: hashedPassword, phoneNumber });
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
