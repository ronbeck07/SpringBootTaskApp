
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListTaskComponent from './components/ListTaskComponent';
import AddTaskComponent from './components/AddTaskComponent';

function App() {
  return (
    <div >
      <Router>
       <HeaderComponent />
       <div className="container">
        <Routes>
          <Route path="/" element = {<ListTaskComponent/>}></Route>
          <Route path="/tasks" element = {<ListTaskComponent/>}></Route>
          <Route path ="/add-task" element= {<AddTaskComponent/>}></Route>
          <Route path = "/edit-task/:title" element= {<AddTaskComponent/>}></Route>
        </Routes>

      </div>
      <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
