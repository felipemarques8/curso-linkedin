import config from './config'
import apiRouter from './api'
import sassMiddleware from 'node-sass-middleware'
import serverRender from './serverRender'
import path from 'path'

import express from 'express'
const server = express()

server.set('view engine', 'ejs')

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}))

server.get(['/', '/product/:productId'], (req, res) => {
    serverRender(req.params.productId)
        .then(({ initialMarkup, initialData }) => {
            res.status(200).render('index', {
                initialMarkup,
                initialData
            })
        })
        .catch(console.error)
})

server.use('/api', apiRouter)
server.use(express.static('public'))

server.listen(config.port, config.host, () => {
    console.log('====================================')
    console.info('Express listening on port ', config.port)
    console.log('====================================')
})