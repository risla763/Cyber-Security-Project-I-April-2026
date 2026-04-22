import dotenv from 'dotenv'

dotenv.config()

const PORT =3003
const MONGODB_URI = process.env.NODE_ENV === 'test' 
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI
console.log('DB URI:', MONGODB_URI)


export default {
  PORT,
  MONGODB_URI
}