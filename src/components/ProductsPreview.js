import React, { Component } from 'react'
import InputNumber from 'rc-input-number'
import PropTypes from 'prop-types'

class ProductsPreview extends Component {
    handleClick = () => {
        this.props.onClick(this.props.id)
    }
    render() {
        return(
            <div className='ProductsPreview col-md-3'>
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
                <div className='add-to-cart'>
                    <a className="btn btn-success" onClick={this.handleClick}>
                        Ver mais
                    </a>
                </div>
            </div>
        )
    }
}

ProductsPreview.propTypes = {
    id: PropTypes.number.isRequired,
    imgProduct: PropTypes.string.isRequired,
    nameProduct: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired,
    moeda: PropTypes.string.isRequired,
    priceProduct: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ProductsPreview
