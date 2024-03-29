import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import Product from "./Category/Product";
import { useCookies } from "./UseCookies";
import { AppContext } from "./Context/AppContext";

const Config = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
    }
};

const Catalog = () => {
    // get from the context
    const { setShowMiniCart } = useContext(AppContext);
    
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState({});
    const [productsLoaded, setProductsLoaded] = useState(false);
    const [productComponents, setProductComponents] = useState([]);
    const [setCookie, getCookie] = useCookies();

    const addToCart = (e, product) => {
        const token = getCookie('token');
        const Authorization = `Bearer ${token}`;
        const initCartUrl = process.env.REACT_APP_BASE_URL + 'api/carts';
        
        let payload = {
            sku: product.sku,
            qty: 1,
            token
        }

        // Cart id q
        if (getCookie('q') == '') {
            axios.post(initCartUrl, { token }, Config).then(response => {
                setCookie('q', response.data);
                payload.quote_id = response.data;
                execAddToCartApi(payload);
            });
        } else {
            payload.quote_id = getCookie('q');
            execAddToCartApi(payload);
        }
    }
    
    const execAddToCartApi = (payload) => {
        const addToCartUrl = process.env.REACT_APP_BASE_URL + 'api/carts/' + payload.sku;
        axios.post(addToCartUrl, payload, Config).then(response => {
            // Data about the cartItem added...
            const { item_id, sku, qty } = response.data;
            if (item_id != undefined) {
                setShowMiniCart(true);
            }
        });
    }

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
                tempProductComponents.push(<Product key={product.id} product={product} onClickFn={addToCart} />)
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
