import React from 'react';
import { View, Text,} from 'react-native';
import { SummaryStyles } from '../styles/styles';
import { SummaryProps } from '../utils/SummaryProps';

const Summary: React.FC<SummaryProps> = ({ subtotal, taxes, delivery, total }) => {
  return (
    <View style={SummaryStyles.container}>
      <View style={[SummaryStyles.row, SummaryStyles.divider]}>
        <Text style={SummaryStyles.label}>Subtotal:</Text>
        <View style={SummaryStyles.valueContainer}>
          <Text style={SummaryStyles.value}>${subtotal.toFixed(2)}</Text>
          <Text style={SummaryStyles.currency}> USD</Text>
        </View>
      </View>
      <View style={[SummaryStyles.row, SummaryStyles.divider]}>
        <Text style={SummaryStyles.label}>Taxes & Fees:</Text>
        <View style={SummaryStyles.valueContainer}>
          <Text style={SummaryStyles.value}>${taxes.toFixed(2)}</Text>
          <Text style={SummaryStyles.currency}> USD</Text>
        </View>
      </View>
      <View style={[SummaryStyles.row, SummaryStyles.divider]}>
        <Text style={SummaryStyles.label}>Delivery:</Text>
        <View style={SummaryStyles.valueContainer}>
          <Text style={SummaryStyles.value}>${delivery.toFixed(2)}</Text>
          <Text style={SummaryStyles.currency}> USD</Text>
        </View>
      </View>
      <View style={SummaryStyles.row}>
        <Text style={SummaryStyles.label}>Total:</Text>
        <View style={SummaryStyles.valueContainer}>
          <Text style={SummaryStyles.value}>${total.toFixed(2)}</Text>
          <Text style={SummaryStyles.currency}> USD</Text>
        </View>
      </View>
    </View>
  );
};


export default Summary;
