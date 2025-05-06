import {
  CalendarIcon,
  ClasificacionIcon,
  HomeIcon,
  LoginIcon,
  NavigationIcon,
  PerfilIcon,
} from '@/src/components/icons';
import { useThemeContext } from '@/src/contexts/ThemeContext';
import { AuthUser, subscribeToAuthState } from '@/src/services/authService';
import { Tabs } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function TabsLayout() {
  const { theme } = useThemeContext();
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
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.activeElement,
        tabBarInactiveTintColor: theme.inactiveElement,
      }}
    >
      <Tabs.Screen
        name='clasificacion'
        options={{
          title: 'Clasificacion',
          tabBarIcon: ({ color, size, focused }) => (
            <ClasificacionIcon color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='calendario'
        options={{
          title: 'Calendario',
          tabBarIcon: ({ color, size, focused }) => (
            <CalendarIcon color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='perfil-helper'
        options={{
          title: user ? 'Perfil' : 'Iniciar Sesión',
          tabBarIcon: ({ color, size, focused }) =>
            user ? (
              <PerfilIcon color={color} size={size} />
            ) : (
              <LoginIcon color={color} size={size} />
            ),
        }}
      />
      <Tabs.Screen
        name='navigation'
        options={{
          title: 'Más',
          tabBarIcon: ({ color, size, focused }) => (
            <NavigationIcon color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

// export default function TabsLayoutWrapper() {
//   return <TabsLayout />;
// }
