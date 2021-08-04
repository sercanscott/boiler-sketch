import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';

// // state
// class Example {
//   constructor() {

//   }

//   get prop() {

//   }

//   method() {

//   }
// }

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



const FunctionalState = props => {
  // hooks
  // useState
  const [buttonClicked, setButtonClicked] = useState(false);

  function handleClick() {
    setButtonClicked(!buttonClicked);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.selam}
        </p>
        <button type="button" onClick={handleClick}>
          Click me
        </button>
        <div>
          {buttonClicked ? 'Clicked' : 'Not Clicked'}
        </div>
      </header>
    </div>
  );
};

const ComponentRenderer = props => {
  
};

export default ComponentRenderer;

// functional

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

