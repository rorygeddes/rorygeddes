import React, { useState, useRef } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const ChatBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsSent(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim() === '') return;
    
    // Send message via email
    const subject = encodeURIComponent('RoryGeddesVentures Message');
    const body = encodeURIComponent(message);
    const mailtoUrl = `mailto:rorygeddes16@gmail.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoUrl, '_blank');
    
    setIsSent(true);
    setMessage('');
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="flex items-center justify-center w-16 h-16 text-white rounded-full shadow-lg bg-accent hover:bg-opacity-90"
        aria-label="Send message"
        title="Send me a message"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {/* Message Box */}
      {isOpen && (
        <div className="absolute right-0 bottom-20 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-accent text-white">
            <h3 className="font-semibold">Send a Message</h3>
            <button
              onClick={toggleChat}
              className="text-white focus:outline-none"
              aria-label="Close"
              title="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            {isSent ? (
              <div className="text-center py-4">
                <p className="text-green-600 mb-2">Thank you for your message!</p>
                <p className="text-sm text-gray-600">Your message has been sent.</p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-4 px-4 py-2 bg-accent text-white rounded hover:bg-opacity-90"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    ref={inputRef}
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white rounded-md bg-accent hover:bg-opacity-90"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox; 