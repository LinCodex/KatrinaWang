import { MapPin, ArrowUpRight } from 'lucide-react';
import { Reveal } from './ui';

/**
 * Property listing card component
 */
const PropertyCard = ({ property, t, isDark, index, onClick }) => {
  return (
    <Reveal delay={index * 100}>
      <div onClick={onClick} className="group relative w-full cursor-pointer overflow-hidden">
        <div className={`aspect-[3/4] overflow-hidden relative ${isDark ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
          <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20 flex gap-2">
             {property.status === 'sold' && (
               <span className={`px-2 py-1 md:px-3 md:py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
                 {t.properties.status.sold}
               </span>
             )}
             {property.status === 'active' && (
               <span className={`px-2 py-1 md:px-3 md:py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest border ${isDark ? 'bg-black text-white border-white/20' : 'bg-white text-black border-black/20'}`}>
                 {t.properties.status.active}
               </span>
             )}
             {property.status === 'underContract' && (
               <span className={`px-2 py-1 md:px-3 md:py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest border ${isDark ? 'bg-zinc-800 text-zinc-300 border-white/20' : 'bg-zinc-200 text-zinc-600 border-black/20'}`}>
                 {t.properties.status.underContract}
               </span>
             )}
          </div>
          
          <img 
            src={property.image} 
            alt={property.title}
            className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-105 group-hover:grayscale-0 grayscale opacity-90 group-hover:opacity-100"
          />
          
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm bg-black/40">
             <div className={`border p-4 md:p-8 text-center bg-black/50 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ${isDark ? 'border-white/30 text-white' : 'border-white/30 text-white'}`}>
               <p className="text-xl md:text-2xl font-light mb-2">{property.price}</p>
               <div className="flex gap-3 md:gap-4 text-[10px] md:text-xs font-mono uppercase tracking-widest text-zinc-300 mb-4 md:mb-6">
                 <span>{property.specs.beds} Beds</span>
                 <span>{property.specs.baths} Baths</span>
                 <span>{property.specs.sqft} Sqft</span>
               </div>
               <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest border border-white px-3 py-1.5 md:px-4 md:py-2 hover:bg-white hover:text-black transition-colors">
                 {t.properties.details.learnMore}
               </span>
             </div>
          </div>
        </div>

        <div className={`mt-3 md:mt-4 flex justify-between items-start border-t pt-3 md:pt-4 ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
          <div>
            <h3 className={`text-base md:text-xl font-medium tracking-tight transition-colors ${isDark ? 'text-white group-hover:text-zinc-400' : 'text-black group-hover:text-zinc-600'}`}>{property.title}</h3>
            <div className="flex items-center gap-1 text-zinc-500 mt-1">
              <MapPin size={12} />
              <p className="text-[10px] md:text-xs uppercase tracking-wider">{property.location}</p>
            </div>
          </div>
          <ArrowUpRight size={18} className={`transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${isDark ? 'text-zinc-600 group-hover:text-white' : 'text-zinc-400 group-hover:text-black'}`} />
        </div>
      </div>
    </Reveal>
  );
};

export default PropertyCard;
