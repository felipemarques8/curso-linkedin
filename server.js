import config from './config'
import apiRouter from './api'

import express from 'express'
const server = express()

server.get('/', (req, res) => {
    res.status(200).send('<h1>The HomePage</h1>')
})

server.use('/api', apiRouter)
server.use(express.static('public'))

server.listen(config.port, () => {
    console.log('====================================')
    console.info('Express listening on port ', config.port)
    console.log('====================================')
})