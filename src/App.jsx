import { useState, useEffect, useRef } from 'react'
import { getPersonalInfo } from './services/anthropicService';

function App() {
  // Default home screen content
  const defaultResponse = (
    <div className="flex flex-col items-center text-center">
      <p className="text-xl mb-4">Hi! I'm Rory and welcome to my AI-powered website.</p>
      <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 flex items-center justify-center overflow-hidden">
        {/* Replace this div with an img tag when you have a profile photo */}
        {/* Example: <img src="/profile-photo.jpg" alt="Rory Geddes" className="w-full h-full object-cover" /> */}
        <span className="text-gray-400 text-sm p-2">Upload your profile photo here</span>
      </div>
      <p className="text-lg">Ask me anything about myself using the prompts below or type your own question!</p>
    </div>
  );

  // States
  const [aiResponse, setAiResponse] = useState(defaultResponse);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentPrompts, setCurrentPrompts] = useState([
    "Resume",
    "Projects",
    "Education",
    "Hobbies",
    "Jobs"
  ]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Reference to the typed text
  const textToType = useRef('');
  const typingSpeed = 25; // milliseconds per character

  // All possible prompts organized by category
  const allPrompts = {
    default: ["Resume", "Projects", "Education", "Hobbies", "Jobs"],
    
    Resume: ["Work Experience", "Skills", "Achievements", "Career Goals"],
    
    Projects: ["Recent Projects", "Technical Skills", "Project Challenges", "Side Projects"],
    
    Education: ["University Degree", "Courses Taken", "Academic Achievements", "Continuous Learning"],
    
    Hobbies: ["Favorite Activities", "Travel Experiences", "Books & Media", "Sports"],
    
    Jobs: ["Current Role", "Previous Positions", "Dream Job", "Career Path"],
    
    "Work Experience": ["Job Responsibilities", "Team Collaboration", "Industry Experience"],
    
    Skills: ["Technical Skills", "Soft Skills", "Languages", "Tools"],
    
    "Recent Projects": ["Project Goals", "Technologies Used", "Outcomes"],
    
    "Technical Skills": ["Programming Languages", "Frameworks", "Development Tools"],
    
    "University Degree": ["Major", "Minor", "Graduate Studies"],
    
    "Favorite Activities": ["Weekend Hobbies", "Creative Pursuits", "Collections"],
    
    "Current Role": ["Day-to-Day Work", "Achievements", "Company Culture"]
  };
  
  // Additional suggestion prompts
  const suggestionPrompts = [
    "What's your tech stack?",
    "Tell me about your background",
    "What are you passionate about?",
    "Career highlights?",
    "Future goals?"
  ];

  // Reset to home/default view
  const resetToHome = () => {
    setAiResponse(defaultResponse);
    setCurrentPrompts(allPrompts.default);
    setError(null);
  };

  // Handle the AI API response and set up typing
  const handleAIResponse = (responseText, title = null) => {
    // Set up the typing animation
    textToType.current = responseText;
    setDisplayedText('');
    setIsTyping(true);
    
    // Immediately update aiResponse with the container that will be filled
    setAiResponse(
      <div className="text-center animate-fade-in">
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        <p className={typingTextClass}>{displayedText}</p>
      </div>
    );
  };

  // Handle prompt click - now with actual API call
  const handlePromptClick = async (prompt) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Update the related prompts based on selection
      if (allPrompts[prompt]) {
        setCurrentPrompts(allPrompts[prompt]);
      } else {
        // If no specific related prompts, go back to defaults
        setCurrentPrompts(allPrompts.default);
      }
      
      // Call Claude API
      const responseText = await getPersonalInfo(`Tell me about your ${prompt.toLowerCase()}`);
      handleAIResponse(responseText, prompt);
    } catch (err) {
      setError(`Sorry, I couldn't process that request: ${err.message}`);
      setAiResponse(
        <div className="text-center text-red-500 animate-fade-in">
          <p>Sorry, there was an error connecting to the AI service. Please try again later.</p>
        </div>
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Handle search input submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    try {
      setIsLoading(true);
      setError(null);
      
      // List of allowed topics or keywords for basic filtering
      const allowedTopics = ["resume", "projects", "education", "hobbies", "job", "experience", "skills", "about", "contact"];
      
      // Check if the input contains any allowed topics
      const isAllowed = allowedTopics.some(topic => 
        inputValue.toLowerCase().includes(topic)
      );
      
      if (isAllowed) {
        // Call Claude API
        const responseText = await getPersonalInfo(inputValue);
        handleAIResponse(responseText, "Response");
        
        // Reset the prompts to default
        setCurrentPrompts(allPrompts.default);
      } else {
        // For invalid/inappropriate queries
        setAiResponse(
          <div className="text-center text-red-500 animate-fade-in">
            <p>Sorry, I can't process that request.</p>
          </div>
        );
      }
    } catch (err) {
      setError(`Sorry, I couldn't process that request: ${err.message}`);
      setAiResponse(
        <div className="text-center text-red-500 animate-fade-in">
          <p>Sorry, there was an error connecting to the AI service. Please try again later.</p>
        </div>
      );
    } finally {
      setIsLoading(false);
      setInputValue('');
      setShowSuggestions(false);
    }
  };
  
  // Handle suggestion selection
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  // Typing animation effect
  useEffect(() => {
    if (isTyping && textToType.current) {
      let currentIndex = displayedText.length;
      
      if (currentIndex < textToType.current.length) {
        const timerId = setTimeout(() => {
          setDisplayedText(textToType.current.substring(0, currentIndex + 1));
        }, typingSpeed);
        
        return () => clearTimeout(timerId);
      } else {
        setIsTyping(false);
      }
    }
  }, [displayedText, isTyping]);

  // Set appropriate class for typing text
  const typingTextClass = isTyping ? "typing-text" : "typing-text-complete";

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Header with name - made clickable to return home */}
      <header className="w-full pt-6 pb-2 md:pt-8 md:pb-2 text-center">
        <h1 
          className="text-5xl md:text-7xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
          onClick={resetToHome}
        >
          Rory Geddes
        </h1>
      </header>
      
      {/* Search and prompts - moved higher up */}
      <div className="w-full mt-4 mb-6">
        <div className="max-w-3xl mx-auto px-4">
          {/* Search input - more sleek design */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="relative bg-gray-50 rounded-xl shadow-md overflow-hidden animate-slide-up">
              <input
                type="text"
                placeholder="Type what you want to know about me!"
                className="w-full p-3 md:p-4 text-sm md:text-base bg-transparent focus:outline-none"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="submit"
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-1.5 rounded-lg transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}`}
                disabled={isLoading}
              >
                {isLoading ? '...' : 'Ask'}
              </button>
              <button
                type="button"
                onClick={() => setShowSuggestions(!showSuggestions)}
                className="absolute right-20 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black transition-colors animate-pulse"
                aria-label="Show suggestions"
                disabled={isLoading}
              >
                ✨
              </button>
              
              {/* Suggestions dropdown */}
              {showSuggestions && (
                <div className="absolute left-0 right-0 top-full mt-1 bg-white shadow-lg rounded-lg z-10 border border-gray-100 animate-slide-up">
                  <ul className="py-1">
                    {suggestionPrompts.map((suggestion, index) => (
                      <li key={index}>
                        <button
                          type="button"
                          className="px-4 py-2 text-left w-full hover:bg-gray-50 transition-colors"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </form>
          
          {/* Prompt buttons - with staggered animations */}
          <div className="flex flex-wrap gap-3 justify-center">
            {currentPrompts.map((prompt, index) => (
              <button
                key={`${prompt}-${index}`}
                onClick={() => handlePromptClick(prompt)}
                className={`bg-gray-100 hover:bg-gray-200 px-5 py-2.5 text-base rounded-lg shadow-sm transition-all hover:shadow-md touch-manipulation ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                style={{
                  animation: `fadeIn 0.5s ease-in-out forwards`,
                  animationDelay: `${index * 120}ms`,
                  opacity: 0
                }}
                disabled={isLoading}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main content area */}
      <main className="flex flex-grow items-center justify-center px-4">
        <div className="w-full max-w-3xl">
          {error ? (
            <div className="text-center text-red-500 animate-fade-in">
              <p>{error}</p>
            </div>
          ) : isLoading ? (
            <div className="text-center animate-pulse">
              <p className="text-xl">Thinking...</p>
            </div>
          ) : (
            aiResponse
          )}
        </div>
      </main>
    </div>
  );
}

export default App
