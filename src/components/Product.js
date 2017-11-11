import React, { Component} from 'react'
import PropTypes from 'prop-types'

export class Product extends Component {
  render() {
    return (
      <div className="Product">
        {this.props.description}
      </div>
    )
  }
}

Product.propTypes = {
    description: PropTypes.string.isRequired
}

export default Product
