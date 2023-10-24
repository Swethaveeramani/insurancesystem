const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/car_damage', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

app.use(bodyParser.json());
app.use(cors());

const CarDamage = mongoose.model('CarDamage', {
  description: String,
  estimatedRepairCost: String,
  repairShop: String,
  contactInfo: String,
  damagedComponents: [String],
});

app.post('/api/CarDamageForm', async (req, res) => {
  const {
    description,
    estimatedRepairCost,
    repairShop,
    contactInfo,
    damagedComponents,
  } = req.body;

  try {
    if (!description || !estimatedRepairCost || !repairShop || !contactInfo || damagedComponents.length === 0) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const newCarDamage = new CarDamage({
      description,
      estimatedRepairCost,
      repairShop,
      contactInfo,
      damagedComponents,
    });
    await newCarDamage.save();

    // Print the details in the terminal
    console.log('Car Damage Details:');
    console.log('Description:', newCarDamage.description);
    console.log('Estimated Repair Cost:', newCarDamage.estimatedRepairCost);
    console.log('Repair Shop:', newCarDamage.repairShop);
    console.log('Contact Info:', newCarDamage.contactInfo);
    console.log('Damaged Components:', newCarDamage.damagedComponents);

    res.status(201).json({ message: 'Car damage details submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
