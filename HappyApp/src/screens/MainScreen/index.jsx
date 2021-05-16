import React from 'react';
import { View, StatusBar } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import marker from '_assets/images/marker.png'


import { CustomCallout, Footer } from '_components'

import { styles } from './styles';

const MainScreen = () => {
  return (
    <View>
      <StatusBar hidden={true} />
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -25.408389,
          longitude: -49.1842791,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}>
        <Marker icon={marker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: -25.408389,
            longitude: -49.1842791,
          }} >
          <CustomCallout tooltip={true} label="Leandro's house" onPress={() => {}} />
        </Marker>
      </MapView>
      <Footer></Footer>
    </View>
  );
}

export default MainScreen;