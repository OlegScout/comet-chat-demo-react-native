export const selectSignUpRootSlice = (state) => state.signUp;

export const selectSignUpSlice = (state) => selectSignUpRootSlice(state).signUp;

export const selectSmsConfirmSlice = (state) => selectSignUpRootSlice(state).smsConfirm;

export const selectSignUpStatus = (state) => selectSignUpSlice(state).status;

export const selectSignUpError = (state) => selectSignUpSlice(state).error;

export const selectSignUpPhone = (state) => selectSignUpSlice(state).phone;

export const selectSignUpName = (state) => selectSignUpSlice(state).name;

export const selectSignUpOtp = (state) => selectSignUpSlice(state).otp;

export const selectSmsConfirmStatus = (state) => selectSmsConfirmSlice(state).status;

export const selectSmsConfirmError = (state) => selectSmsConfirmSlice(state).error;
