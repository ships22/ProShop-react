import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
      console.log('Token found : ', decodedToken)
    } catch (erroe) {
      console.log(error)
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized')
  }
  console.log('protect called', req.headers.authorization)
  next()
})
export { protect }
