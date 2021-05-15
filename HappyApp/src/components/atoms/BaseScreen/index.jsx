import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';

import { styles } from './styles';

const BaseScreen = ({ children, style }) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={styles.statusbar.backgroundColor} barStyle="dark-content"/>
      <View style={[styles.box, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default BaseScreen;