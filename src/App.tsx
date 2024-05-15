import './App.css';
import { Home } from '@/pages/Home';
import { Route, Routes } from 'react-router-dom';
import { CityDetail } from './pages/Home/CityDetail';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/city/:id" element={<CityDetail />}></Route>
      </Routes>
    </>
  );
};

export default App;
