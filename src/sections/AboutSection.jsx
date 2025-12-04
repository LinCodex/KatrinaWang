import { Building2, TrendingUp } from 'lucide-react';
import { Reveal, SectionHeading } from '../components/ui';

/**
 * About section with agent bio and cards
 */
const AboutSection = ({ t, isDark, textMain }) => {
  return (
    <div className={`py-16 md:py-24 px-4 md:px-12 max-w-[1800px] mx-auto border-x ${isDark ? 'border-white/5' : 'border-black/5'} ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'} transition-colors duration-700`}>
      <SectionHeading number="01" title={t.about.section} isDark={isDark} />
      <div className="grid md:grid-cols-12 gap-8 md:gap-12">
        <div className={`md:col-span-5 h-[300px] md:h-full md:min-h-[500px] relative transition-colors duration-700 ${isDark ? 'bg-zinc-900' : 'bg-zinc-200'}`}>
            <Reveal className="h-full">
              <img 
                src="https://i.ibb.co/FLXQV6Wk/Gemini-Generated-Image-vmxd4tvmxd4tvmxd.png" 
                alt="Katrina Wang" 
                className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"; 
                  e.target.alt = "Placeholder";
                }}
              />
            </Reveal>
            <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-black/50 backdrop-blur-md px-2 py-1 md:px-3 md:py-1 text-white text-[10px] md:text-xs font-mono">
              Katrina Wang
            </div>
        </div>
        <div className="md:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8">
          <Reveal>
            <div>
              <h3 className={`text-xl md:text-2xl font-light mb-2 ${textMain}`}>Katrina Wang</h3>
              <p className="text-zinc-500 font-mono text-[10px] md:text-xs uppercase tracking-widest">{t.about.role}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className={`leading-relaxed font-light text-base md:text-lg ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{t.about.bio}</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-2 md:pt-4">
            <Reveal delay={200} className={`p-4 md:p-6 border ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-white border-black/5'}`}>
                <Building2 className={`mb-3 md:mb-4 ${textMain}`} size={20} />
                <h4 className="font-bold text-xs md:text-sm uppercase mb-2">{t.about.cards.portfolio}</h4>
                <p className="text-xs md:text-sm text-zinc-500">{t.about.cards.portfolio_desc}</p>
            </Reveal>
            <Reveal delay={300} className={`p-4 md:p-6 border ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-white border-black/5'}`}>
                <TrendingUp className={`mb-3 md:mb-4 ${textMain}`} size={20} />
                <h4 className="font-bold text-xs md:text-sm uppercase mb-2">{t.about.cards.investment}</h4>
                <p className="text-xs md:text-sm text-zinc-500">{t.about.cards.investment_desc}</p>
            </Reveal>
          </div>
          <Reveal delay={400}>
            <p className="text-zinc-500 text-xs md:text-sm italic border-l-2 border-zinc-500/20 pl-3 md:pl-4">"{t.about.quote}"</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
