export const addCartItem = (cartItems, item) => {
    const existItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

    if (existItemIndex >= 0) {
        return [...cartItems.slice(0, existItemIndex),
        { ...cartItems[existItemIndex], quantity: cartItems[existItemIndex].quantity + 1 },
        ...cartItems.slice(existItemIndex + 1)];
    }

    return [...cartItems, { ...item, quantity: 1 }];
}