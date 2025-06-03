import { BrowserRouter, Routes, Route} from 'react-router'

import './App.css';
import Home from './pages/Home'
import Ramen from './pages/Raman'
import { HelmetProvider } from 'react-helmet-async';
import Myfavorite from './pages/Myfavorite';
import Ranking from './pages/Ranking';

function App() {
  return (
   <HelmetProvider context={{}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/raman/:ramanId" element={<Ramen />} />
        <Route path="/Myfavorite" element={<Myfavorite />} />
        <Route path="/Ranking" element={<Ranking />} />
      </Routes>
    </BrowserRouter> 
  </HelmetProvider>
  );
}

export default App;
