/**
 * Footer component
 */
const Footer = ({ t, isDark, textMain, handleNav }) => {
  return (
    <footer className={`border-t py-12 md:py-16 px-4 md:px-12 transition-colors duration-700 ${isDark ? 'border-zinc-900 bg-black' : 'border-zinc-200 bg-zinc-50'}`}>
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
        <div className="flex flex-col gap-4">
          <h4 className="text-xl md:text-2xl font-bold tracking-tighter uppercase">KATRINA WANG</h4>
          <p className="text-zinc-500 text-xs md:text-sm max-w-xs font-mono">140-75 Ash Ave. Office 2E <br/> Flushing, NY 11355</p>
          <p className="text-zinc-500 text-xs md:text-sm">718-757-6068 | bnlwang@gmail.com</p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:gap-12 text-sm text-zinc-500">
           <div className="flex flex-col gap-2">
             <span className={`font-bold uppercase mb-2 text-sm ${textMain}`}>{t.footer.navigate}</span>
             <button onClick={() => handleNav('home')} className={`text-left transition-colors text-sm ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>{t.nav.home}</button>
             <button onClick={() => handleNav('properties')} className={`text-left transition-colors text-sm ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>{t.nav.properties}</button>
           </div>
           <div className="flex flex-col gap-2">
             <span className={`font-bold uppercase mb-2 text-sm ${textMain}`}>{t.footer.connect}</span>
             <a href="#" className={`transition-colors text-sm ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Chase Global Realty</a>
             <a href="#" className={`transition-colors text-sm ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>WeChat</a>
           </div>
        </div>
      </div>
      <div className={`max-w-[1800px] mx-auto mt-12 md:mt-16 pt-6 md:pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-zinc-600 font-mono transition-colors duration-700 ${isDark ? 'border-zinc-900' : 'border-zinc-200'}`}>
        <p>{t.footer.rights}</p>
        <p>{t.footer.license}</p>
      </div>
    </footer>
  );
};

export default Footer;
