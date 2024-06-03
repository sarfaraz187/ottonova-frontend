import axiosClient from '@/services/http';

const httpClient = axiosClient();

export async function getCities() {
  const response = await httpClient.get('cities');
  return response.data.cities;
}

export async function getCityById(id: string) {
  const response = await httpClient.get(`cities/${id}`);
  return response.data.city;
}
