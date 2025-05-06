import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';

export type SelectableCardStyles = {
  default: {
    background: string;
    border: string;
    title: string;
    description: string;
    checkIcon: undefined;
  };
  selected: {
    background: string;
    border: string;
    title: string;
    description: string;
    checkIcon: string;
  };
};

export type RequestCardStyles = {
  card: {
    background: string;
    border: string;
    leftBorder: string;
  };
  text: {
    title: string;
    label: string;
    content: string;
    info: string;
  };
  status: {
    pending: {
      background: string;
      text: string;
    };
    accepted: {
      background: string;
      text: string;
    };
    rejected: {
      background: string;
      text: string;
    };
  };
};

export type Theme = {
  backgroundColor: string;
  surfaceColor: string;
  cardBackground: string;
  backgroundNavigation: string;

  textPrimary: string;
  textSecondary: string;
  textDisabled: string;
  textInverted: string; // Add this line

  primary: string;
  primaryLight: string;
  primaryDark: string;

  separator: string;

  button: any;
  input: any;

  border: string;
  divider: string;

  success: string;
  warning: string;
  error: string;
  info: string;

  activeElement: string;
  inactiveElement: string;

  backdrop: string;
  shadow: string;
  selectableCard: SelectableCardStyles;
  requestCard: RequestCardStyles;
};

export const defaultTheme = lightTheme;

export { darkTheme, lightTheme };
