import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Bio from "./Components/Bio";
import Skills from "./Components/Skills";
import WorkExperience from "./Components/WorkExperience";
import EducationSection from "./Components/EducationSection";
import ContactForm from "./Components/ContactForm";

import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";
import ProjectPlanning from "./Components/ProjectPlanning";
import { HelmetProvider } from 'react-helmet-async';
import SEO from './Components/SEO';

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <div className="relative h-full overflow-y-auto antialiased">
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          <Hero />
          <Navbar />
          <Projects />
          <Bio />
          <Skills />
          <ProjectPlanning />
          <WorkExperience />
          <EducationSection />
          <ContactForm />
          <Footer />
          <Toaster />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
