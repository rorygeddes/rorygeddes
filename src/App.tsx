import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBox from './components/ChatBox';

// Pages
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Invest from './pages/Invest';
import Roadmap from './pages/Roadmap';
import Projects from './pages/Projects';
import Updates from './pages/Updates';
import Ideas from './pages/Ideas';
import SupabaseExample from './components/SupabaseExample';

// Layout wrapper component
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ChatBox />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Welcome page - no header/footer */}
          <Route path="/" element={<>
            <Welcome />
            <ChatBox />
          </>} />
          
          {/* Routes with header/footer */}
          <Route path="/home" element={
            <MainLayout>
              <Home />
            </MainLayout>
          } />
          <Route path="/invest" element={
            <MainLayout>
              <Invest />
            </MainLayout>
          } />
          <Route path="/roadmap" element={
            <MainLayout>
              <Roadmap />
            </MainLayout>
          } />
          <Route path="/projects" element={
            <MainLayout>
              <Projects />
            </MainLayout>
          } />
          <Route path="/updates" element={
            <MainLayout>
              <Updates />
            </MainLayout>
          } />
          <Route path="/ideas" element={
            <MainLayout>
              <Ideas />
            </MainLayout>
          } />
          <Route path="/contact" element={
            <MainLayout>
              <SupabaseExample />
            </MainLayout>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
