import { test, expect } from '@playwright/test';

const mockData = {
  cities: [
    {
      id: 78320144,
      name: 'Sydney',
      name_native: 'Sydney',
      country: 'Australia',
      continent: 'Australia',
      latitude: '-33.865143',
      longitude: '151.209900',
      population: '5312000',
      founded: '1788',
      landmarks: [
        'Sydney Opera House',
        'Sydney Harbour Bridge',
        'Queen Victoria Building',
      ],
      thumbnails: [
        'https://images.unsplash.com/photo-1546268060-2592ff93ee24?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1523428096881-5bd79d043006?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1598948485421-33a1655d3c18?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      id: 14680272,
      name: 'New York City',
      name_native: 'New York City',
      country: 'USA',
      continent: 'North America',
      latitude: '40.730610',
      longitude: '-73.935242',
      population: '8419000',
      founded: '1624',
      landmarks: [
        'Chrysler Building',
        'Brooklyn Bridge',
        'Madison Square Garden',
      ],
      thumbnails: [
        'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1522083165195-3424ed129620?q=80&w=2797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      id: 50443405,
      name: 'Madrid',
      name_native: 'Madrid',
      country: 'Spain',
      continent: 'Europe',
      latitude: '40.416775',
      longitude: '-3.703790',
      population: '3223000',
      founded: '1083',
      landmarks: ['Royal Palace', 'Plaza Mayor', 'Plaza de Cibeles'],
      thumbnails: [
        'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1558370781-d6196949e317?q=80&w=2958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1577788922620-a85ef7281842?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      id: 84200014,
      name: 'Moscow',
      name_native: 'Москва',
      country: 'Russia',
      continent: 'Europe',
      latitude: '55.751244',
      longitude: '37.618423',
      population: '11920000',
      founded: '1147',
      landmarks: ["Saint Basil's Cathedral", 'Kremlin', 'Bolshoi Theatre'],
      thumbnails: [
        'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1523509080324-9183f313dc50?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1586009513992-3ab1f2290380?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1605601227759-7d1fbcf734ac?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      id: 38246106,
      name: 'Tokyo',
      name_native: '東京',
      country: 'Japan',
      continent: 'Asia',
      latitude: '35.652832',
      longitude: '139.839478',
      population: '13960000',
      founded: '1603',
      landmarks: ['Meji Shrine', 'Asakusa', 'Tokyo Skytree'],
      thumbnails: [
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1533050487297-09b450131914?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      id: 65365621,
      name: 'Lagos',
      name_native: 'Lagos',
      country: 'Nigeria',
      continent: 'Africa',
      latitude: '6.465422',
      longitude: '3.406448',
      population: '14800000',
      founded: '1914',
      landmarks: [
        'Iga Idungaran',
        'Freedom Park',
        'The Cathedral Church of Christ',
      ],
      thumbnails: [
        'https://plus.unsplash.com/premium_photo-1672116453204-8e7de665a7ec?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1594538756542-8c88bda491c5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1573662766191-066ba9570a4b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      id: 35181001,
      name: 'Sao Paulo',
      name_native: 'São Paulo',
      country: 'Brazil',
      continent: 'South America',
      latitude: '-23.533773',
      longitude: '-46.625290',
      population: '12330000',
      founded: '1554',
      landmarks: [
        'Mosteiro De Sao Bento',
        'Italian Building',
        'Farol Santander',
      ],
      thumbnails: [
        'https://images.unsplash.com/photo-1520645521318-f03a712f0e67?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1543059080-f9b1272213d5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1561592390-42c07289e9cb?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1598900863555-3b098bec6394?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      id: 97235864,
      name: 'Munich',
      name_native: 'München',
      country: 'Germany',
      continent: 'Europe',
      latitude: '48.137154',
      longitude: '11.576124',
      population: '1472000',
      founded: '1158',
      landmarks: ['Bavaria statue', 'Marienplatz', 'ottonova office'],
      thumbnails: [
        'https://images.unsplash.com/photo-1577462281852-279bf4986f7b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1600442302947-ee9c87e0e249?q=80&w=2804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1599982890963-3aabd60064d2?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1577653993857-3718d1f1f997?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
  ],
};

test('home Page', async ({ page }) => {
  await page.goto('http://localhost:5173/ottonova-frontend/');

  console.log('JSON Response :', mockData);
  await page.route('*/**/api/v1/cities', (route) => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(mockData),
    });
  });
});

test('displays the list of cities', async ({ page }) => {
  await page.goto('http://localhost:5173/ottonova-frontend/');

  const cityCards = await page.locator('.city-card');
  await expect(cityCards).toHaveCount(mockData.cities.length);

  for (const city of mockData.cities) {
    const cityCard = await page.locator(`.city-card >> text=${city.name}`);
    await expect(cityCard).toBeVisible();
  }
});

test('navigates to city detail page on click', async ({ page }) => {
  await page.goto('http://localhost:5173/ottonova-frontend/');
  await page.click('.city-card >> nth=0');
  await expect(page).toHaveURL(new RegExp(`/cities/${mockData.cities[0].id}`));
});

test('displays error component on API failure', async ({ page }) => {
  await page.goto('http://localhost:5173/ottonova-frontend/');

  await page.route('*/**/api/v1/cities', (route) => {
    route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ message: 'Internal Server Error' }),
    });
  });

  await page.reload();
  const errorComponent = await page.locator('.error-page');
  await expect(errorComponent).toBeVisible();
});
