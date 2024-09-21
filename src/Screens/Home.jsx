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
      rating:4,
      img:Images.Dp1
    },
    {
      id: 2,
      name: 'Pooja Jain',
      comment: 'Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.',
      rating:4,
      img:Images.Dp2
    }
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
        style={{
          // marginHorizontal: moderateScale(10),
        }}>
        <LinearGradient
          colors={[Colors.gradient.primary, Colors.gradient.secondary]}
          style={styles.IntroView}>
          <View
            style={[
              Styles.row,
              {justifyContent: 'space-between', margin: moderateScale(10)},
            ]}>
            <TouchableOpacity>
              <CustomIcon type="FontAwesome5" name="grip-lines" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={Images.Logo} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: Colors.primary,
                borderRadius: moderateScale(5),
                padding: moderateScale(8),
              }}>
              <CustomIcon size={24} type="Feather" name="bell" />
            </TouchableOpacity>
          </View>

          <View style={{justifyContent: 'center', flex: 1}}>
            <CustomText
              text="Hello,"
              size={24}
              customStyle={{
                fontWeight: 700,
              }}
            />
            <CustomText
              text="Fancy for a wash today!"
              size={16}
              customStyle={{}}
            />
          </View>

          <View
            style={[
              Styles.row,
              {
                position: 'absolute',
                bottom: -moderateScale(10),
                right: moderateScale(10),
              },
            ]}>
            <Image source={Images.Pet1} />

            <Image source={Images.Pet2} />

            <Image source={Images.Pet3} />
          </View>
        </LinearGradient>
        <View style={styles.infoView}>
          {/* search */}
          <View style={[styles.searchView, Styles.row]}>
            <TouchableOpacity style={[Styles.row, {flexDirection: 'row'}]}>
              <CustomIcon
                name="search1"
                color={Colors.text.secondary}
                type="AntDesign"
              />
              <TextInput
                placeholder="What are you looking for?"
                placeholderTextColor={Colors.text.secondary}
              />
            </TouchableOpacity>
          </View>

          {/* card 1 */}
          <View>
            <Card1 text="Book Now" />
          </View>

          {/* popular services */}
          <View style={{marginTop: moderateScale(5)}}>
            <View style={[Styles.row, {justifyContent: 'space-between'}]}>
              <CustomText text="Popular Services" />
              <TouchableOpacity>
                <CustomIcon type="Entypo" name="dots-three-horizontal" />
              </TouchableOpacity>
            </View>
            {/* {servicesData.map(item => (
              <Card2 key={item?.id} item={item} />
            ))} */}

            <FlatList
              data={servicesData}
              keyExtractor={item => item.id}
              renderItem={({item}) => <Card2 key={item?.id} item={item} />}
              numColumns={2}
              key={2}
            />
          </View>

          {/* service providers */}
          <View style={{marginTop: moderateScale(5)}}>
            <View style={[Styles.row, {justifyContent: 'space-between'}]}>
              <CustomText text="Service Provider" />
              <TouchableOpacity>
                <CustomIcon type="Entypo" name="dots-three-horizontal" />
              </TouchableOpacity>
            </View>
            {serviceProvider.map(item => (
              <Card3 key={item?.id} item={item} />
            ))}
          </View>
        </View>

        <View style={{marginHorizontal:moderateScale(10)}} >
          <View style={[Styles.row, {justifyContent: 'space-between'}]}>
            <CustomText text="Ratings" />
            <TouchableOpacity>
              <CustomIcon type="Entypo" name="dots-three-horizontal" />
            </TouchableOpacity>
          </View>

          <View style={[Styles.row, {justifyContent: 'space-between'}]}>
            <CustomText
              textColor={Colors.text.secondary}
              size={12}
              text="13 Reviews"
            />
            <TouchableOpacity style={Styles.row}>
              <CustomText
                text="WRITE A REVIEW "
                size={12}
                textColor={Colors.text.secondary}
              />
              <CustomIcon
                type="Feather"
                name="edit"
                color={Colors.text.secondary}
                size={14}
              />
            </TouchableOpacity>
          </View>
          {/* {servicesData.map(item => (
              <Card2 key={item?.id} item={item} />
            ))} */}

          <FlatList
            data={reviewData}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Card4 key={item?.id} item={item} />}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  IntroView: {
    height: screenHeight * 0.35,
    padding: moderateScale(10),
  },
  infoView: {
    // backgroundColor: 'red',
    marginHorizontal:moderateScale(10),
    flex: 1,
  },
  searchView: {
    backgroundColor: Colors.primary,
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(15),
    padding: moderateScale(3),
  },
});
