import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CartItem from '../components/CartItem';
import CartHeader from '../components/CartHeader'
import CouponCode from '../components/CouponCode';
import Summary from '../components/Summary';
import CheckoutButton from '../components/CheckoutButton';

const CartScreen: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, image: require('../assets/food.png'), name: 'Red n Hot Pizza', subtext: 'Spicy chicken beef', price: 29.99, quantity: 1 },
    { id: 2, image: require('../assets/food1.png'), name: 'Green Salad', subtext: 'With baked salmon', price: 19.99, quantity: 1 },
  ]);

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleIncrease = (id: number) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const handleDecrease = (id: number) => {
    setCartItems(cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxes = subtotal * 0.1;
  const delivery = 5.99;
  const total = subtotal + taxes + delivery;

  return (
    <View style={styles.container}>
      <CartHeader />
      <ScrollView style={styles.scrollView}>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            image={item.image}
            name={item.name}
            subtext={item.subtext}
            price={item.price}
            quantity={item.quantity}
            onRemove={() => handleRemove(item.id)}
            onIncrease={() => handleIncrease(item.id)}
            onDecrease={() => handleDecrease(item.id)}
          />
        ))}
        <CouponCode />
        <Summary subtotal={subtotal} taxes={taxes} delivery={delivery} total={total} />
      </ScrollView>
      <CheckoutButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    padding: 10,
  },
});

export default CartScreen;
