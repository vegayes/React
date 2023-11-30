import logo from './logo.svg';
import './App.css';
import Exam1 from './component/Exam1';
import Exam2 from './component/Exam2';
import Exam3 from './component/Exam3';
import Exam4 from './component/Exam4';
import Exam5 from './component/Exam5';
import Exam6_1 from './component/Exam6_1';
import Exam6_2 from './component/Exam6_2';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World!</h1> */}

      {/*<Exam1 />*/}

      {/*<Exam2/>*/}
      
      {/* <Exam3/> */}

      {/* <Exam4/> */}

      {/* <Exam5 /> */}

      {/* <Exam6_1 /> */}

      <Exam6_2 />

      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
    </div>
  );
}

export default App;
