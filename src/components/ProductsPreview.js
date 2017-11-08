import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProductsPreview extends Component {
    handleClick = () => {
        alert(this.props.nameProduct)
    }
    render() {
        return(
            <div className='link ProductsPreview col-md-3'  onClick={this.handleClick} >
                <div className='img-product'>
                    <img src={this.props.imgProduct} />
                </div>
                <div className='name-product'>
                    {this.props.nameProduct}
                </div>
                <div className='category-name'>
                    Category: {this.props.categoryName}
                </div>
                <div className='price-product'>
                    {this.props.moeda} {this.props.priceProduct}
                </div>
            </div>
        )
    }
}

ProductsPreview.protoTypes = {
    imgProduct: PropTypes.string.isRequired,
    nameProduct: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired,
    moeda: PropTypes.string.isRequired,
    priceProduct: PropTypes.number.isRequired
}

export default ProductsPreview
