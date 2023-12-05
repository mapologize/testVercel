const express = require('express');
const home = require("./routes/home");

const app = express();

app.use("/", home);
app.use(express.json());

const port = process.env.PORT || 9002;

app.listen(port, () => {
    console.log('App Listening Port : ' + port);
});

module.exports = app;