import {useEffect, useState} from 'react';
import {Navigation} from 'react-native-navigation';
import useDeviceOrientation from '@rnhooks/device-orientation';

const useBarHeight = () => {
  const [barHeight, setTopBarHeight] = useState(0);
  const deviceOrientation = useDeviceOrientation();

  useEffect(() => {
    (async () => {
      const data = await Navigation.constants();
      setTopBarHeight(data.topBarHeight + data.statusBarHeight);
    })();
  }, [deviceOrientation]);
  return barHeight;
};

export default useBarHeight;
