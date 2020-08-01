import { create } from 'axios';
import { BASE_URL } from '../constants/apis';

const createClient = (baseURL) => create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Version: '1.0',
  },
});

export const client = createClient(BASE_URL);
