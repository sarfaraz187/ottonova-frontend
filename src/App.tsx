import './App.css';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';

const Home = lazy(() => import('@/pages/Home'));
const CityDetail = lazy(() => import('@/pages/Home/CityDetail'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cities/:id" element={<CityDetail />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
