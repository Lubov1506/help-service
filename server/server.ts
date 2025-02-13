import express from "express"
import mongoose from "mongoose"
// import cors from "cors"
import dotenv from "dotenv"
// import authRoutes from "./routes/authRoutes"

dotenv.config()

const app = express()
// app.use(cors())
app.use(express.json())

// app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => {
    console.log("MongoDB connected")
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch((err) => console.log(err))
