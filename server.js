const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: "./config.env"});
const app = require('./index');

const DB = process.env.DATABASE;

mongoose.connect(DB, {
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=> {console.log('DB connection succesfull')})

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
})



