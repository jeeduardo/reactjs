import React, { useState } from 'react';

const MiniCartItem = ({cartItem}) => {
    return (
        <li className="cart-item">
            <div className="cart-item-wrapper">
                <div className="cart-item-img">
                    <a href="#">
                        <img src="/logo512.png" alt={cartItem.name} height="100" width="100" />
                    </a>
                </div>
                <div className="cart-info">
                    <div className="cart-info-row">
                        <div className="product-name">{cartItem.name}</div>
                        <div className="price-info">
                            <span className="currency">$</span>
                            <span className="price">{cartItem.price}</span>
                        </div>
                    </div>
                    <div className="cart-info-row">
                        <div className="qty">
                            <span>Quantity </span>
                            <span className="qty-value">{cartItem.qty}</span>
                        </div>
                    </div>
                    <div className="cart-info-row right">
                        <div className="actions">
                            <a href="#" className="action update">
                                <img src="/images/edit-cart-item.svg" alt="Update" />
                            </a>
                            <a href="#" className="action delete">
                                <img src="/images/delete-cart-item.svg" alt="Delete" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default MiniCartItem;