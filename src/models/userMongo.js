import mongoose from 'mongoose'
import config from '../utils/config.js'

import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  password: String,
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog'
    }
  ]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})



const User = mongoose.model('User', userSchema)

/*Fix for flaw 2:
const createAdmin = async () => {
  const adminExists = await User.findOne({ username: 'admin' })

  if (!adminExists) {
    const CryptedPassword = await bcrypt.hash('adminpassword', 10)

    const admin = new User({
      username: 'admin',
      name: 'Admin',
      password: CryptedPassword,
    })

    await admin.save()
  }
}*/






mongoose.connect(config.MONGODB_URI)
/*fix for flaw 2:
.then(() => {
  createAdmin()
})*/

export default User