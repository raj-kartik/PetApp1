import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../src/Utils/Theme/Theme';
import {
  horizontalScale,
  moderateScale,
  screenWidth,
} from '../Components/Matrix';
import CustomText from './CustomText';

const Card2 = ({item, key}) => {
  // console.log('--- item in card 2 ----', item);

  return (
    <View style={styles.container}>
      <View style={[styles.spotView, styles.spotLeft]} />
      <Image source={item?.img} style={{marginVertical: moderateScale(5)}} />
      <CustomText text={item?.service} />
      <View style={[styles.spotView, styles.spotRight]} />
    </View>
  );
};

export default Card2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    margin: moderateScale(5),
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    width: screenWidth * 0.45,
    alignItems: 'center',
  },
  spotLeft: {
    height: horizontalScale(60),
    width: horizontalScale(60),
    backgroundColor: Colors.primary,
    // borderRadius:moderateScale(1000),
    position: 'absolute',
    top: 0,
    left: 0,
    borderBottomRightRadius: moderateScale(1000),
    borderTopLeftRadius: moderateScale(10),
    zIndex: -10,
  },
  spotRight: {
    height: horizontalScale(40),
    width: horizontalScale(40),
    backgroundColor: Colors.primary,
    borderTopLeftRadius: moderateScale(10),
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: moderateScale(1000),
    zIndex: -10,
  },
});
