import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartTotalPrice, selectCartItems } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item';

import './checkout-page.scss';

const CheckoutPage = ({ total, cartItems }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)}
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    total: selectCartTotalPrice,
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CheckoutPage);
