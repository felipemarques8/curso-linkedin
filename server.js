import config from './config'
import express from 'express'

const server = express()

server.get('/', (req, res) => {
    res.status(200).send('<h1>Bem vindo</h1>')
})

server.listen(config.port, () => {
    console.log('====================================')
    console.info('Express listening on port ', config.port)
    console.log('====================================')
})