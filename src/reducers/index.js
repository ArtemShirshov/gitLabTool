import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { mergeRequests, tags } from '../containers/Home/ducks';

export const reducers = {
  mergeRequests,
  tags,
};

export const createRootReducer = (history) =>
  combineReducers({
    ...reducers,
    router: connectRouter(history),
  });
