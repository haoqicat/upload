import axios from 'axios'

const UPDATE_AVATAR_URL = 'http://localhost:3008/paper'

export const sendRequest = formData => {
  axios.post(UPDATE_AVATAR_URL, formData).then(res => {
    console.log('request sent')
  })
}
