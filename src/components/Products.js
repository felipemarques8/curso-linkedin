import React, { Component} from 'react'
import PropTypes from 'prop-types'

export class Products extends Component {
  render() {
    return (
      <div className="Products">
        {this.props.id}
      </div>
    )
  }
}

Products.propTypes = {
    id: PropTypes.number.isRequired
}

export default Products
