import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// EXAMPLE: Spread operators and deconstructing
// const object = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const { c, ...restOfObject } = object;

// a => 1;

// restOfObject = {
//   b: 2,
//   c: 3
// }

// const arr = ['a', 'b', 'c', 'd'];
// const [,...restOfArray] = arr;

// EXAMPLE: JS Class syntax
// // state
// class Example {
//   constructor() {

//   }

//   get prop() {

//   }

//   method() {

//   }
// }

// EXAMPLE: React Class Components with lifecycle methods
// class ExampleComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       buttonClicked: false,
//     };

//     // this.handleClick = this.handleClick.bind(this);
//   }

//   // life cycle method
//   componentDidMount() {
//     document.addEventListener('click', this.amazingEventListener);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('click', this.amazingEventListener);
//   }

//   componentDidUpdate() {

//   }

//   shouldComponentUpdate() {
//     return true;
//   }

//   // state = {
//   //   buttonClicked: false,
//   // }

//   handleClick = (event) => {
//     this.setState({
//       buttonClicked: true,
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             {this.props.selam}
//           </p>
//           <button type="button" onClick={this.handleClick}>
//             Click me
//           </button>
//           <div>
//             {this.state.buttonClicked ? 'Clicked' : 'Not Clicked'}
//           </div>
//         </header>
//       </div>
//     );
//   }
// }


// EXAMPLE: Custom hooks
const useEventListener = ({
  eventType,
  callback,
  element = document,
}) => {
  useEffect(() => {
    element.addEventListener(eventType, callback);

    return () => {
      // clean-up function
      element.removeEventListener(eventType, callback);
    }
  }, [callback, eventType, element]);
}

// EXAMPLE: Function React Component with Hooks
const FunctionalState = props => {
  // hooks
  // useEffect
  const listener = () => console.log('listening');

  useEventListener({
    eventType: 'click',
    callback: listener,
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.selam}
        </p>
      </header>
    </div>
  );
};

const OtherCompenent = () => {
  return <div>Selam</div>;
}

const ComponentRenderer = props => {
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    setClicked(!clicked);
  }

  return (
    <div>
      <button type="button" onClick={onClick}>
        Click me
      </button>
      {clicked ? <FunctionalState /> : <OtherCompenent />}
    </div>
  )
};

export default ComponentRenderer;

// EXAMPLE: Pure function react component
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

