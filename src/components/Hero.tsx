import React from 'react';
import { ArrowRight, Zap, Shield, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Competitive Intelligence
              <span className="block text-gradient">Powered by AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Extract actionable insights from unstructured data using advanced Large Language Models. 
              Transform company websites, press releases, and PDFs into strategic competitive intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button onClick={scrollToDemo} className="btn-primary flex items-center justify-center">
              Try Demo <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <Zap className="h-6 w-6 text-primary-600" />
              <span className="font-medium">Lightning Fast Analysis</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <Shield className="h-6 w-6 text-primary-600" />
              <span className="font-medium">Enterprise Security</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <Target className="h-6 w-6 text-primary-600" />
              <span className="font-medium">Actionable Insights</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;