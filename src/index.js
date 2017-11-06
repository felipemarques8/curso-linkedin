import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import data from './produtoData'
console.log('====================================')
console.log(data)
console.log('====================================')

ReactDOM.render(
  <App products={data.products}/>,
  document.getElementById('root')
)
