const express = require("express");
const app = express();
const colors = require("colors");
const cookie = require("cookie-parser");
const cors = require("cors");
const connectDb = require("./config/db");
const Routes = require("./routes");
require("dotenv").config();
app.use(express.json());
app.use(cookie());
app.use(cors());
connectDb();

app.use("/api", Routes);
app.get("/", (req, res) => {
  res.send("The server is running");
});

// app.post("/stkPush", accessToken, youtubePayment);
// app.post("/stkPushCallback/:Order_ID", stkPushCallback);
// app.post("/confirmPayment/:CheckoutRequestID", accessToken, confirmPayment);
app.listen(process.env.PORT, () => {
  console.log(
    `Server is running at http://localhost:${process.env.PORT}`.yellow.bold
  );
});
