import React from 'react'
import PropTypes from 'prop-types'
import ProductsPreview from './ProductsPreview'

const ProductsList = ({ products, onProductsClick }) => (
        <div className="ProductsList">
            <div className='container'>
                <div className='row'>
                    {/* Loop used the function map() */}
                    {Object.keys(products).map(productsId => 
                        <ProductsPreview key={productsId} onClick={onProductsClick} {...products[productsId]} />
                    )}
                </div>
            </div>
        </div>
)

ProductsList.propTypes = {
    products: PropTypes.object,
    onProductsClick: PropTypes.func.isRequired
}   

export default ProductsList