import messaging from '@react-native-firebase/messaging';
import React, { useEffect } from 'react';
import { Alert, View, Text } from 'react-native';

const App = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('Notification', remoteMessage.notification?.title || 'New message');
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Background message:', remoteMessage);
    });

    return unsubscribe;
  }, []);

  return (
    <View>
      <Text>React Native Push Notification App</Text>
    </View>
  );
};

export default App;
