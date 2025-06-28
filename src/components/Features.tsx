import React from 'react';
import { FileText, Search, Brain, BarChart3, Globe, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: 'Multi-Format Document Processing',
      description: 'Seamlessly process PDFs, web pages, press releases, and various document formats with advanced parsing capabilities.'
    },
    {
      icon: Search,
      title: 'Semantic Search',
      description: 'Find relevant information using natural language queries with FAISS-powered vector similarity search.'
    },
    {
      icon: Brain,
      title: 'LLM-Powered Analysis',
      description: 'Leverage OpenAI\'s GPT models to extract insights, summarize findings, and answer complex competitive questions.'
    },
    {
      icon: BarChart3,
      title: 'Actionable Insights',
      description: 'Transform raw data into strategic intelligence with automated analysis and competitive positioning insights.'
    },
    {
      icon: Globe,
      title: 'Scalable Architecture',
      description: 'Built to handle large volumes of documents and queries with efficient indexing and retrieval systems.'
    },
    {
      icon: Lock,
      title: 'Secure & Private',
      description: 'Enterprise-grade security ensures your competitive intelligence data remains confidential and protected.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Competitive Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform combines cutting-edge technology with intuitive design 
            to deliver comprehensive competitive analysis capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-200 transition-colors">
                <feature.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;