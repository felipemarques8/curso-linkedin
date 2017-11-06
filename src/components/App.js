import React from 'react'
import Header from './Header'
import ContestsPreview from './ContestsPreview'
import ProductsPreview from './ProductsPreview'
class App extends React.Component {
    state = { 
        pageHeader: 'React Header'
     }
    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                    {/* Loop used the function map() */}
                    {this.props.products.map(products => 
                        <ProductsPreview {...products} />
                    )}
                </div>
            </div>
        )
    }
}
 
export default App