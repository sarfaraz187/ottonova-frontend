import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import citiesJson from '@/data/cities.json';
import { City } from '@/models/City';
import Swiper from '@/components/Swiper';
import { capitalizeStr } from '@/lib/helpers';

export const CityDetail = () => {
  const { id } = useParams();
  const [cityDetails, setCityDetails] = useState<City | null>(null);

  useEffect(() => {
    if (!id) return;
    let foundCity = citiesJson.cities.find((obj) => obj.id === Number(id));
    if (foundCity) setCityDetails(foundCity);
  }, []);

  return (
    <section className="bg-slate-200 mt-20 pb-8 h-full">
      <div className="city-thumbnails max-w-7xl m-auto">
        <Swiper
          thumbnails={cityDetails?.thumbnails ? cityDetails?.thumbnails : []}
        />
        <article className="city-details bg-white m-4 rounded-lg">
          <div className="p-5 pb-0 text-xl font-semibold">Country Details</div>
          <div className="p-5 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cityDetails &&
              Object.entries(cityDetails).map(([key, value]) => {
                return (
                  !['id', 'thumbnails'].includes(key) && (
                    <div className=" items-center">
                      <p className="text-lg font-semibold">
                        {capitalizeStr(key)}
                      </p>
                      {Array.isArray(value) ? value.join(', ') : value}
                    </div>
                  )
                );
              })}
          </div>
        </article>
      </div>
    </section>
  );
};
