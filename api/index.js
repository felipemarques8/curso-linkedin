import express from 'express'
import data from '../src/produtoData'

const router = express.Router()

router.get('/products', (req, res) => {
  res.send({ products: data.products })
})

export default router
