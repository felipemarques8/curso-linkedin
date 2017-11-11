import express from 'express'
import data from '../src/produtoData'
import Product from '../src/components/Product';

const router = express.Router()
const products = data.products.reduce((obj, product) => {
  obj[product.id] = product
  return obj
}, {})

router.get('/products', (req, res) => {
  res.send({ 
    products: products
  })
})

router.get('/products/:productId', (req, res) => {
  let product = products[req.params.productId]
  product.description = "Lorem ipsum dolor"
  res.send(product)
})

export default router
