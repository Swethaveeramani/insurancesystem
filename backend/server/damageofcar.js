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
  description: String,
  estimatedRepairCost: String,
  repairShop: String,
  contactInfo: String,
  photos: [String], // Store photo URLs as strings in an array
  insuranceClaim: Boolean,
});

app.post('/api/CarDamageForm', async (req, res) => {
  const {
    description,
    estimatedRepairCost,
    repairShop,
    contactInfo,
    photos,
    insuranceClaim,
  } = req.body;

  console.log('Received Description:', description);
  console.log('Received Estimated Repair Cost:', estimatedRepairCost);
  console.log('Received Repair Shop:', repairShop);
  console.log('Received Contact Info:', contactInfo);
  console.log('Received Photos:', photos);
  console.log('Received Insurance Claim:', insuranceClaim);

  try {
    if (!description || !estimatedRepairCost || !repairShop || !contactInfo) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const newUser = new User({
      description,
      estimatedRepairCost,
      repairShop,
      contactInfo,
      photos,
      insuranceClaim,
    });
    await newUser.save();

    // Print the form details in the terminal
    console.log('Form Details:', newUser);

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
