import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MessageSquare, AlertCircle, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Chimney Service Calculators Support</title>
        <meta 
          name="description" 
          content="Get in touch with Chimney Service Calculators for support, feedback, or questions about our professional chimney calculators." 
        />
      </Helmet>

      <div className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get in touch with our team for support or feedback
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-800">Email Support</h2>
                </div>
                <p className="text-gray-600 mb-2">
                  For general inquiries and support:
                </p>
                <a 
                  href="mailto:support@chimneyservicecalculators.com" 
                  className="text-blue-600 hover:text-blue-700"
                >
                  support@chimneyservicecalculators.com
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-800">Phone Support</h2>
                </div>
                <p className="text-gray-600 mb-2">
                  Available Monday - Friday, 9 AM - 5 PM EST
                </p>
                <p className="text-blue-600">
                  1-800-CHIMNEY
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-md border border-blue-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Important Note</h2>
                    <p className="text-gray-600">
                      For emergency situations or immediate assistance with chimney issues, please contact your local chimney professional or emergency services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-800">Send Us a Message</h2>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="business">Business Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}