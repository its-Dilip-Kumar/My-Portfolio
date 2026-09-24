const express = require("express");
const app = express();
const main = require("./db");
const User = require("./user.schema");
const cors = require("cors");

app.use(express.json());

app.use(cors({
  origin: [
    "http://127.0.0.1:5500",
    "https://my-portfolio-eight-flax-15.vercel.app",
  ],
  methods: ["GET", "POST"],
}));

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running ✅");
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message || !subject) {
      return res.status(400).json({
        success: false,
        message: "All Fields required",
      });
    }

    const newMessage = await User.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message Sent successfully",
      data: newMessage,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

const PORT = process.env.PORT || 3000;

main()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening at port ${PORT}`);
    });
  })
  .catch((e) => console.log(e));