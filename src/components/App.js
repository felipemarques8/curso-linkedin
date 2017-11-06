import React from 'react'
import Header from './Header'
import ContestsPreview from './ContestsPreview'
import ProductsPreview from './ProductsPreview'
import data from '../produtoData'
class App extends React.Component {
    state = { 
        pageHeader: 'React Header',
        products: []
     }
     componentDidMount(){
        this.setState({
            products: data.products
        })
     }
     componentWillUnmount(){
        
    }
    render() {
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