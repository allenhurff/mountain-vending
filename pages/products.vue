<template>
  <div>
    <div class="container-page">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-display font-bold text-mountain-blue-600 mb-6">
          Our Products
        </h1>
        <p class="text-lg text-mountain-gray-600">
          We carefully select quality items that our mountain customers love.
        </p>
      </div>
      
      <div class="mb-16">
        <h2 class="text-2xl font-bold text-mountain-gray-800 mb-8 text-center">Snack Categories</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div class="card">
            <div class="h-40 bg-mountain-blue-50 rounded-t-lg flex items-center justify-center mb-4">
              <div class="w-20 h-20 rounded-full bg-mountain-blue-100 flex items-center justify-center">
                <span class="font-bold text-mountain-blue-600">CP</span>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-mountain-gray-800">Chips & Pretzels</h3>
            <p class="text-mountain-gray-600">Classic and specialty potato chips, tortilla chips, pretzels, and other salty snacks.</p>
          </div>
          
          <div class="card">
            <div class="h-40 bg-mountain-green-50 rounded-t-lg flex items-center justify-center mb-4">
              <div class="w-20 h-20 rounded-full bg-mountain-green-100 flex items-center justify-center">
                <span class="font-bold text-mountain-green-600">CB</span>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-mountain-gray-800">Candy & Bars</h3>
            <p class="text-mountain-gray-600">Chocolate bars, candy, mints, and gum for a sweet treat on the go.</p>
          </div>
          
          <div class="card">
            <div class="h-40 bg-mountain-blue-50 rounded-t-lg flex items-center justify-center mb-4">
              <div class="w-20 h-20 rounded-full bg-mountain-blue-100 flex items-center justify-center">
                <span class="font-bold text-mountain-blue-600">HO</span>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-mountain-gray-800">Healthy Options</h3>
            <p class="text-mountain-gray-600">Granola bars, trail mix, dried fruits, nuts, and other nutritious snacks.</p>
          </div>
        </div>
      </div>
      
      <div class="mb-16">
        <h2 class="text-2xl font-bold text-mountain-gray-800 mb-8 text-center">Beverage Options</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div class="card">
            <div class="h-40 bg-mountain-green-50 rounded-t-lg flex items-center justify-center mb-4">
              <div class="w-20 h-20 rounded-full bg-mountain-green-100 flex items-center justify-center">
                <span class="font-bold text-mountain-green-600">SD</span>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-mountain-gray-800">Soft Drinks</h3>
            <p class="text-mountain-gray-600">Popular carbonated beverages in various flavors and brands.</p>
          </div>
          
          <div class="card">
            <div class="h-40 bg-mountain-blue-50 rounded-t-lg flex items-center justify-center mb-4">
              <div class="w-20 h-20 rounded-full bg-mountain-blue-100 flex items-center justify-center">
                <span class="font-bold text-mountain-blue-600">WJ</span>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-mountain-gray-800">Water & Juices</h3>
            <p class="text-mountain-gray-600">Bottled water, sparkling water, and 100% fruit juices.</p>
          </div>
          
          <div class="card">
            <div class="h-40 bg-mountain-green-50 rounded-t-lg flex items-center justify-center mb-4">
              <div class="w-20 h-20 rounded-full bg-mountain-green-100 flex items-center justify-center">
                <span class="font-bold text-mountain-green-600">SE</span>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-2 text-mountain-gray-800">Sports & Energy</h3>
            <p class="text-mountain-gray-600">Sports drinks and energy beverages for active mountain visitors.</p>
          </div>
        </div>
      </div>
      
      <div class="bg-mountain-blue-50 rounded-2xl p-8 md:p-12">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-mountain-blue-700 mb-4">Custom Product Selection</h2>
          <p class="text-mountain-gray-700 mb-6">
            Business owners can request custom product selections for their location based on customer preferences.
          </p>
          <NuxtLink to="/contact" class="btn-secondary">Request Custom Selection</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>