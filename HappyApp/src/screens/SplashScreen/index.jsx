import React, { useEffect } from 'react';

import { Loader } from '_components';
import { wait } from '_utils/functions';

function SplashScreen({ navigation }) {
  useEffect(() => {
    const loaded = async () => {
      await wait(2);

      navigation.navigate('Main');
    };

    loaded();
  }, []);

  return <Loader />;
}

export default SplashScreen;