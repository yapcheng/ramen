import { BrowserRouter, Routes, Route} from 'react-router'
import './App.css';
import Home from './pages/Home'
import Ramen from './pages/Raman'
import { HelmetProvider } from 'react-helmet-async';
import Myfavorite from './pages/Myfavorite';
import Ranking from './pages/Ranking';
import Login from './pages/Login';
import Register from './pages/Register';
import Userpage from './pages/Userpage';

function App() {
  return (
   <HelmetProvider context={{}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/raman/:ramanId" element={<Ramen />} />
        <Route path="/Myfavorite" element={<Myfavorite />} />
        <Route path="/Ranking" element={<Ranking />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Userpage" element={<Userpage />} />
      </Routes>
    </BrowserRouter> 
  </HelmetProvider>
  );
}

export default App;
