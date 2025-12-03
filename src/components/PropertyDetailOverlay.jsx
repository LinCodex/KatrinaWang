import { X, GraduationCap, Thermometer, Calculator } from 'lucide-react';
import { Button, SimpleLineChart } from './ui';
import MortgageCalculator from './MortgageCalculator';

/**
 * Full-screen property detail overlay
 */
const PropertyDetailOverlay = ({ property, onClose, isDark, t }) => {
  if (!property) return null;

  return (
    <div className={`fixed inset-0 z-[60] overflow-y-auto animate-in fade-in duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <button 
        onClick={onClose}
        className={`fixed top-4 right-4 md:top-8 md:right-8 z-50 p-2 rounded-full transition-transform hover:scale-110 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}
      >
        <X size={24} />
      </button>

      <div className="max-w-[1200px] mx-auto pb-24">
        {/* Hero */}
        <div className="h-[40vh] md:h-[60vh] relative w-full overflow-hidden">
          <img src={property.image} className="w-full h-full object-cover" alt={property.title} />
          <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
             <h2 className="text-2xl md:text-6xl font-light text-white mb-2 leading-tight">{property.title}</h2>
             <p className="text-base md:text-xl text-zinc-300 font-mono">{property.location}</p>
          </div>
        </div>

        <div className={`p-4 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 ${isDark ? 'text-white' : 'text-black'}`}>
           {/* Left Col: Details */}
           <div className="md:col-span-7 space-y-8 md:space-y-12">
              <div>
                <h3 className="text-xl md:text-2xl font-light uppercase tracking-widest mb-4 md:mb-6 border-b pb-4 border-current opacity-30">{t.properties.details.analytics}</h3>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className={`p-4 md:p-6 border ${isDark ? 'border-white/10 bg-zinc-900/50' : 'border-black/10 bg-zinc-50'}`}>
                    <span className="text-[10px] md:text-xs font-mono uppercase text-zinc-500 block mb-2">Days on Market</span>
                    <span className="text-2xl md:text-3xl font-light">{property.analytics.daysOnMarket}</span>
                  </div>
                  <div className={`p-4 md:p-6 border ${isDark ? 'border-white/10 bg-zinc-900/50' : 'border-black/10 bg-zinc-50'}`}>
                    <span className="text-[10px] md:text-xs font-mono uppercase text-zinc-500 block mb-2">$/SqFt</span>
                    <span className="text-2xl md:text-3xl font-light">${property.analytics.pricePerSqFt}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-light uppercase tracking-widest mb-4 md:mb-6 border-b pb-4 border-current opacity-30">{t.properties.details.history}</h3>
                <SimpleLineChart data={property.analytics.history} isDark={isDark} />
              </div>

              <div>
                 <h3 className="text-xl md:text-2xl font-light uppercase tracking-widest mb-4 md:mb-6 border-b pb-4 border-current opacity-30">{t.properties.details.schools}</h3>
                 <div className="space-y-4">
                   {property.analytics.schools.length > 0 ? property.analytics.schools.map((school, i) => (
                     <div key={i} className="flex items-center justify-between group">
                        <div className="flex items-center gap-3 md:gap-4">
                          <GraduationCap size={18} className="text-zinc-500 flex-shrink-0" />
                          <span className="font-light text-sm md:text-base">{school.name}</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-4">
                           <span className="text-[10px] md:text-xs font-mono text-zinc-500">{school.distance}</span>
                           <span className={`w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-[10px] md:text-xs font-bold rounded-full ${school.rating >= 8 ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'}`}>
                             {school.rating}
                           </span>
                        </div>
                     </div>
                   )) : <p className="text-zinc-500 italic text-sm">No school data available for this area.</p>}
                 </div>
              </div>
           </div>

           {/* Right Col: Risks & Actions */}
           <div className="md:col-span-5 space-y-8 md:space-y-12">
              <div className={`p-6 md:p-8 border ${isDark ? 'border-white/10 bg-zinc-900/20' : 'border-black/10 bg-zinc-50'}`}>
                 <h3 className="text-xl font-bold mb-6">{property.price}</h3>
                 <div className="space-y-4 mb-8">
                    <div className="flex justify-between border-b border-current/10 pb-2">
                       <span className="text-zinc-500 text-sm">Bedrooms</span>
                       <span>{property.specs.beds}</span>
                    </div>
                    <div className="flex justify-between border-b border-current/10 pb-2">
                       <span className="text-zinc-500 text-sm">Bathrooms</span>
                       <span>{property.specs.baths}</span>
                    </div>
                    <div className="flex justify-between border-b border-current/10 pb-2">
                       <span className="text-zinc-500 text-sm">SqFt</span>
                       <span>{property.specs.sqft}</span>
                    </div>
                 </div>
                 <Button className="w-full" isDark={isDark}>Schedule Viewing</Button>
              </div>

              {/* Mortgage Calculator Integration */}
              {property.priceRaw > 0 && (
                <MortgageCalculator price={property.priceRaw} isDark={isDark} t={t} />
              )}

              <div>
                <h3 className="text-base md:text-lg font-light uppercase tracking-widest mb-4 md:mb-6 flex items-center gap-2">
                   <Thermometer size={16} /> {t.properties.details.risks}
                </h3>
                <div className="space-y-6">
                   <div>
                     <div className="flex justify-between text-[10px] md:text-xs font-mono uppercase mb-2">
                       <span>Flood Risk</span>
                       <span>{property.analytics.risks.flood}/100</span>
                     </div>
                     <div className={`h-2 w-full rounded-full ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`}>
                        <div style={{ width: `${property.analytics.risks.flood}%` }} className="h-full bg-blue-500 rounded-full"></div>
                     </div>
                   </div>
                   <div>
                     <div className="flex justify-between text-[10px] md:text-xs font-mono uppercase mb-2">
                       <span>Fire Risk</span>
                       <span>{property.analytics.risks.fire}/100</span>
                     </div>
                     <div className={`h-2 w-full rounded-full ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`}>
                        <div style={{ width: `${property.analytics.risks.fire}%` }} className="h-full bg-orange-500 rounded-full"></div>
                     </div>
                   </div>
                   <div>
                     <div className="flex justify-between text-[10px] md:text-xs font-mono uppercase mb-2">
                       <span>Heat Risk</span>
                       <span>{property.analytics.risks.heat}/100</span>
                     </div>
                     <div className={`h-2 w-full rounded-full ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`}>
                        <div style={{ width: `${property.analytics.risks.heat}%` }} className="h-full bg-red-500 rounded-full"></div>
                     </div>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailOverlay;
