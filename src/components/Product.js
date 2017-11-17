import React, { Component} from 'react'
import PropTypes from 'prop-types'

class Product extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="Product animated bounceInUp col-md-12">        
            <div className='img-product animated fadeInUpBig'>
              <img src={this.props.imgProduct} className='img-responsive' />
            </div>
            <div className='name-product aimated fadeInUpBig'>
                {this.props.nameProduct}
            </div>
            <div className='category-name animated fadeInUpBig'>
              {this.props.description}
            </div>
          </div>
        </div>  
      </div>  
    )
  }
}

Product.propTypes = {
    description: PropTypes.string.isRequired
}

export default Product
