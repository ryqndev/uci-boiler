const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send("Yes");
});

app.listen( port, () => console.log(`Backend server listening on port ${port}!`) );