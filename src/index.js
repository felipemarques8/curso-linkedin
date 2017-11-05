import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import data from './testData'
import pokemon from './pokemon'
console.log('====================================')
console.log(pokemon)
console.log('====================================')

ReactDOM.render(
  <App results={pokemon.results}/>,
  document.getElementById('root')
)
