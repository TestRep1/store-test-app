import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.scss';

const CheckoutItem = ({ cartItem, clearItemFromCart, removeItem, addItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <div className="name">{name}</div>
            <div className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <div className="value">{quantity}</div>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </div>
            <div className="price">{price}</div>
            <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);
