import React, { Component } from 'react'
import { sendRequest } from './utils/upload.js'

class App extends Component {
  handleChange = e => {
    console.log(e)
    const file = e.target.files[0]
    const reader = new FileReader()
    let formData = new FormData()
    reader.onload = e => {
      console.log('inside onload====', e.target.result)
      sendRequest(formData)
    }
    reader.readAsDataURL(file)
  }
  render() {
    return (
      <div className="App">
        <input type="file" onChange={this.handleChange} />
      </div>
    )
  }
}

export default App
