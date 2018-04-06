import axios from 'axios'
import { UPLOAD_URL } from '../Settings.js'

export const sendRequest = formData => {
  axios.post(UPLOAD_URL, formData).then(res => {
    console.log('request sent')
  })
}
