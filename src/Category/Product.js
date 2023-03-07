import React, { useEffect, useState } from "react";

const Product = ({product}) => {
    return (
        <section className="product text-center">
            <div>
                <div className="product-content w-full">
                    <header className="product-name">
                        <a href="#" className="font-semibold">{product.name}</a>
                    </header>
                </div>
            </div>
        </section>
    );
}

export default Product;