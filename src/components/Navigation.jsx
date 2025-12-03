import { Menu, X, Globe, Sun, Moon } from 'lucide-react';

/**
 * Main navigation component with mobile menu
 */
const Navigation = ({ 
  view, 
  scrolled, 
  isMenuOpen, 
  setIsMenuOpen, 
  isDark, 
  lang, 
  t, 
  handleNav, 
  toggleTheme, 
  toggleLang,
  navBg,
  borderLight,
  bgMain,
  textMain
}) => {
  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? `${navBg} backdrop-blur-md py-3 md:py-4 border-b ${borderLight}` : 'py-4 md:py-8'}`}>
        <div className="max-w-[1800px] mx-auto px-4 md:px-12 flex justify-between items-center">
          <div 
            className="flex flex-col cursor-pointer z-50 group" 
            onClick={() => handleNav('home')}
          >
            <span className="text-xl md:text-2xl font-bold tracking-tighter uppercase transition-opacity hover:opacity-80">KATRINA WANG</span>
            <span className="text-[9px] md:text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Real Estate</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
            <button onClick={() => handleNav('properties')} className={`hover:text-zinc-500 transition-all duration-300 ${view === 'properties' ? 'underline underline-offset-8 decoration-1' : ''}`}>{t.nav.properties}</button>
            <button onClick={() => handleNav('about')} className={`hover:text-zinc-500 transition-all duration-300 ${view === 'about' ? 'underline underline-offset-8 decoration-1' : ''}`}>{t.nav.about}</button>
            <button onClick={() => handleNav('contact')} className={`hover:text-zinc-500 transition-all duration-300 ${view === 'contact' ? 'underline underline-offset-8 decoration-1' : ''}`}>{t.nav.contact}</button>
            
            <div className={`h-4 w-px transition-colors duration-500 ${isDark ? 'bg-white/20' : 'bg-black/20'}`}></div>

            <div className="flex items-center gap-4">
              <button onClick={toggleLang} className="flex items-center gap-2 hover:text-zinc-500 transition-colors duration-300">
                 <Globe size={16} />
                 <span>{lang === 'en' ? 'EN' : '中文'}</span>
              </button>
              <button onClick={toggleTheme} className="hover:text-zinc-500 transition-colors duration-300">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          <button className="md:hidden z-50 p-2 transition-transform duration-300 hover:rotate-90" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 z-40 flex flex-col justify-center items-center gap-6 md:gap-8 text-xl md:text-2xl uppercase font-light tracking-widest transition-all duration-500 ease-in-out
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        ${bgMain} ${textMain}
      `}>
         <button onClick={() => handleNav('home')} className="hover:scale-110 transition-transform duration-300 py-2">{t.nav.home}</button>
         <button onClick={() => handleNav('properties')} className="hover:scale-110 transition-transform duration-300 py-2">{t.nav.properties}</button>
         <button onClick={() => handleNav('about')} className="hover:scale-110 transition-transform duration-300 py-2">{t.nav.about}</button>
         <button onClick={() => handleNav('contact')} className="hover:scale-110 transition-transform duration-300 py-2">{t.nav.contact}</button>
         <div className="flex gap-6 md:gap-8 mt-6 md:mt-8">
           <button onClick={toggleLang} className="text-sm border border-current px-4 py-2">{lang === 'en' ? 'EN' : '中文'}</button>
           <button onClick={toggleTheme} className="text-sm border border-current px-4 py-2">{isDark ? 'Light' : 'Dark'}</button>
         </div>
      </div>
    </>
  );
};

export default Navigation;
