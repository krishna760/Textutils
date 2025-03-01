import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// In React, <> and </> are called Fragment Short Syntax[[<React.Fragment>]] and used to group multiple elements
//  without adding extra nodes to the DOM.


// let name1 = 'krishna';
// let name = '<br>krishna</br>';
// react sanitize external javascript code like this which prevent xss attack
// let name = '<script>alert("hello")</script>';

function App() {
  return (
    <>   
      <Router>
        <Navbar title="Krishna" home="Home" about="About"/>
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to analyze" />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </Router>
        
        {/* <Navbar /> */}
        {/* props might be an object or a string */}
        {/* Props are read-only attributes passed from a parent component to a child component */}
        {/* We can access props in child component using props object like props.title, props.home, and props.about. */}

    </>
    
  );
}

export default App;