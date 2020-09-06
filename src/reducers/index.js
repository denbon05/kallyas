// @ts-check

import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index.js';

const page = handleActions({
  [actions.changePage](state, { payload: { pageKey } }) {

  }
}, { view: 'home' });

export default combineReducers({
  page,
});
