import React from 'react';
import { connect } from 'react-redux';

import { exampleAction } from '../actions/appActions';
import { getStoreDate } from '../selectors/appSelector';

const AppContainer = props => {
  const onClick = () => {
    props.exampleAction();
  }

  return (
    <div>
      {props.storeProp}
      <button type="button" onClick={onClick}>
        Click Me
      </button>
    </div>
  );
};

// EXAMPLE: mapStateToProps
const mapStateToProps = state => {
  // EXAMPLE: immutableJS get method
  // normal js object => object[key] and or object.key
  // immutablejs map => I.Map().get('wantedKey', 'defaultValue')
  return {
    // EXAMPLE: Getting a store value in three different ways
    // storeProp: state.storeDate, // not good
    // storeProp: state.app.get('storeDate'), // not good
    storeProp: getStoreDate(state), // gooood
  };
}

const mapActionsToProps = {
  exampleAction,
};

export default connect(
  // first parameter is a function that is
  // used for passing props to the component
  // from the redux store
  mapStateToProps,
  // second parameter is an object which contains
  // action creator functins that will be connected
  // to redux's dispatch system
  mapActionsToProps,
)(AppContainer);
