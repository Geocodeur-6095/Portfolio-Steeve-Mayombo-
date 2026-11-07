import React, { useState, useEffect } from 'react';
import { SiteSettingsProvider } from '@/lib/siteSettings';
import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import BrandValues from '@/components/portfolio/BrandValues';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ServicesSection from '@/components/portfolio/ServicesSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import WhatsAppButton from '@/components/portfolio/WhatsAppButton';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = sectionId === 'home' ? 0 : element.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <SiteSettingsProvider>
      <div className="bg-[var(--surface)] min-h-screen">
        <Navbar onNavigate={navigateTo} activeSection={activeSection} />

        <main>
          <div id="home">
            <HeroSection onNavigate={navigateTo} />
          </div>

          <AboutSection />
          <BrandValues />
          <SkillsSection />
          <ProjectsSection />
          <ServicesSection onContact={() => navigateTo('contact')} />
          <ContactSection />
        </main>

        <Footer onNavigate={navigateTo} />
        <WhatsAppButton />
      </div>
    </SiteSettingsProvider>
  );
}