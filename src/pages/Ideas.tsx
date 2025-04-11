import React, { useState } from 'react';
import { insertData } from '../utils/supabase';

const Ideas: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [idea, setIdea] = useState('');
  const [category, setCategory] = useState('product');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !idea.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      
      const result = await insertData('ideas', {
        name,
        email,
        idea,
        category,
        created_at: new Date().toISOString()
      });
      
      if (result) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setIdea('');
        setCategory('product');
      }
    } catch (error) {
      console.error('Error submitting idea:', error);
      alert('There was an error submitting your idea. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Share Your Ideas</h1>
        
        <div className="mb-12 text-center">
          <p className="text-lg max-w-2xl mx-auto">
            Have an idea for a project, feature, or collaboration? I'm always open to new 
            opportunities and suggestions. Share your thoughts below!
          </p>
        </div>
        
        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Thank You!</h2>
            <p className="mb-6 text-gray-700">
              Your idea has been submitted successfully. I appreciate your input and will review it soon!
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-6 py-2 bg-accent text-white rounded-md hover:bg-opacity-90"
            >
              Submit Another Idea
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="product">Product Idea</option>
                  <option value="feature">Feature Request</option>
                  <option value="collaboration">Collaboration Opportunity</option>
                  <option value="feedback">General Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="idea" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Idea/Suggestion *
                </label>
                <textarea
                  id="idea"
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Describe your idea, suggestion, or feedback in detail..."
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-accent text-white rounded-md hover:bg-opacity-90 disabled:opacity-75"
                >
                  {loading ? 'Submitting...' : 'Submit Your Idea'}
                </button>
              </div>
            </form>
          </div>
        )}
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">What Happens Next?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Review</h3>
              <p className="text-gray-600">
                I'll personally review your idea and consider how it aligns with my current projects and goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Feedback</h3>
              <p className="text-gray-600">
                I may reach out to you for more details or to discuss your idea further.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-600">
                If your idea is selected, I'll work on implementing it and keep you updated on the progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas; 