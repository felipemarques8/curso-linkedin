import React from 'react'
import Header from './Header'
import ContestsPreview from './ContestsPreview'
import ProductsList from './ProductsList'
import Products from './Products'

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
    
        //lookup products
        this.setState({
            pageHeader: this.state.products[productsId].nameProduct,
            currentProductsId: productsId
        })
    }
    currentContent(){
        if (this.state.currentProductsId) {
          return <Products {...this.state.products[this.state.currentProductsId]} />
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