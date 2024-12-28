"use client";

import React, { useState } from 'react';
import { Camera, ShoppingCart, Search, ChevronDown, Heart, User, Menu } from 'lucide-react';

interface CategoryType {
  name: string;
  items: string[];
  image: string;
}

interface ProductType {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const CameraStore: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories: CategoryType[] = [
    {
      name: 'DSLR Cameras',
      items: ['Entry Level', 'Professional', 'Studio', 'Full Frame'],
      image: '/placeholder-category-1.jpg'
    },
    {
      name: 'Mirrorless',
      items: ['Compact', 'Full Frame', 'Crop Sensor', 'Video Focus'],
      image: '/placeholder-category-2.jpg'
    },
    {
      name: 'Accessories',
      items: ['Lenses', 'Tripods', 'Lighting', 'Bags'],
      image: '/placeholder-category-3.jpg'
    }
  ];

  const featuredProducts: ProductType[] = [
    {
      id: 1,
      name: 'Professional DSLR X2000',
      price: 1299.99,
      image: '/placeholder-product-1.jpg',
      category: 'DSLR Cameras'
    },
    {
      id: 2,
      name: 'Mirrorless Pro M500',
      price: 999.99,
      image: '/placeholder-product-2.jpg',
      category: 'Mirrorless'
    },
    {
      id: 3,
      name: 'Premium Telephoto Lens',
      price: 599.99,
      image: '/placeholder-product-3.jpg',
      category: 'Accessories'
    },
    {
      id: 4,
      name: 'Studio Light Kit Pro',
      price: 449.99,
      image: '/placeholder-product-4.jpg',
      category: 'Accessories'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Camera className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">CameraHub</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="relative"
                    onMouseEnter={() => setHoveredCategory(category.name)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                      {category.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>

                    {/* Mega Menu */}
                    {hoveredCategory === category.name && (
                      <div className="absolute left-0 w-56 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          {category.items.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Search className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <User className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Heart className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <ShoppingCart className="h-6 w-6" />
              </button>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 text-gray-400 hover:text-gray-500"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-3">
              {categories.map((category) => (
                <div key={category.name} className="px-2 pt-2 pb-3 space-y-1">
                  <button className="block px-3 py-2 text-base font-medium text-gray-900">
                    {category.name}
                  </button>
                  {category.items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block pl-6 py-2 text-sm text-gray-500 hover:text-gray-900"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gray-900 h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="max-w-xl">
                <h1 className="text-4xl font-bold text-white sm:text-5xl">
                  Capture Every Moment
                </h1>
                <p className="mt-4 text-xl text-gray-300">
                  Professional photography equipment for every level of expertise
                </p>
                <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative overflow-hidden rounded-lg shadow-md group"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img
                    src="/api/placeholder/400/300"
                    alt={category.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="/api/placeholder/300/300"
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Camera Equipment & Accessories
              </h2>
              <div className="prose prose-lg text-gray-500">
                <p>
                  Discover our extensive collection of professional photography equipment,
                  including top-of-the-line DSLR cameras, mirrorless systems, and premium
                  accessories. Whether you're a beginner looking to start your photography
                  journey or a seasoned professional seeking the latest gear, our expert
                  team is here to help you find the perfect equipment for your needs.
                </p>
                <p className="mt-4">
                  We pride ourselves on offering competitive prices, exceptional customer
                  service, and a carefully curated selection of products from the world's
                  leading brands. Visit our store today and take your photography to the
                  next level with our professional-grade equipment and expert guidance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400 text-sm">
                Your trusted source for professional photography equipment and expert advice.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Shop', 'About Us', 'Contact', 'Blog'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                {['Shipping', 'Returns', 'FAQ', 'Track Order'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} CameraHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CameraStore;
