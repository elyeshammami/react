
import './App.css';
import Navbar from './Components/Navbar';
import Navbarch from './Components/Navbar';
import Banier from './Components/Banniere/Banier';
import Promos from './Components/Toppromos/Promos';
import Categories from './Components/Toppromos/Categories';
import Homme from './Components/Home/Homme';
import { Route, Routes } from 'react-router-dom';
import Femme from './Components/Home/Femme';
import Acceuil from './Components/Acceuil';
import Promoshf from './Components/Home/Promos';
import { useState } from 'react';
import Footer from './Components/Footer';


function App() {
  const [searchdata, setsearchdata] = useState("")
  const searchd=(x)=>{
    setsearchdata(x)
  }
  return (
    <div className="App">
         
       <Navbarch fnct={searchd}/>
          <Banier />
          

<Routes>
<Route path='/' element={<Acceuil data={searchdata}/>} />
  <Route path='/homme' element={<Homme />} />
  <Route path='/femme' element={<Femme />} />
  <Route path='/promos' element={<Promoshf  />} />
  <Route path='/promoshomme'element={<promoshomme />} />
  <Route path='/promofemme'element={<promosfemme />} />
 </Routes><Footer />
    </div>
    
  );
}

export default App;
