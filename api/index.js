import express from 'express'
import data from '../src/produtoData'

const router = express.Router()
const products = data.products.reduce((obj, products) => {
  obj[products.id] = products
  return obj
}, {})

router.get('/products', (req, res) => {
  res.send({ 
    products: products
  })
})

export default router
