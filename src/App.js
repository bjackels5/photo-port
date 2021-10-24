import React from 'react'; // this line was not supplied, but the module (20.1.5) shows it in App.js
// import logo from './logo.svg'; 20.1.5 does not show this line in App.js
// import './App.css';20.1.5 does not show this line in App.js
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div>
        <Nav></Nav>
        <main>
            <About></About>
        </main>
    </div>
  );
}

export default App;
