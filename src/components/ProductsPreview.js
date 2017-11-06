import React from 'react'

const ProductsPreview = (products) => {
    return(
        <div className='ProductsPreview'>
            <div className='img-product'>
                {products.imgProduct}
            </div>
            <div className='name-product'>
                {products.nameProduct}
            </div>
            <div className='category-name'>
                {products.categoryName}
            </div>
            <div className='price-product'>
                {products.moeda} {products.priceProduct}
            </div>
        </div>
    )
}

export default ProductsPreview
