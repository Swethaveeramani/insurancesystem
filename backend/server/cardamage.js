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
  driverName: String,
  accidentDate: String,
  description: String,
  carMake: String,
  carModel: String,
  licensePlate: String,
  insuranceCompany: String,
  estimatedRepairCost: String,
});


app.post('/api/CarDamageForm', async (req, res) => {
  const { email, driverName, accidentDate, description, carMake, carModel, licensePlate, insuranceCompany, estimatedRepairCost } = req.body;
  console.log('Received Email:', email);
  console.log('Received Driver Name:', driverName);
  console.log('Received Accident Date:', accidentDate);
  console.log('Received Description:', description);
  console.log('Received Car Make:', carMake);
  console.log('Received Car Model:', carModel);
  console.log('Received License Plate:', licensePlate);
  console.log('Received Insurance Company:', insuranceCompany);
  console.log('Received Estimated Repair Cost:', estimatedRepairCost);

  try {
    if (!email) {
      return res.status(400).json({ message: 'Please provide an email' });
    }

    const newUser = new User({
      email,
      driverName,
      accidentDate,
      description,
      carMake,
      carModel,
      licensePlate,
      insuranceCompany,
      estimatedRepairCost,
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
