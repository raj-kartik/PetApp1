import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {Colors} from '../src/Utils/Theme/Theme';
import {moderateScale, screenWidth} from '../Components/Matrix';
import LinearGradient from 'react-native-linear-gradient';
import {Styles} from '../src/Global/Styles';
import {Images} from '../src/Utils/Images/Images';

const Card1 = ({text, subText}) => {
  return (
    <LinearGradient
      colors={[Colors.gradient.primary, Colors.gradient.secondary]}
      style={[styles.container, Styles.row]}>
      <View style={styles.bookview}>
        <CustomText text="Book Now!" textColor={Colors.text.secondary} />
        <CustomText text="-20%" />
      </View>

      <View style={[styles.center, {flex: 1}]}>
        <CustomText text="All-New Groomers in Town!" />
      </View>

      <View
        style={{
          position: 'relative',
          height: '100%',
          flex: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={Images.Design2}
          style={{position: 'absolute', right: 0, top: 0, bottom: 0, zIndex: 0}}
        />

        <Image source={Images.Owner} />
      </View>
    </LinearGradient>
  );
};

export default Card1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: moderateScale(10),
    height: screenWidth * 0.35,
  },
  bookview: {
    flex: 1,
    backgroundColor: Colors.primary,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: moderateScale(1000),
    borderBottomRightRadius: moderateScale(1000),
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
