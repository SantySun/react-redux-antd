import { USER_LOGIN } from '../constants/action-types';

export function userLogin(payload) {
  return { type: USER_LOGIN, payload }
};