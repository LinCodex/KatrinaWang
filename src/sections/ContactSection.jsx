import { Phone, Mail, MapPin } from 'lucide-react';
import { Reveal, SectionHeading, Button, CustomDropdown } from '../components/ui';

/**
 * Contact section with form and contact info
 */
const ContactSection = ({ t, isDark, inputBorder }) => (
  <div className={`py-16 md:py-24 px-4 md:px-12 max-w-[1800px] mx-auto border-x ${isDark ? 'border-white/5' : 'border-black/5'} min-h-[80vh] flex flex-col justify-center`}>
    <div className="grid md:grid-cols-2 gap-12 md:gap-16">
      <div>
        <SectionHeading number="04" title={t.contact.section} isDark={isDark} />
        <Reveal>
          <p className={`text-base md:text-xl font-light leading-relaxed mb-8 md:mb-12 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
            {t.contact.desc}
          </p>
        </Reveal>
        <div className="space-y-5 md:space-y-6">
          <Reveal delay={100} className="group">
              <span className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">{t.contact.labels.phone}</span>
              <a href="tel:718-757-6068" className={`flex items-center gap-3 md:gap-4 transition-colors cursor-pointer ${isDark ? 'text-white hover:text-zinc-400' : 'text-black hover:text-zinc-600'}`}>
                <Phone size={16} className="flex-shrink-0" />
                <span className="text-lg md:text-2xl font-light">718-757-6068</span>
              </a>
          </Reveal>
          <Reveal delay={200} className="group">
              <span className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">{t.contact.labels.email}</span>
              <a href="mailto:bnlwang@gmail.com" className={`flex items-center gap-3 md:gap-4 transition-colors cursor-pointer ${isDark ? 'text-white hover:text-zinc-400' : 'text-black hover:text-zinc-600'}`}>
                <Mail size={16} className="flex-shrink-0" />
                <span className="text-lg md:text-2xl font-light break-all">bnlwang@gmail.com</span>
              </a>
          </Reveal>
          <Reveal delay={300} className="group">
              <span className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">{t.contact.labels.office}</span>
              <div className={`flex items-start gap-3 md:gap-4 transition-colors cursor-pointer ${isDark ? 'text-white hover:text-zinc-400' : 'text-black hover:text-zinc-600'}`}>
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-base md:text-xl font-light max-w-xs">140-75 Ash Ave. Office 2E <br/> Flushing, NY 11355</span>
              </div>
          </Reveal>
        </div>
      </div>
      <Reveal delay={400}>
        <form className={`space-y-6 md:space-y-8 mt-6 md:mt-0 p-5 md:p-8 border ${isDark ? 'bg-zinc-900/20 border-white/5' : 'bg-zinc-50 border-black/5'}`} onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2 group">
            <label className="text-[10px] md:text-xs font-mono uppercase text-zinc-500">{t.contact.form.name}</label>
            <input type="text" className={`w-full bg-transparent border-b py-2 md:py-3 text-base md:text-lg focus:outline-none transition-colors ${inputBorder} ${isDark ? 'focus:border-white' : 'focus:border-black'}`} />
          </div>
          <div className="space-y-2 group">
            <label className="text-[10px] md:text-xs font-mono uppercase text-zinc-500">{t.contact.form.email}</label>
            <input type="email" className={`w-full bg-transparent border-b py-2 md:py-3 text-base md:text-lg focus:outline-none transition-colors ${inputBorder} ${isDark ? 'focus:border-white' : 'focus:border-black'}`} />
          </div>
          <div className="space-y-2 group">
            <label className="text-[10px] md:text-xs font-mono uppercase text-zinc-500">{t.contact.form.interest}</label>
            <CustomDropdown 
              options={t.contact.options} 
              value={null} 
              onChange={() => {}} 
              isDark={isDark} 
              placeholder="Select an option"
            />
          </div>
          <div className="pt-4 md:pt-8">
            <Button className="w-full" isDark={isDark}>{t.contact.form.submit}</Button>
          </div>
        </form>
      </Reveal>
    </div>
  </div>
);

export default ContactSection;
