import React from 'react'
import Header from './Header'
import ContestsPreview from './ContestsPreview'
import ProductsList from './ProductsList'

const pushState = (obj, url) => 
    window.history.pushState(obj, '', url)
class App extends React.Component {
    state = { 
        pageHeader: 'React Header',
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
    }
    render() {
        /* debugger */
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <ProductsList 
                    onProductsClick={this.fetchProducts}
                    products = {this.state.products} />
            </div>
        )
    }
}
 
export default App