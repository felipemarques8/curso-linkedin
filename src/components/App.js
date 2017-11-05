import React from 'react'
import Header from './Header'
import PokemonApi from './PokemonApi';

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
                    {this.props.results.map(results => 
                        <PokemonApi {...results} />
                    )}
                </div>
            </div>
        )
    }
}
 
export default App