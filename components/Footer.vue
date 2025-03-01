<template>
  <footer class="mt-auto bg-mountain-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Mountain Vending</h3>
          <p class="text-mountain-gray-300">
            Serving the San Bernardino Mountains with quality vending services.
          </p>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-mountain-gray-300 hover:text-white">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-mountain-gray-300 hover:text-white">About</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Contact</h3>
          <p class="text-mountain-gray-300">
            Email: info@mountainvending.com<br>
            Phone: (909) 555-1234
          </p>
        </div>
      </div>
      <div class="mt-8 pt-6 border-t border-mountain-gray-700 text-center text-sm text-mountain-gray-400">
        © 2023-2025 Mountain Vending. All rights reserved.
      </div>
    </div>
  </footer>
</template>