import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {Colors} from '../src/Utils/Theme/Theme';
import {moderateScale, screenWidth} from '../Components/Matrix';
import LinearGradient from 'react-native-linear-gradient';
import {Styles} from '../src/Global/Styles';
import {Images} from '../src/Utils/Images/Images';
import CustomIcon from './CustomIcon';

const Card1 = ({text, subText, containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={{position: 'absolute', top: 0, right: 0}}>
        <Image source={Images.Card1D} />
      </View>
      <View style={{padding: moderateScale(20)}}>
        <View style={{width: '70%'}}>
          <CustomText
            size={12}
            text="Welcome,"
            textColor={Colors.text.primary}
          />
          <CustomText
            size={24}
            customStyle={{fontWeight: 500}}
            text="Find Your Dream Sector!"
          />
        </View>

        <View style={[styles.searchView, Styles.row]}>
          <CustomIcon
            type="AntDesign"
            name="search1"
            color={Colors.icon.tertiary}
          />
          <TextInput
            style={{padding: 0, margin: 0}}
            placeholder="What are you looking for?"
            placeholderTextColor="#959595"
          />
        </View>
      </View>
    </View>
  );
};

export default Card1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tertiary,
    borderTopLeftRadius: moderateScale(15),
    borderTopRightRadius: moderateScale(15),
    borderBottomRightRadius: moderateScale(15),
    // height: screenWidth * 0.35,
    // padding: moderateScale(10),
    width: screenWidth * 0.8,
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
  searchView: {
    backgroundColor: '#fff',
    padding: moderateScale(10),
    borderRadius: moderateScale(15),
    marginVertical:moderateScale(12)
  },
});
