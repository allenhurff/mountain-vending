<template>
    <div>
      <!-- Page Header -->
      <section class="bg-mountain-red-500 text-white py-12">
        <div class="container-custom">
          <h1 class="text-center mb-6">Our Products</h1>
          <p class="text-xl text-center max-w-3xl mx-auto">
            Discover our premium range of vending machines designed to meet the needs of any business or location.
          </p>
        </div>
        
        <!-- Wave Divider -->
        <div class="relative h-16 mt-8">
          <svg class="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 0L48 8.33333C96 16.6667 192 33.3333 288 41.6667C384 50 480 50 576 41.6667C672 33.3333 768 16.6667 864 16.6667C960 16.6667 1056 33.3333 1152 41.6667C1248 50 1344 50 1392 50L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>
      
      <!-- Products Grid -->
      <section class="py-16 bg-white">
        <div class="container-custom">
          <!-- Filter Options -->
          <div class="mb-12">
            <div class="flex flex-wrap gap-4 justify-center">
              <button 
                v-for="category in categories" 
                :key="category.id"
                @click="activeCategory = category.id"
                :class="[
                  'px-4 py-2 rounded-full transition-colors duration-300',
                  activeCategory === category.id 
                    ? 'bg-mountain-red-500 text-white'
                    : 'bg-mountain-gray-100 text-mountain-gray-700 hover:bg-mountain-gray-200'
                ]"
              >
                {{ category.name }}
              </button>
            </div>
          </div>
          
          <!-- Products -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="product in filteredProducts" 
              :key="product.id"
              class="group"
            >
              <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div class="aspect-w-1 aspect-h-1 bg-mountain-gray-100">
                  <!-- Product image placeholder -->
                  <div class="w-full h-full flex items-center justify-center bg-mountain-gray-100 p-4">
                    <span class="text-lg font-medium text-mountain-gray-500">{{ product.name }}</span>
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-2 group-hover:text-mountain-red-500 transition-colors duration-300">
                    {{ product.name }}
                  </h3>
                  <p class="text-mountain-gray-600 mb-4">
                    {{ product.description }}
                  </p>
                  <div class="flex justify-between items-center">
                    <NuxtLink :to="`/products/${product.id}`" class="inline-flex items-center font-semibold text-mountain-red-500 hover:text-mountain-red-600">
                      Learn More
                      <svg class="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </NuxtLink>
                    <span class="text-sm px-3 py-1 bg-mountain-gray-100 rounded-full">{{ product.category }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- CTA Section -->
      <section class="py-16 bg-mountain-gray-50">
        <div class="container-custom text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Need Help Choosing the Right Product?
          </h2>
          <p class="text-lg max-w-3xl mx-auto mb-8">
            Our team of experts is ready to help you find the perfect vending solution for your specific needs.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/contact" class="btn-primary">
              Contact Our Team
            </NuxtLink>
            <NuxtLink to="/customize" class="btn-secondary">
              Customize Your Machine
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  // Categories
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'beverage', name: 'Beverage Machines' },
    { id: 'snack', name: 'Snack Machines' },
    { id: 'combo', name: 'Combo Machines' },
    { id: 'specialty', name: 'Specialty Machines' },
  ];
  
  const activeCategory = ref('all');
  
  // Products data
  const products = [
    {
      id: 'beverage-pro',
      name: 'Beverage Pro X1',
      category: 'beverage',
      description: 'Our flagship beverage vending machine with smart temperature control and touchless payment options.',
      features: ['Touchless payment', 'Smart temperature control', 'Remote inventory management', 'Energy efficient cooling'],
      capacity: '500 cans/bottles',
    },
    {
      id: 'beverage-compact',
      name: 'Beverage Compact',
      category: 'beverage',
      description: 'Space-saving beverage machine perfect for small offices and retail locations.',
      features: ['Space-saving design', 'Digital display', 'Simple restocking', 'Low energy consumption'],
      capacity: '200 cans/bottles',
    },
    {
      id: 'snack-master',
      name: 'Snack Master 3000',
      category: 'snack',
      description: 'The ultimate snack vending solution with customizable shelving and digital inventory management.',
      features: ['Customizable shelving', 'Digital inventory tracking', 'Anti-theft design', 'Ambient temperature control'],
      capacity: '150 items',
    },
    {
      id: 'snack-deluxe',
      name: 'Snack Deluxe',
      category: 'snack',
      description: 'Premium large-capacity snack machine with versatile shelving for various product sizes.',
      features: ['Extra capacity', 'Adjustable shelving', 'LED interior lighting', 'Energy-saving mode'],
      capacity: '300 items',
    },
    {
      id: 'combo-elite',
      name: 'Combo Elite Series',
      category: 'combo',
      description: 'A versatile combination machine offering both beverages and snacks in one sleek unit.',
      features: ['Combined snack and beverage', 'Dual temperature zones', 'Unified payment system', 'Remote monitoring'],
      capacity: '250 snacks + 300 beverages',
    },
    {
      id: 'fresh-market',
      name: 'Fresh Market Mini',
      category: 'specialty',
      description: 'Specialized vending machine for fresh food, salads, and healthy meal options.',
      features: ['Refrigerated compartments', 'Adjustable temperature', 'First-in-first-out loading', 'Freshness monitoring'],
      capacity: '80 fresh food items',
    },
    {
      id: 'coffee-express',
      name: 'Coffee Express Station',
      category: 'specialty',
      description: 'Premium coffee vending solution with fresh grinding and multiple beverage options.',
      features: ['Fresh bean grinding', 'Multiple drink options', 'Cup dispenser', 'Water filtration system'],
      capacity: '400 servings',
    },
    {
      id: 'micro-market',
      name: 'Micro Market Kiosk',
      category: 'specialty',
      description: 'Self-checkout kiosk for open-shelf micro markets offering expanded food and beverage options.',
      features: ['Self-checkout system', 'RFID and payment integration', 'Inventory tracking', 'User account management'],
      capacity: 'Unlimited (works with open shelving)',
    },
  ];
  
  // Filter products based on active category
  const filteredProducts = computed(() => {
    if (activeCategory.value === 'all') {
      return products;
    }
    return products.filter(product => product.category === activeCategory.value);
  });
  </script>