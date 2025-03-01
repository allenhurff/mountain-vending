<!-- pages/about.vue -->
<template>
  <div>
    <div class="container-page">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-display font-bold text-mountain-blue-600 mb-8">About Mountain Vending</h1>
        
        <div class="card mb-10">
          <h2 class="text-2xl font-bold text-mountain-gray-800 mb-4">Our Story</h2>
          <p class="text-mountain-gray-700 mb-4">
            Mountain Vending was founded in 2023 with a simple mission: to provide convenient access to quality refreshments 
            throughout the San Bernardino Mountains. As local residents ourselves, we understand the unique needs of both 
            mountain communities and visitors.
          </p>
          <p class="text-mountain-gray-700">
            What started as a small operation with just three machines has grown into a network spanning multiple 
            mountain communities including Lake Arrowhead, Big Bear, and Running Springs.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div class="card">
            <h2 class="text-xl font-bold text-mountain-gray-800 mb-3">Our Mission</h2>
            <p class="text-mountain-gray-700">
              To provide reliable, convenient access to quality refreshments while supporting local mountain communities.
            </p>
          </div>
          
          <div class="card">
            <h2 class="text-xl font-bold text-mountain-gray-800 mb-3">Our Vision</h2>
            <p class="text-mountain-gray-700">
              To be the premier vending service throughout the San Bernardino Mountains, known for quality, reliability and community involvement.
            </p>
          </div>
        </div>
        
        <div class="bg-mountain-green-50 rounded-2xl p-8">
          <h2 class="text-2xl font-bold text-mountain-green-700 mb-4">Contact Us</h2>
          <p class="text-mountain-gray-700 mb-6">
            Interested in our services or have questions? We'd love to hear from you!
          </p>
          <button class="btn-secondary">Get In Touch</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>