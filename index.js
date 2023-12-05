const express = require('express');
const cors = require('cors');
const home = require("./routes/home");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/home", home);

const port = 9001;

app.listen(port, () => {
    console.log('App Listening Port : ' + port);
});