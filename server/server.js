import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import products from './data/products.js'

dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) => {
  res.send('Api is running.....')
})
app.get('/api/products', (req, res) => {
  res.json(products)
})
app.get('/api/product/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server is up and running in ${process.env.NODE_ENV} on port ${PORT}`.yellow
      .underline.bold
  )
)
