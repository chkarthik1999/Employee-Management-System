
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddComponent from './components/AddComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
      <div>
      <Routes>
        <Route exact path="/" Component={ListEmployeeComponent}></Route>
        <Route path="/employees" Component={ListEmployeeComponent}></Route>
        <Route path="/add-employee" Component={AddComponent}></Route>
        <Route path="/edit-employee/:id" Component={AddComponent}></Route>
      </Routes>
      </div>
      <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
