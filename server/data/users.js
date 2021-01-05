import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ships Haque',
    email: 'ships@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Lina Haque',
    email: 'lina@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
