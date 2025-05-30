import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name='index' // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Inicio',
            title: 'Inicio',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
