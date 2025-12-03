import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check } from 'lucide-react';

/**
 * Custom styled dropdown component
 */
const CustomDropdown = ({ options, value, onChange, isDark, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full border-b py-3 text-lg flex justify-between items-center cursor-pointer transition-colors duration-300
          ${isDark 
            ? 'border-zinc-700 text-white hover:border-white' 
            : 'border-zinc-300 text-black hover:border-black'}
        `}
      >
        <span className={!value ? "text-zinc-500" : ""}>{value || placeholder}</span>
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      {isOpen && (
        <div className={`
          absolute top-full left-0 w-full z-50 max-h-60 overflow-y-auto mt-2 border shadow-xl animate-in fade-in slide-in-from-top-2 duration-200
          ${isDark 
            ? 'bg-zinc-900 border-zinc-800 text-white' 
            : 'bg-white border-zinc-200 text-black'}
        `}>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`
                px-4 py-3 cursor-pointer text-sm uppercase tracking-wide flex justify-between items-center transition-colors
                ${isDark ? 'hover:bg-zinc-800' : 'hover:bg-zinc-50'}
              `}
            >
              {option}
              {value === option && <Check size={14} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
