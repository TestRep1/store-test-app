import React from 'react';
import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item';
import './cart-dropdown.scss';

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(item => <CartItem key={CartItem.id} item={item} />)}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);
