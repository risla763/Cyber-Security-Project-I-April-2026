import express from 'express'
import UserMongo from '../models/userMongo.js'
//fix for flaw 1:
//import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
//fix for flaw 4:
import logger from '../utils/logger.js'



const router = express.Router()



router.post('/', async (request, response) => {


  const { username, password } = request.body

  const user = await UserMongo.findOne({ username })

  /*fix for flaw 4:
  if (user === null) {
    logger.warn(`Failed login attempt with username ${username}`, {
      username,
    } )

    }
   */
   
  /*fix for flaw 1:
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.password)
    */

    //remove the row 38 for fix 1 and use the code above
  const passwordCorrect = password === user.password

  if  (!user || !passwordCorrect || user == null) {
    console.warn(`Failed login attempt with this username ${username}`)

      //fix for flaw 2
    //logger.warn(`Failed login attempt with username ${username}`)
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }
  else {
    console.log("salasana oikein")
  }


  const userForToken = {
    username: user.username,
    id: user._id,
  }

  const token = jsonwebtoken.sign(userForToken, process.env.SECRET)

  response
    .status(200)
    .send({ token, username: user.username, name: user.name, id: user._id })
})

export default router
