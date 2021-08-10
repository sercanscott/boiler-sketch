import { useDispatch, useSelector } from 'react-redux';
import { exampleAction } from '../actions/appActions';
import { getVinsJob } from '../selectors/appSelector';

const SimpleContainer = () => {
  // EXAMPLE: useSelector
  const sercan = useSelector(state => state.app.getIn(['nestedObject', 'jotform', 1]));
  console.log(sercan);
  const vin = useSelector(getVinsJob);
  console.log(vin);

  // EXAMPLE: useDispatch
  const dispatcher = useDispatch();

  const onClick = () => {
    dispatcher(exampleAction());
  }

  return (
    <div>
      Selam
      <button
        type="button"
        onClick={onClick}
      >
        Click me for use dispatch
      </button>
    </div>
  )
};

export default SimpleContainer;
