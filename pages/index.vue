<template>
  <div>
    <div class="container-page">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-display font-bold text-mountain-blue-600 mb-6">
          Welcome to Mountain Vending
        </h1>
        <p class="text-lg text-mountain-gray-600 mb-8">
          Your premium vending machine service for the San Bernardino Mountains.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/services" class="btn-primary">Our Services</NuxtLink>
          <NuxtLink to="/contact" class="btn-outline">Contact Us</NuxtLink>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="card">
          <div class="text-mountain-green-500 text-3xl mb-4">
            <!-- Icon placeholder -->
            <div class="w-12 h-12 rounded-full bg-mountain-green-100 flex items-center justify-center">
              <span class="font-bold">1</span>
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2 text-mountain-gray-800">Quality Products</h3>
          <p class="text-mountain-gray-600">We stock our machines with premium snacks and beverages that mountain visitors love.</p>
        </div>
        
        <div class="card">
          <div class="text-mountain-blue-500 text-3xl mb-4">
            <!-- Icon placeholder -->
            <div class="w-12 h-12 rounded-full bg-mountain-blue-100 flex items-center justify-center">
              <span class="font-bold">2</span>
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2 text-mountain-gray-800">Strategic Locations</h3>
          <p class="text-mountain-gray-600">Our machines are placed at key areas throughout the San Bernardino mountain communities.</p>
        </div>
        
        <div class="card">
          <div class="text-mountain-green-500 text-3xl mb-4">
            <!-- Icon placeholder -->
            <div class="w-12 h-12 rounded-full bg-mountain-green-100 flex items-center justify-center">
              <span class="font-bold">3</span>
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2 text-mountain-gray-800">Reliable Service</h3>
          <p class="text-mountain-gray-600">We maintain our machines regularly to ensure they're always stocked and functioning properly.</p>
        </div>
      </div>
      
      <div class="bg-mountain-blue-50 rounded-2xl p-8 md:p-12">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-mountain-blue-700 mb-4">Partner With Us</h2>
          <p class="text-mountain-gray-700 mb-6">
            Own a business in the mountains? Contact us to explore placing a vending machine at your location.
          </p>
          <NuxtLink to="/contact" class="btn-secondary">Learn More</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>
