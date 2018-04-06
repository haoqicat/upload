import React, { Component } from 'react'
import { sendRequest } from './utils/upload.js'

class App extends Component {
  state = {
    selectedFileName: ''
  }

  handleChange = e => {
    const file = e.target.files[0]
    console.log('xxx', file.name)
    this.setState({
      selectedFileName: file.name
    })

    const reader = new FileReader()
    let formData = new FormData()
    reader.onload = e => {
      console.log('inside onload====', e.target.result)
      formData.append('paper', file)
      formData.append('authorname', 'myUserName')
      sendRequest(formData)
    }
    reader.readAsDataURL(file)
  }
  render() {
    return (
      <div className="App">
        {this.state.selectedFileName}
        <input type="file" onChange={this.handleChange} />
      </div>
    )
  }
}

export default App
