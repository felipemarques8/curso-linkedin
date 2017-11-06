// fetch the data from the api
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from './src/components/App'

import config from './config'
import axios from 'axios'

const serverRender = () =>
axios.get(`${config.serverUrl}/api/products`)
    .then(resp => {
      return ReactDOMServer.renderToString(
          <App initialProducts={resp.data.products} />
        )
    })
export default serverRender