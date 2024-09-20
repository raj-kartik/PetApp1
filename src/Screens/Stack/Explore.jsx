import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomText from '../../../Custom/CustomText';
import {moderateScale} from '../../../Components/Matrix';
import {Images} from '../../Utils/Images/Images';
import CustomIcon from '../../../Custom/CustomIcon';
import {Styles} from '../../Global/Styles';
import LinearGradient from 'react-native-linear-gradient';

const Explore = () => {
  const data = [
    {id: 1, task: 'Construction', color: '#CBE0FF', img: Images.Exp1},
    {id: 2, task: 'Entertainment', color: '#FFE9BE', img: Images.Exp2},
    {id: 3, task: 'Pet Care', color: '#FFB0DD', img: Images.Exp3},
    {id: 4, task: 'Home Care', color: '#00FFE6', img: Images.Exp4},
    {id: 5, task: 'Events', color: '#FFC8AB', img: Images.Exp5},
    {id: 6, task: 'Health Care', color: '#CFCFFF', img: Images.Exp6},
  ];

  return (
    <View style={styles.container}>
      <View style={[Styles.row, {justifyContent: 'space-between'}]}>
        <CustomText
          text="Explore Categories"
          size={14}
          customStyle={{fontWeight: 700}}
        />
        <TouchableOpacity>
          <CustomIcon type="Entypo" name="dots-three-horizontal" />
        </TouchableOpacity>
      </View>

      {/* collections */}
      <FlatList
        data={data}
        numColumns={2}
        key={2}
        keyExtractor={item => item?.id}
        renderItem={({item}) => (
          <LinearGradient
            colors={['#fff', item.color]}
            style={[
              styles.exploreView,
              Styles.row,
              {
                borderWidth: 1,
                borderColor: item.color,
                margin: moderateScale(5),
              },
            ]}>
            <Image
              source={item.img}
              style={{marginHorizontal: moderateScale(5)}}
            />
            <CustomText text={item.task} />
          </LinearGradient>
        )}
      />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    // marginHorizontal:moderateScale(10),
    marginVertical: moderateScale(30),
  },
  exploreView: {
    padding: moderateScale(10),
    borderRadius: moderateScale(20),
  },
});
