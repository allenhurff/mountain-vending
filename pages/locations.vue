<template>
  <div>
    <div class="container-page">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-display font-bold text-mountain-blue-600 mb-6">
          Our Locations
        </h1>
        <p class="text-lg text-mountain-gray-600">
          Find Mountain Vending machines throughout the San Bernardino Mountains.
        </p>
      </div>
      
      <div class="mb-16">
        <div class="bg-white rounded-xl shadow-card p-8 mb-12">
          <div class="h-64 bg-mountain-gray-200 rounded-lg mb-6">
            <!-- Placeholder for map - in real implementation, this would be an embedded Google Map -->
            <div class="h-full flex items-center justify-center">
              <p class="text-mountain-gray-600 font-medium">Interactive Map Coming Soon</p>
            </div>
          </div>
          <p class="text-mountain-gray-600 text-center">
            Use the map above to find vending machines near you, or browse our locations by area below.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card">
            <h2 class="text-xl font-bold text-mountain-blue-600 mb-4">Lake Arrowhead Area</h2>
            <ul class="space-y-4">
              <li class="border-b border-mountain-gray-200 pb-3">
                <h3 class="font-bold text-mountain-gray-800">Lake Arrowhead Village</h3>
                <p class="text-mountain-gray-600">28200 Highway 189, Lake Arrowhead, CA</p>
                <p class="text-sm text-mountain-gray-500">Near the main entrance and food court</p>
              </li>
              <li class="border-b border-mountain-gray-200 pb-3">
                <h3 class="font-bold text-mountain-gray-800">Arrowhead Resort</h3>
                <p class="text-mountain-gray-600">27984 Highway 189, Lake Arrowhead, CA</p>
                <p class="text-sm text-mountain-gray-500">Lobby area and recreation center</p>
              </li>
              <li>
                <h3 class="font-bold text-mountain-gray-800">Blue Jay Village Center</h3>
                <p class="text-mountain-gray-600">27264 Highway 189, Blue Jay, CA</p>
                <p class="text-sm text-mountain-gray-500">Near the market entrance</p>
              </li>
            </ul>
          </div>
          
          <div class="card">
            <h2 class="text-xl font-bold text-mountain-green-600 mb-4">Big Bear Area</h2>
            <ul class="space-y-4">
              <li class="border-b border-mountain-gray-200 pb-3">
                <h3 class="font-bold text-mountain-gray-800">Big Bear Village</h3>
                <p class="text-mountain-gray-600">630 Bartlett Road, Big Bear Lake, CA</p>
                <p class="text-sm text-mountain-gray-500">Multiple locations throughout the village</p>
              </li>
              <li class="border-b border-mountain-gray-200 pb-3">
                <h3 class="font-bold text-mountain-gray-800">Snow Summit Ski Resort</h3>
                <p class="text-mountain-gray-600">880 Summit Blvd, Big Bear Lake, CA</p>
                <p class="text-sm text-mountain-gray-500">Base lodge and rental area</p>
              </li>
              <li>
                <h3 class="font-bold text-mountain-gray-800">Big Bear Lake Recreation Area</h3>
                <p class="text-mountain-gray-600">41220 Park Ave, Big Bear Lake, CA</p>
                <p class="text-sm text-mountain-gray-500">Near the public restrooms</p>
              </li>
            </ul>
          </div>
          
          <div class="card">
            <h2 class="text-xl font-bold text-mountain-blue-600 mb-4">Running Springs Area</h2>
            <ul class="space-y-4">
              <li class="border-b border-mountain-gray-200 pb-3">
                <h3 class="font-bold text-mountain-gray-800">Running Springs Community Center</h3>
                <p class="text-mountain-gray-600">31251 Hilltop Blvd, Running Springs, CA</p>
                <p class="text-sm text-mountain-gray-500">Main entrance area</p>
              </li>
              <li>
                <h3 class="font-bold text-mountain-gray-800">Snow Valley Mountain Resort</h3>
                <p class="text-mountain-gray-600">35100 CA-18, Running Springs, CA</p>
                <p class="text-sm text-mountain-gray-500">Base area and lodge</p>
              </li>
            </ul>
          </div>
          
          <div class="card">
            <h2 class="text-xl font-bold text-mountain-green-600 mb-4">Crestline Area</h2>
            <ul class="space-y-4">
              <li class="border-b border-mountain-gray-200 pb-3">
                <h3 class="font-bold text-mountain-gray-800">Lake Gregory Regional Park</h3>
                <p class="text-mountain-gray-600">24171 Lake Drive, Crestline, CA</p>
                <p class="text-sm text-mountain-gray-500">Near the beach area</p>
              </li>
              <li>
                <h3 class="font-bold text-mountain-gray-800">Crestline Village</h3>
                <p class="text-mountain-gray-600">23930 Lake Drive, Crestline, CA</p>
                <p class="text-sm text-mountain-gray-500">Near Goodwin's Market</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="bg-mountain-blue-50 rounded-2xl p-8 md:p-12">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-mountain-blue-700 mb-4">Suggest a New Location</h2>
          <p class="text-mountain-gray-700 mb-6">
            Know a spot that could benefit from a Mountain Vending machine? Let us know!
          </p>
          <NuxtLink to="/contact" class="btn-secondary">Suggest Location</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>