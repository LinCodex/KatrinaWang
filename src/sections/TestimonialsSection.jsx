import { SectionHeading } from '../components/ui';
import { TESTIMONIALS } from '../data/properties';

/**
 * Testimonials section with horizontal scroll - FIXED for mobile overflow
 */
const TestimonialsSection = ({ t, isDark }) => (
  <div className={`py-16 md:py-24 border-t ${isDark ? 'border-white/10 bg-black' : 'border-black/10 bg-white'}`}>
    <div className="max-w-[1800px] mx-auto px-4 md:px-12">
      <SectionHeading number="03" title={t.testimonials.section} isDark={isDark} />
      
      {/* Fixed: Added overflow-hidden on parent, proper padding and margin for scroll container */}
      <div className="overflow-hidden -mx-4 md:mx-0">
        <div 
          className="flex overflow-x-auto gap-6 md:gap-16 pb-6 md:pb-8 snap-x snap-mandatory px-4 md:px-0" 
          style={{ 
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {TESTIMONIALS.map((item, index) => (
            <div 
              key={item.id} 
              className={`
                min-w-[calc(100vw-3rem)] sm:min-w-[calc(100vw-4rem)] md:min-w-[500px] lg:min-w-[600px] 
                max-w-[calc(100vw-3rem)] sm:max-w-[calc(100vw-4rem)] md:max-w-[600px]
                snap-center shrink-0
                ${index === TESTIMONIALS.length - 1 ? 'mr-4 md:mr-0' : ''}
              `}
            >
              <blockquote className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic leading-relaxed mb-6 md:mb-8 ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                "{item.quote}"
              </blockquote>
              <div className="flex items-center gap-3 md:gap-4">
                <div className={`w-8 md:w-12 h-[1px] ${isDark ? 'bg-white' : 'bg-black'}`}></div>
                <div>
                  <p className={`font-bold uppercase tracking-widest text-xs md:text-sm ${isDark ? 'text-white' : 'text-black'}`}>{item.author}</p>
                  <p className="text-[10px] md:text-xs font-mono text-zinc-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;
