import { SETTING_RESET_PASSWORD, SETTING_DELETE_ACCOUNT, SETTING_ADD_COMPANY_ADMIN, SETTING_DELETE_BUSINESS_ACCOUNT, SETTING_DATA_PULL } from '../settingAction';

const INITIAL_STATE = {};
export default function settingsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SETTING_RESET_PASSWORD: {
      console.log(SETTING_RESET_PASSWORD);
      return Object.assign({}, action.payload);
    }
    case SETTING_DELETE_ACCOUNT: {
      console.log(SETTING_DELETE_ACCOUNT);
      return Object.assign({}, action.payload);
    }
    case SETTING_ADD_COMPANY_ADMIN: {
      console.log(SETTING_ADD_COMPANY_ADMIN);
      return Object.assign({}, action.payload);
    }
    case SETTING_DELETE_BUSINESS_ACCOUNT: {
      console.log(SETTING_DELETE_BUSINESS_ACCOUNT);
      return Object.assign({}, action.payload);
    }
    case SETTING_DATA_PULL: {
      console.log(SETTING_DATA_PULL);
      return Object.assign({}, action.payload);
    }
    default:
      return state;

  }
}
