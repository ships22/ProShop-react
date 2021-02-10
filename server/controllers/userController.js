import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

import bcrypt from 'bcryptjs'

// @desc Auth user & get token
// @route POST /api/users/login
// @acess Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.find({ email })

  if (user && (await this.matchPassword(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    })
  } else {
    res.status(401)
    throw new Error('Invalid login details')
  }
})
const matchPassword = async (enteredPassword, savedPassword) => {
  console.log('test here')
  return await bcrypt.compare(enteredPassword, savedPassword)
}
export { authUser }
