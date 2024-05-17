import { City } from '@/models/City';
import axiosClient from '@/services/http';
import { useEffect, useState } from 'react';
import { CityCard } from './CityCard';
import { useNavigate } from 'react-router-dom';
import Error from '@/components/Error';

export const Home = () => {
  const httpClient = axiosClient();
  const [cities, setCities] = useState<City[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await httpClient.get('cities');
      console.log('Cities from backend :', response);
      setCities(response.data.length > 0 ? response.data : []);
    })();
  }, []);

  return (
    <main className="bg-slate-200 z-40 mt-20 h-vh">
      {cities.length > 0 && (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-6 gap-4 max-w-7xl m-auto p-6 h-vh">
          {cities?.map((city) => {
            return (
              <CityCard
                city={city}
                onClick={() => navigate(`/cities/${city.id}`)}
              />
            );
          })}
        </div>
      )}
      {cities.length === 0 && <Error />}
    </main>
  );
};
