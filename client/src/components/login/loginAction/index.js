export const LOGIN_FORM = 'LOGIN_FORM';


export function loginFormAction(props) {
  return {
    type: LOGIN_FORM,
    payload: props
  };
}
