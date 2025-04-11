import React, { useState, useEffect } from 'react';
import { supabase, fetchData, insertData } from '../utils/supabase';

const SupabaseExample: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load data when component mounts
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    try {
      // You'll need to replace 'messages' with your actual table name
      const result = await fetchData('messages');
      if (result) {
        setData(result);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      
      // You'll need to replace 'messages' with your actual table name
      const result = await insertData('messages', {
        name,
        email,
        message,
        created_at: new Date().toISOString()
      });
      
      if (result) {
        setName('');
        setEmail('');
        setMessage('');
        loadData(); // Reload data to show the new entry
        alert('Message sent successfully!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Contact Form (Supabase Example)</h2>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-accent text-white rounded hover:bg-opacity-90 disabled:opacity-75"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      
      {/* Display recent messages - you might want to limit this in a real app */}
      <div>
        <h3 className="text-xl font-bold mb-4">Recent Messages</h3>
        
        {loading ? (
          <p>Loading messages...</p>
        ) : data.length > 0 ? (
          <div className="space-y-4">
            {data.map((item) => (
              <div key={item.id} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">{item.email}</p>
                <p className="mt-2">{item.message}</p>
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(item.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No messages yet.</p>
        )}
      </div>
    </div>
  );
};

export default SupabaseExample; 