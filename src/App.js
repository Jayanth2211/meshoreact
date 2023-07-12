
import './App.css';

import Home from './component/home';
import Navbar from './component/navbar';
import SignUp from './component/signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Women from './component/women';
import Men from './component/men';
import Favourites from './component/favourite';
import Kids from './component/kids';
import Electronic from './component/electronics';










function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign' element={<SignUp/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/electron' element={<Electronic/>}/>
        <Route path='/fav' element={<Favourites/>}/>
        <Route path='/kid' element={<Kids/>}/>
       
      </Routes>
      </BrowserRouter>
      <h1 id="ggg">&#9825;</h1>
      
      <img src="https://img.icons8.com/?size=1x&id=16076&format=png" alt="" id="ggg" />
    </div>
  );
}

export default App;
