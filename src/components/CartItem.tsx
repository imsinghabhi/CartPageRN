import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { CartItemStyles } from '../styles/styles';
import { CartItemProps } from '../utils/CartItemProps';

const CartItem: React.FC<CartItemProps> = ({ image, name, subtext, price, onRemove, quantity, onIncrease, onDecrease }) => {
  return (
    <View style={CartItemStyles.container}>
      <Image source={image} style={CartItemStyles.image} />
      <View style={CartItemStyles.details}>
        <Text style={CartItemStyles.name}>{name}</Text>
        <Text style={CartItemStyles.subtext}>{subtext}</Text>
        <Text style={CartItemStyles.price}>${price.toFixed(2)}</Text>
      </View>
      <View style={CartItemStyles.quantityContainer}>
        <TouchableOpacity onPress={onDecrease} style={[CartItemStyles.quantityButton, CartItemStyles.decreaseButton]}>
          <Text style={CartItemStyles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={CartItemStyles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={onIncrease} style={[CartItemStyles.quantityButton, CartItemStyles.increaseButton]}>
          <Text style={[CartItemStyles.quantityText, CartItemStyles.increaseButtonText]}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onRemove} style={CartItemStyles.removeButton}>
        <Image source={require('../assets/cross.png')} style={CartItemStyles.removeIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
