import config from './config'
import apiRouter from './api'
import sassMiddleware from 'node-sass-middleware'
import path from 'path'

import express from 'express'
const server = express()

server.set('view engine', 'ejs')

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}))

server.get('/', (req, res) => {
    res.status(200).render('index', {
        content: ''
    })
})

server.use('/api', apiRouter)
server.use(express.static('public'))

server.listen(config.port, () => {
    console.log('====================================')
    console.info('Express listening on port ', config.port)
    console.log('====================================')
})