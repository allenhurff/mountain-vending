<template>
  <header class="bg-white shadow-md relative z-10">
    <div class="container-custom py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center">
            <img src="~/assets/images/branding/logo-512px.png" alt="Mountain Vending Logo" class="h-10 w-auto mr-2" />
            <span class="text-mountain-red-500 font-heading font-bold text-2xl md:text-3xl">Mountain Vending</span>
          </NuxtLink>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <NuxtLink 
            v-for="item in navigationItems" 
            :key="item.name" 
            :to="item.href"
            class="font-medium text-mountain-gray-600 hover:text-mountain-red-500 transition-colors duration-300"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>
        
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen" 
            class="text-mountain-gray-600 hover:text-mountain-red-500 focus:outline-none"
          >
            <svg 
              v-if="!isMobileMenuOpen" 
              class="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              v-else 
              class="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Navigation -->
    <div 
      v-if="isMobileMenuOpen" 
      class="md:hidden bg-white border-t border-mountain-gray-200 py-2"
    >
      <div class="container-custom space-y-1">
        <NuxtLink 
          v-for="item in navigationItems" 
          :key="item.name" 
          :to="item.href"
          class="block py-2 font-medium text-mountain-gray-600 hover:text-mountain-red-500 transition-colors duration-300"
          @click="isMobileMenuOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const navigationItems = [
  { name: 'Products', href: '/products' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Customize', href: '/customize' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];
</script>