import { Routes, Route } from 'react-router-dom'

import usePaletteColor from '../misc/functions/PaletteHook';

import Home from '../body/home/Home';
import NavBar from '../body/nav/NavBar';
import Footer from '../body/footer/Footer';

import './App.css';

function App() {
  const { colorPalette, setIndexPalette } = usePaletteColor();

  return (
    <div>
      <NavBar colorPalette={colorPalette} setIndexPalette={setIndexPalette} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
