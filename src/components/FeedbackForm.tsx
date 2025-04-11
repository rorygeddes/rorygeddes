import React, { useState } from 'react';

const FeedbackForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const toggleForm = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsSent(false);
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message) {
      setError('Please enter your feedback');
      return;
    }

    setIsSending(true);
    setError('');

    try {
      // Create a mailto link with the subject and body
      const subject = encodeURIComponent('RoryGeddesVentures Feedback');
      const body = encodeURIComponent(`Feedback: ${message}`);
      const mailtoUrl = `mailto:rorygeddes16@gmail.com?subject=${subject}&body=${body}`;
      
      // Open the user's email client
      window.open(mailtoUrl, '_blank');
      
      // Success - show sent message
      setIsSent(true);
      setMessage('');
    } catch (err) {
      setError('Failed to send feedback. Please try again later.');
      console.error('Error sending feedback:', err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg p-4 w-80 md:w-96">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Send Feedback</h3>
            <button 
              onClick={toggleForm}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          
          {isSent ? (
            <div className="text-center py-4">
              <p className="text-green-600 mb-2">Thank you for your feedback!</p>
              <p className="text-sm text-gray-600">Your message has been sent.</p>
              <button
                onClick={() => {
                  setIsSent(false);
                  setMessage('');
                }}
                className="mt-4 px-4 py-2 bg-accent text-white rounded hover:bg-opacity-90"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Feedback
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
                  placeholder="Tell me what you think..."
                  required
                ></textarea>
              </div>
              
              {error && (
                <div className="mb-4 text-red-600 text-sm">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSending}
                className="w-full px-4 py-2 bg-accent text-white rounded hover:bg-opacity-90 disabled:opacity-75"
              >
                {isSending ? 'Sending...' : 'Send Feedback'}
              </button>
            </form>
          )}
        </div>
      ) : (
        <button
          onClick={toggleForm}
          className="bg-accent text-white rounded-full p-3 shadow-md hover:bg-opacity-90 flex items-center justify-center"
          title="Send Feedback"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default FeedbackForm; 