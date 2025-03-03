<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-mountain-red-500 text-white">
      <div class="container-custom py-16 md:py-24">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Refresh Your Vending Experience
            </h1>
            <p class="text-xl mb-8">
              Discover premium vending machine solutions that elevate your business and delight your customers.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/products" class="btn-primary">
                Explore Products
              </NuxtLink>
              <NuxtLink to="/contact" class="btn-secondary bg-white">
                Contact Sales
              </NuxtLink>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-2xl">
              <!-- Placeholder for hero image -->
              <div class="bg-mountain-red-400 w-full h-full flex items-center justify-center">
                <span class="text-xl font-semibold">Premium Vending Machine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Wave Divider -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0L48 8.33333C96 16.6667 192 33.3333 288 41.6667C384 50 480 50 576 41.6667C672 33.3333 768 16.6667 864 16.6667C960 16.6667 1056 33.3333 1152 41.6667C1248 50 1344 50 1392 50L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="py-16 bg-white">
      <div class="container-custom">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Mountain Vending?
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-mountain-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 rounded-full bg-mountain-red-100 flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-mountain-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Premium Quality</h3>
            <p class="text-mountain-gray-600">
              Our vending machines are built with high-quality materials and cutting-edge technology for reliability and longevity.
            </p>
          </div>
          
          <div class="bg-mountain-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 rounded-full bg-mountain-red-100 flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-mountain-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Customizable Solutions</h3>
            <p class="text-mountain-gray-600">
              Personalize your vending machines with custom branding, product selections, and smart features.
            </p>
          </div>
          
          <div class="bg-mountain-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 rounded-full bg-mountain-red-100 flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-mountain-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">24/7 Support</h3>
            <p class="text-mountain-gray-600">
              Our dedicated team provides round-the-clock support to ensure your vending machines operate flawlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Products Showcase -->
    <section class="py-16 bg-mountain-gray-50">
      <div class="container-custom">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Popular Vending Machines
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="product in featuredProducts" :key="product.id" class="group">
            <div class="bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
              <div class="aspect-w-1 aspect-h-1 bg-mountain-gray-200">
                <!-- Product image placeholder -->
                <div class="w-full h-full flex items-center justify-center bg-mountain-gray-100">
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
                <NuxtLink :to="`/products/${product.id}`" class="inline-flex items-center font-semibold text-mountain-red-500 hover:text-mountain-red-600">
                  Learn More
                  <svg class="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink to="/products" class="btn-primary">
            View All Products
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <!-- Testimonials -->
    <section class="py-16 bg-white">
      <div class="container-custom">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-mountain-gray-50 rounded-xl p-8 shadow-md">
            <div class="flex items-start mb-6">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-mountain-red-100 rounded-full flex items-center justify-center text-mountain-red-500 font-bold">
                  {{ testimonial.author.charAt(0) }}
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg font-semibold">{{ testimonial.author }}</h4>
                <p class="text-mountain-gray-600">{{ testimonial.company }}</p>
              </div>
            </div>
            <p class="text-mountain-gray-700 italic">
              "{{ testimonial.content }}"
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 bg-mountain-red-500 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Vending Experience?
        </h2>
        <p class="text-xl max-w-3xl mx-auto mb-8">
          Contact our team today to discover how Mountain Vending can provide the perfect vending solution for your business.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/contact" class="btn bg-white text-mountain-red-500 hover:bg-mountain-gray-100">
            Get in Touch
          </NuxtLink>
          <NuxtLink to="/products" class="btn border-2 border-white text-white hover:bg-mountain-red-600">
            Explore Products
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Sample data for featured products
const featuredProducts = [
  {
    id: 'beverage-pro',
    name: 'Beverage Pro X1',
    description: 'Our flagship beverage vending machine with smart temperature control and touchless payment options.',
  },
  {
    id: 'snack-master',
    name: 'Snack Master 3000',
    description: 'The ultimate snack vending solution with customizable shelving and digital inventory management.',
  },
  {
    id: 'combo-elite',
    name: 'Combo Elite Series',
    description: 'A versatile combination machine offering both beverages and snacks in one sleek unit.',
  },
];

// Sample testimonials
const testimonials = [
  {
    id: 1,
    author: 'Sarah Johnson',
    company: 'TechStart Inc.',
    content: 'Mountain Vending transformed our office break area with their sleek, reliable machines. Our team loves the diverse product options, and the customer service has been exceptional.',
  },
  {
    id: 2,
    author: 'Michael Chen',
    company: 'Pacific University',
    content: 'We\'ve partnered with Mountain Vending across our campus locations, and the response has been overwhelmingly positive. Their machines are reliable, and the support team is always responsive.',
  },
];
</script>