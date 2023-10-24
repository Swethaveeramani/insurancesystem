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
  phoneNumber: String,
  subject: String,
  message: String,
  department: String,
  urgency: String,
});

app.post('/api/users', async (req, res) => {
  const {
    name,
    email,
    phoneNumber,
    subject,
    message,
    department,
    urgency,
  } = req.body;

  console.log('Received Name:', name);
  console.log('Received Email:', email);
  console.log('Received Phone Number:', phoneNumber);
  console.log('Received Subject:', subject);
  console.log('Received Message:', message);
  console.log('Received Department:', department);
  console.log('Received Urgency:', urgency);

  try {
    if (!name || !email || !phoneNumber || !subject || !message || !department || !urgency) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const newUser = new User({
      name,
      email,
      phoneNumber,
      subject,
      message,
      department,
      urgency,
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
