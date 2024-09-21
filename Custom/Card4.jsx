import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Styles} from '../src/Global/Styles';
import CustomText from './CustomText';
import {Colors} from '../src/Utils/Theme/Theme';
import {moderateScale, screenWidth} from '../Components/Matrix';
import CustomIcon from './CustomIcon';
import {Images} from '../src/Utils/Images/Images';

const Card4 = ({item, key}) => {
  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        // <CustomIcon
        //   type="FontAwesome"
        //   key={i}
        //   name="star"
        //   size={moderateScale(10)}
        //   color={i <= item?.rating ? "#000" : "#ccc"}
        // />,

        i <= item.rating ? (
          <Image
            style={{
              height: moderateScale(10),
              width: moderateScale(20),
              margin: moderateScale(1),
            }}
            source={Images.ColorRate}
          />
        ) : (
          <Image source={Images.GrayRate} />
        ),
      );
    }
    return stars;
  };

  return (
    <View key={key} style={[Styles.row, styles.container]}>
      <View style={{padding: moderateScale(10), flex: 0.7}}>
        <CustomText customStyle={{fontWeight:800}} size={18} text={item?.name} />
        <View style={Styles.row}>{renderStars()}</View>
        <CustomText size={10} text={item?.comment} />
      </View>
      <View style={{flex: 0.3}}>
        <Image
          source={item?.img}
          style={{
            borderTopRightRadius: moderateScale(8),
            borderBottomRightRadius: moderateScale(8),
            width: '100%',
            flex: 1,
          }}
        />
      </View>
    </View>
  );
};

export default Card4;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.tertiary,
    marginVertical: moderateScale(10),
    borderRadius: moderateScale(8),
    backgroundColor: '#fff',
    height: screenWidth * 0.3,
  },
});
