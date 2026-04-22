import axios from 'axios'
const baseUrl = '/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  //fix for flaw 4:
  //console.log("logged in successfully")
  console.log(response.data, 'tullaanko login.js')
  /*fix for flaw 5:
  remove row 11 because it is not needed for the fix. Rest of the fix is in App.jsx file*/
  window.location.href = `/profile?token=${response.data.token}`
  return response.data
}

export default { login }