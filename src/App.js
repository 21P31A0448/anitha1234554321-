import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartList from './Components/cart';
import Spares from './Components/spares';
import Contact from './Components/contact';
import Service from './Components/service';
import LoginPaze from './Components/log_sign';
import Navbar from './Components/Navbar';
import Formzz from './Components/sparesform';
import Formz from './formz';
import StudentList from './gerforms';
import EditFormz from './editform';

const username = new URLSearchParams(window.location.search).get('username');

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPaze/>}></Route>
        <Route path='/spares' element={<Spares username={username}/>}></Route>
        <Route path='/cart' element={<CartList username={username}/>}></Route>
        <Route path='/contact' element={<Contact username={username}/>}></Route>
        <Route path='/service' element={<Service username={username}/>}></Route>
        <Route path='/home' element={<Navbar username={username}/>}></Route>
        <Route path='/sform' element={<Formzz/>}></Route>
        <Route path='/form' element={<Formz username={username}/>}></Route>
        <Route path='/editform/:id' element={<EditFormz/>}></Route>
        <Route path='/getdata' element={<StudentList/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
