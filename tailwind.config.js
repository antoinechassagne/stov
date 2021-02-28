module.exports = {
  variants: {
    extend: {
      backgroundColor: ['disabled', 'checked', 'active'],
      textColor: ['disabled'],
      borderColor: ['checked', 'active']
    }
  },
  theme: {
    colors: {
      blue: {
        100: '#0410F1',
        70: '#4F58F5',
        30: '#B4B7FB',
        10: '#E6E7FE',
      },
      yellow: {
        100: '#F8E51C',
        70: '#FAED60',
        30: '#FDF7BB',
        10: '#FEFCE8'
      },
      orange: {
        100: '#FB4D0E',
        70: '#FC8256',
        30: '#FECAB7',
        10: '#FFEDE7'
      },
      black: '#141414',
      white: '#FFFFFF',
      gray: {
        70: '#5B5B5B',
        30: '#B9B9B9',
        10: '#E7E7E7'
      }
    }
  },
};
