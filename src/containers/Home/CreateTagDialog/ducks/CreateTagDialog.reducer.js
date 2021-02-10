import { combineReducers } from 'redux';
import { createActions, handleActions } from 'redux-actions';

export const { openCreateTagDialog, closeCreateTagDialog } = createActions(
  {
    OPEN_CREATE_TAG_DIALOG: (p) => p,
    CLOSE_CREATE_TAG_DIALOG: () => {},
  },
  {
    prefix: 'CREATE_NEW_TAG_DIALOG',
  },
);

export const open = handleActions(
  {
    [openCreateTagDialog]: () => true,
    [closeCreateTagDialog]: () => false,
  },
  false,
);

export const data = handleActions(
  {
    [openCreateTagDialog]: (_, { payload }) => payload,
    [closeCreateTagDialog]: () => ({}),
  },
  {},
);

export const createTagDialog = combineReducers({ open, data });
