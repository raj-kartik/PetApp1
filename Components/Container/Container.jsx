import {View, StatusBar} from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Colors } from '../../src/Utils/Theme/Theme';
const Container = ({children, customStyle}) => {
    const {colors} = useTheme;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        ...customStyle,
      }}>
      <StatusBar style="auto" backgroundColor={colors?.primary} />
      {children}
    </View>
  );
};

export default Container;