//imports and consts
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = '8080';



//http server
app.use(bodyParser.json());
app.listen(port, () => {
    console.log("listening on port ${port}");
});
