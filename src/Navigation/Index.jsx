import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Theme} from '../../theme/Color';
import * as Animatable from 'react-native-animatable';
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Autoplay from '../Screens/Autoplay';
import Profile from '../Screens/Profile';
import {
  horizontalScale,
  moderateScale,
  screenWidth,
} from '../../Components/Matrix';
import {Colors} from '../Utils/Theme/Theme';
import Container from '../../Components/Container/Container';
import CustomIcon from '../../Custom/CustomIcon';
import CustomText from '../../Custom/CustomText';
import {Styles} from '../Global/Styles';
const HomeBlank = ({navigation}) => {
  const TabArr = [
    {
      id: 1,
      route: 'Home',
      label: 'Home',
      type: 'Octicons',
      icon: 'home',
      component: Home,
    },

    {
      id: 2,
      route: 'Search',
      label: 'Search',
      type: 'Feather',
      icon: 'search',
      component: Search,
    },

    {
      id: 3,
      route: 'Autoplay',
      label: 'Autoplay',
      type: 'Feather',
      icon: 'play-circle',
      component: Autoplay,
    },

    {
      id: 4,
      route: 'Profile',
      label: 'Profile',
      type: 'Feather',
      icon: 'user',
      component: Profile,
    },
  ];

  const TabButton = props => {
    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const textViewRef = useRef(null);

    useEffect(() => {
      if (focused) {
        // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
        viewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
        textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
      } else {
        viewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
        textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
      }
    }, [focused]);

    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={[styles.container, {flex: focused ? 1 : 0.65}]}>
        <View>
          <Animatable.View
            ref={viewRef}
            style={[
              StyleSheet.absoluteFillObject,
              {
                backgroundColor: Colors.secondary,
                borderRadius: moderateScale(20),
              },
            ]}
          />
          <View
            style={[
              styles.btn,
              {backgroundColor: focused ? null : item.alphaClr},
            ]}>
            <CustomIcon
              type={item.type}
              name={item.icon}
              color={focused ? Colors.nav.primary : '#060047'}
            />
            <Animatable.View ref={textViewRef}>
              {focused && (
                <Text
                  style={{
                    color: '#252762D9',
                    paddingHorizontal: 8,
                  }}>
                  {item.label}
                </Text>
              )}
            </Animatable.View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const Tab = createBottomTabNavigator();
  return (
    <Container>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: screenWidth * 0.16,
            backgroundColor: '#fff',
          },
        }}>
        {TabArr.map(item => {
          return (
            <Tab.Screen
              key={item.id}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarIcon: ({color, focused}) => (
                  <CustomIcon type={item.type} name={item.icon} size={30} />
                ),
                tabBarButton: props => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </Container>
  );
};

export default HomeBlank;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  },
});
