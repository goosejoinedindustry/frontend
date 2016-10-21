export const SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE';

export function sideBarToggle(props) {
  return {
    type    : SIDEBAR_TOGGLE,
    payload : {
      toggle: props.toggle
    }
  };
}
