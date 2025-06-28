import React, { useState } from 'react';
import { Send, Loader2, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Demo = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);

  const sampleQueries = [
    "What are the key competitive advantages mentioned in the documents?",
    "How does the pricing strategy compare to competitors?",
    "What new product features were announced recently?",
    "What are the main market challenges identified?"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setResponse({
        answer: "Based on the analyzed documents, the key competitive advantages include advanced AI capabilities, superior user experience design, and comprehensive data security measures. The company has positioned itself as a leader in the enterprise AI space with a focus on scalable solutions and customer success.",
        sources: [
          { title: "Q3 2024 Earnings Report", type: "PDF", confidence: 0.92 },
          { title: "Product Launch Press Release", type: "Web", confidence: 0.88 },
          { title: "Competitive Analysis Whitepaper", type: "PDF", confidence: 0.85 }
        ]
      });
      setIsLoading(false);
    }, 2000);
  };

  const handleSampleQuery = (sampleQuery: string) => {
    setQuery(sampleQuery);
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Try the Demo
          </h2>
          <p className="text-xl text-gray-600">
            Experience the power of AI-driven competitive intelligence. 
            Ask questions and get instant insights from your data.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask a competitive intelligence question..."
                className="w-full px-6 py-4 pr-16 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              />
              <button
                type="submit"
                disabled={isLoading || !query.trim()}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white p-3 rounded-lg transition-colors"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </div>
          </form>

          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-3">Try these sample questions:</p>
            <div className="flex flex-wrap gap-2">
              {sampleQueries.map((sampleQuery, index) => (
                <button
                  key={index}
                  onClick={() => handleSampleQuery(sampleQuery)}
                  className="text-sm bg-white hover:bg-primary-50 text-primary-600 px-4 py-2 rounded-full border border-primary-200 hover:border-primary-300 transition-colors"
                >
                  {sampleQuery}
                </button>
              ))}
            </div>
          </div>

          {response && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Analysis Result</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {response.answer}
              </p>
              
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Sources:</h4>
                <div className="space-y-2">
                  {response.sources.map((source: any, index: number) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{source.title}</span>
                        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                          {source.type}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">
                          {Math.round(source.confidence * 100)}% confidence
                        </span>
                        <ExternalLink className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Demo;