import React from 'react'
import PropTypes from 'prop-types'
import ProductsPreview from './ProductsPreview'

const ProductsList = ({ products }) => (
        <div className="ProductsList">
            <div className='container'>
                <div className='row'>
                    {/* Loop used the function map() */}
                    {products.map(products => 
                        <ProductsPreview key={products.id} {...products} />
                    )}
                </div>
            </div>
        </div>
)

ProductsList.propTypes = {
    products: PropTypes.array
}   

export default ProductsList