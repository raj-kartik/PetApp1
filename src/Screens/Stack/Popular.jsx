import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Styles} from '../../Global/Styles';
import CustomText from '../../../Custom/CustomText';
import CustomIcon from '../../../Custom/CustomIcon';
import {moderateScale, screenWidth} from '../../../Components/Matrix';
import { Images } from '../../Utils/Images/Images';

const Popular = () => {
  const data = [
    {id: 1, task: 'Home Services', color: '#EDFFCE', img:Images.Pop2},
    {id: 2, task: 'Healthcare', color: '#CEFFF3', img:Images.Pop1},
  ];
  return (
    <View>
      <View style={[Styles.row, {justifyContent: 'space-between'}]}>
        <CustomText
          text="Popular Sectors"
          size={14}
          customStyle={{fontWeight: 700}}
        />
        <TouchableOpacity>
          <CustomIcon type="Entypo" name="dots-three-horizontal" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          marginVertical: moderateScale(10),
        }}>
        {data.map(item => (
          <View
            key={item.id}
            style={{
              backgroundColor: item.color,
              width: screenWidth * 0.45,
              borderRadius: moderateScale(10),
              padding:moderateScale(10)
            }}>
            <CustomText text={item.task} customStyle={{fontWeight:800}} size={18}  />
            <Image
                source={item.img}
                style={{alignSelf:"flex-end"}}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({});
