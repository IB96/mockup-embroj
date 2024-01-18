const express = require('express')
const app = express()
const port = 4000
const csv = require("csv-parser");
const fs = require('fs');
let jsondata = require("./json-files/data.json"); 
let index = 0;  

app.get('/api', (req, res) => { 
  res.send(JSON.stringify(jsondata))
})
 
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

// after above parsing 
app.post('/apipos', (req, res) => {  
    
    if ( req.body != null && jsondata[req.body.id] != null){  
    	jsondata[req.body.id].position.x = req.body.pos.x;
    	jsondata[req.body.id].position.y = req.body.pos.y; 
    	fs.writeFileSync("./json-files/data.json", JSON.stringify(jsondata));
    }  
    res.send("ok");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
