<template>
    <div>
      <!-- Page Header -->
      <section class="bg-mountain-red-500 text-white py-12">
        <div class="container-custom">
          <h1 class="text-center mb-6">Vending Solutions</h1>
          <p class="text-xl text-center max-w-3xl mx-auto">
            Comprehensive vending solutions tailored to your industry, location, and specific requirements.
          </p>
        </div>
        
        <!-- Wave Divider -->
        <div class="relative h-16 mt-8">
          <svg class="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 0L48 8.33333C96 16.6667 192 33.3333 288 41.6667C384 50 480 50 576 41.6667C672 33.3333 768 16.6667 864 16.6667C960 16.6667 1056 33.3333 1152 41.6667C1248 50 1344 50 1392 50L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>
      
      <!-- Industry Solutions -->
      <section class="py-16 bg-white">
        <div class="container-custom">
          <h2 class="text-3xl font-bold text-center mb-12">Industry-Specific Solutions</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="industry in industries" :key="industry.id" class="group">
              <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div class="aspect-w-16 aspect-h-9 bg-mountain-gray-200">
                  <!-- Industry image placeholder -->
                  <div class="w-full h-full flex items-center justify-center">
                    <span class="text-lg font-medium text-mountain-gray-500">{{ industry.name }}</span>
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-3 group-hover:text-mountain-red-500 transition-colors duration-300">
                    {{ industry.name }}
                  </h3>
                  <p class="text-mountain-gray-600 mb-4">
                    {{ industry.description }}
                  </p>
                  <ul class="mb-6 space-y-2">
                    <li v-for="(feature, index) in industry.features" :key="index" class="flex items-start">
                      <svg class="w-5 h-5 text-mountain-red-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{{ feature }}</span>
                    </li>
                  </ul>
                  <button class="btn-primary w-full">Request Information</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Solution Features -->
      <section class="py-16 bg-mountain-gray-50">
        <div class="container-custom">
          <h2 class="text-3xl font-bold text-center mb-4">Comprehensive Vending Programs</h2>
          <p class="text-center text-lg text-mountain-gray-600 max-w-3xl mx-auto mb-12">
            We offer more than just machines. Our full-service programs handle everything from installation to maintenance.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="space-y-8">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md bg-mountain-red-500 text-white">
                      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-xl font-bold mb-2">Custom Product Selection</h3>
                    <p class="text-mountain-gray-600">
                      We work with you to select the right product mix for your audience, including healthy options, local favorites, and specialty items.
                    </p>
                  </div>
                </div>
                
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md bg-mountain-red-500 text-white">
                      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-xl font-bold mb-2">Maintenance & Service</h3>
                    <p class="text-mountain-gray-600">
                      Proactive maintenance, rapid response service calls, and 24/7 technical support to keep your machines running smoothly.
                    </p>
                  </div>
                </div>
                
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md bg-mountain-red-500 text-white">
                      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-xl font-bold mb-2">Sales Reporting</h3>
                    <p class="text-mountain-gray-600">
                      Detailed analytics on product performance, consumption patterns, and revenue to help optimize your vending program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div class="bg-white rounded-xl shadow-lg p-8">
                <h3 class="text-2xl font-bold mb-4">Program Options</h3>
                
                <div class="space-y-6">
                  <div class="border-b border-mountain-gray-200 pb-4">
                    <div class="flex justify-between items-center mb-2">
                      <h4 class="text-lg font-semibold">Full-Service Program</h4>
                      <span class="bg-mountain-red-100 text-mountain-red-800 text-sm px-3 py-1 rounded-full">Most Popular</span>
                    </div>
                    <p class="text-mountain-gray-600 mb-3">
                      We handle everything from equipment to stocking to maintenance. Zero hassle for your organization.
                    </p>
                    <ul class="space-y-1 text-sm">
                      <li class="flex items-center">
                        <svg class="w-4 h-4 text-mountain-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        No upfront equipment costs
                      </li>
                      <li class="flex items-center">
                        <svg class="w-4 h-4 text-mountain-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Regular stocking and maintenance
                      </li>
                      <li class="flex items-center">
                        <svg class="w-4 h-4 text-mountain-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Revenue sharing options available
                      </li>
                    </ul>
                  </div>
                  
                  <div class="border-b border-mountain-gray-200 pb-4">
                    <h4 class="text-lg font-semibold mb-2">Equipment Leasing</h4>
                    <p class="text-mountain-gray-600 mb-3">
                      Lease the latest vending equipment with flexible terms and optional service plans.
                    </p>
                    <ul class="space-y-1 text-sm">
                      <li class="flex items-center">
                        <svg class="w-4 h-4 text-mountain-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Flexible lease terms
                      </li>
                      <li class="flex items-center">
                        <svg class="w-4 h-4 text-mountain-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Regular equipment upgrades
                      </li>
                      <li class="flex items-center">
                        <svg class="w-4 h-4 text-mountain-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Optional service packages
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 class="text-lg font-semibold mb-2">Equipment Purchase</h4>
                    <p class="text-mountain-gray-600 mb-3">
                      Buy your machines outright with comprehensive warranty and optional service contracts.
                    </p>
                    <ul class="space-y-1 text-sm">
                      <li class="flex items-center">
                        <svg class="w-4 h-4 text-mountain-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Full ownership of equipment
                      </li>
                      <li class="flex items-center">
                        <svg class="w-4 h-4 text-mountain-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Extended warranty options
                      </li>
                      <li class="flex items-center">
                        <svg class="w-4 h-4 text-mountain-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Training and support included
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Testimonials -->
      <section class="py-16 bg-white">
        <div class="container-custom">
          <h2 class="text-3xl font-bold text-center mb-12">Success Stories</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-mountain-gray-50 p-8 rounded-xl shadow-md">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-mountain-red-100 rounded-full flex items-center justify-center text-mountain-red-600 text-xl font-bold">
                  {{ testimonial.client.charAt(0) }}
                </div>
                <div class="ml-4">
                  <h3 class="text-xl font-bold">{{ testimonial.client }}</h3>
                  <p class="text-mountain-gray-600">{{ testimonial.industry }}</p>
                </div>
              </div>
              
              <blockquote class="text-mountain-gray-700 mb-6">
                "{{ testimonial.quote }}"
              </blockquote>
              
              <div>
                <h4 class="font-semibold mb-2">Results:</h4>
                <ul class="space-y-1">
                  <li v-for="(result, index) in testimonial.results" :key="index" class="flex items-start">
                    <svg class="w-5 h-5 text-mountain-red-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{{ result }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- CTA Section -->
      <section class="py-16 bg-mountain-red-500 text-white">
        <div class="container-custom text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Let's Discuss Your Vending Needs
          </h2>
          <p class="text-xl max-w-3xl mx-auto mb-8">
            Our team will work with you to develop a customized vending solution that meets your specific requirements.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/contact" class="btn bg-white text-mountain-red-500 hover:bg-mountain-gray-100">
              Schedule a Consultation
            </NuxtLink>
            <NuxtLink to="/customize" class="btn border-2 border-white text-white hover:bg-mountain-red-600">
              Customize Your Solution
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  // Industry solutions data
  const industries = [
    {
      id: 'corporate',
      name: 'Corporate Offices',
      description: 'Elevate your workplace with premium vending solutions that keep your team energized and productive.',
      features: [
        'Modern, sleek machines that complement office aesthetics',
        'Healthy food and beverage options for wellness-focused teams',
        'Cashless payment systems including company ID integration',
        'Custom branding opportunities'
      ]
    },
    {
      id: 'education',
      name: 'Educational Institutions',
      description: 'Provide nutritious options for students and faculty with reliable, smart vending systems.',
      features: [
        'Compliance with nutritional guidelines',
        'Durable, high-capacity machines for high-traffic areas',
        'Flexible payment options including student ID integration',
        'Remote monitoring to ensure consistent availability'
      ]
    },
    {
      id: 'healthcare',
      name: 'Healthcare Facilities',
      description: 'Support the round-the-clock needs of healthcare workers and visitors with accessible refreshment options.',
      features: [
        'Antimicrobial touchpoints and touchless options',
        'Healthy, nutritious product selections',
        'Quiet operation for patient areas',
        '24/7 reliability for shift workers'
      ]
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing & Industrial',
      description: 'Durable vending solutions designed for industrial environments and shift workers.',
      features: [
        'Heavy-duty construction for industrial settings',
        'High-capacity machines to support large workforces',
        'Energy drinks and substantial snacks for physical labor',
        'Multiple machine banks for busy break areas'
      ]
    },
    {
      id: 'retail',
      name: 'Retail Locations',
      description: 'Generate additional revenue and enhance customer experience with strategically placed vending.',
      features: [
        'Compact designs to maximize selling space',
        'Attractive displays to draw customer attention',
        'Revenue sharing options for location owners',
        'Specialty products matched to your customer demographics'
      ]
    },
    {
      id: 'hospitality',
      name: 'Hotels & Hospitality',
      description: 'Provide 24/7 convenience for guests with premium vending experiences that match your brand standards.',
      features: [
        'Premium machine designs that complement luxury environments',
        'Specialty food and beverage options',
        'Room key payment integration',
        'Ultra-quiet operation for guest areas'
      ]
    }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      client: 'TechStart Inc.',
      industry: 'Technology',
      quote: 'Mountain Vending transformed our employee experience with their smart machines and healthy options. The touchless payment and remote monitoring have been game-changers for our busy office.',
      results: [
        '32% increase in employee satisfaction with break area amenities',
        'Reduced administrative burden with automated inventory management',
        'Successful integration with our existing employee ID system'
      ]
    },
    {
      id: 2,
      client: 'Pacific University',
      industry: 'Education',
              quote: "We've partnered with Mountain Vending across our campus locations for three years. Their reliable service and commitment to providing nutritious options align perfectly with our wellness initiatives.",
      results: [
        'Successfully installed 35 machines across 12 campus buildings',
        'Met all nutritional guidelines while maintaining popular selections',
        '99.7% uptime across all machines'
      ]
    },
    {
      id: 3,
      client: 'Regional Medical Center',
      industry: 'Healthcare',
      quote: 'Our 24/7 operation requires vending solutions that are always available and offer quality options for our staff. Mountain Vending has exceeded our expectations in reliability and service.',
      results: [
        'Improved staff access to fresh food options during overnight shifts',
        'Contactless payment reduced concerns during health protocols',
        'Customized healthy options program increased utilization by 41%'
      ]
    },
    {
      id: 4,
      client: 'Global Manufacturing Co.',
      industry: 'Manufacturing',
      quote: 'With three shifts and over 800 employees, we needed robust vending solutions that could handle high volume and offer substantial food options. The Mountain Vending program has been excellent.',
      results: [
        'Reduced employee break time spent traveling off-site by 15 minutes',
        'Increased productivity with convenient on-site refreshment options',
        'Custom machine layouts designed for our specific break areas'
      ]
    }
  ];
  </script>