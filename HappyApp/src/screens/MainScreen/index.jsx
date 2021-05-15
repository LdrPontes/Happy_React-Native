import React from 'react';
import { View, StatusBar } from 'react-native';
import MapView from 'react-native-maps';

import { styles } from './styles';

const MainScreen = () => {
  return (
    <View>
      <StatusBar hidden={true}/>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.map} />
    </View>
  );
}

export default MainScreen;