const checkStatusCode = (error, status) => error?.status === status;

const getJsonError = (error) => error?.json;

const makeErrorParser = (status) => (error) => checkStatusCode(error, status) ? getJsonError(error) : null;

export const getValidationErrors = makeErrorParser(400);

export const getGenericError = makeErrorParser(403);

export const getGenericErrorMessage = (error) => getGenericError(error)?.detail;

export const getNonFieldValidationErrorMessage = (error) => getValidationErrors(error)?.non_field_errors?.[0];

export const getResponseErrorMessage = (error) => error?.statusText || error?.message;

const errorMessageParsers = [getGenericErrorMessage, getNonFieldValidationErrorMessage, getResponseErrorMessage];

export const getErrorMessage = (error) => {
  for (let i = 0; i < errorMessageParsers.length; i++) {
    const message = errorMessageParsers[i](error);
    if (message) {
      return message;
    }
  }
};
