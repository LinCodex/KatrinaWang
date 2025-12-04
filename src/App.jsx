import { useState, useEffect } from 'react';
import { TRANSLATIONS } from './data/translations';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PropertyDetailOverlay from './components/PropertyDetailOverlay';
import {
  HeroSection,
  AboutSection,
  MarketInsights,
  PropertiesSection,
  TestimonialsSection,
  ContactSection
} from './sections';

/**
 * Main App Component
 * KATRINA WANG REAL ESTATE - Professional Portfolio
 */
export default function App() {
  const [view, setView] = useState('home'); 
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState('en');

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  }, [view]);

  // Prevent background scroll when property detail is open
  useEffect(() => {
    if (selectedProperty) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProperty]);

  const bgMain = isDark ? 'bg-black' : 'bg-white';
  const textMain = isDark ? 'text-white' : 'text-black';
  const borderLight = isDark ? 'border-white/5' : 'border-black/5';
  const navBg = isDark ? 'bg-black/80' : 'bg-white/80';
  const inputBorder = isDark ? 'border-zinc-700' : 'border-zinc-300';

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLang = () => setLang(lang === 'en' ? 'zh' : 'en');

  const handleNav = (targetView) => {
    setView(targetView);
    setIsMenuOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className={`${bgMain} ${textMain} min-h-screen font-sans selection:bg-zinc-500 selection:text-white transition-colors duration-700 ease-in-out`}>
      
      {/* Property Details Overlay */}
      {selectedProperty && (
        <PropertyDetailOverlay 
          property={selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
          isDark={isDark}
          t={t}
        />
      )}

      {/* Navigation */}
      <Navigation 
        view={view}
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDark={isDark}
        lang={lang}
        t={t}
        handleNav={handleNav}
        toggleTheme={toggleTheme}
        toggleLang={toggleLang}
        navBg={navBg}
        borderLight={borderLight}
        bgMain={bgMain}
        textMain={textMain}
      />

      {/* Main Content Router */}
      <main className="min-h-screen">
        {view === 'home' && (
          <>
            <HeroSection 
              t={t} 
              isDark={isDark} 
              textMain={textMain} 
              borderLight={borderLight} 
              handleNav={handleNav} 
            />

            <div className={`border-t transition-colors duration-700 ${borderLight}`}>
               <AboutSection t={t} isDark={isDark} textMain={textMain} />
            </div>

            <MarketInsights t={t} isDark={isDark} />

            <div className={`border-t transition-colors duration-700 ${borderLight}`}>
               <PropertiesSection 
                 t={t} 
                 isDark={isDark} 
                 navBg={navBg} 
                 textMain={textMain} 
                 onPropertyClick={setSelectedProperty} 
               />
            </div>

            <TestimonialsSection t={t} isDark={isDark} />

            <div className={`border-t transition-colors duration-700 ${borderLight}`}>
               <ContactSection t={t} isDark={isDark} inputBorder={inputBorder} />
            </div>
          </>
        )}

        {view === 'about' && (
          <div className="pt-20 md:pt-24">
            <AboutSection t={t} isDark={isDark} textMain={textMain} />
            <TestimonialsSection t={t} isDark={isDark} />
          </div>
        )}

        {view === 'properties' && (
           <div className="pt-20 md:pt-24">
             <PropertiesSection 
               t={t} 
               isDark={isDark} 
               navBg={navBg} 
               textMain={textMain} 
               onPropertyClick={setSelectedProperty} 
             />
           </div>
        )}

        {view === 'contact' && (
          <div className="pt-20 md:pt-24">
            <ContactSection t={t} isDark={isDark} inputBorder={inputBorder} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer t={t} isDark={isDark} textMain={textMain} handleNav={handleNav} />
    </div>
  );
}
