import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProductsPreview extends Component {
    handleClick = () => {
        this.props.onClick(this.props.id)
    }
    render() {
        return(
            <div className='ProductsPreview col-md-3'>
                <div className='img-product animated fadeInUpBig'>
                    <img src={this.props.imgProduct} />
                </div>
                <div className='name-product aimated fadeInUpBig'>
                    {this.props.nameProduct}
                </div>
                <div className='category-name animated fadeInUpBig'>
                    {this.props.moeda} {this.props.priceProduct}
                </div>
                <div className='add-to-cart animated fadeInUpBig'>
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
    priceProduct: PropTypes.number.isRequired,
    moeda: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ProductsPreview
