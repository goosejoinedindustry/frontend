export const LOGIN_FORM = 'LOGIN_FORM';


export function loginFormAction(props) {
  console.log('login action');
  return {
    type: LOGIN_FORM,
    payload: props
  };
}
