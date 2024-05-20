import { test, expect } from '@playwright/test';

const cityDetail = {
  id: 78320144,
  name: 'Sydney',
  native: 'Sydney',
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
};

test('CityDetail component', async ({ page }) => {
  await page.route('*/**/api/v1/cities/1', (route) => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(cityDetail),
    });
  });

  await page.goto(
    `http://localhost:5173/ottonova-frontend/cities/${cityDetail.id}`
  );
});

test('displays error component on API failure', async ({ page }) => {
  await page.goto(`http://localhost:5173/ottonova-frontend/cities/99`);

  await page.route('*/**/api/v1/cities/1', (route) => {
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
