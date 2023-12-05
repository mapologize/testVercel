const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/home", (req,res) => {
    res.send('Hello home page!');
});

const port = 9001;

app.listen(port, () => {
    console.log('App Listening Port : ' + port);
});