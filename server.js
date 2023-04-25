
const express = require('express');
const nodemailer = require('nodemailer');

const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "/")));
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.post('/', (req, res) => {
  // res.redirect('http://localhost:8000/index.html');
});