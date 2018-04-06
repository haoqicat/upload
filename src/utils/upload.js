import axios from 'axios'

const UPDATE_AVATAR_URL = 'xxx'

export const sendRequest = formData => {
  axios.post(UPDATE_AVATAR_URL, formData).then(res => {
    console.log('request sent')
  })
}
