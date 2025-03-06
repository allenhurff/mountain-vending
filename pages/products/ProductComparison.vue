<template>
    <div class="bg-white rounded-xl shadow-md overflow-hidden">
      <div class="p-6 border-b border-mountain-gray-200">
        <h3 class="text-2xl font-bold text-mountain-gray-800">Compare Vending Machines</h3>
        <p class="text-mountain-gray-600 mt-2">
          Select products to compare features and find the perfect machine for your needs.
        </p>
      </div>
      
      <!-- Product Selection -->
      <div class="p-6 bg-mountain-gray-50 border-b border-mountain-gray-200">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="(selectedProduct, index) in selectedProducts" :key="index">
            <label :for="`product-${index}`" class="block text-mountain-gray-700 font-medium mb-2">
              {{ index === 0 ? 'First Product' : index === 1 ? 'Second Product' : 'Third Product' }}
            </label>
            <select 
              :id="`product-${index}`" 
              v-model="selectedProducts[index]"
              class="w-full px-4 py-2 border border-mountain-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-red-500"
              :disabled="loading"
            >
              <option value="">Select a product</option>
              <option v-for="product in products" :key="product.id" :value="product.id">
                {{ product.name }}
              </option>
            </select>
          </div>
        </div>
        
        <div class="mt-6 flex justify-center">
          <button 
            @click="compareProducts" 
            class="btn-primary"
            :disabled="!canCompare || loading"
            :class="{ 'opacity-50 cursor-not-allowed': !canCompare || loading }"
          >
            <span v-if="loading">
              <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Comparing...
            </span>
            <span v-else>
              Compare Products
            </span>
          </button>
        </div>
      </div>
      
      <!-- Comparison Table -->
      <div v-if="showComparison" class="p-6 overflow-x-auto">
        <table class="w-full table-auto border-collapse">
          <thead>
            <tr class="bg-mountain-gray-50">
              <th class="px-4 py-3 text-left text-mountain-gray-700 font-semibold border-b border-mountain-gray-200 w-1/4">Feature</th>
              <th 
                v-for="productId in displayProducts" 
                :key="productId" 
                class="px-4 py-3 text-left text-mountain-gray-700 font-semibold border-b border-mountain-gray-200"
              >
                {{ getProductById(productId)?.name || 'N/A' }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="feature in comparisonFeatures" :key="feature.id">
              <td class="px-4 py-3 border-b border-mountain-gray-200 font-medium">{{ feature.name }}</td>
              <td 
                v-for="productId in displayProducts" 
                :key="`${productId}-${feature.id}`" 
                class="px-4 py-3 border-b border-mountain-gray-200"
              >
                <template v-if="getProductById(productId)">
                  <span 
                    v-if="isHighlightedFeature(productId, feature.id)"
                    class="text-mountain-red-600 font-semibold"
                  >
                    {{ getFeatureValue(productId, feature.id) }}
                  </span>
                  <span v-else>
                    {{ getFeatureValue(productId, feature.id) }}
                  </span>
                </template>
                <span v-else>-</span>
              </td>
            </tr>
          </tbody>
        </table>
        
        <!-- Disclaimer -->
        <p class="mt-6 text-sm text-mountain-gray-500 italic">
          * Features and specifications may vary. Contact our sales team for detailed information.
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  // Sample product data
  const products = [
    {
      id: 'beverage-pro',
      name: 'Beverage Pro X1',
      category: 'beverage',
      features: {
        capacity: '500 cans/bottles',
        dimensions: '72" H x 39" W x 35" D',
        weight: '650 lbs',
        temperature: 'Adjustable 34°F - 41°F',
        payment: 'Cash, Card, Mobile, Contactless',
        energy: 'Energy Star Certified',
        warranty: '2 years parts & labor',
        display: '15" Digital Touch Screen',
        connectivity: 'Wi-Fi, Ethernet, Cellular',
        inventory: 'Real-time cloud monitoring'
      }
    },
    {
      id: 'beverage-compact',
      name: 'Beverage Compact',
      category: 'beverage',
      features: {
        capacity: '200 cans/bottles',
        dimensions: '60" H x 28" W x 30" D',
        weight: '375 lbs',
        temperature: 'Adjustable 36°F - 45°F',
        payment: 'Cash, Card, Contactless',
        energy: 'Energy Star Certified',
        warranty: '1 year parts & labor',
        display: '10" LCD Screen',
        connectivity: 'Wi-Fi, Ethernet',
        inventory: 'Basic monitoring system'
      }
    },
    {
      id: 'snack-master',
      name: 'Snack Master 3000',
      category: 'snack',
      features: {
        capacity: '150 items',
        dimensions: '72" H x 41" W x 32" D',
        weight: '550 lbs',
        temperature: 'Ambient with climate control',
        payment: 'Cash, Card, Mobile, Contactless',
        energy: 'Energy Star Certified',
        warranty: '2 years parts & labor',
        display: '12" Digital Touch Screen',
        connectivity: 'Wi-Fi, Ethernet, Cellular',
        inventory: 'Real-time cloud monitoring'
      }
    },
    {
      id: 'snack-deluxe',
      name: 'Snack Deluxe',
      category: 'snack',
      features: {
        capacity: '300 items',
        dimensions: '75" H x 45" W x 34" D',
        weight: '700 lbs',
        temperature: 'Ambient with climate control',
        payment: 'Cash, Card, Mobile, Contactless',
        energy: 'Energy Star Certified',
        warranty: '3 years parts & labor',
        display: '15" Digital Touch Screen',
        connectivity: 'Wi-Fi, Ethernet, Cellular',
        inventory: 'Advanced inventory tracking'
      }
    },
    {
      id: 'combo-elite',
      name: 'Combo Elite Series',
      category: 'combo',
      features: {
        capacity: '250 snacks + 300 beverages',
        dimensions: '78" H x 55" W x 36" D',
        weight: '850 lbs',
        temperature: 'Dual zone (34°F - 41°F / Ambient)',
        payment: 'Cash, Card, Mobile, Contactless',
        energy: 'Energy Star Certified',
        warranty: '3 years parts & labor',
        display: '17" Digital Touch Screen',
        connectivity: 'Wi-Fi, Ethernet, Cellular, Bluetooth',
        inventory: 'Premium inventory management'
      }
    },
    {
      id: 'fresh-market',
      name: 'Fresh Market Mini',
      category: 'specialty',
      features: {
        capacity: '80 fresh food items',
        dimensions: '72" H x 42" W x 34" D',
        weight: '675 lbs',
        temperature: 'Adjustable 33°F - 38°F',
        payment: 'Cash, Card, Mobile, Contactless',
        energy: 'Energy Star Certified',
        warranty: '2 years parts & labor',
        display: '15" Digital Touch Screen',
        connectivity: 'Wi-Fi, Ethernet, Cellular',
        inventory: 'Freshness tracking system'
      }
    }
  ];
  
  // Comparison features
  const comparisonFeatures = [
    { id: 'capacity', name: 'Capacity' },
    { id: 'dimensions', name: 'Dimensions' },
    { id: 'weight', name: 'Weight' },
    { id: 'temperature', name: 'Temperature Control' },
    { id: 'payment', name: 'Payment Options' },
    { id: 'energy', name: 'Energy Efficiency' },
    { id: 'warranty', name: 'Warranty' },
    { id: 'display', name: 'Display' },
    { id: 'connectivity', name: 'Connectivity' },
    { id: 'inventory', name: 'Inventory Management' }
  ];
  
  // State
  const selectedProducts = ref(['', '', '']);
  const showComparison = ref(false);
  const loading = ref(false);
  const highlightedFeatures = ref({});
  
  // Computed properties
  const canCompare = computed(() => {
    return selectedProducts.value.filter(p => p !== '').length >= 2;
  });
  
  const displayProducts = computed(() => {
    return selectedProducts.value.filter(p => p !== '');
  });
  
  // Methods
  const getProductById = (productId) => {
    return products.find(p => p.id === productId);
  };
  
  const getFeatureValue = (productId, featureId) => {
    const product = getProductById(productId);
    return product?.features[featureId] || 'Not available';
  };
  
  const isHighlightedFeature = (productId, featureId) => {
    return highlightedFeatures.value[productId]?.includes(featureId);
  };
  
  const compareProducts = async () => {
    if (!canCompare.value) return;
    
    loading.value = true;
    showComparison.value = false;
    
    // Simulate loading (would be a real API call in production)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Determine which features to highlight for each product
    const highlights = {};
    
    displayProducts.value.forEach(productId => {
      highlights[productId] = [];
      
      // Determine best features for each product (simplified logic)
      comparisonFeatures.forEach(feature => {
        const otherProducts = displayProducts.value.filter(p => p !== productId);
        const isHighlight = otherProducts.some(otherId => {
          const currentValue = getFeatureValue(productId, feature.id);
          const otherValue = getFeatureValue(otherId, feature.id);
          
          // Simple string comparison - would be more sophisticated in real app
          if (feature.id === 'capacity' || feature.id === 'weight') {
            // For features where bigger numbers might be better
            const currentNum = parseInt(currentValue);
            const otherNum = parseInt(otherValue);
            return !isNaN(currentNum) && !isNaN(otherNum) && currentNum > otherNum;
          }
          
          return currentValue.length > otherValue.length;
        });
        
        if (isHighlight) {
          highlights[productId].push(feature.id);
        }
      });
    });
    
    highlightedFeatures.value = highlights;
    showComparison.value = true;
    loading.value = false;
  };
  </script>