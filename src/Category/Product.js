import React, { useEffect, useState } from "react";
import Price from "../Price";

const Product = ({product, onClickFn}) => {
    const media_gallery_entries= JSON.parse(product.media_gallery_entries);
    // console.log('Product ', media_gallery_entries);
    let imageFile = '/logo512.png';

    if (media_gallery_entries.length > 0) {
        imageFile = '/media/catalog/product' + media_gallery_entries[0].file;
    }

    return (
        <section className="product text-center">
            <div>
                <div>
                    <img src={imageFile} alt={product.name} className="product-img" />
                </div>
                <div className="product-content w-full">
                    <header className="product-name">
                        <a href="#" className="font-semibold">{product.name}</a>
                    </header>
                    <div className="product-other-data w-full">
                        <Price price={product.price} />
                    </div>
                    <div className="product-actions w-full">
                        <button className="btn btn-primary" onClick={e => onClickFn(e, product)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Product;