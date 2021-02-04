import { createAction, handleActions } from 'redux-actions';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const SET_TOKEN = 'auth/SET_TOKEN';

export const setToken = createAction(SET_TOKEN, (accessToken) => ({
  accessToken,
}));

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

const initialState = {
  register: {
    email: '',
    name: '',
    password: '',
    password_confirmation: '',
  },
  login: {
    email: '',
    password: '',
  },
  accessToken: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => ({
      ...state,
      auth: (state[form][key] = value),
    }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      auth: initialState[form],
      authError: null,
    }),
    [SET_TOKEN]: (state, { payload: auth }) => ({
      ...state,
      accessToken: auth.accessToken,
    }),
  },
  initialState,
);

export default auth;
