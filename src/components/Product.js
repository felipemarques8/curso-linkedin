import React, { Component} from 'react'
import PropTypes from 'prop-types'

class Product extends Component {
  render() {
    return (
      <div className="Product animated bounceInUp">
        {this.props.description}
      </div>
    )
  }
}

Product.propTypes = {
    description: PropTypes.string.isRequired
}

export default Product
