// app 2

import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Container from '../../Components/Container/Container';
import CustomIcon from '../../Custom/CustomIcon';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../Utils/Theme/Theme';
import {moderateScale, screenHeight} from '../../Components/Matrix';
import {Images} from '../Utils/Images/Images';
import {Styles} from '../Global/Styles';
import CustomText from '../../Custom/CustomText';
import Card1 from '../../Custom/Card1';
import Card2 from '../../Custom/Card2';
import Card3 from '../../Custom/Card3';
import Card4 from '../../Custom/Card4';
import Explore from './Stack/Explore';
import Popular from './Stack/Popular';
import Recommand from './Stack/Recommand';

const Home = () => {
  const servicesData = [
    {id: 1, service: 'Pet Groooming', img: Images.Cd21},
    {id: 2, service: 'Pet Groooming', img: Images.Cd22},
    {id: 3, service: 'Pet Groooming', img: Images.Cd23},
    {id: 4, service: 'Pet Groooming', img: Images.Cd24},
    {id: 5, service: 'Pet Groooming', img: Images.Cd25},
  ];

  const reviewData = [
    {
      id: 1,
      name: 'Pooja Jain',
      comment: 'Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.',
      rating: 4,
      img: Images.Dp1,
    },
    {
      id: 2,
      name: 'Pooja Jain',
      comment: 'Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.',
      rating: 4,
      img: Images.Dp2,
    },
  ];

  const serviceProvider = [
    {
      id: 1,
      name: 'Rohit Singhania',
      reveiw: 'Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.',
      dp: Images.Dp,
    },
    {
      id: 2,
      name: 'Rohit Singhania',
      reveiw: 'Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.',
      dp: Images.Dp,
    },
    {
      id: 3,
      name: 'Rohit Singhania',
      reveiw: 'Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.',
      dp: Images.Dp,
    },
  ];
  return (
    <Container>
      <ScrollView
        style={
          {
            // marginHorizontal: moderateScale(10),
          }
        }>
        <View style={{position: 'relative', height: screenHeight * 0.37}}>
          <LinearGradient
            colors={[Colors.gradient.primary, Colors.gradient.secondary]}
            style={styles.IntroView}>
            <View
              style={[
                Styles.row,
                {justifyContent: 'space-between', margin: moderateScale(10)},
              ]}>
              <TouchableOpacity>
                <CustomIcon
                  type="FontAwesome5"
                  color="#fff"
                  name="grip-lines"
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image source={Images.Logo} />
              </TouchableOpacity>
            </View>
          </LinearGradient>
          <Card1 containerStyle={styles.cardView} />
        </View>

        <View style={{backgroundColor: Colors.tertiary}}>
          <View
            style={{
              backgroundColor: '#fff',
              borderTopLeftRadius: moderateScale(20),
              paddingHorizontal: moderateScale(10),
            }}>
            <Explore />
            <Popular/>
            <Recommand/>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  IntroView: {
    height: screenHeight * 0.25,
    padding: moderateScale(10),
    borderBottomLeftRadius: moderateScale(40),
    borderBottomRightRadius: moderateScale(40),
    zIndex: -10,
  },
  infoView: {
    // backgroundColor: 'red',
    marginHorizontal: moderateScale(10),
    flex: 1,
  },
  searchView: {
    backgroundColor: Colors.primary,
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(15),
    padding: moderateScale(3),
  },
  cardView: {
    position: 'absolute',
    top: screenHeight * 0.15,
    zIndex: 9,
  },
});
