import React from 'react';
import { View, TextInput, TouchableOpacity, Text,} from 'react-native';
import { CouponCodeStyles } from '../styles/styles';

const CouponCode: React.FC = () => {
  return (
    <View style={CouponCodeStyles.container}>
      <View style={CouponCodeStyles.inputContainer}>
        <TextInput style={CouponCodeStyles.input} placeholder="Promo Code" />
        <TouchableOpacity style={CouponCodeStyles.applyButton} onPress={() => {}}>
          <Text style={CouponCodeStyles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default CouponCode;
