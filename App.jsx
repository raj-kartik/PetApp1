import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from './Components/Container/Container';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Index from './src/Navigation/Index';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Container>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown:false
          }}>
          <Stack.Screen name="Blank" component={Index} />
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
};

export default App;

const styles = StyleSheet.create({});
