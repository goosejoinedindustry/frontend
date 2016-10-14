export const LOGIN_FORM = 'LOGIN_FORM';


export function loginFormAction(props) {
  console.log(props, 'in login Action');
  return {
    type: LOGIN_FORM,
    payload: props
  }
}
