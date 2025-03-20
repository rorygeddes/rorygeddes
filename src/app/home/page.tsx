import { Metadata } from 'next';
import ProfileSection from '@/components/ProfileSection';
import ResumeSection from '@/components/ResumeSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';

export const metadata: Metadata = {
  title: 'Home - Rory Geddes',
  description: 'Welcome to my professional portfolio',
};

// Sample data - you'll replace this with your actual information
const profile = {
  name: 'Rory Geddes',
  title: 'Commerce Student at Dalhousie University',
  bio: 'Third-year Commerce student with a major in Finance and a concentration in Data Analytics. Experience in financial analysis, data-driven insights, and customer service. Passionate about combining business knowledge with analytical skills to drive strategic decision-making.',
  imagePath: '/profile.jpg', // Make sure to add your profile image to the public folder
};

const experiences = [
  {
    id: '1',
    company: 'Bank of Montreal',
    title: 'Summer Intern',
    period: 'May 2023 - August 2023',
    description: 'Utilized Excel to evaluate customer segments, identify growth opportunities, and create automated reports for branch performance. Developed SQL queries to analyze transaction data and generate business insights.',
    technologies: ['Excel', 'SQL', 'Data Analysis', 'Financial Services'],
  },
  {
    id: '2',
    company: 'Golf Town',
    title: 'Sales Associate',
    period: 'March 2022 - August 2022',
    description: 'Managed customer service inquiries and provided product expertise on golf equipment. Processed transactions and maintained store inventory levels.',
    technologies: ['Customer Service', 'Sales', 'Retail Operations'],
  },
  {
    id: '3',
    company: 'Lawtons Drugs',
    title: 'Front Store Clerk',
    period: 'June 2021 - February 2022',
    description: 'Operated checkout systems, processed transactions, and assisted customers with product information. Contributed to store merchandising and inventory management.',
    technologies: ['Customer Service', 'Retail', 'Inventory Management'],
  }
];

const projects = [
  {
    id: '1',
    title: 'Financial Portfolio Analysis',
    description: 'Conducted in-depth analysis of a diversified investment portfolio, examining risk metrics, returns, and recommending optimization strategies to maximize risk-adjusted performance.',
    technologies: ['Financial Analysis', 'Excel', 'Risk Assessment', 'Investment Strategies'],
    imagePath: '/projects/project1.jpg', // Add project images to public/projects/
    projectUrl: '#',
  },
  {
    id: '2',
    title: 'Banking Customer Segmentation',
    description: 'Analyzed banking customer data to identify distinct customer segments, their specific needs, and developed targeted service strategies to improve customer satisfaction and retention.',
    technologies: ['SQL', 'Data Analysis', 'Customer Analytics', 'Excel'],
    imagePath: '/projects/project2.jpg',
    projectUrl: '#',
  },
  {
    id: '3',
    title: 'Market Research Report',
    description: 'Researched emerging market trends in the financial technology sector, analyzing competitive landscape and identifying growth opportunities for established banking institutions.',
    technologies: ['Market Research', 'Industry Analysis', 'Trend Forecasting'],
    imagePath: '/projects/project3.jpg',
    projectUrl: '#',
  }
];

const skillCategories = [
  {
    id: '1',
    name: 'Finance',
    skills: ['Financial Analysis', 'Budgeting', 'Investment Analysis', 'Financial Modeling', 'Risk Assessment', 'Banking'],
  },
  {
    id: '2',
    name: 'Data & Analytics',
    skills: ['SQL', 'Excel', 'Data Analysis', 'Business Intelligence', 'Data Visualization', 'Reporting'],
  },
  {
    id: '3',
    name: 'Business',
    skills: ['Strategic Planning', 'Market Research', 'Customer Service', 'Project Management', 'Business Development'],
  },
  {
    id: '4',
    name: 'Software & Tools',
    skills: ['Microsoft Office Suite', 'Power BI', 'Tableau', 'Bloomberg Terminal', 'Financial Databases'],
  },
  {
    id: '5',
    name: 'Soft Skills',
    skills: ['Communication', 'Problem Solving', 'Teamwork', 'Critical Thinking', 'Attention to Detail', 'Time Management'],
  },
  // Add more categories as needed
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Section */}
      <ProfileSection 
        name={profile.name}
        title={profile.title}
        bio={profile.bio}
        imagePath={profile.imagePath}
      />
      
      {/* Resume Section */}
      <div id="resume">
        <ResumeSection 
          resumePath="/resume.pdf" // Add your resume PDF to the public folder
          resumePreviewPath="/resume.pdf" // You can use the same file for preview
        />
      </div>
      
      {/* Experience Section */}
      <div id="experience">
        <ExperienceSection experiences={experiences} />
      </div>
      
      {/* Projects Section */}
      <div id="projects">
        <ProjectsSection projects={projects} />
      </div>
      
      {/* Skills Section */}
      <div id="skills">
        <SkillsSection categories={skillCategories} />
      </div>
    </div>
  );
} 