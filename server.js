const express = require('express');
const app = express();
const fetch = require('node-fetch');
const port = 5001;

app.get('/', () => {
    console.log('hello i am runnig');
})

app.listen(port , ()=> {
    console.log("server runnig ", port);
})