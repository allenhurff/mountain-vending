<template>
    <div>
      <!-- Page Header -->
      <section class="bg-mountain-red-500 text-white py-12">
        <div class="container-custom">
          <h1 class="text-center mb-6">Customize Your Vending Experience</h1>
          <p class="text-xl text-center max-w-3xl mx-auto">
            Create a vending solution that perfectly matches your needs, brand, and environment.
          </p>
        </div>
        
        <!-- Wave Divider -->
        <div class="relative h-16 mt-8">
          <svg class="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 0L48 8.33333C96 16.6667 192 33.3333 288 41.6667C384 50 480 50 576 41.6667C672 33.3333 768 16.6667 864 16.6667C960 16.6667 1056 33.3333 1152 41.6667C1248 50 1344 50 1392 50L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>
      
      <!-- Customization Options -->
      <section class="py-16 bg-white">
        <div class="container-custom">
          <h2 class="text-3xl font-bold text-center mb-12">Customization Options</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="option in customizationOptions" :key="option.id" class="group">
              <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                <div class="aspect-w-16 aspect-h-9 bg-mountain-gray-200">
                  <!-- Option image placeholder -->
                  <div class="w-full h-full flex items-center justify-center bg-mountain-gray-100">
                    <span class="text-lg font-medium text-mountain-gray-500">{{ option.name }}</span>
                  </div>
                </div>
                <div class="p-6 flex flex-col h-full">
                  <h3 class="text-xl font-bold mb-3 group-hover:text-mountain-red-500 transition-colors duration-300">
                    {{ option.name }}
                  </h3>
                  <p class="text-mountain-gray-600 mb-4 flex-grow">
                    {{ option.description }}
                  </p>
                  
                  <div>
                    <h4 class="font-semibold mb-2 text-mountain-gray-800">Popular Choices:</h4>
                    <ul class="space-y-1 mb-4">
                      <li v-for="(feature, index) in option.features" :key="index" class="flex items-start">
                        <svg class="w-5 h-5 text-mountain-red-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{{ feature }}</span>
                      </li>
                    </ul>
                    <button class="btn-primary w-full">Explore Options</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Custom Branding Showcase -->
      <section class="py-16 bg-mountain-gray-50">
        <div class="container-custom">
          <h2 class="text-3xl font-bold text-center mb-4">Custom Branding Examples</h2>
          <p class="text-center text-lg text-mountain-gray-600 max-w-3xl mx-auto mb-12">
            See how our clients have transformed standard vending machines into powerful brand experiences.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="example in brandingExamples" :key="example.id" class="bg-white rounded-xl overflow-hidden shadow-md">
              <div class="aspect-w-1 aspect-h-1 bg-mountain-gray-200">
                <!-- Branding example image placeholder -->
                <div class="w-full h-full flex items-center justify-center bg-mountain-gray-100">
                  <span class="text-lg font-medium text-mountain-gray-500">{{ example.client }}</span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">{{ example.client }}</h3>
                <p class="text-mountain-gray-500 mb-3">{{ example.industry }}</p>
                <p class="text-mountain-gray-600">
                  {{ example.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Customization Process -->
      <section class="py-16 bg-white">
        <div class="container-custom">
          <h2 class="text-3xl font-bold text-center mb-4">Our Customization Process</h2>
          <p class="text-center text-lg text-mountain-gray-600 max-w-3xl mx-auto mb-12">
            From concept to implementation, we work closely with you at every step to create your perfect vending solution.
          </p>
          
          <div class="relative">
            <!-- Process Steps -->
            <div class="hidden md:block h-1 bg-mountain-gray-200 absolute top-24 left-0 right-0 z-0"></div>
            
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div v-for="(step, index) in processSteps" :key="step.id" class="text-center">
                <div class="w-16 h-16 rounded-full bg-mountain-red-500 text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {{ index + 1 }}
                </div>
                <h3 class="text-xl font-bold mb-3">{{ step.name }}</h3>
                <p class="text-mountain-gray-600">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Customization Form -->
      <section class="py-16 bg-mountain-gray-50">
        <div class="container-custom">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4">Start Your Customization</h2>
            <p class="text-center text-lg text-mountain-gray-600 mb-12">
              Fill out this form to get started on your custom vending solution. Our team will contact you to discuss your specific needs.
            </p>
            
            <form class="bg-white p-8 rounded-xl shadow-md">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="fullName" class="block text-mountain-gray-700 font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    class="w-full px-4 py-2 border border-mountain-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-red-500"
                    placeholder="Your full name"
                  >
                </div>
                
                <div>
                  <label for="company" class="block text-mountain-gray-700 font-medium mb-2">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    class="w-full px-4 py-2 border border-mountain-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-red-500"
                    placeholder="Your company"
                  >
                </div>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="email" class="block text-mountain-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    class="w-full px-4 py-2 border border-mountain-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-red-500"
                    placeholder="you@example.com"
                  >
                </div>
                
                <div>
                  <label for="phone" class="block text-mountain-gray-700 font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    class="w-full px-4 py-2 border border-mountain-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-red-500"
                    placeholder="(123) 456-7890"
                  >
                </div>
              </div>
              
              <div class="mb-6">
                <label for="industry" class="block text-mountain-gray-700 font-medium mb-2">Industry</label>
                <select 
                  id="industry" 
                  class="w-full px-4 py-2 border border-mountain-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-red-500"
                >
                  <option value="" disabled selected>Select your industry</option>
                  <option value="corporate">Corporate Office</option>
                  <option value="education">Education</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="mb-6">
                <label class="block text-mountain-gray-700 font-medium mb-2">Areas of Interest (Select all that apply)</label>
                <div class="space-y-2">
                  <div class="flex items-center">
                    <input type="checkbox" id="branding" class="rounded text-mountain-red-500 focus:ring-mountain-red-500">
                    <label for="branding" class="ml-2 text-mountain-gray-700">Custom Branding</label>
                  </div>
                  <div class="flex items-center">
                    <input type="checkbox" id="product" class="rounded text-mountain-red-500 focus:ring-mountain-red-500">
                    <label for="product" class="ml-2 text-mountain-gray-700">Product Selection</label>
                  </div>
                  <div class="flex items-center">
                    <input type="checkbox" id="payment" class="rounded text-mountain-red-500 focus:ring-mountain-red-500">
                    <label for="payment" class="ml-2 text-mountain-gray-700">Payment Systems</label>
                  </div>
                  <div class="flex items-center">
                    <input type="checkbox" id="technology" class="rounded text-mountain-red-500 focus:ring-mountain-red-500">
                    <label for="technology" class="ml-2 text-mountain-gray-700">Smart Technology</label>
                  </div>
                  <div class="flex items-center">
                    <input type="checkbox" id="design" class="rounded text-mountain-red-500 focus:ring-mountain-red-500">
                    <label for="design" class="ml-2 text-mountain-gray-700">Custom Machine Design</label>
                  </div>
                </div>
              </div>
              
              <div class="mb-6">
                <label for="message" class="block text-mountain-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  class="w-full px-4 py-2 border border-mountain-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-red-500"
                  placeholder="Tell us about your specific needs and requirements..."
                ></textarea>
              </div>
              
              <button class="btn-primary w-full">Submit Request</button>
            </form>
          </div>
        </div>
      </section>
      
      <!-- FAQ Section -->
      <section class="py-16 bg-white">
        <div class="container-custom">
          <h2 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div class="max-w-3xl mx-auto">
            <div v-for="faq in faqs" :key="faq.id" class="mb-6">
              <button 
                @click="faq.isOpen = !faq.isOpen"
                class="flex justify-between items-center w-full text-left p-4 bg-mountain-gray-50 rounded-lg hover:bg-mountain-gray-100 focus:outline-none focus:ring-2 focus:ring-mountain-red-500"
              >
                <span class="text-lg font-semibold">{{ faq.question }}</span>
                <svg 
                  class="w-5 h-5 text-mountain-red-500 transform transition-transform duration-300"
                  :class="{ 'rotate-180': faq.isOpen }"
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                v-if="faq.isOpen"
                class="mt-2 p-4 bg-white border border-mountain-gray-200 rounded-lg"
              >
                <p class="text-mountain-gray-600">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue';
  
  // Customization options
  const customizationOptions = [
    {
      id: 'branding',
      name: 'Custom Branding',
      description: 'Transform standard vending machines into powerful brand experiences with custom graphics, colors, and digital displays.',
      features: [
        'Full machine wrap graphics',
        'Custom color schemes',
        'Digital display branding',
        'Illuminated logo options'
      ]
    },
    {
      id: 'product',
      name: 'Product Selection',
      description: 'Tailor the product mix to meet the specific preferences and needs of your location, customers, or employees.',
      features: [
        'Healthy/organic selections',
        'Local product integration',
        'Special dietary options',
        'Custom product rotation'
      ]
    },
    {
      id: 'payment',
      name: 'Payment Systems',
      description: 'Choose from a variety of payment options to provide maximum convenience for your users.',
      features: [
        'Mobile payment integration',
        'Employee ID/card systems',
        'Contactless payments',
        'Traditional cash options'
      ]
    },
    {
      id: 'technology',
      name: 'Smart Technology',
      description: 'Add intelligent features that enhance the user experience and simplify management of your vending program.',
      features: [
        'Remote monitoring systems',
        'Inventory tracking',
        'Usage analytics',
        'Interactive touchscreens'
      ]
    },
    {
      id: 'design',
      name: 'Machine Design',
      description: 'Select from various machine designs and configurations to fit your specific space and capacity requirements.',
      features: [
        'Compact designs for tight spaces',
        'High-capacity models',
        'ADA-compliant options',
        'Custom machine layouts'
      ]
    },
    {
      id: 'service',
      name: 'Service Programs',
      description: 'Customize your service level from self-operation to full-service management of your vending system.',
      features: [
        'Regular maintenance schedules',
        'Stocking services',
        'Technical support packages',
        '24/7 emergency service'
      ]
    }
  ];
  
  // Branding examples
  const brandingExamples = [
    {
      id: 1,
      client: 'Horizon Tech',
      industry: 'Technology Company',
      description: 'Custom-wrapped machines featuring Horizon\'s vibrant brand colors and logo, with digital displays showcasing company news and employee achievements.'
    },
    {
      id: 2,
      client: 'Northern University',
      industry: 'Education',
      description: 'School-branded machines featuring the university mascot and colors. Integration with student ID payment system and custom healthy options program.'
    },
    {
      id: 3,
      client: 'Green Valley Resort',
      industry: 'Hospitality',
      description: 'Luxury-styled machines with elegant wood grain panels and subtle branding to complement the resort\'s upscale aesthetic while offering premium snack and beverage options.'
    },
    {
      id: 4,
      client: 'Wellness Medical Group',
      industry: 'Healthcare',
      description: 'Customized healthcare-focused vending program with antimicrobial surfaces, contactless payment, and 100% health-conscious product selection.'
    },
    {
      id: 5,
      client: 'Metro Transit Authority',
      industry: 'Public Transportation',
      description: 'Durable, high-traffic machines branded with the city\'s transit colors and maps. Features rapid vending for commuters in a hurry.'
    },
    {
      id: 6,
      client: 'Active Sportswear',
      industry: 'Retail',
      description: 'Brand-immersive vending experience featuring the latest product releases and interactive displays allowing customers to learn about products as they shop.'
    }
  ];
  
  // Process steps
  const processSteps = [
    {
      id: 1,
      name: 'Consultation',
      description: 'We meet with you to understand your needs, goals, and requirements for your custom vending solution.'
    },
    {
      id: 2,
      name: 'Design',
      description: 'Our design team creates mockups and proposals for your custom vending machines and program.'
    },
    {
      id: 3,
      name: 'Implementation',
      description: 'We handle all aspects of installing and configuring your customized vending solution.'
    },
    {
      id: 4,
      name: 'Ongoing Support',
      description: 'Regular maintenance, stocking, and optimization of your vending program for maximum results.'
    }
  ];
  
  // FAQs
  const faqs = reactive([
    {
      id: 1,
      question: 'How long does the customization process take?',
      answer: 'The timeline varies depending on the complexity of your customization requests. Simple branding and product selection can be implemented in 2-3 weeks, while comprehensive custom solutions with advanced technology may take 4-8 weeks from initial consultation to full implementation.',
      isOpen: false
    },
    {
      id: 2,
      question: 'Can I change my product selection after installation?',
      answer: 'Absolutely! We understand that preferences change over time. Our service team can adjust your product mix based on sales data, customer feedback, or seasonal preferences. For clients using our full-service program, we regularly analyze sales data to optimize your product selection.',
      isOpen: false
    },
    {
      id: 3,
      question: 'Is there a minimum commitment for custom vending programs?',
      answer: 'For most customization options, we recommend a minimum 12-month commitment to ensure you receive the best value. However, we offer flexible arrangements based on your specific needs and can discuss shorter-term options for temporary locations or special events.',
      isOpen: false
    },
    {
      id: 4,
      question: 'Can you integrate with our existing payment systems?',
      answer: 'Yes, our vending solutions can integrate with most corporate ID systems, campus cards, hotel key cards, and other proprietary payment systems. Our technical team will work with your IT department to ensure seamless integration and secure transactions.',
      isOpen: false
    },
    {
      id: 5,
      question: 'What maintenance is required for custom vending machines?',
      answer: 'All vending equipment requires regular maintenance to ensure optimal performance. For clients on our full-service program, we handle all maintenance as part of your service agreement. If you purchase or lease equipment, we offer maintenance packages that include regular preventative maintenance and rapid response for any issues.',
      isOpen: false
    },
    {
      id: 6,
      question: 'Can I request specific brands or products for my machines?',
              answer: "Yes! We pride ourselves on accommodating specific product requests whenever possible. Whether you want to include local brands, organic options, or specific dietary choices, we'll work with our extensive supplier network to fulfill your requests.",
      isOpen: false
    }
  ]);
  </script>