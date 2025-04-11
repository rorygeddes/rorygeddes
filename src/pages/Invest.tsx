import React from 'react';

const Invest: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Support My Journey</h1>
            <p className="mb-8 text-xl text-gray-600">
              Every contribution helps me build, learn, and create better solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Why Your Support Matters</h2>
              <p className="mb-4 text-gray-600">
                I'm on a mission to build products that solve real problems for real people. 
                With your support, I'll be able to:
              </p>
              <ul className="mb-6 ml-6 space-y-2 text-gray-600 list-disc">
                <li>Accelerate development of upcoming projects</li>
                <li>Invest in better tools and resources</li>
                <li>Expand my network and reach more users</li>
                <li>Create sustainable, long-term value</li>
              </ul>
              <p className="text-gray-600">
                By supporting me, you're not just helping a developer - you're backing a 
                vision for the future of technology that puts users first.
              </p>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold">What You Get in Return</h2>
              <p className="mb-4 text-gray-600">
                As a supporter, you'll join an exclusive community who get:
              </p>
              <ul className="mb-6 ml-6 space-y-2 text-gray-600 list-disc">
                <li>Behind-the-scenes access to my building process</li>
                <li>Priority access to all new products</li>
                <li>Regular updates on progress and milestones</li>
                <li>The opportunity to shape the direction of future projects</li>
                <li>Recognition in project credits and supporter lists</li>
              </ul>
              <p className="text-gray-600">
                Most importantly, you'll be part of a movement to create technology 
                that truly improves people's lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center">Funding Progress</h2>
            <div className="mb-4 overflow-hidden rounded-full bg-gray-200">
              <div className="h-4 rounded-full bg-accent" style={{ width: '45%' }}></div>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>$4,500 raised</span>
              <span>Goal: $10,000</span>
            </div>
            <div className="mt-8 text-center">
              <p className="mb-4 text-gray-600">
                Join 34 other supporters in backing my journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Message */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold">Support What You Value</h2>
            <div className="p-8 mb-8 bg-white rounded-lg shadow-md">
              <p className="mb-6 text-lg text-gray-700">
                I believe in making knowledge and tools accessible to everyone. Your support, 
                regardless of amount, helps me continue this mission. The more support I receive, 
                the more knowledge I can acquire and share with the community.
              </p>
              <p className="mb-8 text-lg text-gray-700">
                Every dollar contributes to my growth as a developer and creator, allowing me to 
                invest in learning new skills, exploring emerging technologies, and building better 
                solutions. There are no fixed tiers - just give what feels right for you.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://buymeacoffee.com/rorygeddes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 font-medium text-white rounded bg-accent hover:bg-opacity-90"
                >
                  Support me!
                </a>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "The more we share knowledge, the more it grows. Your support fuels this virtuous cycle."
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="mb-12 text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="mb-2 text-xl font-bold">How will the money be used?</h3>
              <p className="text-gray-600">
                The funds will be used primarily for development resources, design services, 
                server costs, marketing, educational courses, and creating a sustainable foundation for future projects.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Do I get equity in your projects?</h3>
              <p className="text-gray-600">
                This funding model is based on patronage rather than equity investment. You're 
                supporting my journey and getting exclusive benefits, but not formal equity in projects.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">How will I receive updates?</h3>
              <p className="text-gray-600">
                You'll receive regular updates via email and access to a private community where I share my learning and progress.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Is there a minimum amount I should contribute?</h3>
              <p className="text-gray-600">
                Not at all! I appreciate any level of support. Whether it's $5 or $500, every contribution 
                makes a difference and is deeply appreciated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 text-white bg-accent">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Join the Journey?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Support with whatever amount feels right to you and become part of building the future together.
          </p>
          <a 
            href="mailto:rorygeddes16@gmail.com?subject=RoryGeddesVentures%20Inquiry" 
            className="px-8 py-3 font-medium bg-white rounded-md text-accent hover:bg-gray-100 inline-block"
          >
            Contact Me Directly
          </a>
        </div>
      </section>
    </div>
  );
};

export default Invest; 