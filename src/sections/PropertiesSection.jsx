import { useState } from 'react';
import { Filter } from 'lucide-react';
import { SectionHeading } from '../components/ui';
import PropertyCard from '../components/PropertyCard';
import { PROPERTIES } from '../data/properties';

/**
 * Properties grid section with filtering
 */
const PropertiesSection = ({ t, isDark, navBg, textMain, onPropertyClick }) => {
  const [filter, setFilter] = useState('all');

  const filteredProperties = PROPERTIES.filter(p => {
    if (filter === 'all') return true;
    return p.status === filter;
  });

  return (
    <div className={`py-16 md:py-24 px-4 md:px-12 max-w-[1800px] mx-auto border-x ${isDark ? 'border-white/5' : 'border-black/5'} min-h-screen`}>
      <SectionHeading number="02" title={t.properties.section} isDark={isDark} />
      <div className={`sticky top-16 md:top-20 z-30 py-3 md:py-4 mb-8 md:mb-12 flex justify-between items-center border-b ${navBg} backdrop-blur-md transition-colors duration-500 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
        <div 
          className="flex gap-4 md:gap-12 overflow-x-auto pb-2 md:pb-0 -mx-1 px-1" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
        >
          {['all', 'active', 'sold', 'underContract'].map((f) => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`
                text-[10px] md:text-sm uppercase tracking-widest font-bold transition-all duration-300 whitespace-nowrap ${textMain} 
                ${filter === f ? 'opacity-100 border-b-2 border-current' : 'opacity-50 hover:opacity-100'}
              `}
            >
              {t.properties.filter[f]}
            </button>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-2 text-zinc-500 text-xs font-mono">
          <Filter size={12} />
          {filteredProperties.length} {t.properties.count}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-8 md:gap-y-16">
        {filteredProperties.map((property, idx) => (
          <PropertyCard 
            key={property.id} 
            property={property} 
            t={t} 
            isDark={isDark} 
            index={idx} 
            onClick={() => onPropertyClick(property)}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertiesSection;
