import express from 'express'
import data from '../src/produtoData'

const router = express.Router()

// Used reduce
//const products = data.products.reduce((obj, product) => {
//  obj[product.id] = product
//  return obj
//}, {})

// Used forEach
const products = {}
data.products.forEach(product => {
  products[product.id] = product
})

router.get('/products', (req, res) => {
  res.send({ 
    products: products
  })
})

router.get('/products/:productId', (req, res) => {
  let product = products[req.params.productId]
  product.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  res.send(product)
})

export default router
