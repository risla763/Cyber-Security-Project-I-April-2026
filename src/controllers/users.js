import express from 'express'
import UserMongo from '../models/userMongo.js'
import BlogMongo from '../models/userMongo.js'
//fix for flaw 1:
//import bcrypt from 'bcrypt'
import populate from 'dotenv'
//fix for flaw 2
//import { userExtractor } from '../utils/middleware.js'

const router = express.Router()


router.post('/', async (request, response) => {
  const newUser = request.body
  if (!newUser.username || !newUser.name || !newUser.password) {
    return response.status(400).json({error:'username, name and password all are needed'})
  }
  if (newUser.password.length < 3 || newUser.username.length < 3) {
    return response.status(400).json({error: 'username and password need to be atleast 3 marks long'})
  }
  const users = await UserMongo.find({})
  if (users.find(name => newUser.username == name.username))
  {
    return response.status(400).json({error: 'username already exists'})
  }


  const password = newUser.password

// fix for flaw 1:
//const passwordHash = await bcrypt.hash(newUser.password, 10)
  const user = new UserMongo({
    username: newUser.username,
    name: newUser.name,
    password: password
  /*  fix for flaw 1:
  //password: passwordHash
  //and remove row 33
  */
  })
  const savedUser = await user.save()
  return response.status(201).json(savedUser)
})

//fix for flaw 2: 
//router.get('/', userExtractor, async (request, response) => {
  //remove the 48 line and use 46
router.get('/', async (request, response) => {
  //fix for flaw 2: 
  /*
    const user = await UserMongo.findById(request.user.id)
    if (!user.admin) {
      return response.status(403).json({ error: 'this user has no access' })
  }
      */
    const users = await UserMongo.find({}).populate('blogs', {title: 1, author: 1, url: 1})
    response.json(users)
})



/*fix for flaw 3:
  if (process.env.NODE_ENV === 'test') {
    router.post('/reset', async (request, response) => {
    await UserMongo.deleteMany({})
    await BlogMongo.deleteMany({})
    response.status(204).end()
  })
  }
*/
  router.post('/reset', async (request, response) => {
  await UserMongo.deleteMany({})
  await BlogMongo.deleteMany({})
  response.status(204).end()
})


export default router