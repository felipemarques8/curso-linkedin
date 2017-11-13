import React from 'react'
import PropTypes from 'prop-types'
import ProductsPreview from './ProductsPreview'

const ProductsList = ({ products, onProductClick }) => (
        <div className="ProductsList animated fadeInUp">
            <div className='container'>
                <div className='row'>
                    {/* Loop used the function map() */}
                    {Object.keys(products).map(productId => 
                        <ProductsPreview 
                            key={productId} 
                            onClick={onProductClick} 
                            {...products[productId]} />
                    )}
                </div>
            </div>
        </div>
)

ProductsList.propTypes = {
    products: PropTypes.object,
    onProductClick: PropTypes.func.isRequired
}   

export default ProductsList