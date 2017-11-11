import React from 'react'
import Header from './Header'
import ProductsList from './ProductsList'
import Product from './Product'
import * as api from '../api'

const pushState = (obj, url) => 
    window.history.pushState(obj, '', url)
class App extends React.Component {
    state = { 
        pageHeader: 'Header',
        products: this.props.initialProducts
     }
     componentDidMount(){
        
     }
     componentWillUnmount(){
        // clean timers, listeners
    }
    fetchProducts = (productsId) => {
        pushState(
            {currentProductsId: productsId},
            `/products/${productsId}`
        ) 
        
        api.fetchProduct(productsId).then(product =>{
            //lookup products
            this.setState({
                pageHeader: product.nameProduct,
                currentProductsId: product.id,
                products: {
                    ...this.state.products,
                    [product.id]: product
                }
            })
        })
    }
    currentContent(){
        if (this.state.currentProductsId) {
          return <Product {...this.state.products[this.state.currentProductsId]} />
        }

        return <ProductsList 
        onProductsClick={this.fetchProducts}
        products = {this.state.products} /> 
    }

    render() {
        /* debugger */
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                {this.currentContent()}
            </div>
        )
    }
}
 
export default App