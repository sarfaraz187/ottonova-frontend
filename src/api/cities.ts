import { City } from '@/models/City';
import axiosClient from '@/services/http';

const httpClient = axiosClient();

export async function getCities() {
  const response = await httpClient.get('cities');
  return response.data;
}

export async function getCityById(id: string) {
  const response = await httpClient.get(`cities/${id}`);
  return response.data;
}
