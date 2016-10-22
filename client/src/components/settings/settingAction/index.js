export const SETTING_RESET_PASSWORD = 'SETTING_RESET_PASSWORD';
export const SETTING_DELETE_ACCOUNT = 'SETTING_DELETE_ACCOUNT';
export const SETTING_ADD_COMPANY_ADMIN = 'SETTING_ADD_COMPANY_ADMIN';
export const SETTING_DELETE_BUSINESS_ACCOUNT = 'SETTING_DELETE_BUSINESS_ACCOUNT';
export const SETTING_DATA_PULL = 'SETTING_DATA_PULL';

export function resetPassword(props) {
    // TODO: Add API
  console.log('TODO: Make API Call');
  return {
    type    : SETTING_RESET_PASSWORD,
    payload : props
  };
}

export function deleteAccount(props) {
    // TODO: Add API
  console.log('TODO: Make API Call');
  return {
    type    : SETTING_DELETE_ACCOUNT,
    payload : props
  };
}

export function addCompanyAdmin(props) {
    // TODO: Add API
  console.log('TODO: Make API Call');
  return {
    type    : SETTING_ADD_COMPANY_ADMIN,
    payload : props
  };
}

export function deleteBusinessAccount(props) {
    // TODO: Add API
  console.log('TODO: Make API Call');
  return {
    type    : SETTING_DELETE_BUSINESS_ACCOUNT,
    payload : props
  };
}

export function settingDataPull() {
    // TODO: Add API
  console.log('TODO: make API call');

  return {
    type    : SETTING_DATA_PULL,
    payload : {
      businesses: [
        'Bus A',
        'Bus B',
        'Bus C'
      ]
    }
  };
}
