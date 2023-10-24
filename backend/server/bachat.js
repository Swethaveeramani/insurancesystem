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
  term: String,
  age: String,
  gender: String,
  contactNumber: String,
  nomineeName: String,
  nomineeRelation: String,
  // Removed the password field
});

app.post('/api/Bachat', async (req, res) => {
  const { email, password, usertype } = req.body;
  console.log('Received Email:', email);
  console.log('Received Password:', password);
  console.log('Received usertype:', usertype);
  const user = await User.findOne({ email });
  console.log(user);
  console.log('usertype:' + usertype)
  if (user) {
    console.log('usertype:' + usertype, user.usertype)
    // You can perform other checks or validations here
    res.status(200).send('Login successful');
  } else {
    res.status(404).send('User not found');
  }
});

app.post('/api/users', async (req, res) => {
  const { name, email, term, age, gender, contactNumber, nomineeName, nomineeRelation } = req.body;
  console.log('Received Name:', name);
  console.log('Received Email:', email);
  console.log('Received Term:', term);
  console.log('Received Age:', age);
  console.log('Received Gender:', gender);
  console.log('Received Contact Number:', contactNumber);
  console.log('Received Nominee Name:', nomineeName);
  console.log('Received Nominee Relation:', nomineeRelation);

  try {
    if (!name || !email || !term || !age || !gender || !contactNumber || !nomineeName || !nomineeRelation) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const newUser = new User({
      name,
      email,
      term,
      age,
      gender,
      contactNumber,
      nomineeName,
      nomineeRelation,
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
