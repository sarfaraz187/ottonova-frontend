import { Navbar } from '@/components/Navbar';
import { City } from '@/models/City';
// import axiosClient from '@/services/http';
import { useEffect, useState } from 'react';
import citiesJson from '@/data/cities.json';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const Home = () => {
  // const httpClient = axiosClient();
  const [cities, setCities] = useState<City[]>();

  useEffect(() => {
    // (async () => {
    //   const cities = await httpClient.get('cities');
    //   console.log('Cities from backend :', cities);
    // })();

    setCities(citiesJson?.cities);
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-slate-200 z-40 h-full">
        <div className="">
          TEST
          {/* <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card> */}
        </div>
      </main>
    </>
  );
};
