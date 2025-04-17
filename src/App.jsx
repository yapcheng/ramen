import { BrowserRouter, Routes, Route} from 'react-router'
import './App.css';
import Home from './pages/Home'
import Ramen from './pages/Raman'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/raman/:ramanId" element={<Ramen />} />
    </Routes>
  </BrowserRouter>  );
}

export default App;
