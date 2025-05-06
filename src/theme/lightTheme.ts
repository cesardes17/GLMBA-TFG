import { baseButtonStyles, baseInputStyles } from './baseStyles';
import { colors } from './colors';
import type { Theme } from './theme';

export const lightTheme: Theme = {
  backgroundColor: colors.gray200,
  surfaceColor: colors.gray100,
  cardBackground: colors.white,
  backgroundNavigation: colors.gray100,

  textPrimary: colors.gray900,
  textSecondary: colors.gray600,
  textDisabled: colors.gray400,
  textInverted: colors.white, // Add this line

  primary: colors.primary600,
  primaryLight: colors.primary300,
  primaryDark: colors.primary800,

  separator: colors.gray200,

  button: baseButtonStyles,
  input: baseInputStyles,

  border: colors.gray300,
  divider: colors.gray200,

  success: colors.success,
  warning: colors.warning,
  error: colors.error,
  info: colors.info,

  activeElement: colors.primary800,
  inactiveElement: colors.primary500,

  backdrop: 'rgba(0, 0, 0, 0.5)',
  shadow: colors.gray900,

  selectableCard: {
    default: {
      background: colors.white,
      border: colors.gray300,
      title: colors.gray900,
      description: colors.gray600,
      checkIcon: undefined,
    },
    selected: {
      background: colors.primary50,
      border: colors.primary600,
      title: colors.primary800,
      description: colors.primary700,
      checkIcon: colors.primary600,
    },
  },

  requestCard: {
    card: {
      background: colors.white,
      border: colors.gray300,
      leftBorder: colors.primary600,
    },
    text: {
      title: colors.gray900,
      label: colors.gray600,
      content: colors.gray900,
      info: colors.gray700,
    },
    status: {
      pending: {
        background: colors.warning + '20',
        text: colors.warning,
      },
      accepted: {
        background: colors.success + '20',
        text: colors.success,
      },
      rejected: {
        background: colors.error + '20',
        text: colors.error,
      },
    },
  },
};
