import { createSelector } from 'reselect';

export const getCreateTagDialogState = (state) => state.createTagDialog;

export const getOpenCreateTagDialog = createSelector(
  [getCreateTagDialogState],
  (state) => state.open,
);

export const getDataCreateTagDialog = createSelector(
  [getCreateTagDialogState],
  (state) => state.data,
);
