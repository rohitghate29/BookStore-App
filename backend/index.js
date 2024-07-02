import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"
const app = express()

app.use(cors())
app.use(express.json())
dotenv.config();

// to check if backend is running 
app.get("/health", (req, res) => {
  res.status(200).send("Server is running");
});

const mogoDbURI = process.env.DB_URL
const PORT = process.env.PORT || 4000

// connect to db
try {
  mongoose.connect(mogoDbURI)
  console.log("Connected to mongodb");
} catch (error) {
  console.log("error: ", error);
}

// defining route
app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
