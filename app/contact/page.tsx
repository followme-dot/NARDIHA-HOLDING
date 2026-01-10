'use client';

import PageLayout from '@/components/Layout/PageLayout';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Github } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@nardihaholdings.com',
      link: 'mailto:contact@nardihaholdings.com',
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: 'Panama City, Panama & Wilmington, Delaware, USA',
      link: null,
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (302) 555-0100',
      link: 'tel:+13025550100',
    },
  ];

  const departments = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'partnerships', label: 'Partnerships & Business Development' },
    { value: 'press', label: 'Press & Media' },
    { value: 'support', label: 'Technical Support' },
    { value: 'careers', label: 'Careers' },
    { value: 'legal', label: 'Legal' },
  ];

  return (
    <PageLayout
      title="Contact Us"
      subtitle="Get in touch with our team. We're here to answer your questions and explore opportunities together."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <div className="bg-nardiha-bg-card/50 backdrop-blur-sm border border-nardiha-purple/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400"
              >
                Thank you! We've received your message and will get back to you within 24-48 hours.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-nardiha-bg-darker border border-nardiha-purple/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-nardiha-purple transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-nardiha-bg-darker border border-nardiha-purple/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-nardiha-purple transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-nardiha-bg-darker border border-nardiha-purple/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-nardiha-purple transition-colors"
                  placeholder="Acme Corp"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-nardiha-bg-darker border border-nardiha-purple/30 rounded-xl text-white focus:outline-none focus:border-nardiha-purple transition-colors"
                >
                  <option value="">Select a topic</option>
                  {departments.map((dept) => (
                    <option key={dept.value} value={dept.value}>
                      {dept.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-nardiha-bg-darker border border-nardiha-purple/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-nardiha-purple transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          {/* Contact Cards */}
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="bg-nardiha-bg-card/50 backdrop-blur-sm border border-nardiha-purple/30 rounded-xl p-6 hover:border-nardiha-purple/60 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm break-words"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-gray-400 text-sm">{info.details}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="bg-nardiha-bg-card/50 backdrop-blur-sm border border-nardiha-purple/30 rounded-xl p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/nardihaholdings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-nardiha-bg-darker border border-nardiha-purple/30 flex items-center justify-center text-gray-400 hover:text-white hover:border-nardiha-purple transition-all hover:shadow-glow-purple"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/nardihaholdings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-nardiha-bg-darker border border-nardiha-purple/30 flex items-center justify-center text-gray-400 hover:text-white hover:border-nardiha-purple transition-all hover:shadow-glow-purple"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://github.com/nardihaholdings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-nardiha-bg-darker border border-nardiha-purple/30 flex items-center justify-center text-gray-400 hover:text-white hover:border-nardiha-purple transition-all hover:shadow-glow-purple"
              >
                <Github size={18} />
              </a>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4">Business Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-300">
                <span>Monday - Friday</span>
                <span className="text-purple-400">9:00 AM - 6:00 PM EST</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Saturday - Sunday</span>
                <span className="text-gray-500">Closed</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              * Response times may vary during holidays and weekends
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Office Locations */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-8">Our Global Presence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-nardiha-bg-card/50 backdrop-blur-sm border border-nardiha-purple/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">🇵🇦 Panama Office</h3>
            <p className="text-gray-400 mb-2">NARDIHA Holdings S.A.</p>
            <p className="text-gray-500 text-sm">
              Panama City Financial District<br />
              Republic of Panama
            </p>
          </div>

          <div className="bg-nardiha-bg-card/50 backdrop-blur-sm border border-nardiha-purple/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">🇺🇸 USA Office</h3>
            <p className="text-gray-400 mb-2">NARDIHA Holdings Inc.</p>
            <p className="text-gray-500 text-sm">
              Wilmington, Delaware<br />
              United States of America
            </p>
          </div>
        </div>
      </motion.section>
    </PageLayout>
  );
}
