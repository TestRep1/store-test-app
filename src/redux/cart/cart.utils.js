export const addCartItem = (cartItems, item) => {
    const existItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

    if (existItemIndex >= 0) {
        return [...cartItems.slice(0, existItemIndex),
        { ...cartItems[existItemIndex], quantity: cartItems[existItemIndex].quantity + 1 },
        ...cartItems.slice(existItemIndex + 1)];
    }

    return [...cartItems, { ...item, quantity: 1 }];
}

export const removeCartItem = (cartItems, item) => {
    const existItem = cartItems.find(_item => _item.id === item.id);

    if (!existItem) return;

    if (existItem.quantity === 1) {
        return cartItems.filter(_item => _item.id !== item.id);
    }

    return cartItems.map(_item => _item.id === item.id ? { ..._item, quantity: _item.quantity - 1 } : _item);
}