import React from 'react'
import { connect } from 'react-redux';

import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions';

import { CheckoutItemContainer, ImageContainer, NameContainer, QuantityContainer, RemoveButtonContainer } from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearCart, addItem, removeItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <NameContainer>{name}</NameContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <NameContainer>{price}</NameContainer>
            <RemoveButtonContainer onClick={() => clearCart(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    clearCart: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);