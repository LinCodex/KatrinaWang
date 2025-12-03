import { Reveal, Button } from '../components/ui';

/**
 * Hero section with main headline and CTAs
 */
const HeroSection = ({ t, isDark, textMain, borderLight, handleNav }) => {
  return (
    <div className={`relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center pt-24 md:pt-32 pb-8 md:pb-12 px-4 md:px-12 border-x ${borderLight} mx-auto max-w-[1800px]`}>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[60vw] h-[80vw] md:h-[60vw] rounded-full blur-[100px] pointer-events-none transition-colors duration-1000 ${isDark ? 'bg-zinc-900/30' : 'bg-zinc-200/50'}`}></div>
      <div className="z-10 max-w-4xl">
        <Reveal>
          <p className="text-zinc-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-3 md:mb-4"> {t.hero.subtitle} </p>
        </Reveal>
        <div className={`text-4xl md:text-6xl lg:text-8xl font-light tracking-tighter leading-[0.9] mix-blend-difference mb-6 md:mb-8 ${isDark ? 'text-white' : 'text-black'}`}>
          <Reveal delay={100}>{t.hero.title[0]}</Reveal>
          <Reveal delay={200}>{t.hero.title[1]}</Reveal>
          <Reveal delay={300}><span className="italic font-serif">{t.hero.title[2]}</span></Reveal>
        </div>
        <Reveal delay={400}>
          <p className={`max-w-xl font-light text-base md:text-lg leading-relaxed border-l pl-4 md:pl-6 mt-6 md:mt-8 ${isDark ? 'text-zinc-400 border-white/30' : 'text-zinc-600 border-black/30'}`}>
            "{t.hero.desc}"
          </p>
        </Reveal>
      </div>
      <div className="z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mt-10 md:mt-16">
        <Reveal delay={500} className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
          <Button onClick={() => handleNav('properties')} isDark={isDark}>{t.hero.cta_collection}</Button>
          <Button secondary onClick={() => handleNav('contact')} isDark={isDark}>{t.hero.cta_contact}</Button>
        </Reveal>
        <Reveal delay={600} className="flex gap-8 md:gap-12 text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest text-left md:text-right">
          <div><span className={`block text-lg md:text-xl mb-1 ${textMain}`}>19+</span>{t.hero.stats_exp}</div>
          <div><span className={`block text-lg md:text-xl mb-1 ${textMain}`}>NY</span>{t.hero.stats_area}</div>
        </Reveal>
      </div>
    </div>
  );
};

export default HeroSection;
