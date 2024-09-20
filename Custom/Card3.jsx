import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../src/Utils/Theme/Theme';
import {moderateScale, screenWidth} from '../Components/Matrix';
import CustomText from './CustomText';
import {Styles} from '../src/Global/Styles';
import CustomButton from './Button/CustomButton';
import {Images} from '../src/Utils/Images/Images';

const Card3 = ({item, key}) => {
  return (
    <View key={key} style={[styles.container, Styles.row]}>
      <Image source={Images.Spot1} style={styles.spot1} />
      <Image source={Images.Spot2} style={styles.spot2} />
      <View style={styles.imgStyles}>
        <Image source={item.dp} />
      </View>
      <View style={[{flex: 1}]}>
        <CustomText text={item?.name} />
        <CustomText size={10} text={item?.reveiw} />

        <View style={Styles.row}>
          <CustomButton color="#fff" title="Know More" />
        </View>
      </View>
    </View>
  );
};

export default Card3;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    margin: moderateScale(5),
    height: screenWidth * 0.3,
    // justifyContent: 'space-between',
  },
  imgStyles: {
    width: screenWidth * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"red"
  },
  spot1: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: -10,
  },
  spot2: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: -10,
  },
});
