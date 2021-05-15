import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SplashScreen, MainScreen } from '_screens';

const RootStack = createStackNavigator();

function AppNavigator(props) {
  return (
    <NavigationContainer {...props}>
      <RootStack.Navigator headerMode="none">
        {/* Place your screens here or nest Navigators */}
        <RootStack.Screen name="Splash" component={SplashScreen} />
        <RootStack.Screen
          name="Main"
          component={MainScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
