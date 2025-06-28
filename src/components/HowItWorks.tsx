import { Upload, Cpu, MessageSquare, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Upload Documents',
      description: 'Upload PDFs, web content, press releases, and other competitive intelligence sources.',
      color: 'bg-blue-500'
    },
    {
      icon: Cpu,
      title: 'AI Processing',
      description: 'Our LLM processes and indexes your documents using advanced semantic understanding.',
      color: 'bg-purple-500'
    },
    {
      icon: MessageSquare,
      title: 'Ask Questions',
      description: 'Query your data using natural language to extract specific competitive insights.',
      color: 'bg-green-500'
    },
    {
      icon: TrendingUp,
      title: 'Get Insights',
      description: 'Receive actionable intelligence with sources and confidence scores for strategic decisions.',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your competitive intelligence workflow with our simple, 
            yet powerful AI-driven process.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="relative z-10 bg-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <div className={`${step.color} rounded-full w-12 h-12 flex items-center justify-center`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-8 h-8 flex items-center justify-center border-2 border-gray-300 text-sm font-bold text-gray-600">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;