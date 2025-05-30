// Define all the colors used in the application
export const colors = {
  primary50: '#EBFEF5',
  primary100: '#CEFDE5',
  primary200: '#A2F8D0',
  primary300: '#66EFB8',
  primary400: '#29DE9B',
  primary500: '#05C484',
  primary600: '#00A06C',
  primary700: '#008059',
  primary800: '#007050',
  primary900: '#01533D',
  primary950: '#002F23',

  // Neutrals/Grays
  gray100: '#F5F5F5',
  gray200: '#E8E8E8',
  gray300: '#D9D9D9',
  gray400: '#BFBFBF',
  gray500: '#8C8C8C',
  gray600: '#595959',
  gray700: '#434343',
  gray800: '#262626',
  gray900: '#1F1F1F',

  // Semantic colors
  success: '#52C41A',
  warning: '#FAAD14',
  error: '#F5222D',
  info: '#1890FF',

  //errors
  errorStyle: {
    text: '#D32F2F',
    border: '#DC2626',
    background: '#FFEBEB',
  },

  // Base colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
};

export type ColorName = keyof typeof colors;
