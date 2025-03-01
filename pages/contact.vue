<template>
  <div>
    <div class="container-page">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-display font-bold text-mountain-blue-600 mb-6">
          Contact Us
        </h1>
        <p class="text-lg text-mountain-gray-600">
          We'd love to hear from you! Get in touch with our team using the form below.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="col-span-2">
          <div class="card">
            <h2 class="text-2xl font-bold text-mountain-gray-800 mb-6">Send Us a Message</h2>
            <form>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-mountain-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    class="w-full px-4 py-2 border border-mountain-gray-300 rounded-lg focus:ring-2 focus:ring-mountain-blue-500 focus:border-mountain-blue-500"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-mountain-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    class="w-full px-4 py-2 border border-mountain-gray-300 rounded-lg focus:ring-2 focus:ring-mountain-blue-500 focus:border-mountain-blue-500"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-mountain-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  class="w-full px-4 py-2 border border-mountain-gray-300 rounded-lg focus:ring-2 focus:ring-mountain-blue-500 focus:border-mountain-blue-500"
                  placeholder="Your email address"
                />
              </div>
              
              <div class="mb-4">
                <label for="phone" class="block text-sm font-medium text-mountain-gray-700 mb-1">Phone (optional)</label>
                <input
                  type="tel"
                  id="phone"
                  class="w-full px-4 py-2 border border-mountain-gray-300 rounded-lg focus:ring-2 focus:ring-mountain-blue-500 focus:border-mountain-blue-500"
                  placeholder="Your phone number"
                />
              </div>
              
              <div class="mb-4">
                <label for="subject" class="block text-sm font-medium text-mountain-gray-700 mb-1">Subject</label>
                <select
                  id="subject"
                  class="w-full px-4 py-2 border border-mountain-gray-300 rounded-lg focus:ring-2 focus:ring-mountain-blue-500 focus:border-mountain-blue-500"
                >
                  <option value="">Select a subject</option>
                  <option value="business">Business Partnership</option>
                  <option value="service">Service Request</option>
                  <option value="product">Product Suggestions</option>
                  <option value="location">Location Recommendation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="mb-6">
                <label for="message" class="block text-sm font-medium text-mountain-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  class="w-full px-4 py-2 border border-mountain-gray-300 rounded-lg focus:ring-2 focus:ring-mountain-blue-500 focus:border-mountain-blue-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button type="submit" class="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
        
        <div>
          <div class="card mb-6">
            <h2 class="text-xl font-bold text-mountain-gray-800 mb-4">Contact Information</h2>
            <div class="space-y-3">
              <div>
                <h3 class="font-semibold text-mountain-gray-800">Phone</h3>
                <p class="text-mountain-gray-600">(909) 555-1234</p>
              </div>
              <div>
                <h3 class="font-semibold text-mountain-gray-800">Email</h3>
                <p class="text-mountain-gray-600">info@mountainvending.com</p>
              </div>
              <div>
                <h3 class="font-semibold text-mountain-gray-800">Address</h3>
                <p class="text-mountain-gray-600">
                  123 Mountain Way<br>
                  Lake Arrowhead, CA 92352
                </p>
              </div>
            </div>
          </div>
          
          <div class="card">
            <h2 class="text-xl font-bold text-mountain-gray-800 mb-4">Business Hours</h2>
            <ul class="space-y-2">
              <li class="flex justify-between">
                <span class="text-mountain-gray-600">Monday - Friday</span>
                <span class="text-mountain-gray-800 font-medium">9AM - 5PM</span>
              </li>
              <li class="flex justify-between">
                <span class="text-mountain-gray-600">Saturday</span>
                <span class="text-mountain-gray-800 font-medium">10AM - 3PM</span>
              </li>
              <li class="flex justify-between">
                <span class="text-mountain-gray-600">Sunday</span>
                <span class="text-mountain-gray-800 font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="bg-mountain-green-50 rounded-2xl p-8 md:p-12">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-mountain-green-700 mb-4">Emergency Service</h2>
          <p class="text-mountain-gray-700 mb-6">
            Having an issue with one of our machines? Call our service hotline for immediate assistance.
          </p>
          <div class="text-xl font-bold text-mountain-green-600">(909) 555-5678</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>