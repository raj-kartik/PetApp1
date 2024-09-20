import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from '../CustomText';
import {Colors} from '../../src/Utils/Theme/Theme';
import { moderateScale } from '../../Components/Matrix';

const CustomButton = ({
  onPress,
  color,
  title,
  size = 14,
  textStyles,
  customStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, customStyle]}
      activeOpacity={0.7}>
      <CustomText
        text={title}
        textColor={color}
        size={size}
        customStyle={textStyles}
      />
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.btn.primary,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    padding:moderateScale(3),
    marginVertical:moderateScale(2),
    borderRadius:moderateScale(5)
  },
});
