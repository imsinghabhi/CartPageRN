import React from 'react';
import { TouchableOpacity, Text,} from 'react-native';
import { CheckoutButtonStyles } from '../styles/styles';
const CheckoutButton: React.FC = () => {
    return (
        <TouchableOpacity style={CheckoutButtonStyles.button} onPress={() => { }}>
            <Text style={CheckoutButtonStyles.buttonText}>CHECKOUT</Text>
        </TouchableOpacity>
    );
};

 

export default CheckoutButton;
