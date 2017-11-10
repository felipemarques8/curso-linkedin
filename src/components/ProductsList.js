import React from 'react'
import PropTypes from 'prop-types'
import ProductsPreview from './ProductsPreview'

const ProductsList = ({ products, onProductsClick }) => (
        <div className="ProductsList">
            <div className='container'>
                <div className='row'>
                    {/* Loop used the function map() */}
                    {products.map(products => 
                        <ProductsPreview key={products.id} onClick={onProductsClick} {...products} />
                    )}
                </div>
            </div>
        </div>
)

ProductsList.propTypes = {
    products: PropTypes.array,
    onProductsClick: PropTypes.func.isRequired
}   

export default ProductsList