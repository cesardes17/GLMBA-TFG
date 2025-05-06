import { Ionicons, MaterialIcons } from '@expo/vector-icons';

type IconProps = {
  color: string;
  size: number;
};

export const HomeIcon = ({ color, size }: IconProps) => {
  return <Ionicons name='home' size={size} color={color} />;
};

export const HomeOutlinedIcon = ({ color, size }: IconProps) => {
  return <Ionicons name='home-outline' size={size} color={color} />;
};

export const LoginIcon = ({ color, size }: IconProps) => {
  return <MaterialIcons name='login' size={size} color={color} />;
};

export const LogOutIcon = ({ color, size }: IconProps) => {
  return <MaterialIcons name='logout' size={size} color={color} />;
};

export const CalendarIcon = ({ color, size }: IconProps) => {
  return <MaterialIcons name='calendar-today' size={size} color={color} />;
};

export const ClasificacionIcon = ({ color, size }: IconProps) => {
  return <MaterialIcons name='leaderboard' size={size} color={color} />;
};

export const PerfilIcon = ({ color, size }: IconProps) => {
  return <MaterialIcons name='person' size={size} color={color} />;
};

export const NavigationIcon = ({ color, size }: IconProps) => {
  return <MaterialIcons name='menu' size={size} color={color} />;
};
