import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CartScreen from './src/screens/CartScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CartScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
