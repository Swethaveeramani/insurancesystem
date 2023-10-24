// server.js
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
  email: String,
  name: String,
  dob: String,
  policy_type: String,
  policy_term: String,
  beneficiary_name: String,
  relationship: String,
  critical_illness: Boolean,
  accidental_death: Boolean,
});

app.post("/api/users", async (req, res) => {
  try {
    const {
      email,
      name,
      dob,
      policy_type,
      policy_term,
      beneficiary_name,
      relationship,
      critical_illness,
      accidental_death,
    } = req.body;

    console.log("Received Email:", email);
    console.log("Received Name:", name);
    console.log("Received Date of Birth:", dob);
    console.log("Received Policy Type:", policy_type);
    console.log("Received Policy Term:", policy_term);
    console.log("Received Beneficiary Name:", beneficiary_name);
    console.log("Received Relationship:", relationship);
    console.log("Received Critical Illness:", critical_illness);
    console.log("Received Accidental Death:", accidental_death);

    if (!email || !name || !dob || !policy_type || !policy_term) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const newUser = new User({
      email,
      name,
      dob,
      policy_type,
      policy_term,
      beneficiary_name,
      relationship,
      critical_illness,
      accidental_death,
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
