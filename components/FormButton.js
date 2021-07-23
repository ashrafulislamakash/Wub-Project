import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimentions';
import LinearGradient from 'react-native-linear-gradient';

const FormButton = ({ buttonTitle, ...rest }) => {
  return (
    <LinearGradient style={styles.buttonContainer}
      colors={['#50CAFF', '#0478FF']}>
      <TouchableOpacity  {...rest}>

        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
});
