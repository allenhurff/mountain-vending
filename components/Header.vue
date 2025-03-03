<template>
  <header class="bg-white text-coke-black-900 border-b border-coke-white-800 sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
      <div class="flex items-center mb-3 sm:mb-0">
        <NuxtLink to="/" class="text-3xl font-display font-bold tracking-tight text-coke-red-500">
          Mountain
          <span class="font-script">Vending</span>
        </NuxtLink>
      </div>
      
      <!-- Mobile menu button (hidden on larger screens) -->
      <button class="sm:hidden rounded-full p-2 hover:bg-coke-white-700 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      
      <!-- Desktop navigation -->
      <nav class="hidden sm:flex flex-wrap justify-center gap-x-8 gap-y-2 items-center">
        <NuxtLink to="/" class="text-coke-black-800 hover:text-coke-red-500 transition-colors font-medium">Home</NuxtLink>
        <NuxtLink to="/about" class="text-coke-black-800 hover:text-coke-red-500 transition-colors font-medium">About</NuxtLink>
        <NuxtLink to="/services" class="text-coke-black-800 hover:text-coke-red-500 transition-colors font-medium">Services</NuxtLink>
        <NuxtLink to="/products" class="text-coke-black-800 hover:text-coke-red-500 transition-colors font-medium">Products</NuxtLink>
        <NuxtLink to="/locations" class="text-coke-black-800 hover:text-coke-red-500 transition-colors font-medium">Locations</NuxtLink>
        <NuxtLink to="/contact" class="btn-primary py-2 px-4">Contact</NuxtLink>
      </nav>
    </div>
    
    <!-- Mobile navigation (hidden by default) -->
    <div class="hidden">
      <nav class="flex flex-col px-4 py-2 space-y-3 pb-4">
        <NuxtLink to="/" class="text-coke-black-800 hover:text-coke-red-500 transition-colors font-medium py-2">Home</NuxtLink>
        <NuxtLink to="/about" class="text-coke-black-800 hover:text-coke-red-500 transition-colors font-medium py-2">About</NuxtLink>
        <NuxtLink to="/services" class="text-coke-black-800 hover:text-coke-red-500 transition-colors font-medium py-2">Services</NuxtLink>
        <NuxtLink to="/products" class="text-coke-black-800 hover:text-coke-red-500 transition-colors font-medium py-2">Products</NuxtLink>
        <NuxtLink to="/locations" class="text-coke-black-800 hover:text-coke-red-500 transition-colors font-medium py-2">Locations</NuxtLink>
        <NuxtLink to="/contact" class="btn-primary w-full justify-center">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false
    }
  }
}
</script>
