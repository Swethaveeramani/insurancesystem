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
  coverageType: String,
  addOn: Boolean,
  domesticHelpCoverage: Boolean,
  guestCoverage: Boolean,
  comments: String,
});

app.post('/api/users', async (req, res) => {
  const { name, email, coverageType, addOn, domesticHelpCoverage, guestCoverage, comments } = req.body;
  console.log('Received Name:', name);
  console.log('Received Email:', email);
  console.log('Received Coverage Type:', coverageType);
  console.log('Received Add On:', addOn);
  console.log('Received Domestic Help Coverage:', domesticHelpCoverage);
  console.log('Received Guest Coverage:', guestCoverage);
  console.log('Received Comments:', comments);

  try {
    if (!name || !email) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const newUser = new User({
      name,
      email,
      coverageType,
      addOn,
      domesticHelpCoverage,
      guestCoverage,
      comments,
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
