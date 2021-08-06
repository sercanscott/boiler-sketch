import { createSelector } from 'reselect';

const getApp = state => state.app;

export const getVinsJob = createSelector(getApp, app => {
  return app.getIn(['nestedObject', 'merhabaspektrum', 'vin'], 'defaultValue');
});

export const getStoreDate = createSelector(getApp, app => {
  return app.get('storeDate', 'Today');
});
