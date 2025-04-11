import React from "react"
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Counter from "./components/counter/counter"
import ToDoList from "./components/to-do/To"
import Navbar from "./components/react-router/Navbar"
import Home from './components/react-router/Home';
import About from './components/react-router/About';
import FetchApi from './components/api-fetch/fetchApi'
import Toggle from './components/toggle/Toggle'
import Theme from "./components/toggle/Theme";
import User from "./components/redux";
import TodoApp from "./components/TODO";
function App() {

  return (
    <>
    <Counter/> 
    {/* // todo ke neeche declare nai karna hai varna content display nai hoga */}
    <ToDoList/>

    <Router>
    <Navbar /> 
    {/* // here if er import it will show everywhere  */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </Router>
    {/* routing karne ke liye teen cheeze import karni padegi router jismai sab wrap hoga , routes jismai sare routes wrap honge , route jismai har ek page ka linking hoga  */}
    <FetchApi/>
    <Toggle/>
    <Theme/>
    <User/>
    <TodoApp/>
    </>
    
  )
}

export default App
