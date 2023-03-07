import React, { useEffect, useState } from "react";
import axios from 'axios';
import Product from "./Category/Product";

const Config = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
    }
};

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState({});
    const [productsLoaded, setProductsLoaded] = useState(false);
    const [productComponents, setProductComponents] = useState([]);

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_BASE_URL + 'api/categories/22';
        
        axios.get(apiUrl, Config).then(response => {
            const { data } = response;
            setProducts(data.category.products);
            setCategory(data.category);
            setProductsLoaded(true);
            let tempProductComponents = [];

            let product = {};
            for (let i = 0; i < data.category.products.length; i++) {
                product = data.category.products[i];
                tempProductComponents.push(<Product key={product.id} product={product} />)
            }
            setProductComponents(tempProductComponents);
        }).catch(error => {
            console.log('Error fetching products : ', error);
        }).finally(() => {});
    }, [productsLoaded]);

    return (
        <div className="catalog-container">
            <div className="products">
                <h1 className="category-header">
                    {category && <span>{category.name}</span>}
                    {productsLoaded && <span>({products.length})</span>}
                </h1>
                <div className="products">
                    {productComponents}
                </div>
            </div>
        </div>
    )
}

export default Catalog;