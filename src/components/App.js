import React from 'react'
import axios from 'axios'
import Header from './Header'
import ContestsPreview from './ContestsPreview'
import ProductsPreview from './ProductsPreview'
import data from '../produtoData'
class App extends React.Component {
    state = { 
        pageHeader: 'React Header',
        products: this.props.initialProducts
     }
     componentDidMount(){
        axios.get('/api/products')
            .then(resp =>{
                this.setState({
                    products: resp.data.products
                })
            })
            .catch(console.error)
     }
     componentWillUnmount(){
        // clean timers, listeners
    }
    render() {
        debugger
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div className='container'>
                    <div className='row'>
                        {/* Loop used the function map() */}
                        {this.state.products.map(products => 
                            <ProductsPreview key={products.id} {...products} />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
 
export default App