<template>
  <header class="bg-gradient-to-r from-mountain-blue-800 to-mountain-blue-600 text-white shadow-md">
    <div class="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between">
      <div class="flex items-center mb-3 sm:mb-0">
        <NuxtLink to="/" class="text-2xl font-display font-bold tracking-tight">Mountain Vending</NuxtLink>
      </div>
      <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2">
        <NuxtLink to="/" class="text-white hover:text-mountain-blue-200 transition-colors font-medium">Home</NuxtLink>
        <NuxtLink to="/about" class="text-white hover:text-mountain-blue-200 transition-colors font-medium">About</NuxtLink>
        <NuxtLink to="/services" class="text-white hover:text-mountain-blue-200 transition-colors font-medium">Services</NuxtLink>
        <NuxtLink to="/products" class="text-white hover:text-mountain-blue-200 transition-colors font-medium">Products</NuxtLink>
        <NuxtLink to="/locations" class="text-white hover:text-mountain-blue-200 transition-colors font-medium">Locations</NuxtLink>
        <NuxtLink to="/contact" class="text-white hover:text-mountain-blue-200 transition-colors font-medium">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>
