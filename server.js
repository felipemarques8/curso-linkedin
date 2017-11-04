import config from './config'
import apiRouter from './api'

import express from 'express'
const server = express()

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
    res.status(200).render('index', {
        content: 'Hello Express and <em>EJS</em>'
    })
})

server.use('/api', apiRouter)
server.use(express.static('public'))

server.listen(config.port, () => {
    console.log('====================================')
    console.info('Express listening on port ', config.port)
    console.log('====================================')
})