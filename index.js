
const express = require('express');
const app = express();
//const mongoose = require("mongoose"); mongoose": "^6.1.1
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
//const authRoute = require("./routes/auth")


dotenv.config();
  /* database connection
      mongoose.connect(
        process.env.MONGO_URL
      )
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err)); */

app.use(express.json());
app.use("/api/users", userRoute) ; 

app.listen(process.env.PORT || 7000, () => {
  console.log("Backend service is running");
});