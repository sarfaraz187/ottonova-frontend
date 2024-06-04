import { useParams } from 'react-router-dom';
import Swiper from '@/components/Swiper';
import { capitalizeStr } from '@/lib/helpers';
import { getCityById } from '@/api/cities';
import { useQuery } from '@tanstack/react-query';
import Error from '@/components/Error';
import { City } from '@/models/City';

const CityDetail = () => {
  const { id } = useParams();

  const {
    status,
    error,
    data: cityDetails,
  } = useQuery<City>({
    queryKey: ['city', id],
    queryFn: () => getCityById(id as string),
    retry: 0,
  });

  return (
    <section className="bg-slate-200 mt-20 pb-8 h-full">
      {status === 'success' && (
        <div className="city-thumbnails max-w-7xl m-auto">
          <Swiper
            thumbnails={cityDetails?.thumbnails ? cityDetails?.thumbnails : []}
          />
          <article className="bg-white m-4 rounded-lg">
            <div className="p-5 pb-0 text-xl font-semibold">
              Country Details
            </div>
            <div className="city-details p-5 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {cityDetails &&
                Object.entries(cityDetails).map(([key, value]) => {
                  return (
                    !['id', 'thumbnails'].includes(key) && (
                      <div className="items-center" key={key}>
                        <p className="text-lg font-semibold">
                          {capitalizeStr(key)}
                        </p>
                        {Array.isArray(value)
                          ? value.map((landmark) => <li>{landmark}</li>)
                          : value}
                      </div>
                    )
                  );
                })}
            </div>
          </article>
        </div>
      )}
      {error && <Error />}
    </section>
  );
};

export default CityDetail;
