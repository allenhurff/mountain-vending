<template>
    <div class="bg-white rounded-xl shadow-md overflow-hidden">
      <div class="p-6 border-b border-mountain-gray-200">
        <h3 class="text-2xl font-bold text-mountain-gray-800">Vending Machine Customizer</h3>
        <p class="text-mountain-gray-600 mt-2">
          Build your perfect vending machine by selecting features and options.
        </p>
      </div>
      
      <div class="p-6">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <!-- Machine Type Selection -->
          <div class="lg:col-span-2">
            <h4 class="text-xl font-semibold mb-4">Choose Your Machine</h4>
            
            <div class="grid grid-cols-1 gap-4 mb-6">
              <div 
                v-for="machine in machineTypes" 
                :key="machine.id"
                @click="selectMachine(machine.id)"
                class="border rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-md"
                :class="{ 
                  'border-mountain-red-500 bg-mountain-red-50': selectedMachine === machine.id,
                  'border-mountain-gray-200': selectedMachine !== machine.id
                }"
              >
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div class="w-16 h-16 rounded-lg bg-mountain-gray-100 flex items-center justify-center">
                      <span class="text-mountain-gray-400 text-xs">{{ machine.name.charAt(0) }}</span>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="font-semibold" :class="{ 'text-mountain-red-500': selectedMachine === machine.id }">
                      {{ machine.name }}
                    </h5>
                    <p class="text-sm text-mountain-gray-600">{{ machine.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Customization Options -->
            <div v-if="selectedMachine">
              <h4 class="text-xl font-semibold mb-4">Customize Features</h4>
              
              <div class="space-y-6">
                <!-- Payment Systems -->
                <div>
                  <h5 class="font-medium text-mountain-gray-700 mb-3">Payment System</h5>
                  <div class="flex flex-wrap gap-3">
                    <button
                      v-for="option in paymentOptions"
                      :key="option.id"
                      @click="toggleOption('payment', option.id)"
                      class="px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300"
                      :class="isOptionSelected('payment', option.id) 
                        ? 'bg-mountain-red-500 text-white'
                        : 'bg-mountain-gray-100 text-mountain-gray-700 hover:bg-mountain-gray-200'"
                    >
                      {{ option.name }}
                    </button>
                  </div>
                </div>
                
                <!-- Connectivity -->
                <div>
                  <h5 class="font-medium text-mountain-gray-700 mb-3">Connectivity</h5>
                  <div class="flex flex-wrap gap-3">
                    <button
                      v-for="option in connectivityOptions"
                      :key="option.id"
                      @click="toggleOption('connectivity', option.id)"
                      class="px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300"
                      :class="isOptionSelected('connectivity', option.id) 
                        ? 'bg-mountain-red-500 text-white'
                        : 'bg-mountain-gray-100 text-mountain-gray-700 hover:bg-mountain-gray-200'"
                    >
                      {{ option.name }}
                    </button>
                  </div>
                </div>
                
                <!-- Display Options -->
                <div>
                  <h5 class="font-medium text-mountain-gray-700 mb-3">Display Type</h5>
                  <div class="flex flex-wrap gap-3">
                    <button
                      v-for="option in displayOptions"
                      :key="option.id"
                      @click="selectSingleOption('display', option.id)"
                      class="px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300"
                      :class="selectedOptions.display === option.id 
                        ? 'bg-mountain-red-500 text-white'
                        : 'bg-mountain-gray-100 text-mountain-gray-700 hover:bg-mountain-gray-200'"
                    >
                      {{ option.name }}
                    </button>
                  </div>
                </div>
                
                <!-- Branding Options -->
                <div>
                  <h5 class="font-medium text-mountain-gray-700 mb-3">Branding</h5>
                  <div class="flex flex-wrap gap-3">
                    <button
                      v-for="option in brandingOptions"
                      :key="option.id"
                      @click="toggleOption('branding', option.id)"
                      class="px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300"
                      :class="isOptionSelected('branding', option.id) 
                        ? 'bg-mountain-red-500 text-white'
                        : 'bg-mountain-gray-100 text-mountain-gray-700 hover:bg-mountain-gray-200'"
                    >
                      {{ option.name }}
                    </button>
                  </div>
                </div>
                
                <!-- Additional Features -->
                <div>
                  <h5 class="font-medium text-mountain-gray-700 mb-3">Additional Features</h5>
                  <div class="flex flex-wrap gap-3">
                    <button
                      v-for="option in additionalFeatures"
                      :key="option.id"
                      @click="toggleOption('additionalFeatures', option.id)"
                      class="px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300"
                      :class="isOptionSelected('additionalFeatures', option.id) 
                        ? 'bg-mountain-red-500 text-white'
                        : 'bg-mountain-gray-100 text-mountain-gray-700 hover:bg-mountain-gray-200'"
                    >
                      {{ option.name }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Preview and Summary -->
          <div class="lg:col-span-3">
            <h4 class="text-xl font-semibold mb-4">Your Custom Machine</h4>
            
            <div v-if="!selectedMachine" class="bg-mountain-gray-50 rounded-lg p-8 flex flex-col items-center justify-center h-64">
              <svg class="w-16 h-16 text-mountain-gray-300 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p class="text-mountain-gray-500 text-center">
                Select a machine type to start customizing.
              </p>
            </div>
            
            <div v-else>
              <!-- Machine Preview -->
              <div class="mb-6 rounded-lg overflow-hidden border border-mountain-gray-200">
                <div class="relative aspect-w-16 aspect-h-9 bg-mountain-gray-100">
                  <!-- Machine visualization would go here - using placeholder -->
                  <div class="absolute inset-0 flex items-center justify-center flex-col">
                    <div class="text-center px-4">
                      <div class="inline-block p-6 rounded-lg" 
                        :class="{'bg-mountain-red-100': selectedBrandColor === 'red', 'bg-blue-100': selectedBrandColor === 'blue', 'bg-green-100': selectedBrandColor === 'green', 'bg-purple-100': selectedBrandColor === 'purple', 'bg-mountain-gray-200': selectedBrandColor === 'none'}"
                      >
                        <svg class="w-20 h-20" :class="{'text-mountain-red-500': selectedBrandColor === 'red', 'text-blue-500': selectedBrandColor === 'blue', 'text-green-500': selectedBrandColor === 'green', 'text-purple-500': selectedBrandColor === 'purple', 'text-mountain-gray-600': selectedBrandColor === 'none'}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <p class="mt-4 font-medium text-mountain-gray-600">
                        {{ getSelectedMachine.name }} with {{ customOptionsCount }} custom features
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Configuration Summary -->
              <div class="bg-mountain-gray-50 rounded-lg p-6 mb-6">
                <h5 class="font-semibold text-mountain-gray-800 mb-4">Your Configuration</h5>
                
                <div class="space-y-3">
                  <div class="flex justify-between">
                    <span class="text-mountain-gray-600">Base Machine</span>
                    <span class="font-medium">{{ getSelectedMachine.name }}</span>
                  </div>
                  
                  <template v-if="selectedOptions.payment.length">
                    <div class="flex justify-between">
                      <span class="text-mountain-gray-600">Payment Options</span>
                      <span class="font-medium">{{ getSelectedOptionsText('payment') }}</span>
                    </div>
                  </template>
                  
                  <template v-if="selectedOptions.connectivity.length">
                    <div class="flex justify-between">
                      <span class="text-mountain-gray-600">Connectivity</span>
                      <span class="font-medium">{{ getSelectedOptionsText('connectivity') }}</span>
                    </div>
                  </template>
                  
                  <template v-if="selectedOptions.display">
                    <div class="flex justify-between">
                      <span class="text-mountain-gray-600">Display</span>
                      <span class="font-medium">{{ getDisplayOptionName }}</span>
                    </div>
                  </template>
                  
                  <template v-if="selectedOptions.branding.length">
                    <div class="flex justify-between">
                      <span class="text-mountain-gray-600">Branding</span>
                      <span class="font-medium">{{ getSelectedOptionsText('branding') }}</span>
                    </div>
                  </template>
                  
                  <template v-if="selectedOptions.additionalFeatures.length">
                    <div class="flex justify-between">
                      <span class="text-mountain-gray-600">Additional Features</span>
                      <span class="font-medium">{{ getSelectedOptionsText('additionalFeatures') }}</span>
                    </div>
                  </template>
                  
                  <div class="pt-3 border-t border-mountain-gray-200 flex justify-between">
                    <span class="font-medium text-mountain-gray-700">Estimated Price</span>
                    <span class="font-bold text-mountain-red-500">${{ estimatedPrice.toLocaleString() }}</span>
                  </div>
                </div>
              </div>
              
              <!-- Brand Color Selection -->
              <div class="mb-6">
                <h5 class="font-medium text-mountain-gray-700 mb-3">Preview Brand Color</h5>
                <div class="flex flex-wrap gap-3">
                  <button
                    v-for="color in brandColors"
                    :key="color.id"
                    @click="selectedBrandColor = color.id"
                    class="w-8 h-8 rounded-full border-2 transition-all duration-300"
                    :class="{
                      'border-mountain-gray-400': selectedBrandColor === color.id,
                      'border-transparent': selectedBrandColor !== color.id,
                      'bg-mountain-red-500': color.id === 'red',
                      'bg-blue-500': color.id === 'blue',
                      'bg-green-500': color.id === 'green',
                      'bg-purple-500': color.id === 'purple',
                      'bg-mountain-gray-300': color.id === 'none'
                    }"
                  >
                  </button>
                </div>
              </div>
              
              <!-- Action Buttons -->
              <div class="flex flex-wrap gap-3">
                <button @click="saveConfiguration" class="btn-primary flex-1">
                  Request Quote
                </button>
                <button @click="resetCustomizer" class="btn-secondary flex-1">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive, computed } from 'vue';
  
  // Machine types
  const machineTypes = [
    {
      id: 'beverage-pro',
      name: 'Beverage Pro X1',
      description: 'Our flagship beverage vending machine with smart features.',
      basePrice: 4500
    },
    {
      id: 'snack-master',
      name: 'Snack Master 3000',
      description: 'Premium snack vending solution with customizable shelving.',
      basePrice: 4000
    },
    {
      id: 'combo-elite',
      name: 'Combo Elite Series',
      description: 'Versatile combination for both beverages and snacks.',
      basePrice: 7500
    },
    {
      id: 'fresh-market',
      name: 'Fresh Market Mini',
      description: 'Specialized vending for fresh food and healthy options.',
      basePrice: 9000
    },
    {
      id: 'coffee-express',
      name: 'Coffee Express Station',
      description: 'Premium coffee solution with multiple drink options.',
      basePrice: 6500
    }
  ];
  
  // Customization options
  const paymentOptions = [
    { id: 'cash', name: 'Cash', price: 0 },
    { id: 'card', name: 'Card Reader', price: 250 },
    { id: 'mobile', name: 'Mobile Payment', price: 350 },
    { id: 'contactless', name: 'Contactless', price: 300 }
  ];
  
  const connectivityOptions = [
    { id: 'wifi', name: 'Wi-Fi', price: 150 },
    { id: 'ethernet', name: 'Ethernet', price: 100 },
    { id: 'cellular', name: 'Cellular', price: 300 },
    { id: 'bluetooth', name: 'Bluetooth', price: 100 }
  ];
  
  const displayOptions = [
    { id: 'basic', name: 'Basic LCD', price: 0 },
    { id: 'touch', name: 'Touchscreen', price: 500 },
    { id: 'interactive', name: 'Interactive HD', price: 800 }
  ];
  
  const brandingOptions = [
    { id: 'custom-wrap', name: 'Custom Wrap', price: 400 },
    { id: 'logo', name: 'Logo Integration', price: 200 },
    { id: 'digital-branding', name: 'Digital Branding', price: 300 },
    { id: 'illuminated', name: 'Illuminated Signs', price: 250 }
  ];
  
  const additionalFeatures = [
    { id: 'remote-monitoring', name: 'Remote Monitoring', price: 350 },
    { id: 'inventory-tracking', name: 'Inventory Tracking', price: 300 },
    { id: 'energy-efficient', name: 'Energy Efficient', price: 200 },
    { id: 'anti-theft', name: 'Anti-Theft System', price: 250 },
    { id: 'touchless', name: 'Touchless Vending', price: 400 }
  ];
  
  const brandColors = [
    { id: 'red', name: 'Red' },
    { id: 'blue', name: 'Blue' },
    { id: 'green', name: 'Green' },
    { id: 'purple', name: 'Purple' },
    { id: 'none', name: 'None' }
  ];
  
  // State
  const selectedMachine = ref('');
  const selectedBrandColor = ref('none');
  const selectedOptions = reactive({
    payment: [],
    connectivity: [],
    display: 'basic',
    branding: [],
    additionalFeatures: []
  });
  
  // Computed properties
  const getSelectedMachine = computed(() => {
    return machineTypes.find(m => m.id === selectedMachine.value) || {};
  });
  
  const getDisplayOptionName = computed(() => {
    const option = displayOptions.find(opt => opt.id === selectedOptions.display);
    return option ? option.name : '';
  });
  
  const customOptionsCount = computed(() => {
    return (
      selectedOptions.payment.length +
      selectedOptions.connectivity.length +
      1 + // Display always has one option selected
      selectedOptions.branding.length +
      selectedOptions.additionalFeatures.length
    );
  });
  
  const estimatedPrice = computed(() => {
    if (!selectedMachine.value) return 0;
    
    // Base price of the machine
    let totalPrice = getSelectedMachine.value.basePrice;
    
    // Add payment options
    selectedOptions.payment.forEach(optionId => {
      const option = paymentOptions.find(opt => opt.id === optionId);
      if (option) totalPrice += option.price;
    });
    
    // Add connectivity options
    selectedOptions.connectivity.forEach(optionId => {
      const option = connectivityOptions.find(opt => opt.id === optionId);
      if (option) totalPrice += option.price;
    });
    
    // Add display option
    const displayOption = displayOptions.find(opt => opt.id === selectedOptions.display);
    if (displayOption) totalPrice += displayOption.price;
    
    // Add branding options
    selectedOptions.branding.forEach(optionId => {
      const option = brandingOptions.find(opt => opt.id === optionId);
      if (option) totalPrice += option.price;
    });
    
    // Add additional features
    selectedOptions.additionalFeatures.forEach(optionId => {
      const option = additionalFeatures.find(opt => opt.id === optionId);
      if (option) totalPrice += option.price;
    });
    
    return totalPrice;
  });
  
  // Methods
  const selectMachine = (machineId) => {
    selectedMachine.value = machineId;
  };
  
  const toggleOption = (category, optionId) => {
    const optionIndex = selectedOptions[category].indexOf(optionId);
    
    if (optionIndex === -1) {
      // Add option
      selectedOptions[category].push(optionId);
    } else {
      // Remove option
      selectedOptions[category].splice(optionIndex, 1);
    }
  };
  
  const selectSingleOption = (category, optionId) => {
    selectedOptions[category] = optionId;
  };
  
  const isOptionSelected = (category, optionId) => {
    return selectedOptions[category].includes(optionId);
  };
  
  const getSelectedOptionsText = (category) => {
    const selectedIds = selectedOptions[category];
    let options;
    
    switch (category) {
      case 'payment':
        options = paymentOptions;
        break;
      case 'connectivity':
        options = connectivityOptions;
        break;
      case 'branding':
        options = brandingOptions;
        break;
      case 'additionalFeatures':
        options = additionalFeatures;
        break;
      default:
        options = [];
    }
    
    const selectedNames = selectedIds.map(id => {
      const option = options.find(opt => opt.id === id);
      return option ? option.name : '';
    }).filter(name => name !== '');
    
    return selectedNames.join(', ');
  };
  
  const saveConfiguration = () => {
    // In a real app, this would send the configuration to a backend or show a form
    alert('Your custom configuration has been saved! Our team will contact you with a detailed quote.');
  };
  
  const resetCustomizer = () => {
    selectedMachine.value = '';
    selectedBrandColor.value = 'none';
    selectedOptions.payment = [];
    selectedOptions.connectivity = [];
    selectedOptions.display = 'basic';
    selectedOptions.branding = [];
    selectedOptions.additionalFeatures = [];
  };
  </script>