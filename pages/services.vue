<template>
  <div>
    <div class="container-page">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-display font-bold text-mountain-blue-600 mb-6">
          Our Services
        </h1>
        <p class="text-lg text-mountain-gray-600">
          Mountain Vending offers a variety of vending solutions to meet your needs.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div class="card">
          <div class="text-mountain-blue-500 text-3xl mb-4">
            <div class="w-16 h-16 rounded-full bg-mountain-blue-100 flex items-center justify-center">
              <span class="font-bold">SV</span>
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2 text-mountain-gray-800">Snack Vending</h3>
          <p class="text-mountain-gray-600 mb-4">We offer a variety of premium snack machines for your business or public location. Our snack machines are stocked with quality products that your customers or employees will love.</p>
          <ul class="text-mountain-gray-600 list-disc list-inside mb-4">
            <li>Various machine sizes available</li>
            <li>Customizable product selection</li>
            <li>Regular restocking service</li>
          </ul>
        </div>
        
        <div class="card">
          <div class="text-mountain-green-500 text-3xl mb-4">
            <div class="w-16 h-16 rounded-full bg-mountain-green-100 flex items-center justify-center">
              <span class="font-bold">BV</span>
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2 text-mountain-gray-800">Beverage Vending</h3>
          <p class="text-mountain-gray-600 mb-4">Our beverage machines provide cold drinks to keep customers refreshed year-round. We offer both carbonated and non-carbonated options.</p>
          <ul class="text-mountain-gray-600 list-disc list-inside mb-4">
            <li>Cold drink machines</li>
            <li>Coffee and hot beverage options</li>
            <li>Water and healthy alternatives</li>
          </ul>
        </div>
        
        <div class="card">
          <div class="text-mountain-blue-500 text-3xl mb-4">
            <div class="w-16 h-16 rounded-full bg-mountain-blue-100 flex items-center justify-center">
              <span class="font-bold">CV</span>
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2 text-mountain-gray-800">Combo Machines</h3>
          <p class="text-mountain-gray-600 mb-4">Our combination machines offer both snacks and beverages in a single unit, perfect for locations with limited space.</p>
          <ul class="text-mountain-gray-600 list-disc list-inside mb-4">
            <li>Space-efficient solution</li>
            <li>Versatile product options</li>
            <li>Modern payment systems</li>
          </ul>
        </div>
        
        <div class="card">
          <div class="text-mountain-green-500 text-3xl mb-4">
            <div class="w-16 h-16 rounded-full bg-mountain-green-100 flex items-center justify-center">
              <span class="font-bold">CS</span>
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2 text-mountain-gray-800">Custom Solutions</h3>
          <p class="text-mountain-gray-600 mb-4">We work with businesses to create custom vending solutions tailored to your specific needs and space requirements.</p>
          <ul class="text-mountain-gray-600 list-disc list-inside mb-4">
            <li>Site evaluation</li>
            <li>Customized machine selection</li>
            <li>Flexible service agreements</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-mountain-blue-50 rounded-2xl p-8 md:p-12">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-mountain-blue-700 mb-4">Ready to Get Started?</h2>
          <p class="text-mountain-gray-700 mb-6">
            Contact us today to discuss how Mountain Vending can provide the perfect vending solution for your location.
          </p>
          <NuxtLink to="/contact" class="btn-primary">Contact Us</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>