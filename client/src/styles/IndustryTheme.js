export const PRIMARY_COLOR = '#f7931d';
export const PRIMARY_COLOR_OPAQUE = '#f9ab53';
export const TERTIARY_COLOR = '#fff';
export const SECONDARY_COLOR = 'black';

export const GREY_COLOR = '#f2f2f2';

export default {
  raisedButton: {
    primaryColor       : PRIMARY_COLOR,
    primaryTextColor   : TERTIARY_COLOR,
    secondaryColor     : TERTIARY_COLOR,
    secondaryTextColor : PRIMARY_COLOR
  },
  flatButton: {
    primaryColor       : PRIMARY_COLOR,
    primaryTextColor   : TERTIARY_COLOR,
    secondaryColor     : TERTIARY_COLOR,
    secondaryTextColor : PRIMARY_COLOR
  },
  textField: {
    focusColor : PRIMARY_COLOR,
    textColor  : SECONDARY_COLOR
  },
  paper: {
    backgroundColor: 'transparent'
  },
  tableRow: {
    selectedColor : PRIMARY_COLOR_OPAQUE,
    stripeColor   : GREY_COLOR
  },
  menuItem: { // Please note that this is kind of useless due to Material-UI changes.
    hoverColor: PRIMARY_COLOR_OPAQUE
  }
};
