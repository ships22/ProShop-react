import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(
      `Mongo db connected to host : ${con.connection.host}`.cyan.underline
    )
  } catch (error) {
    console.log(`Error occurred : ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
