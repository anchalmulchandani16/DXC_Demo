import {scale} from './scale';
import {Theme} from './constants';

export const textVariants: Theme = {
  typography: {
    h1: {
      fontSize: scale(60),
    },
    h2: {
      fontSize: scale(48),
    },
    h3: {
      fontSize: scale(34),
    },
    h4: {
      fontSize: scale(24),
    },
    h5: {
      fontSize: scale(20),
    },
    h6: {
      fontSize: scale(18),
    },
    body1: {
      fontSize: scale(16),
    },
    body2: {
      fontSize: scale(14),
    },
    body3: {
      fontSize: scale(12),
    },
    body4: {
      fontSize: scale(10),
    },
  },
};
