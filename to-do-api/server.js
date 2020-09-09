const mongoose = require('mongoose');
const dotenv = require('dotenv');

//read config.env and save it in environment variable
dotenv.config({ path: './config.env' });


const DB = process.env.DATABASE.replace(
  '<PASSWORD>', 
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(con => {
  console.log(`DB connection established!!`);
})

const app = require('./app');
const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});

