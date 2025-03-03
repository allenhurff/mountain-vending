<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-coke-red-500 text-white overflow-hidden">
      <div class="container mx-auto px-4 py-16 md:py-24 relative">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="z-10">
            <h2 class="text-xl md:text-2xl font-medium mb-4 uppercase">Mountain Vending</h2>
            <h1 class="hero-text mb-6">
              Refresh Your <span class="font-script">Mountain</span> Experience
            </h1>
            <p class="text-xl mb-8 max-w-xl">
              Premium vending services throughout the San Bernardino Mountains, bringing refreshment to every adventure.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/services" class="btn-white">Explore Services</NuxtLink>
              <NuxtLink to="/locations" class="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-coke-red-500">Find Locations</NuxtLink>
            </div>
          </div>
          <div class="relative hidden md:block">
            <!-- Placeholder for hero image -->
            <div class="w-full h-96 bg-coke-red-400 rounded-2xl flex items-center justify-center">
              <span class="text-white text-lg font-medium">Vending Machine Image</span>
            </div>
            <!-- Decorative elements -->
            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-coke-red-600 rounded-full opacity-50"></div>
            <div class="absolute -top-10 -left-10 w-24 h-24 bg-coke-red-600 rounded-full opacity-50"></div>
          </div>
        </div>
        
        <!-- Decorative shapes (Coca-Cola style) -->
        <div class="absolute -bottom-16 -left-16 w-64 h-64 bg-coke-red-600 rounded-full opacity-20"></div>
        <div class="absolute top-0 right-0 w-48 h-48 bg-coke-red-600 rounded-full opacity-20"></div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-coke-black-900">
            Why Choose <span class="text-coke-red-500">Mountain Vending</span>
          </h2>
          <p class="subtitle">
            We bring quality refreshments to every corner of the mountains.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="card group hover:border-coke-red-500 transition-all">
            <div class="text-coke-red-500 text-3xl mb-6">
              <div class="w-16 h-16 rounded-full bg-coke-red-50 flex items-center justify-center group-hover:bg-coke-red-100 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-3 text-coke-black-800 group-hover:text-coke-red-500 transition-colors">Premium Products</h3>
            <p class="text-coke-black-600">We stock our machines with quality snacks and beverages that mountain visitors love and crave.</p>
          </div>
          
          <div class="card group hover:border-coke-red-500 transition-all">
            <div class="text-coke-red-500 text-3xl mb-6">
              <div class="w-16 h-16 rounded-full bg-coke-red-50 flex items-center justify-center group-hover:bg-coke-red-100 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-3 text-coke-black-800 group-hover:text-coke-red-500 transition-colors">Strategic Locations</h3>
            <p class="text-coke-black-600">Our machines are strategically placed throughout the San Bernardino mountain communities.</p>
          </div>
          
          <div class="card group hover:border-coke-red-500 transition-all">
            <div class="text-coke-red-500 text-3xl mb-6">
              <div class="w-16 h-16 rounded-full bg-coke-red-50 flex items-center justify-center group-hover:bg-coke-red-100 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-3 text-coke-black-800 group-hover:text-coke-red-500 transition-colors">Reliable Service</h3>
            <p class="text-coke-black-600">We maintain our machines regularly to ensure they're always stocked and functioning properly.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Partnership CTA Section -->
    <section class="py-16 bg-coke-black-900 text-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div class="md:col-span-3">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Partner With <span class="text-coke-red-500">Mountain Vending</span>
            </h2>
            <p class="text-xl text-coke-white-600 mb-8 max-w-xl">
              Own a business in the mountains? Increase customer satisfaction and generate additional revenue by hosting one of our premium vending machines.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/contact" class="btn-primary">Contact Us</NuxtLink>
              <NuxtLink to="/services" class="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-coke-black-900">Learn More</NuxtLink>
            </div>
          </div>
          <div class="md:col-span-2 relative">
            <!-- Placeholder for partnership image -->
            <div class="w-full h-64 bg-coke-black-800 rounded-2xl flex items-center justify-center">
              <span class="text-white text-lg font-medium">Partnership Image</span>
            </div>
            <!-- Decorative elements -->
            <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-coke-red-500 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonial Section -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-coke-black-900">
            What Our <span class="text-coke-red-500">Partners Say</span>
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card bg-coke-red-50 border-coke-red-200">
            <div class="text-coke-red-500 mb-4">
              ★★★★★
            </div>
            <p class="text-coke-black-700 mb-6 italic">
              "Mountain Vending has been a great addition to our resort. Our guests love having convenient access to quality snacks and drinks."
            </p>
            <div class="font-bold text-coke-black-800">
              Sarah T.
            </div>
            <div class="text-coke-black-600 text-sm">
              Lake Arrowhead Resort Manager
            </div>
          </div>
          
          <div class="card bg-coke-red-50 border-coke-red-200">
            <div class="text-coke-red-500 mb-4">
              ★★★★★
            </div>
            <p class="text-coke-black-700 mb-6 italic">
              "The team at Mountain Vending provides exceptional service. They keep the machines well-stocked and respond quickly to any requests."
            </p>
            <div class="font-bold text-coke-black-800">
              Michael R.
            </div>
            <div class="text-coke-black-600 text-sm">
              Big Bear Recreation Center
            </div>
          </div>
          
          <div class="card bg-coke-red-50 border-coke-red-200">
            <div class="text-coke-red-500 mb-4">
              ★★★★★
            </div>
            <p class="text-coke-black-700 mb-6 italic">
              "Adding a Mountain Vending machine to our lobby has been great for both our guests and our business. It's a win-win partnership."
            </p>
            <div class="font-bold text-coke-black-800">
              Jennifer K.
            </div>
            <div class="text-coke-black-600 text-sm">
              Running Springs Hotel Owner
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
};
</script>
