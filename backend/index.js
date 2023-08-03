const connectToMongo = require('./db.js');
var cors = require('cors')
const express = require('express')
connectToMongo();
const app = express()
const port = 5000

app.use(cors());
app.use(express.json());

app.use('/api',require('./routes/data.js'))

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});