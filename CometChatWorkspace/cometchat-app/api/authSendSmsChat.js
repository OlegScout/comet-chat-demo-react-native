import {API_BASE_URL} from '@env';
import {buildUrl, post} from './client';

const AUTH_SEND_SMS_CHAT_PATH = 'auth_send_sms_chat';

export const authSendSmsChat = (config) => post(buildUrl(API_BASE_URL, AUTH_SEND_SMS_CHAT_PATH), config);
