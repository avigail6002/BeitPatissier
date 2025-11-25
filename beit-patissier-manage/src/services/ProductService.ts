import axios from 'axios';
import type { Product } from '../models/Product';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const GetAllProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/api/Products/GetAllProducts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
