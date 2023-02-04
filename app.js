import express  from "express";

import mongoose from "mongoose";

import router from "./routes/blogroute"
import userrouter from "./routes/userroute";

const app = express();

app.use(express.json());

app.use('/api/blogs',router);

app.use('/api/users',userrouter)

mongoose.set('strictQuery',false);

mongoose
  .connect(
    "mongodb+srv://admin1:admin@cluster0.shz0wwe.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(4000))
  .then(() => console.log("app is listening to the 4000 port"))
  .catch((err) => console.log(err));

