require("dotenv").config();

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { UserModel } = require("./model/UserModel");
const {HoldingsModel} = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const {OrdersModel} = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL; 

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/allHoldings", async(req, res) => {
    let allHoldings = await HoldingsModel.find({});
        res.json(allHoldings);
});

app.get("/allPositions", async(req, res) => {
    let allPositions = await PositionsModel.find({});
        res.json(allPositions);
});

app.post("/newOrder", async(req, res) => {
    let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    });

    newOrder.save();

    res.send("Order saved!");
});


app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        const user = new UserModel({
            name,
            email,
            password,
        });

        await user.save();

        res.status(201).json({
            message: "Signup successful",
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Server error",
        });
    }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    res.status(200).json({
      message: "Login successful",
      user,
    });

  } catch (err) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

// Frontend build
app.use(
  express.static(path.join(__dirname, "../frontend/build"))
);

// Dashboard build
app.use(
  "/dashboard",
  express.static(path.join(__dirname, "../dashboard/build"))
);

// Dashboard route
app.get("/dashboard", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../dashboard/build/index.html")
  );
});

// Frontend route
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../frontend/build/index.html")
  );
});

app.listen(PORT, () => {
    console.log("App started");
    mongoose.connect(uri);
    console.log("DB Connectd!");
});

