import { CountUp } from '../components/ui';

/**
 * Market statistics section with animated counters
 */
const MarketInsights = ({ t, isDark }) => (
  <div className={`py-12 md:py-20 border-t ${isDark ? 'border-white/5 bg-zinc-950' : 'border-black/5 bg-zinc-50'}`}>
     <div className="max-w-[1800px] mx-auto px-4 md:px-12">
        <h3 className={`text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] mb-8 md:mb-12 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
          {t.market.title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
           {t.market.stats.map((stat, i) => (
             <div key={i} className="flex flex-col gap-1 md:gap-2">
                <span className={`text-2xl md:text-4xl lg:text-6xl font-light tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>
                   <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </span>
                <span className={`text-[10px] md:text-xs uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  {stat.label}
                </span>
             </div>
           ))}
        </div>
     </div>
  </div>
);

export default MarketInsights;
