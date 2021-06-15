import { createAction, handleActions } from 'redux-actions';

const CHANGE_FIELD = 'write/CHANGE_FIELD';
const INITIALIZE_FORM = 'write/INITIALIZE_FORM';

export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
  form,
  key,
  value,
}));

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

const initialState = {
  postWrite: {
    category_id: 1,
    title: '',
    body: '',
  },
};

const write = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => ({
      ...state,
      write: (state[form][key] = value),
    }),
    [INITIALIZE_FORM]: (state, {payload: form}) => ({
      ...state,
      write: initialState[form],
      writeError: null,
    }),
  },
  initialState
)

export default write;