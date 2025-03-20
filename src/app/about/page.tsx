import { Metadata } from 'next';
import CardCarousel from '@/components/CardCarousel';

export const metadata: Metadata = {
  title: 'About - Rory Geddes',
  description: 'Learn more about Rory Geddes - background, education, experience, projects, and skills',
};

const cards = [
  { 
    id: 1, 
    title: 'About Me', 
    content: (
      <div>
        <p>
          Hello! I'm Rory Geddes, a third-year Commerce student at Dalhousie University, majoring in Finance with a concentration in Data Analytics. 
          I'm passionate about using data-driven insights to inform financial decision-making and business strategy.
        </p>
        <p className="mt-4">
          My experience at the Bank of Montreal allowed me to apply my analytical skills to real-world financial challenges, 
          using Excel and SQL to evaluate customer segments and create performance reports. This experience reinforced my 
          interest in combining financial expertise with data analysis capabilities.
        </p>
        <p className="mt-4">
          Outside of academics, I enjoy playing golf, exploring financial markets, and staying active in the Halifax community. 
          I'm an active member of the Dalhousie Investment Society, where I collaborate with peers on investment strategies and market analysis.
        </p>
        <p className="mt-4">
          I'm eager to pursue opportunities in financial analysis, investment banking, or data analytics roles within the financial sector after graduation.
        </p>
      </div>
    ) 
  },
  { 
    id: 2, 
    title: 'Education', 
    content: (
      <div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Bachelor of Commerce</h3>
          <p className="text-gray-700">Dalhousie University, Rowe School of Business</p>
          <p className="text-gray-600 text-sm">2021 - Present</p>
          <p className="mt-2">Major in Finance with a concentration in Data Analytics. Active member of the Dalhousie Investment Society.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">High School Diploma</h3>
          <p className="text-gray-700">Halifax Grammar School</p>
          <p className="text-gray-600 text-sm">2017 - 2021</p>
          <p className="mt-2">Graduated with honors. Participated in business competitions and student leadership initiatives.</p>
        </div>
      </div>
    ) 
  },
  { 
    id: 3, 
    title: 'Experience', 
    content: (
      <div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Summer Intern</h3>
          <p className="text-gray-700">Bank of Montreal</p>
          <p className="text-gray-600 text-sm">May 2023 - August 2023</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Utilized Excel to evaluate customer segments and identify growth opportunities</li>
            <li>Created automated reports for branch performance tracking</li>
            <li>Developed SQL queries to analyze transaction data and generate business insights</li>
            <li>Assisted with financial analysis and customer account management</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Sales Associate</h3>
          <p className="text-gray-700">Golf Town</p>
          <p className="text-gray-600 text-sm">March 2022 - August 2022</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Managed customer service inquiries and provided product expertise</li>
            <li>Processed transactions and maintained store inventory levels</li>
            <li>Contributed to meeting store sales targets and improving customer satisfaction</li>
            <li>Assisted with merchandise displays and store operations</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Front Store Clerk</h3>
          <p className="text-gray-700">Lawtons Drugs</p>
          <p className="text-gray-600 text-sm">June 2021 - February 2022</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Operated checkout systems and processed transactions</li>
            <li>Assisted customers with product information and inquiries</li>
            <li>Contributed to store merchandising and inventory management</li>
            <li>Maintained store cleanliness and organization</li>
          </ul>
        </div>
      </div>
    ) 
  },
  { 
    id: 4, 
    title: 'Projects', 
    content: (
      <div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Financial Portfolio Analysis</h3>
          <p className="mt-2">
            Conducted in-depth analysis of a diversified investment portfolio, examining risk metrics, returns, and recommending optimization strategies to maximize risk-adjusted performance. Applied modern portfolio theory principles and used Excel for modeling.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Banking Customer Segmentation</h3>
          <p className="mt-2">
            Analyzed banking customer data to identify distinct customer segments, their specific needs, and developed targeted service strategies to improve customer satisfaction and retention. Utilized SQL and Excel for data analysis.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Market Research Report: FinTech Trends</h3>
          <p className="mt-2">
            Researched emerging market trends in the financial technology sector, analyzing competitive landscape and identifying growth opportunities for established banking institutions. Created detailed reports with actionable recommendations.
          </p>
        </div>
      </div>
    ) 
  },
  { 
    id: 5, 
    title: 'Skills', 
    content: (
      <div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Finance</h3>
            <ul className="list-disc pl-5">
              <li>Financial Analysis</li>
              <li>Budgeting</li>
              <li>Investment Analysis</li>
              <li>Risk Assessment</li>
              <li>Banking</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Data & Analytics</h3>
            <ul className="list-disc pl-5">
              <li>SQL</li>
              <li>Excel (Advanced)</li>
              <li>Data Analysis</li>
              <li>Business Intelligence</li>
              <li>Data Visualization</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Business</h3>
            <ul className="list-disc pl-5">
              <li>Strategic Planning</li>
              <li>Market Research</li>
              <li>Customer Service</li>
              <li>Project Management</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Software & Tools</h3>
            <ul className="list-disc pl-5">
              <li>Microsoft Office Suite</li>
              <li>Power BI</li>
              <li>Bloomberg Terminal</li>
              <li>Financial Databases</li>
            </ul>
          </div>
        </div>
      </div>
    ) 
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-16">
      <CardCarousel cards={cards} />
    </div>
  );
} 