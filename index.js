const express = require('express')
const app = express()
const port = 3000
const csv = require("csv-parser");
const fs = require('fs')
const results = [];

fs.createReadStream('csv-files/data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results); 
  });
  
app.get('/api', (req, res) => { 
  res.send(results)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
