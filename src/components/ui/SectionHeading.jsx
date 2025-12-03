import Reveal from './Reveal';

/**
 * Section heading with number prefix
 */
const SectionHeading = ({ number, title, isDark }) => (
  <Reveal>
    <div className={`flex flex-col md:flex-row items-baseline gap-4 mb-12 md:mb-16 border-b pb-6 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
      <span className="font-mono text-zinc-500 text-sm">({number})</span>
      <h2 className={`text-2xl md:text-3xl lg:text-5xl font-light tracking-tighter uppercase ${isDark ? 'text-white' : 'text-black'}`}>{title}</h2>
    </div>
  </Reveal>
);

export default SectionHeading;
