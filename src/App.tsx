/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBasket, 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ShoppingCart, 
  MessageCircle, 
  ChevronRight, 
  Star,
  Search,
  ArrowRight,
  Coffee,
  Cookie,
  Home as HomeIcon,
  Milk,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { CATEGORIES, PRODUCTS, STORE_INFO, Product, Category } from './types.ts';

// --- Components ---

const Navbar = ({ activePage, setActivePage, cartCount, toggleCart }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setActivePage('home')}>
            <div className="bg-primary p-2 rounded-lg mr-2">
              <ShoppingBasket className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-primary tracking-tight">Taj Groceries</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activePage === link.id ? 'text-primary' : 'text-gray-600'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={toggleCart}
              className="relative p-2 text-gray-600 hover:text-primary transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-gray-900 text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleCart} className="relative p-2 text-gray-600">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-gray-900 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActivePage(link.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setActivePage }: any) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-primary p-2 rounded-lg mr-2">
                <ShoppingBasket className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">Taj Groceries</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Serving Ashraf Town with fresh groceries and daily essentials since 2010. Quality you can trust, prices you'll love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><button onClick={() => setActivePage('home')} className="hover:text-primary transition-colors">Home</button></li>
              <li><button onClick={() => setActivePage('products')} className="hover:text-primary transition-colors">Products</button></li>
              <li><button onClick={() => setActivePage('about')} className="hover:text-primary transition-colors">About Us</button></li>
              <li><button onClick={() => setActivePage('contact')} className="hover:text-primary transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Categories</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {CATEGORIES.slice(0, 4).map(cat => (
                <li key={cat.id}><button onClick={() => setActivePage('products')} className="hover:text-primary transition-colors">{cat.name}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Store Info</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 shrink-0" />
                <span>{STORE_INFO.location}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 shrink-0" />
                <span>{STORE_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-primary mr-3 shrink-0" />
                <span>{STORE_INFO.timings}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
          <p>© 2026 Taj Groceries & General Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppFloating = () => (
  <a
    href={`https://wa.me/${STORE_INFO.whatsapp}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center group"
  >
    <MessageCircle className="w-6 h-6" />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-medium whitespace-nowrap">
      Chat with us
    </span>
  </a>
);

// --- Pages ---

const HomePage = ({ setActivePage }: any) => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1920" 
            alt="Grocery Store" 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-primary/20 text-accent px-4 py-1 rounded-full text-sm font-bold mb-6 backdrop-blur-sm border border-primary/30">
              Trusted by 500+ Local Families
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              {STORE_INFO.name}
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              {STORE_INFO.tagline}. Quality products at the most affordable prices in Ashraf Town.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setActivePage('products')}
                className="btn-accent flex items-center justify-center"
              >
                Shop Now <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <a 
                href={`https://wa.me/${STORE_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center"
              >
                Order on WhatsApp <MessageCircle className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our wide range of fresh produce and daily essentials.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {CATEGORIES.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActivePage('products')}
                className="group cursor-pointer"
              >
                <div className="bg-gray-50 rounded-3xl p-8 text-center card-hover border border-gray-100 group-hover:border-primary/20">
                  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    {cat.id === 'groceries' && <ShoppingBasket className="w-8 h-8" />}
                    {cat.id === 'beverages' && <Coffee className="w-8 h-8" />}
                    {cat.id === 'snacks' && <Cookie className="w-8 h-8" />}
                    {cat.id === 'household' && <HomeIcon className="w-8 h-8" />}
                    {cat.id === 'dairy' && <Milk className="w-8 h-8" />}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{cat.name}</h3>
                  <p className="text-xs text-gray-500">{cat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold mb-4">Fresh Quality</h4>
              <p className="text-green-100">We source only the freshest products for our community every single day.</p>
            </div>
            <div className="p-6">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold mb-4">Easy Ordering</h4>
              <p className="text-green-100">Just send us a message on WhatsApp and we'll have your order ready.</p>
            </div>
            <div className="p-6">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold mb-4">Local Delivery</h4>
              <p className="text-green-100">Fast delivery within Ashraf Town and surrounding areas of Qila Didar Singh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="flex justify-center space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-accent fill-accent" />)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ahmed Khan", text: "Best grocery store in Qila Didar Singh. Always fresh and the prices are very reasonable." },
              { name: "Saira Bibi", text: "I love the WhatsApp ordering feature. It saves me so much time during my busy day." },
              { name: "Zubair Ali", text: "Very friendly staff and they have everything I need for my home in one place." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">{t.name[0]}</span>
                  </div>
                  <span className="font-bold text-gray-900">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductsPage = ({ addToCart }: any) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Products</h1>
            <p className="text-gray-600">Browse our catalog of fresh essentials.</p>
          </div>
          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-12 no-scrollbar space-x-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
              selectedCategory === 'all' 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            All Products
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
                selectedCategory === cat.id 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 card-hover flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    {product.unit}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 block">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{product.name}</h3>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xl font-extrabold text-primary">Rs. {product.price}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-gray-100 text-gray-900 p-3 rounded-2xl hover:bg-accent transition-colors active:scale-90"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or category filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              A Decade of Serving <span className="text-primary">Ashraf Town</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2010, Taj Groceries & General Store started with a simple mission: to provide the families of Qila Didar Singh with high-quality daily essentials at fair prices.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              What began as a small corner shop has grown into a trusted community hub. We believe in quality products, fair pricing, and exceptional service. Every item on our shelves is handpicked to ensure it meets the standards our customers deserve.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">15+</h4>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">1000+</h4>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Happy Customers</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800" 
                alt="Store Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-accent p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
              <p className="text-gray-900 font-bold text-lg">"Our community is our family. We grow together."</p>
            </div>
          </motion.div>
        </div>

        <div className="bg-gray-900 rounded-[40px] p-12 md:p-24 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Quality First</h4>
              <p className="text-gray-400">We never compromise on the quality of our groceries and products.</p>
            </div>
            <div>
              <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ShoppingBasket className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Community</h4>
              <p className="text-gray-400">We are proud to be a part of Ashraf Town and support local families.</p>
            </div>
            <div>
              <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Integrity</h4>
              <p className="text-gray-400">Fair pricing and honest business practices are at our core.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Have a question or want to place an order? We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 text-center card-hover">
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Available during store hours</p>
            <a href={`tel:${STORE_INFO.phone}`} className="text-primary font-bold text-lg">{STORE_INFO.phone}</a>
          </div>

          <div className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 text-center card-hover">
            <div className="bg-[#25D366]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-[#25D366]" />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">Fastest way to order</p>
            <a 
              href={`https://wa.me/${STORE_INFO.whatsapp}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#25D366] font-bold text-lg"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 text-center card-hover">
            <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">Store Hours</h3>
            <p className="text-gray-600 mb-4">Open 7 days a week</p>
            <p className="text-gray-900 font-bold text-lg">{STORE_INFO.timings}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="+92 300 1234567" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button className="btn-primary w-full">Send Message</button>
            </form>
          </div>

          <div className="h-full min-h-[400px] rounded-[32px] overflow-hidden shadow-sm border border-gray-100">
            {/* Google Maps Placeholder - In a real app, use an iframe or Google Maps API */}
            <div className="w-full h-full bg-gray-200 flex flex-col items-center justify-center p-12 text-center">
              <MapPin className="w-16 h-16 text-primary mb-6" />
              <h4 className="text-xl font-bold mb-2">Our Location</h4>
              <p className="text-gray-600 mb-6">{STORE_INFO.location}</p>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE_INFO.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartSidebar = ({ isOpen, onClose, cart, removeFromCart, updateQuantity }: any) => {
  const total = cart.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0);

  const checkoutViaWhatsApp = () => {
    const message = `*New Order from Website*\n\n` +
      cart.map((item: any) => `- ${item.name} (${item.quantity} x Rs. ${item.price} = Rs. ${item.price * item.quantity})`).join('\n') +
      `\n\n*Total: Rs. ${total}*`;
    
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center">
                <ShoppingCart className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-xl font-bold">Your Cart</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="text-center py-24">
                  <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingBasket className="w-10 h-10 text-gray-400" />
                  </div>
                  <p className="text-gray-500 font-medium">Your cart is empty</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 text-primary font-bold hover:underline"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item: any) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between mb-1">
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">Rs. {item.price} / {item.unit}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-primary"
                          >
                            -
                          </button>
                          <span className="mx-3 font-bold text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-primary"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-bold text-primary">Rs. {item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600 font-medium">Subtotal</span>
                  <span className="text-2xl font-extrabold text-primary">Rs. {total}</span>
                </div>
                <button 
                  onClick={checkoutViaWhatsApp}
                  className="btn-primary w-full flex items-center justify-center py-4"
                >
                  Checkout via WhatsApp <MessageCircle className="ml-2 w-5 h-5" />
                </button>
                <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest font-bold">
                  Free delivery in Ashraf Town
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('taj_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem('taj_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        cartCount={cartCount}
        toggleCart={() => setIsCartOpen(true)}
      />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
            {activePage === 'products' && <ProductsPage addToCart={addToCart} />}
            {activePage === 'about' && <AboutPage />}
            {activePage === 'contact' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />
      
      <WhatsAppFloating />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}
