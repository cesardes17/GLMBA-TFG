import { Redirect } from 'expo-router';
import { Platform } from 'react-native';

export default function Index() {
  const isWeb = Platform.OS === 'web';
  const ruta = isWeb ? '/(drawer)' : ('/(tabs)' as const);

  return <Redirect href={ruta} />;
}
