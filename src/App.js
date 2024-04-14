
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { Main } from './components/Main';
import View from './components/View';
import Admin_main from './components/Admin_main';
import Admin from './components/Admin';
import Addemp from './components/Addemp';

function App() {
  return (
    <div>
      <Routes>
      <Route path={'/'} element={<Login/>}></Route>
      <Route path='/view' element={<Main child={<View/>}/>}>View Employee</Route>
      <Route path='/admin' element={<Admin_main child={<Admin/>}/>}> Employee</Route>
      <Route path='/add' element={<Admin_main child={<Addemp method="post" data={{Name:'',ID:'',Position:'',Location:'',Salary:'',Username:'',Password:''}} />}/>}>add Employee</Route>
      </Routes>
    </div>
  );
}

export default App;
