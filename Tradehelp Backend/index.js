const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const Authroutes = require('./routes/authroutes');
const cors = require('cors')
const cookieParser = require("cookie-parser");
// const path = require("path");


dotenv.config();

//connect to database
connectDB();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
// app.use(cors());

//body parser
app.use(express.json());

app.use(cookieParser());

app.use('/api',Authroutes);


// app.use(express.static(path.join(__dirname, "../Tradehelp frontend/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../Tradehelp frontend/dist/index.html"));
// });





app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`server is up`);
});