const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ReplaceForm', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for your data
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  lockoutCost: String,
  breakInCost: String,
  locksmithContact: String,
  homeSecurityProvider: String,
  additionalInfo: String,
});

// Create a model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

// Define a route to handle form submissions
app.post('/submit-form', async (req, res) => {
    const formData = req.body;
    
    try {
        // Create a new document based on the FormData model
        const newFormData = new FormData(formData);
        // Save the data to the database
        await newFormData.save();
        
        res.status(200).json({ message: 'Form data received and saved successfully!' });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
