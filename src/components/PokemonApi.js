import React from 'react'

const PokemonApi = (results) => {
    return(
        <div className="PokemonApi">
          <div>
            {results.name}
          </div>
          <div>
            {results.url}
          </div>
        </div>
    )
}

export default PokemonApi