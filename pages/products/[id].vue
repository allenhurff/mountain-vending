<template>
    <div>
      <div v-if="product">
        <!-- Product Hero Section -->
        <section class="bg-mountain-red-500 text-white py-12">
          <div class="container-custom">
            <div class="flex flex-col md:flex-row items-center gap-8">
              <div class="w-full md:w-1/2">
                <h1 class="mb-4">{{ product.name }}</h1>
                <p class="text-xl mb-6">{{ product.description }}</p>
                <div class="flex flex-wrap gap-4">
                  <button class="btn-primary bg-white text-mountain-red-500 hover:bg-mountain-gray-100">
                    Request Quote
                  </button>
                  <button class="btn border-2 border-white text-white hover:bg-mountain-red-600">
                    Download Brochure
                  </button>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <!-- Product image placeholder -->
                <div class="aspect-w-4 aspect-h-3 bg-white bg-opacity-10 rounded-lg">
                  <div class="w-full h-full flex items-center justify-center">
                    <span class="text-xl font-semibold">{{ product.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Wave Divider -->
          <div class="relative h-16 mt-8">
            <svg class="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0 0L48 8.33333C96 16.6667 192 33.3333 288 41.6667C384 50 480 50 576 41.6667C672 33.3333 768 16.6667 864 16.6667C960 16.6667 1056 33.3333 1152 41.6667C1248 50 1344 50 1392 50L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V0Z" fill="white"/>
            </svg>
          </div>
        </section>
        
        <!-- Product Details -->
        <section class="py-16 bg-white">
          <div class="container-custom">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <!-- Specifications -->
              <div>
                <h2 class="text-2xl font-bold mb-6">Specifications</h2>
                <div class="bg-mountain-gray-50 rounded-xl p-6 shadow-sm">
                  <div class="space-y-4">
                    <div>
                      <h3 class="font-semibold text-mountain-gray-700">Capacity</h3>
                      <p>{{ product.capacity }}</p>
                    </div>
                    <div>
                      <h3 class="font-semibold text-mountain-gray-700">Dimensions</h3>
                      <p>72" H x 39" W x 35" D</p>
                    </div>
                    <div>
                      <h3 class="font-semibold text-mountain-gray-700">Weight</h3>
                      <p>450 lbs</p>
                    </div>
                    <div>
                      <h3 class="font-semibold text-mountain-gray-700">Power</h3>
                      <p>115 VAC / 60Hz</p>
                    </div>
                    <div>
                      <h3 class="font-semibold text-mountain-gray-700">Warranty</h3>
                      <p>2 years parts & labor</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Features -->
              <div class="md:col-span-2">
                <h2 class="text-2xl font-bold mb-6">Key Features</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div 
                    v-for="(feature, index) in product.features" 
                    :key="index"
                    class="bg-mountain-gray-50 rounded-xl p-6 shadow-sm"
                  >
                    <div class="w-12 h-12 rounded-full bg-mountain-red-100 flex items-center justify-center mb-4">
                      <svg class="w-6 h-6 text-mountain-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 class="text-lg font-semibold mb-2">{{ feature }}</h3>
                    <p class="text-mountain-gray-600">
                      {{ getFeatureDescription(feature) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Options and Customization -->
        <section class="py-16 bg-mountain-gray-50">
          <div class="container-custom">
            <h2 class="text-3xl font-bold text-center mb-12">Customization Options</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div class="w-14 h-14 rounded-full bg-mountain-red-100 flex items-center justify-center mb-4">
                  <svg class="w-8 h-8 text-mountain-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Branding Solutions</h3>
                <p class="text-mountain-gray-600 mb-4">
                  Customize the exterior of your machine with your company colors, logo, and messaging.
                </p>
                <NuxtLink to="/customize" class="inline-flex items-center font-semibold text-mountain-red-500 hover:text-mountain-red-600">
                  Explore Branding Options
                  <svg class="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </NuxtLink>
              </div>
              
              <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div class="w-14 h-14 rounded-full bg-mountain-red-100 flex items-center justify-center mb-4">
                  <svg class="w-8 h-8 text-mountain-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Payment Systems</h3>
                <p class="text-mountain-gray-600 mb-4">
                  Choose from various payment options including cashless, mobile payments, and traditional coin/bill acceptors.
                </p>
                <NuxtLink to="/customize" class="inline-flex items-center font-semibold text-mountain-red-500 hover:text-mountain-red-600">
                  Payment Options
                  <svg class="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </NuxtLink>
              </div>
              
              <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div class="w-14 h-14 rounded-full bg-mountain-red-100 flex items-center justify-center mb-4">
                  <svg class="w-8 h-8 text-mountain-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Smart Technology</h3>
                <p class="text-mountain-gray-600 mb-4">
                  Add IoT capabilities for remote monitoring, inventory tracking, and maintenance alerts.
                </p>
                <NuxtLink to="/solutions" class="inline-flex items-center font-semibold text-mountain-red-500 hover:text-mountain-red-600">
                  Discover Smart Features
                  <svg class="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Related Products -->
        <section class="py-16 bg-white">
          <div class="container-custom">
            <h2 class="text-3xl font-bold text-center mb-12">Related Products</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" class="group">
                <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div class="aspect-w-1 aspect-h-1 bg-mountain-gray-100">
                    <!-- Product image placeholder -->
                    <div class="w-full h-full flex items-center justify-center p-4">
                      <span class="text-lg font-medium text-mountain-gray-500">{{ relatedProduct.name }}</span>
                    </div>
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 group-hover:text-mountain-red-500 transition-colors duration-300">
                      {{ relatedProduct.name }}
                    </h3>
                    <p class="text-mountain-gray-600 mb-4">
                      {{ relatedProduct.description }}
                    </p>
                    <NuxtLink :to="`/products/${relatedProduct.id}`" class="inline-flex items-center font-semibold text-mountain-red-500 hover:text-mountain-red-600">
                      Learn More
                      <svg class="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- CTA Section -->
        <section class="py-16 bg-mountain-red-500 text-white">
          <div class="container-custom text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p class="text-xl max-w-3xl mx-auto mb-8">
              Contact our team today to discuss how the {{ product.name }} can transform your vending experience.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <NuxtLink to="/contact" class="btn bg-white text-mountain-red-500 hover:bg-mountain-gray-100">
                Contact Us
              </NuxtLink>
              <NuxtLink to="/products" class="btn border-2 border-white text-white hover:bg-mountain-red-600">
                View All Products
              </NuxtLink>
            </div>
          </div>
        </section>
      </div>
      
      <!-- 404 Section if product not found -->
      <div v-else class="py-32 bg-white">
        <div class="container-custom text-center">
          <h1 class="text-4xl font-bold mb-6">Product Not Found</h1>
          <p class="text-xl mb-8">Sorry, we couldn't find the product you're looking for.</p>
          <NuxtLink to="/products" class="btn-primary">
            Browse All Products
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const productId = String(route.params.id);
  
  // Products database
  const productsDatabase = [
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
  ];
  
  // Feature descriptions
  const featureDescriptions = {
    'Touchless payment': 'Enables contactless transactions via mobile devices, RFID cards, and NFC technology for a hygienic vending experience.',
    'Smart temperature control': 'Automatically adjusts cooling based on ambient conditions and usage patterns to ensure products are at optimal temperature.',
    'Remote inventory management': 'Track product levels in real-time through our cloud platform, receive alerts when items need restocking.',
    'Energy efficient cooling': 'Advanced cooling system that reduces energy consumption by up to 30% compared to standard vending machines.',
    'Customizable shelving': 'Flexible shelf configurations to accommodate various product sizes and shapes, easily adjustable without tools.',
    'Digital inventory tracking': 'Internal sensors monitor inventory levels and provide real-time updates to the management system.',
    'Anti-theft design': 'Reinforced construction and security features to prevent unauthorized access to products and cash.',
    'Ambient temperature control': 'Maintains proper environment for non-refrigerated snack items to ensure maximum shelf life.',
    'Combined snack and beverage': 'Dual-purpose machine that offers both refrigerated beverages and ambient temperature snacks in a single unit.',
    'Dual temperature zones': 'Separate cooling zones for different product types, ensuring optimal storage conditions for each.',
    'Unified payment system': 'Single payment interface for all products, simplifying the customer experience and reducing maintenance costs.',
    'Remote monitoring': 'Cloud-based system that allows operators to view machine status, sales data, and maintenance needs from anywhere.',
    'Space-saving design': 'Compact footprint that maximizes product capacity while minimizing floor space requirements.',
    'Digital display': 'High-resolution screen for product information, promotions, and interactive customer experience.',
    'Simple restocking': 'Quick-access loading system that reduces service time and minimizes downtime during product replenishment.',
    'Low energy consumption': 'Energy-efficient components and smart power management to reduce operational costs and environmental impact.',
    'Refrigerated compartments': 'Temperature-controlled sections designed specifically for preserving freshness of perishable food items.',
    'Adjustable temperature': 'Individual temperature controls for different compartments to accommodate various food storage requirements.',
    'First-in-first-out loading': 'Storage system that ensures older products are dispensed before newer ones to maintain freshness and reduce waste.',
    'Freshness monitoring': 'Sensors that track product age and temperature history to ensure food safety and quality.'
  };
  
  // Find the current product
  const product = ref(productsDatabase.find(p => p.id === productId) || null);
  
  // Get feature description
  const getFeatureDescription = (feature) => {
    return featureDescriptions[feature] || 'Advanced feature designed to enhance user experience and machine functionality.';
  };
  
  // Related products (products in the same category, excluding current one)
  const relatedProducts = computed(() => {
    if (!product.value) return [];
    
    return productsDatabase
      .filter(p => p.category === product.value.category && p.id !== product.value.id)
      .slice(0, 3);
  });
  </script>