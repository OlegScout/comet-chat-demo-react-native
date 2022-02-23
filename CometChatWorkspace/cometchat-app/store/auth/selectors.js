export const selectAuthSlice = (state) => state.auth;

export const selectIsLoggedIn = (state) => selectAuthSlice(state).isLoggedIn;

export const selectStatus = (state) => selectAuthSlice(state).status;

export const selectError = (state) => selectAuthSlice(state).error;
