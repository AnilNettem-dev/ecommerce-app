import { Product } from '../types/product.types';

const mockProducts: Product[] = [
  {
    id: '1',
    title: 'iPhone 15',
    price: 79999,
    image:
      'https://placehold.co/100x100',
    description: 'Apple smartphone',
    category: 'Phones',
  },
  {
    id: '2',
    title: 'MacBook Pro',
    price: 159999,
    image:
      'https://placehold.co/100x100',
    description: 'Apple laptop',
    category: 'Laptops',
  },
  {
    id: '3',
    title: 'AirPods Pro',
    price: 24999,
    image:
      'https://placehold.co/100x100',
    description: 'Wireless earbuds',
    category: 'Accessories',
  },
  {
    id: '4',
    title: 'iPhone 15',
    price: 79999,
    image:
      'https://placehold.co/100x100',
    description: 'Apple smartphone',
    category: 'Phones',
  },
  {
    id: '5',
    title: 'MacBook Pro',
    price: 159999,
    image:
      'https://placehold.co/100x100',
    description: 'Apple laptop',
    category: 'Laptops',
  },
  {
    id: '6',
    title: 'AirPods Pro',
    price: 24999,
    image:
      'https://placehold.co/100x100',
    description: 'Wireless earbuds',
    category: 'Accessories',
  },
  {
    id: '7',
    title: 'iPhone 15',
    price: 79999,
    image:
      'https://placehold.co/100x100',
    description: 'Apple smartphone',
    category: 'Phones'
  },
  {
    id: '8',
    title: 'MacBook Pro',
    price: 159999,
    image:
      'https://placehold.co/100x100',
    description: 'Apple laptop',
    category: 'Laptops',
  },
  {
    id: '9',
    title: 'AirPods Pro',
    price: 24999,
    image:
      'https://placehold.co/100x100',
    description: 'Wireless earbuds',
    category: 'Accessories',
  },
  {
    id: '10',
    title: 'iPhone 15',
    price: 79999,
    image:
      'https://placehold.co/100x100',
    description: 'Apple smartphone',
    category: 'Phones'
  },
  {
    id: '11',
    title: 'MacBook Pro',
    price: 159999,
    image:
      'https://placehold.co/100x100',
    description: 'Apple laptop',
    category: 'Laptops',
  },
  {
    id: '12',
    title: 'AirPods Pro',
    price: 24999,
    image:
      'https://placehold.co/100x100',
    description: 'Wireless earbuds',
    category: 'Accessories',
  },
];

export const productService = {
  getProducts: async (): Promise<Product[]> => {
    await new Promise((res) =>
      setTimeout(res, 1000)
    );

    return mockProducts;
  },
  getProductById: async(id: string): Promise<Product | undefined> => {
    await new Promise((res) => {
      setTimeout(res, 2000);
    })

    return mockProducts.find((product) => product.id === id);
  }
};