import React from 'react'
import Header from './Header'
import ContestsPreview from './ContestsPreview'
import ProductsList from './ProductsList';
import data from '../produtoData'
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
    render() {
        debugger
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <ProductsList products = {this.state.products} />
            </div>
        )
    }
}
 
export default App