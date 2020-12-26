import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import './cart-icon.scss';

const CartIcon = ({ toggleCartDropdown, itemCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCartDropdown}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce((count, item) => count += item.quantity, 0)
});

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
