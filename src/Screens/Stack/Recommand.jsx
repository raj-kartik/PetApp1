import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import CustomText from '../../../Custom/CustomText';
import {Styles} from '../../Global/Styles';
import CustomIcon from '../../../Custom/CustomIcon';
import {
  moderateScale,
  screenHeight,
  screenWidth,
} from '../../../Components/Matrix';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Images} from '../../Utils/Images/Images';

const Recommand = () => {
  const data = [
    {
      id: 1,
      msg: 'Now share the Construction Sectors with your anyone and can save it as bookmark',
      updated: '06:30 AM',
    },
    {
      id: 2,
      msg: 'Now share the Construction Sectors with your anyone and can save it as bookmark',
      updated: '06:30 AM',
    },
  ];

  return (
    <View>
      <View style={[Styles.row, {justifyContent: 'space-between'}]}>
        <CustomText
          text="Recommended for you"
          size={14}
          customStyle={{fontWeight: 700}}
        />
        <TouchableOpacity>
          <CustomIcon type="Entypo" name="dots-three-horizontal" />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            //   console.log("--- item ----", item);
            return (
              <>
                <View
                  style={[Styles.row, styles.rView, {position: 'relative'}]}>
                  <Image
                    source={Images.card11}
                    style={{position: 'absolute', top: 0, right: 0}}
                  />
                  <Image
                    source={Images.card12}
                    style={{position: 'absolute', top: 0, right: 0}}
                  />

                  <Image
                    source={Images.card2}
                    style={{position: 'absolute', bottom: 0, left: 0}}
                  />

                  <Image
                    source={Images.card21}
                    style={{position: 'absolute', bottom: 0, left: 0}}
                  />

                  <View style={[Styles.row]}>
                    <View
                      style={{
                        flex: 0.3,
                        backgroundColor: '#FFC5C5',
                        borderRadius: moderateScale(10),
                        width: moderateScale(100),
                        height: moderateScale(100),
                        alignSelf: 'center',
                        marginLeft: moderateScale(10),
                      }}
                    />
                    <View style={{flex: 0.7, margin: moderateScale(10), paddingRight:moderateScale(20)}}>
                      <CustomText
                        text={item.msg}
                        textColor="#060047"
                        customStyle={{fontWeight: 700}}
                      />
                      <View
                        style={[Styles.row, {justifyContent: 'space-between'}]}>
                        <CustomText text={`Updated | ${item.updated}`} />
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#995BFF',
                            paddingHorizontal: moderateScale(10),
                            paddingVertical: moderateScale(5),
                            borderRadius: moderateScale(20),
                          }}>
                          <CustomText
                            text="Explore"
                            customStyle={{fontWeight: 800}}
                            textColor="#fff"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Recommand;

const styles = StyleSheet.create({
  rView: {
    height: screenHeight * 0.18,
    marginTop: moderateScale(10),
    backgroundColor: '#F6F4FF',
    borderRadius: moderateScale(10),
  },
});
