import { StyleSheet } from "react-native";


export const CartHeaderStyles = StyleSheet.create({
    header: {
        top:20,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    backButton: {
        top:5,
        position: 'absolute',
        left: 5,
        padding: 5,
    },
    backIcon: {
        width: 60,  
        height: 60, 
    },
    headerText: {
        fontFamily: 'Sofia Pro',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 28,
        textAlign: 'center',
        color: '#000000',
    },
});



 export const CartItemStyles = StyleSheet.create({
  container: {
    top: 20,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  details: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  name: {
    top:-15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  subtext: {
    top:5,
    fontSize: 14,
    color: '#777777',
  },
  price: {
    top:10,
    fontSize: 16,
    color: '#FE724C',
    fontWeight:'bold'
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  quantityButton: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#FE724C',
    borderRadius: 17,
  },
  decreaseButton: {
    borderRadius: 17,
  },
  increaseButton: {
    backgroundColor: '#FE724C',
    borderRadius: 17,
  },
  quantityText: {
    fontSize: 16,
    color: '#000000',
    marginHorizontal: 10,
  },
  increaseButtonText: {
    color: '#FFFFFF',
  },
  removeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  removeIcon: {
    width: 20,
    height: 20,
  },
});

export const CheckoutButtonStyles = StyleSheet.create({
    button: {
        width: 248,
        height: 57,
        backgroundColor: '#FE724C',
        borderRadius: 28.5,
        justifyContent: 'center',
        alignItems: 'center',
        bottom:30,
        alignSelf: 'center', // Center the button horizontally
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});


export const CouponCodeStyles = StyleSheet.create({
    container: {
      top: 40,
      padding: 10,
      marginVertical: 10,
      alignItems: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 400,
      height: 60,
      borderColor: '#EEEEEE',
      borderWidth: 1,
      borderRadius: 28.5,
      overflow: 'hidden',
    },
    input: {
      flex: 1,
      height: '100%',
      paddingHorizontal: 10,
    },
    applyButton: {
      width: '25%',
      height: '70%',
      backgroundColor: '#FE724C',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 28.5,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
    },
  });


export const SummaryStyles = StyleSheet.create({
    container: {
      top: 20,
      padding: 10,
      width: '100%',
      paddingBottom: 20,
      marginVertical: 10,
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
      width: '100%',
      paddingVertical: 10,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    value: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    valueContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    currency: {
      fontSize: 16,
      color: 'grey',
    },
    divider: {
      borderBottomColor: '#F1F2F3',
      borderBottomWidth: 1,
    },
  });