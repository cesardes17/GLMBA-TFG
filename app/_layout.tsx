import { AuthUser, subscribeToAuthState } from '@/src/services/authService';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<AuthUser | null>();

  useEffect(() => {
    const unsubscribe = subscribeToAuthState((user) => {
      console.log('user', user);
      setUser(user);
      if (initializing) setInitializing(false);
    });

    return unsubscribe;
  }, []);

  if (initializing) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
