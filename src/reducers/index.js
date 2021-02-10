import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { mergeRequests, tags, tagLoading } from '../containers/Home/ducks';
import { createTagDialog } from '../containers/Home/CreateTagDialog/ducks/CreateTagDialog.reducer';

export const reducers = {
  mergeRequests,
  tags,
  tagLoading,
  createTagDialog,
};

export const createRootReducer = (history) =>
  combineReducers({
    ...reducers,
    router: connectRouter(history),
  });
