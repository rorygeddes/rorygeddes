import { useState } from 'react'
import { keywordMap } from './data/personalInfo';
import './App.css'

function App() {
  // States
  const [aiResponse, setAiResponse] = useState(
    <div className="animate-fade-in py-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">Welcome!</h2>
      <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
        <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-2 border-gray-200 flex-shrink-0">
          <img 
            src="/assets/profile.png" 
            alt="Rory Geddes" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/200x200.png?text=RG";
            }}
          />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="mb-4">
            Hi! I'm Rory Geddes, a second-year Commerce Co-op student at Dalhousie University, majoring in Finance and minoring in Computer Science. I'm always eager to learn and passionate about being creative, especially in the business world where I thrive on exploring new ideas and finding innovative solutions.
          </p>
          <p className="mb-4">
            I'm involved with Dalhousie's Investment Society (DALIS), where I'm constantly learning about the markets and expanding my understanding of finance. I'm always looking for the next challenge and opportunity to grow, so let's connect! Feel free to reach out at rory.geddes@dal.ca or (613)-981-6164.
          </p>
        </div>
      </div>
      <div className="prose prose-lg max-w-none">
        <p className="mb-4">
          Navigate through my portfolio using the buttons below:
        </p>
        <ul className="space-y-2">
          <li><strong>Resume</strong> - View or download my professional resume</li>
          <li><strong>Projects</strong> - Explore my featured development projects</li>
          <li><strong>Experience</strong> - Learn about my professional background</li>
          <li><strong>About</strong> - Get to know me better</li>
          <li><strong>Contact</strong> - Connect with me</li>
        </ul>
        <p className="mt-4">
          Click any button to explore, and discover related topics through the dynamic navigation system. Each click reveals new, relevant options to help you find exactly what you're looking for.
        </p>
      </div>
    </div>
  );
  const [currentSection, setCurrentSection] = useState(null);
  const [currentKeywords, setCurrentKeywords] = useState([
    "Resume",
    "Projects",
    "Experience",
    "About",
    "Contact"
  ]);
  
  // Main navigation buttons that are always shown
  const mainNavButtons = [
    "Resume",
    "Projects",
    "Experience",
    "About",
    "Contact"
  ];

  // Get recommended keywords based on current context
  const getRecommendedKeywords = (keyword) => {
    // First try to get direct related keywords
    const relatedKeywords = keywordMap[keyword] || [];
    
    // If not enough related keywords, add some smart recommendations
    const recommendations = {
      'email': ['LinkedIn', 'Projects', 'Experience', 'About'],
      'linkedin': ['Email', 'Projects', 'Experience', 'About'],
      'social media': ['LinkedIn', 'Email', 'Projects', 'About'],
      'networking': ['LinkedIn', 'Projects', 'Experience', 'About'],
      'collaboration': ['Projects', 'Experience', 'About', 'Resume'],
      'resume': ['Experience', 'Skills', 'Education', 'Projects'],
      'default': ['Resume', 'Projects', 'Experience', 'About', 'Contact']
    };

    // Get base recommendations
    let baseRecs = relatedKeywords.length >= 4 
      ? relatedKeywords 
      : (recommendations[keyword.toLowerCase()] || recommendations.default);

    // Filter out the current keyword and ensure exactly 4 items
    baseRecs = baseRecs
      .filter(k => k !== keyword && k !== currentSection)
      .concat(recommendations.default)  // Add defaults if we need more items
      .filter((k, i, arr) => arr.indexOf(k) === i)  // Remove duplicates
      .slice(0, 4);  // Get exactly 4 items

    return baseRecs;
  };

  // Get formatted content for each section
  const getFormattedContent = (keyword) => {
    const sections = {
      'about': {
        description: "I'm a passionate software developer with a strong foundation in full-stack development and a keen interest in creating intuitive user experiences. My journey in technology has been driven by a desire to solve real-world problems through innovative solutions. I believe in writing clean, maintainable code and staying current with emerging technologies and best practices.",
        highlights: [
          "Full-stack development enthusiast",
          "Problem-solving oriented",
          "Continuous learner",
          "Team collaborator"
        ]
      },
      'experience': {
        description: "Throughout my career, I've had the opportunity to work on diverse projects that have shaped my technical expertise and professional growth. I've collaborated with cross-functional teams, managed complex projects, and delivered solutions that drive business value. My experience spans from startup environments to established organizations, giving me a well-rounded perspective on software development.",
        highlights: [
          "Project management",
          "Team leadership",
          "Technical architecture",
          "Agile methodologies"
        ]
      },
      'projects': {
        description: "I've worked on various projects that showcase my technical abilities and problem-solving skills. Each project has been an opportunity to learn new technologies and improve my development practices. From web applications to data analysis tools, my portfolio demonstrates my versatility as a developer.",
        highlights: [
          "Web development",
          "Mobile applications",
          "Data analysis",
          "UI/UX design"
        ]
      },
      'contact': {
        description: "I'm always open to discussing new opportunities, collaborations, or just connecting with fellow developers. Whether you're interested in my work or want to explore potential projects together, I'd love to hear from you. You can reach me through email or connect with me on LinkedIn.",
        highlights: [
          "Open to opportunities",
          "Available for collaboration",
          "Professional networking",
          "Project discussions"
        ]
      }
    };

    const section = sections[keyword.toLowerCase()] || {
      description: `Welcome to the ${keyword} section. This area provides information about ${keyword.toLowerCase()} and related topics. Explore the content and use the navigation buttons below to discover more.`,
      highlights: []
    };

    return (
      <div className="prose prose-lg max-w-none">
        <p className="mb-6">{section.description}</p>
        {section.highlights.length > 0 && (
          <>
            <h4 className="text-lg font-semibold mb-3">Key Points:</h4>
            <ul className="list-disc pl-5 mb-6">
              {section.highlights.map((point, index) => (
                <li key={index} className="mb-2">{point}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  };

  // Handle resume download
  const handleResumeDownload = () => {
    const resumeUrl = '/assets/Rory_Geddes_Resume_2025.pdf';
    
    // Update current section and keywords just like other buttons
    setCurrentSection("Resume");
    const recommendations = getRecommendedKeywords("Resume");
    setCurrentKeywords([
      "Resume",  // Resume goes first
      ...recommendations
    ]);
    
    setAiResponse(
      <div className="animate-fade-in py-0">
        {/* Download button centered */}
        <div className="flex justify-center mb-6 mt-2">
          <a 
            href={resumeUrl} 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            download="Rory_Geddes_Resume_2025.pdf"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </a>
        </div>

        {/* Custom resume content styled like the PDF */}
        <div className="w-full max-w-full overflow-hidden mt-0">
          <div className="resume-content">
            {/* Contact Information */}
            <p className="text-lg text-center mb-6">
              (613) 981-6164 | rory.geddes@dal.ca | linkedin.com/in/rory-geddes | rorygeddes.com
            </p>

            {/* Profile Section */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold uppercase border-b-2 border-black pb-1 mb-4">PROFILE</h3>
              <ul className="list-disc pl-10 space-y-2">
                <li><span className="font-normal">Proficient in <strong>Excel</strong>, utilizing functions for effective data analysis, financial reporting, and budgeting</span></li>
                <li><span className="font-normal">Strong <strong>communicator</strong> with experience of leading multiple teams to enhance workflows efficiently</span></li>
                <li><span className="font-normal">Passion for <strong>creativity</strong> by leveraging <strong>AI</strong> - building personal projects to add efficiency into my workflow</span></li>
                <li><span className="font-normal">Experience in programming with <strong>Python</strong>, learning <strong>Java</strong> & <strong>SQL</strong> to bridge coding with finance</span></li>
                <li><span className="font-normal">Effective <strong>problem-solving</strong> techniques, developed from leadership training and business settings</span></li>
              </ul>
            </div>

            {/* Education Section */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold uppercase border-b-2 border-black pb-1 mb-4">EDUCATION</h3>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold">DALHOUSIE UNIVERSITY</h4>
                <span className="font-medium">Candidate 2027</span>
              </div>
              <p className="mb-2">Bachelor of Commerce Co-op; <strong>Major</strong>: Finance, <strong>Minor</strong>: Computer Science</p>
              <ul className="list-disc pl-10 space-y-1">
                <li><strong>Scholarships</strong>: Merit 2025 ($500), Admissions 2024 ($2,500), Leadership Award 2024 ($1,000)</li>
                <li>GPA: 3.5</li>
              </ul>
            </div>

            {/* Experience Section - Updated */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold uppercase border-b-2 border-black pb-1 mb-4">PROFESSIONAL EXPERIENCE</h3>
              
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-bold">ACCOUNTING INTERN</h4>
                  <span className="font-medium">January 2025 – April 2025</span>
                </div>
                <p className="italic mb-1">Marsh Canada Limited</p>
                <ul className="list-disc pl-10 space-y-1">
                  <li>Leveraged Excel skills to create <strong>efficient</strong> worksheets, roll-forward data, and automate repetitive tasks</li>
                  <li>Prepared AP support, bank reconciliations, accruals, reserves and premium tax filings for 5+ clients</li>
                  <li>Learned and utilized internal <strong>accounting</strong> software to input transactions, prepare financials, and updating budgets, ensuring accurate documentation</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-bold">BUSINESS OPERATIONS ASSISTANT</h4>
                  <span className="font-medium">April 2024 – August 2024</span>
                </div>
                <p className="italic mb-1">Ottawa Walking Tours</p>
                <ul className="list-disc pl-10 space-y-1">
                  <li>Prepared and issued <strong>25+</strong> invoices, ensuring accurate financial documentation and attention to detail</li>
                  <li>Drove business <strong>growth</strong> by sending 100+ targeted emails to local conventions, promoting services</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-bold">HEAD COUNSELLOR {'->'} SUPERVISOR</h4>
                  <span className="font-medium">Summers 2021-2024</span>
                </div>
                <p className="italic mb-1">RA Centre</p>
                <ul className="list-disc pl-10 space-y-1">
                  <li>Managed and mentored <strong>20+</strong> staff to deliver an engaging sports program, utilizing my teamwork abilities</li>
                  <li>Designed and executed a weekly Olympic-themed camp day for <strong>60+</strong> campers, showcasing organization, creativity and <strong>communication</strong> skills</li>
                  <li>Action oriented in dealing with problems that arose in the moment with staff, parents, and kids, ensuring they were handled in an efficient and professional manner</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-bold">SUPERVISOR</h4>
                  <span className="font-medium">June 2021 – August 2023</span>
                </div>
                <p className="italic mb-1">Panago Pizza</p>
                <ul className="list-disc pl-10 space-y-1">
                  <li>Directed and coordinated 5 kitchen staff, optimizing <strong>workflow</strong> and enhancing communication efficiently</li>
                  <li>Performed regular inventory checks, managing the stores budget, demonstrating exceptional attention to detail and cost control</li>
                  <li>Oversaw restaurant operations, including <strong>training</strong> new staff, creating weekly schedules and executing closing procedures and recognized for being a trusted keyholder</li>
                </ul>
              </div>
            </div>
            
            {/* Extracurriculars Section - Added */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold uppercase border-b-2 border-black pb-1 mb-4">EXTRACURRICULARS</h3>
              
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-bold">FOUNDER</h4>
                  <span className="font-medium">Coming Soon – April 2025</span>
                </div>
                <p className="italic mb-1">FoundrFlo.com</p>
                <ul className="list-disc pl-10 space-y-1">
                  <li>Developing an exclusive <strong>community</strong>-based platform for students to collaborate on their startup ideas</li>
                  <li>Integrating an <strong>AI</strong> workflow for members to work on together</li>
                  <li><strong>Mentors</strong> can follow members journeys and can provide advice, support, and resources</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-bold">GENERAL MEMBER</h4>
                  <span className="font-medium">September 2024 - Current</span>
                </div>
                <p className="italic mb-1">Dalhousie Investment Society (DALIS)</p>
                <ul className="list-disc pl-10 space-y-1">
                  <li>Participate in weekly general and EMC meetings to gain insights into market trends and trades from PMs</li>
                </ul>
              </div>
            </div>
            
            {/* Interests Section - Added */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold uppercase border-b-2 border-black pb-1 mb-4">INTERESTS</h3>
              <ul className="list-disc pl-10">
                <li>Hockey, Ultimate Frisbee, Coding, Golf, AI, Entrepreneurship, Traveling, Skiing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Handle keyword click
  const handleKeywordClick = (keyword) => {
    // Handle special case for Resume
    if (keyword === "Resume") {
      handleResumeDownload();
      return;
    }
    
    // Always set the clicked keyword as current section
    setCurrentSection(keyword);
    const recommendations = getRecommendedKeywords(keyword);
    setCurrentKeywords([
      keyword,  // Clicked keyword always goes first
      ...recommendations
    ]);

    // Update the AI response with the new content
    setAiResponse(
      <div className="animate-fade-in py-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">{keyword}</h2>
        {getFormattedContent(keyword)}
      </div>
    );
  };

  // Reset to home screen
  const resetToHome = () => {
    setCurrentSection(null);
    setCurrentKeywords(["Resume", "Projects", "Experience", "About", "Contact"]);
    setAiResponse(
      <div className="animate-fade-in py-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Welcome!</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-2 border-gray-200 flex-shrink-0">
            <img 
              src="/assets/profile.png" 
              alt="Rory Geddes" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/200x200.png?text=RG";
              }}
            />
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">
              Hi! I'm Rory Geddes, a second-year Commerce Co-op student at Dalhousie University, majoring in Finance and minoring in Computer Science. I'm always eager to learn and passionate about being creative, especially in the business world where I thrive on exploring new ideas and finding innovative solutions.
            </p>
            <p className="mb-4">
              I'm involved with Dalhousie's Investment Society (DALIS), where I'm constantly learning about the markets and expanding my understanding of finance. I'm always looking for the next challenge and opportunity to grow, so let's connect! Feel free to reach out at rory.geddes@dal.ca or (613)-981-6164.
            </p>
          </div>
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="mb-4">
            Navigate through my portfolio using the buttons below:
          </p>
          <ul className="space-y-2">
            <li><strong>Resume</strong> - View or download my professional resume</li>
            <li><strong>Projects</strong> - Explore my featured development projects</li>
            <li><strong>Experience</strong> - Learn about my professional background</li>
            <li><strong>About</strong> - Get to know me better</li>
            <li><strong>Contact</strong> - Connect with me</li>
          </ul>
          <p className="mt-4">
            Click any button to explore, and discover related topics through the dynamic navigation system. Each click reveals new, relevant options to help you find exactly what you're looking for.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Fixed Header */}
      <header className="w-full pt-6 pb-2 md:pt-8 md:pb-2 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-6">
            <a 
              href="mailto:rory.geddes@dal.ca" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
              title="Email"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/rory-geddes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
              title="LinkedIn"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          <h1 
            className="text-5xl md:text-7xl font-bold cursor-pointer hover:opacity-80 transition-opacity text-center" 
            onClick={resetToHome}
          >
            Rory Geddes
          </h1>
        </div>
      </header>
      
      {/* Scrollable Main Content */}
      <main className="flex-1 overflow-y-auto px-4 py-6 mb-20">
        <div className="max-w-3xl mx-auto">
          {aiResponse}
        </div>
      </main>

      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg px-4 py-3">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-2 justify-between items-center">
            {currentKeywords.map((keyword, index) => (
              <button
                key={`nav-${keyword}-${index}`}
                onClick={() => handleKeywordClick(keyword)}
                className={`flex-1 min-w-0 bg-gray-100 hover:bg-gray-200 px-3 py-2.5 text-sm md:text-base rounded-lg shadow-sm transition-all hover:shadow-md touch-manipulation whitespace-nowrap overflow-hidden text-ellipsis
                  ${keyword === currentSection ? 'border-2 border-black' : ''}`}
                style={{
                  animation: `fadeIn 0.2s ease-in-out forwards`,
                  animationDelay: `${index * 30}ms`,
                  opacity: 0
                }}
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
