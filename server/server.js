import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectDB()
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Api is running.....')
})

app.use('/api/products/', productRoutes)
app.use('/api/users', userRoutes)

// @desc custom error middleware
// @route all
// @acess Public
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server is up and running in ${process.env.NODE_ENV} on port ${PORT}`.yellow
      .underline.bold
  )
)
