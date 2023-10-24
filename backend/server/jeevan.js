const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/login", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

app.use(bodyParser.json());
app.use(cors());

const User = mongoose.model("User", {
  proposer: String,
  childName: String,
  childAge: String,
  survivalBenefitProportion: String,
  proposerAge: String,
  proposerEmail: String,
  proposerPhone: String,
  nomineeName: String,
  nomineeRelation: String,
  premiumPaymentFrequency: String,
});

app.post("/api/users", async (req, res) => {
  const {
    proposer,
    childName,
    childAge,
    survivalBenefitProportion,
    proposerAge,
    proposerEmail,
    proposerPhone,
    nomineeName,
    nomineeRelation,
    premiumPaymentFrequency,
  } = req.body;

  console.log('Received Proposer:', proposer);
  console.log('Received Child Name:', childName);
  console.log('Received Child Age:', childAge);
  console.log('Received Survival Benefit Proportion:', survivalBenefitProportion);
  console.log('Received Proposer Age:', proposerAge);
  console.log('Received Proposer Email:', proposerEmail);
  console.log('Received Proposer Phone:', proposerPhone);
  console.log('Received Nominee Name:', nomineeName);
  console.log('Received Nominee Relation:', nomineeRelation);
  console.log('Received Premium Payment Frequency:', premiumPaymentFrequency);

  try {
    if (!proposer) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const newUser = new User({
      proposer,
      childName,
      childAge,
      survivalBenefitProportion,
      proposerAge,
      proposerEmail,
      proposerPhone,
      nomineeName,
      nomineeRelation,
      premiumPaymentFrequency,
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
