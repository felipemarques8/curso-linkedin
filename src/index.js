import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import data from './testData'
console.log('====================================')
console.log(data)
console.log('====================================')

ReactDOM.render(
  <App contests={data.contests}/>,
  document.getElementById('root')
)
