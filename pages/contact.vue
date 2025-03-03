<template>
    <div>
      <!-- Page Header -->
      <section class="bg-mountain-red-500 text-white py-12">
        <div class="container-custom">
          <h1 class="text-center mb-6">Contact Us</h1>
          <p class="text-xl text-center max-w-3xl mx-auto">
            Get in touch with our team to discuss your vending needs or request more information.
          </p>
        </div>
        
        <!-- Wave Divider -->
        <div class="relative h-16 mt-8">
          <svg class="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 0L48 8.33333C96 16.6667 192 33.3333 288 41.6667C384 50 480 50 576 41.6667C672 33.3333 768 16.6667 864 16.6667C960 16.6667 1056 33.3333 1152 41.6667C1248 50 1344 50 1392 50L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>
      
      <!-- Contact Information -->
      <section class="py-16 bg-white">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Contact Form -->
            <div class="lg:col-span-2">
              <h2 class="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="firstName" class="block text-mountain-gray-700 font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      class="w-full px-4 py-2 border border-mountain-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-red-500"
                      placeholder="Your first name"
                    >
                  </div>
                  
                  <div>
                    <label for="lastName" class="block text-mountain-gray-700 font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      class="w-full px-4 py-2 border border-mountain-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-red-500"
                      placeholder="Your last name"
                    >
                  </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                
                <div>
                  <label for="company" class="block text-mountain-gray-700 font-medium mb-2">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    class="w-full px-4 py-2 border border-mountain-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-red-500"
                    placeholder="Your company name"
                  >
                </div>
                
                <div>
                  <label for="subject" class="block text-mountain-gray-700 font-medium mb-2">Subject</label>
                  <select 
                    id="subject" 
                    class="w-full px-4 py-2 border border-mountain-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-red-500"
                  >
                    <option value="" disabled selected>Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales Information</option>
                    <option value="support">Technical Support</option>
                    <option value="custom">Custom Solutions</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>
                
                <div>
                  <label for="message" class="block text-mountain-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    class="w-full px-4 py-2 border border-mountain-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-red-500"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input 
                      id="newsletter" 
                      type="checkbox" 
                      class="rounded border-mountain-gray-300 text-mountain-red-500 focus:ring-mountain-red-500"
                    >
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="newsletter" class="text-mountain-gray-600">
                      Subscribe to our newsletter for vending industry news and updates
                    </label>
                  </div>
                </div>
                
                <button type="submit" class="btn-primary w-full md:w-auto">
                  Send Message
                </button>
              </form>
            </div>
            
            <!-- Contact Information -->
            <div class="bg-mountain-gray-50 p-8 rounded-xl shadow-md">
              <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div class="space-y-6">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-10 h-10 rounded-full bg-mountain-red-100 text-mountain-red-500">
                      <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-semibold mb-1">Address</h3>
                    <address class="not-italic text-mountain-gray-600">
                      <p>123 Vending Way</p>
                      <p>Mountain View, CA 94043</p>
                    </address>
                  </div>
                </div>
                
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-10 h-10 rounded-full bg-mountain-red-100 text-mountain-red-500">
                      <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-semibold mb-1">Phone</h3>
                    <p class="text-mountain-gray-600">
                      <a href="tel:+18005558737" class="hover:text-mountain-red-500 transition-colors">
                        (800) 555-VEND
                      </a>
                    </p>
                  </div>
                </div>
                
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-10 h-10 rounded-full bg-mountain-red-100 text-mountain-red-500">
                      <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-semibold mb-1">Email</h3>
                    <p class="text-mountain-gray-600">
                      <a href="mailto:info@mountainvending.com" class="hover:text-mountain-red-500 transition-colors">
                        info@mountainvending.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-10 h-10 rounded-full bg-mountain-red-100 text-mountain-red-500">
                      <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-semibold mb-1">Hours</h3>
                    <p class="text-mountain-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p class="text-mountain-gray-600">
                      Saturday: 9:00 AM - 2:00 PM
                    </p>
                    <p class="text-mountain-gray-600">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Social Media -->
              <div class="mt-8">
                <h3 class="text-lg font-semibold mb-4">Connect With Us</h3>
                <div class="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="w-10 h-10 rounded-full bg-mountain-gray-200 flex items-center justify-center text-mountain-gray-600 hover:bg-mountain-red-500 hover:text-white transition-colors duration-300"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="w-10 h-10 rounded-full bg-mountain-gray-200 flex items-center justify-center text-mountain-gray-600 hover:bg-mountain-red-500 hover:text-white transition-colors duration-300"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="w-10 h-10 rounded-full bg-mountain-gray-200 flex items-center justify-center text-mountain-gray-600 hover:bg-mountain-red-500 hover:text-white transition-colors duration-300"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="w-10 h-10 rounded-full bg-mountain-gray-200 flex items-center justify-center text-mountain-gray-600 hover:bg-mountain-red-500 hover:text-white transition-colors duration-300"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Map Section -->
      <section class="py-16 bg-mountain-gray-50">
        <div class="container-custom">
          <h2 class="text-3xl font-bold text-center mb-12">Our Location</h2>
          
          <div class="bg-white rounded-xl overflow-hidden shadow-md">
            <!-- Map placeholder - In a real project, you would embed an actual map here -->
            <div class="aspect-w-16 aspect-h-9 w-full bg-mountain-gray-200">
              <div class="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                <svg class="w-12 h-12 text-mountain-gray-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-lg font-medium text-mountain-gray-500">
                  Mountain Vending Headquarters
                </span>
                <span class="text-mountain-gray-500">
                  123 Vending Way, Mountain View, CA 94043
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Regional Offices -->
      <section class="py-16 bg-white">
        <div class="container-custom">
          <h2 class="text-3xl font-bold text-center mb-4">Regional Offices</h2>
          <p class="text-center text-lg text-mountain-gray-600 max-w-3xl mx-auto mb-12">
            With locations across the Western United States, our team is never far away.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="office in regionalOffices" :key="office.id" class="bg-mountain-gray-50 rounded-xl p-6 shadow-md">
              <h3 class="text-xl font-bold mb-2">{{ office.city }}</h3>
              <address class="not-italic text-mountain-gray-600 mb-4">
                <p>{{ office.address1 }}</p>
                <p>{{ office.address2 }}</p>
              </address>
              <div class="text-mountain-gray-600">
                <p>
                  <span class="font-medium">Phone:</span> {{ office.phone }}
                </p>
                <p>
                  <span class="font-medium">Email:</span> {{ office.email }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Help Topics -->
      <section class="py-16 bg-mountain-gray-50">
        <div class="container-custom">
          <h2 class="text-3xl font-bold text-center mb-4">How Can We Help?</h2>
          <p class="text-center text-lg text-mountain-gray-600 max-w-3xl mx-auto mb-12">
            Find quick answers to your questions or contact the appropriate department.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="topic in helpTopics" :key="topic.id" class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 rounded-full bg-mountain-red-100 flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-mountain-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2">{{ topic.title }}</h3>
              <p class="text-mountain-gray-600 mb-4">
                {{ topic.description }}
              </p>
              <a href="#" class="inline-flex items-center font-semibold text-mountain-red-500 hover:text-mountain-red-600">
                Learn More
                <svg class="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  // Regional offices data
  const regionalOffices = [
    {
      id: 1,
      city: 'Mountain View, CA',
      address1: '123 Vending Way',
      address2: 'Mountain View, CA 94043',
      phone: '(800) 555-8737',
      email: 'info@mountainvending.com'
    },
    {
      id: 2,
      city: 'Portland, OR',
      address1: '456 Cascade Street',
      address2: 'Portland, OR 97204',
      phone: '(503) 555-1234',
      email: 'portland@mountainvending.com'
    },
    {
      id: 3,
      city: 'Seattle, WA',
      address1: '789 Rainier Avenue',
      address2: 'Seattle, WA 98101',
      phone: '(206) 555-5678',
      email: 'seattle@mountainvending.com'
    },
    {
      id: 4,
      city: 'Las Vegas, NV',
      address1: '101 Desert Lane',
      address2: 'Las Vegas, NV 89109',
      phone: '(702) 555-9012',
      email: 'vegas@mountainvending.com'
    },
    {
      id: 5,
      city: 'Phoenix, AZ',
      address1: '202 Cactus Boulevard',
      address2: 'Phoenix, AZ 85001',
      phone: '(602) 555-3456',
      email: 'phoenix@mountainvending.com'
    },
    {
      id: 6,
      city: 'Los Angeles, CA',
      address1: '303 Palm Drive',
      address2: 'Los Angeles, CA 90001',
      phone: '(213) 555-7890',
      email: 'la@mountainvending.com'
    }
  ];
  
  // Help topics
  const helpTopics = [
    {
      id: 1,
      title: 'Sales Inquiries',
      description: 'Looking to add vending machines to your location? Our sales team is ready to help you find the perfect solution.'
    },
    {
      id: 2,
      title: 'Technical Support',
      description: 'Need assistance with your vending equipment? Our technical support team is available to help resolve any issues.'
    },
    {
      id: 3,
      title: 'Product Selection',
      description: 'Want to update or customize the products in your machines? Our product team can help you make the right choices.'
    },
    {
      id: 4,
      title: 'Service Requests',
      description: 'Schedule maintenance, restocking, or repairs for your existing vending machines quickly and easily.'
    },
    {
      id: 5,
      title: 'Billing & Payments',
      description: 'Questions about invoices, payments, or financial arrangements? Our accounting team is here to assist you.'
    },
    {
      id: 6,
      title: 'Careers',
      description: 'Interested in joining the Mountain Vending team? Explore current openings and apply online.'
    }
  ];
  </script>