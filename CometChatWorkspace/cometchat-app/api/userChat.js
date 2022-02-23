import {API_BASE_URL} from '@env';
import {buildUrl, post} from './client';

const USER_CHAT_PATH = 'user_chat';

export const createUserChat = (config) => post(buildUrl(API_BASE_URL, USER_CHAT_PATH), config);

export const getUserChat = (uid, config) => post(buildUrl(API_BASE_URL, USER_CHAT_PATH), config);

export const updateUserChat = (uid, config) => post(buildUrl(API_BASE_URL, USER_CHAT_PATH), config);

export const partialUpdateUserChat = (uid, config) => post(buildUrl(API_BASE_URL, USER_CHAT_PATH), config);
