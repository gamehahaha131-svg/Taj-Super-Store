export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  unit: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const STORE_INFO = {
  name: "Taj Groceries & General Store",
  tagline: "Fresh Groceries & Daily Essentials at Your Doorstep",
  location: "Ashraf Town, Qila Didar Singh, Punjab, Pakistan",
  phone: "+923001234567", // Placeholder, user should update
  whatsapp: "923001234567",
  timings: "8:00 AM - 10:00 PM",
  email: "info@tajgroceries.com"
};

export const CATEGORIES: Category[] = [
  { id: 'groceries', name: 'Groceries', icon: 'ShoppingBasket', description: 'Flour, Rice, Pulses & more' },
  { id: 'beverages', name: 'Beverages', icon: 'Coffee', description: 'Cold Drinks, Juices & Tea' },
  { id: 'snacks', name: 'Snacks', icon: 'Cookie', description: 'Chips, Biscuits & Chocolates' },
  { id: 'household', name: 'Household', icon: 'Home', description: 'Cleaning Supplies & Essentials' },
  { id: 'dairy', name: 'Dairy & Bakery', icon: 'Milk', description: 'Milk, Bread, Eggs & Butter' }
];

export const PRODUCTS: Product[] = [
  { id: '1', name: 'Premium Wheat Flour (Atta)', price: 1450, category: 'groceries', unit: '10kg', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400' },
  { id: '2', name: 'Basmati Rice', price: 350, category: 'groceries', unit: '1kg', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'Cooking Oil', price: 520, category: 'groceries', unit: '1L', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400' },
  { id: '4', name: 'Fresh Milk', price: 210, category: 'dairy', unit: '1L', image: 'https://images.unsplash.com/photo-1563636619-e9107da5a1bb?auto=format&fit=crop&q=80&w=400' },
  { id: '5', name: 'Large Eggs', price: 320, category: 'dairy', unit: 'Dozen', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80&w=400' },
  { id: '6', name: 'White Bread', price: 120, category: 'dairy', unit: 'Large', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400' },
  { id: '7', name: 'Coca Cola', price: 180, category: 'beverages', unit: '1.5L', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400' },
  { id: '8', name: 'Lays Chips', price: 50, category: 'snacks', unit: 'Medium', image: 'https://images.unsplash.com/photo-1566478431375-704330ca5360?auto=format&fit=crop&q=80&w=400' },
  { id: '9', name: 'Dishwash Liquid', price: 280, category: 'household', unit: '500ml', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400' },
];
