export const SIGNUP_FORM = 'SIGNUP_FORM';


export function signupFormAction(props) {
  return {
    type: SIGNUP_FORM,
    payload: props
  }
}
