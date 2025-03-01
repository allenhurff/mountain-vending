<template>
  <header class="bg-gradient-to-r from-mountain-blue-800 to-mountain-blue-600 text-white shadow-md">
    <div class="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between">
      <div class="flex items-center mb-3 sm:mb-0">
        <h1 class="text-2xl font-display font-bold tracking-tight">Mountain Vending</h1>
      </div>
      <nav class="flex space-x-6">
        <NuxtLink to="/" class="text-white hover:text-mountain-blue-200 transition-colors font-medium">Home</NuxtLink>
        <NuxtLink to="/about" class="text-white hover:text-mountain-blue-200 transition-colors font-medium">About</NuxtLink>
      </nav>
    </div>
  </header>
</template>
