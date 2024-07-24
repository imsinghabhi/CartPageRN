import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { CartHeaderStyles } from '../styles/styles';

const CartHeader: React.FC = () => {
    return (
        <View style={CartHeaderStyles.header}>
            <TouchableOpacity style={CartHeaderStyles.backButton}>
                <Image source={require('../assets/back.png')} style={CartHeaderStyles.backIcon} />
            </TouchableOpacity>
            <Text style={CartHeaderStyles.headerText}>Cart</Text>
        </View>
    );
};


export default CartHeader;
