import React from 'react'
import Header from './Header'
import ProductsList from './ProductsList'
import Product from './Product'
import PropTypes from 'prop-types'
import * as api from '../api'

const pushState = (obj, url) => 
    window.history.pushState(obj, '', url)
class App extends React.Component {
    
    static propTypes = {
        initialData: PropTypes.object.isRequired
    }
    
    state = this.props.initialData

     componentDidMount(){
        
     }
     componentWillUnmount(){
        // clean timers, listeners
    }
    fetchProduct = (productId) => {
        pushState(
            {currentProductId: productId},
            `/products/${productId}`
        ) 
        
        api.fetchProduct(productId).then(product =>{
            //lookup products
            this.setState({
                currentProductId: product.id,
                products: {
                    ...this.state.products,
                    [product.id]: product
                }
            })
        })
    }
    currentProduct(){
        return this.state.products[this.state.currentProductId]
    }

    pageHeader(){
        if(this.state.currentProductId){
            return this.currentProduct().nameProduct
        }
        return 'Todos Produtos'
    }

    currentContent(){
        if (this.state.currentProductId) {
          return <Product {...this.currentProduct()} />
        }

        return <ProductsList 
        onProductClick={this.fetchProduct}
        products = {this.state.products} /> 
    }

    render() {
        /* debugger */
        return (
            <div className="App">
                <Header message={this.pageHeader()} />
                {this.currentContent()}
            </div>
        )
    }
}
 
export default App