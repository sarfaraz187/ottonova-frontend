import { City } from '@/models/City';
// import axiosClient from '@/services/http';
import { useEffect, useState } from 'react';
import citiesJson from '@/data/cities.json';
import { CityCard } from './CityCard';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  // const httpClient = axiosClient();
  const [cities, setCities] = useState<City[]>();
  const navigate = useNavigate();

  useEffect(() => {
    // (async () => {
    //   const cities = await httpClient.get('cities');
    //   console.log('Cities from backend :', cities);
    // })();
    setCities(citiesJson?.cities);
  }, []);

  const handleCardClick = (city: City) => {
    console.log('Selected City :', city);
    navigate(`/city/${city.id}`);
  };

  return (
    <main className="bg-slate-200 z-40 mt-20 h-vh ">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-6 gap-4 max-w-7xl m-auto px-6">
        {cities?.map((city) => {
          return <CityCard city={city} onClick={() => handleCardClick(city)} />;
        })}
      </div>
    </main>
  );
};
