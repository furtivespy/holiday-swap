import * as ActionTypes from '../actions/actionTypes';
import MockDate from 'mockdate';
import configureStore from './configureStore';
import {getFormattedDateTime} from '../utils/dates';

describe('Store', () => {
  let dateModified;
  beforeAll(() => {
    // hardcoded date for consistency in tests and snapshots on all machines
    MockDate.set(new Date("1/31 23:14:01"));
    dateModified = getFormattedDateTime();
  });
  afterAll(() => MockDate.reset());

  it('should handle a flurry of actions', () => {
    const store = configureStore();

    const actions = [
      { type: ActionTypes.TOGGLE_TAG, dateModified, settings: store.getState(), fieldName: 'newMpg', value: 20 },
      { type: ActionTypes.TOGGLE_TAG, dateModified, settings: store.getState(), fieldName: 'tradeMpg', value: 10 },
      { type: ActionTypes.TOGGLE_TAG, dateModified, settings: store.getState(), fieldName: 'newPpg', value: 1.50 },
      { type: ActionTypes.TOGGLE_TAG, dateModified, settings: store.getState(), fieldName: 'tradePpg', value: 1.50 },
      { type: ActionTypes.TOGGLE_TAG, dateModified, settings: store.getState(), fieldName: 'milesDriven', value: 100 },
      { type: ActionTypes.TOGGLE_TAG, dateModified, settings: store.getState(), fieldName: 'milesDrivenTimeframe', value: 'month' },
      { type: ActionTypes.TOGGLE_TAG, dateModified, settings: store.getState(), fieldName: 'newMpg', value: 20 },
      { type: ActionTypes.TOGGLE_TAG, dateModified, settings: store.getState(), fieldName: 'tradeMpg', value: 10 },
      { type: ActionTypes.TOGGLE_TAG, dateModified, settings: store.getState(), fieldName: 'newPpg', value: 1.50 },
      { type: ActionTypes.SELECT_ALL_TAGS, dateModified, settings: store.getState() },
      { type: ActionTypes.TOGGLE_TAG, dateModified, settings: store.getState(), fieldName: 'tradePpg', value: 1.50 },
      { type: ActionTypes.TOGGLE_TAG, dateModified, settings: store.getState(), fieldName: 'milesDriven', value: 100 },
      { type: ActionTypes.TOGGLE_TAG, dateModified, settings: store.getState(), fieldName: 'milesDrivenTimeframe', value: 'week' },
      { type: ActionTypes.TOGGLE_TAG, dateModified, settings: store.getState(), fieldName: 'newMpg', value: 20 },
      { type: ActionTypes.TOGGLE_TAG, dateModified, settings: store.getState(), fieldName: 'tradeMpg', value: 10 },
      { type: ActionTypes.TOGGLE_TAG, dateModified, settings: store.getState(), fieldName: 'newPpg', value: 1.50 }
    ];
    actions.forEach(action => store.dispatch(action));


    const moreActions = [
      { type: ActionTypes.TOGGLE_TAG, dateModified, settings: store.getState(), fieldName: 'tradePpg', value: 0 },
      { type: ActionTypes.TOGGLE_TAG, dateModified, settings: store.getState(), fieldName: 'milesDriven', value: 100 },
      { type: ActionTypes.TOGGLE_TAG, dateModified, settings: store.getState(), fieldName: 'milesDrivenTimeframe', value: 'year' }
    ];

    moreActions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    //const expected = {
    //  newMpg: 20,
    //  tradeMpg: 10,
    //  newPpg: 1.50,
    //  tradePpg: 0,
    //  milesDriven: 100,
    //  milesDrivenTimeframe: 'year',
    //  displayResults: false,
    //  dateModified,
    //  necessaryDataIsProvidedToCalculateSavings: false,
    //  savings: lastGoodSavings
    //};
    //
    //expect(actual.fuelSavings).toEqual(expected);

    // with jest snapshots the above assertion can be replaced with this one line
    // jest will store the value in a file within ./__snapshots__
    // snapshots can/should be committed and reviewed
    // jest will also update snapshot or delete unused ones using the command `npm run test -- -u`
    expect(actual.fuelSavings).toMatchSnapshot();
  });
});
