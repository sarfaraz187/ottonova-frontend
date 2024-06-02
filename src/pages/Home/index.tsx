import { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import Error from '@/components/Error';
import { useQuery } from '@tanstack/react-query';
import { getCities } from '@/api/cities';
import { City } from '@/models/City';

const CityCard = lazy(() =>
  import('./CityCard').then((module) => ({ default: module.CityCard }))
);

const Home = () => {
  const navigate = useNavigate();

  const {
    status,
    error,
    data: cities,
  } = useQuery({
    queryKey: ['cities'],
    queryFn: getCities,
    retry: 0,
  });

  return (
    <main className="bg-slate-200 z-40 mt-20 h-vh">
      {status === 'success' && (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-6 gap-4 max-w-7xl m-auto p-6 h-vh">
          <Suspense>
            {cities.length > 0 &&
              cities?.map((city: City) => {
                return (
                  <CityCard
                    key={city.id}
                    city={city}
                    onClick={() => navigate(`/cities/${city.id}`)}
                  />
                );
              })}
          </Suspense>
        </div>
      )}
      {error && <Error />}
    </main>
  );
};

export default Home;
