import { CartItem } from '@app/redux/slices/cartSlice';
import { url } from '../consts';

interface SentItem {
  id: number;
  price: number;
  count: number;
}

export const services = {
  getTopSales: async () => {
    const response = await fetch(`${url}/api/top-sales`);
    const data = await response.json();
    return data;
  },

  getCategories: async () => {
    const response = await fetch(`${url}/api/categories`);
    const data = await response.json();
    return data;
  },

  getAllProducts: async (
    offset?: string | null,
    categoryId?: string | null,
    search?: string | null,
  ) => {
    const queryParams = [
      offset && `offset=${offset}`,
      categoryId && `categoryId=${categoryId}`,
      search && `q=${search}`,
    ].filter(Boolean);

    const params = queryParams.length > 0 ? `/?${queryParams.join('&')}` : '';
    const response = await fetch(`${url}/api/items${params}`);
    const data = await response.json();
    return data;
  },

  getProduct: async (id: number) => {
    const response = await fetch(`${url}/api/items/${id}`);
    const data = await response.json();
    return data;
  },

  postOrder: async (phone: string, address: string, items: SentItem[]) => {
    const response = await fetch(`${url}/api/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        owner: {
          phone,
          address,
        },
        items,
      }),
    });

    return response;
  },
};
