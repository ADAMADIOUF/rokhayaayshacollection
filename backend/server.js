import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import productRoutes from "./routes/productRoutes.js"
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const port = process.env.PORT || 5000
connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(`/api/products`, productRoutes)
app.use(`/api/users`, userRoutes)
app.use(`/api/orders`, orderRoutes)
app.use(notFound)
app.use(errorHandler)
app.listen(port, () => console.log(`the server running at port ${port}`))
