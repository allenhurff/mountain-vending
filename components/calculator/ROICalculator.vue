<template>
    <div class="bg-white rounded-xl shadow-md overflow-hidden">
      <div class="p-6 border-b border-mountain-gray-200">
        <h3 class="text-2xl font-bold text-mountain-gray-800">Vending ROI Calculator</h3>
        <p class="text-mountain-gray-600 mt-2">
          Estimate the return on investment for installing vending machines at your location.
        </p>
      </div>
      
      <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Input Form -->
        <div>
          <h4 class="text-xl font-semibold mb-4">Your Information</h4>
          
          <div class="space-y-4">
            <div>
              <label for="location-type" class="block text-mountain-gray-700 font-medium mb-2">
                Location Type
              </label>
              <select 
                id="location-type"
                v-model="formData.locationType"
                class="w-full px-4 py-2 border border-mountain-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-red-500"
              >
                <option value="office">Office / Workplace</option>
                <option value="education">Educational Institution</option>
                <option value="healthcare">Healthcare Facility</option>
                <option value="retail">Retail Location</option>
                <option value="entertainment">Entertainment Venue</option>
                <option value="transportation">Transportation Hub</option>
              </select>
            </div>
            
            <div>
              <label for="people-count" class="block text-mountain-gray-700 font-medium mb-2">
                Number of People Daily
              </label>
              <input 
                id="people-count"
                v-model.number="formData.peopleCount"
                type="number" 
                min="1"
                class="w-full px-4 py-2 border border-mountain-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-red-500"
                placeholder="e.g. 100"
              >
            </div>
            
            <div>
              <label for="machine-type" class="block text-mountain-gray-700 font-medium mb-2">
                Machine Type
              </label>
              <select 
                id="machine-type"
                v-model="formData.machineType"
                class="w-full px-4 py-2 border border-mountain-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-red-500"
              >
                <option value="beverage">Beverage Machine</option>
                <option value="snack">Snack Machine</option>
                <option value="combo">Combo Machine</option>
                <option value="fresh">Fresh Food Machine</option>
                <option value="coffee">Coffee Machine</option>
              </select>
            </div>
            
            <div>
              <label for="machine-count" class="block text-mountain-gray-700 font-medium mb-2">
                Number of Machines
              </label>
              <input 
                id="machine-count"
                v-model.number="formData.machineCount"
                type="number" 
                min="1"
                max="10"
                class="w-full px-4 py-2 border border-mountain-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-red-500"
                placeholder="e.g. 2"
              >
            </div>
            
            <div>
              <label for="revenue-model" class="block text-mountain-gray-700 font-medium mb-2">
                Revenue Model
              </label>
              <select 
                id="revenue-model"
                v-model="formData.revenueModel"
                class="w-full px-4 py-2 border border-mountain-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-red-500"
              >
                <option value="profit-share">Profit Sharing (No upfront cost)</option>
                <option value="lease">Machine Lease</option>
                <option value="purchase">Machine Purchase</option>
              </select>
            </div>
            
            <div class="pt-4">
              <button 
                @click="calculateROI"
                class="btn-primary w-full"
                :disabled="!isFormValid || isCalculating"
                :class="{ 'opacity-50 cursor-not-allowed': !isFormValid || isCalculating }"
              >
                <span v-if="isCalculating">
                  <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Calculating...
                </span>
                <span v-else>
                  Calculate ROI
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Results -->
        <div>
          <h4 class="text-xl font-semibold mb-4">Your Estimated Results</h4>
          
          <div v-if="!showResults" class="bg-mountain-gray-50 rounded-lg p-8 flex flex-col items-center justify-center h-full">
            <svg class="w-16 h-16 text-mountain-gray-300 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <p class="text-mountain-gray-500 text-center">
              Fill out the form and click "Calculate ROI" to see estimated results.
            </p>
          </div>
          
          <div v-else class="space-y-6">
            <div class="bg-mountain-gray-50 rounded-lg p-4">
              <div class="flex justify-between items-center">
                <h5 class="font-semibold text-mountain-gray-700">Monthly Revenue</h5>
                <span class="text-xl font-bold text-mountain-red-500">${{ results.monthlyRevenue.toLocaleString() }}</span>
              </div>
              <p class="text-sm text-mountain-gray-500 mt-1">
                Estimated monthly revenue based on your location type and population.
              </p>
            </div>
            
            <div class="bg-mountain-gray-50 rounded-lg p-4">
              <div class="flex justify-between items-center">
                <h5 class="font-semibold text-mountain-gray-700">Monthly Profit</h5>
                <span class="text-xl font-bold text-mountain-red-500">${{ results.monthlyProfit.toLocaleString() }}</span>
              </div>
              <p class="text-sm text-mountain-gray-500 mt-1">
                Your estimated monthly profit after operating costs.
              </p>
            </div>
            
            <div class="bg-mountain-gray-50 rounded-lg p-4">
              <div class="flex justify-between items-center">
                <h5 class="font-semibold text-mountain-gray-700">Annual Profit</h5>
                <span class="text-xl font-bold text-mountain-red-500">${{ results.annualProfit.toLocaleString() }}</span>
              </div>
              <p class="text-sm text-mountain-gray-500 mt-1">
                Projected annual profit from your vending machines.
              </p>
            </div>
            
            <div v-if="formData.revenueModel !== 'profit-share'" class="bg-mountain-gray-50 rounded-lg p-4">
              <div class="flex justify-between items-center">
                <h5 class="font-semibold text-mountain-gray-700">ROI Timeline</h5>
                <span class="text-xl font-bold text-mountain-red-500">{{ results.roiPeriod }} months</span>
              </div>
              <p class="text-sm text-mountain-gray-500 mt-1">
                Estimated time to recover your initial investment.
              </p>
            </div>
            
            <div class="pt-2">
              <p class="text-sm text-mountain-gray-500 italic">
                * These calculations are estimates. Contact our team for a detailed analysis based on your specific situation.
              </p>
              
              <button 
                @click="requestDetailedReport" 
                class="btn-secondary w-full mt-4"
              >
                Request Detailed Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive, computed } from 'vue';
  
  // Form data
  const formData = reactive({
    locationType: 'office',
    peopleCount: 100,
    machineType: 'combo',
    machineCount: 2,
    revenueModel: 'profit-share'
  });
  
  // State
  const showResults = ref(false);
  const isCalculating = ref(false);
  const results = reactive({
    monthlyRevenue: 0,
    monthlyProfit: 0,
    annualProfit: 0,
    roiPeriod: 0,
    initialInvestment: 0
  });
  
  // Computed properties
  const isFormValid = computed(() => {
    return (
      formData.peopleCount > 0 &&
      formData.machineCount > 0 &&
      formData.locationType &&
      formData.machineType &&
      formData.revenueModel
    );
  });
  
  // Methods
  const calculateROI = async () => {
    if (!isFormValid.value) return;
    
    isCalculating.value = true;
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Calculate base values based on location type and population
    const dailyUsageRates = {
      office: 0.35, // 35% of people use the machine daily
      education: 0.40,
      healthcare: 0.30,
      retail: 0.15,
      entertainment: 0.25,
      transportation: 0.20
    };
    
    const avgTransactionValues = {
      beverage: 2.50,
      snack: 2.25,
      combo: 3.75,
      fresh: 5.50,
      coffee: 3.00
    };
    
    const machineCosts = {
      beverage: 4500,
      snack: 4000,
      combo: 8000,
      fresh: 9500,
      coffee: 7000
    };
    
    const leaseCostPercentage = 0.05; // 5% of purchase price per month
    
    // Calculate usage and revenue
    const dailyUsers = formData.peopleCount * dailyUsageRates[formData.locationType];
    const transactionsPerDay = dailyUsers * formData.machineCount;
    const avgTransactionValue = avgTransactionValues[formData.machineType];
    
    // Calculate monthly revenue
    const dailyRevenue = transactionsPerDay * avgTransactionValue;
    const monthlyRevenue = dailyRevenue * 30; // Approximate days per month
    
    // Calculate costs and profit
    const operatingCostPercentage = 0.6; // 60% of revenue
    const monthlyOperatingCost = monthlyRevenue * operatingCostPercentage;
    
    let monthlyProfit = monthlyRevenue - monthlyOperatingCost;
    
    // Adjust profit based on revenue model
    let initialInvestment = 0;
    let monthlyAdditionalCost = 0;
    
    if (formData.revenueModel === 'profit-share') {
      // Profit sharing model: reduced profit, no upfront cost
      monthlyProfit = monthlyProfit * 0.5; // 50% profit share
    } else if (formData.revenueModel === 'lease') {
      // Lease model: monthly lease payment
      const machineCost = machineCosts[formData.machineType];
      const monthlyLeaseCost = machineCost * leaseCostPercentage * formData.machineCount;
      monthlyAdditionalCost = monthlyLeaseCost;
      monthlyProfit -= monthlyAdditionalCost;
    } else if (formData.revenueModel === 'purchase') {
      // Purchase model: upfront cost
      initialInvestment = machineCosts[formData.machineType] * formData.machineCount;
    }
    
    // Calculate ROI period for purchase/lease
    let roiPeriod = 0;
    if (formData.revenueModel === 'purchase') {
      roiPeriod = Math.ceil(initialInvestment / monthlyProfit);
    } else if (formData.revenueModel === 'lease') {
      // For lease, ROI period is calculated based on when profit exceeds total lease payments
      // over a standard 3-year lease term
      const leaseTermMonths = 36;
      const totalLeaseCost = monthlyAdditionalCost * leaseTermMonths;
      const totalProfit = monthlyProfit * leaseTermMonths;
      
      if (totalProfit > totalLeaseCost) {
        // Find the month where accumulated profit exceeds accumulated lease costs
        let accumulatedProfit = 0;
        let accumulatedLeaseCost = 0;
        
        for (let month = 1; month <= leaseTermMonths; month++) {
          accumulatedProfit += monthlyProfit;
          accumulatedLeaseCost += monthlyAdditionalCost;
          
          if (accumulatedProfit >= accumulatedLeaseCost) {
            roiPeriod = month;
            break;
          }
        }
      } else {
        roiPeriod = 0; // Indicates that ROI is not achieved within the lease term
      }
    }
    
    // Update results
    results.monthlyRevenue = Math.round(monthlyRevenue);
    results.monthlyProfit = Math.round(monthlyProfit);
    results.annualProfit = Math.round(monthlyProfit * 12);
    results.roiPeriod = roiPeriod;
    results.initialInvestment = initialInvestment;
    
    showResults.value = true;
    isCalculating.value = false;
  };
  
  const requestDetailedReport = () => {
    // In a real application, this would send the form data to a backend
    // and possibly redirect to a contact form or display a modal
    alert('Thank you for your interest! Our team will contact you with a detailed ROI report based on your specific needs.');
  };
  </script>