/**
 * Styled button component with hover animation
 */
const Button = ({ children, onClick, className = "", secondary = false, isDark }) => {
  const baseClasses = "relative px-6 py-3 md:px-8 md:py-4 overflow-hidden group border transition-all duration-300";
  const darkClasses = secondary 
    ? "border-white/20 bg-transparent text-white hover:text-black" 
    : "border-white/20 bg-white text-black hover:text-white";
  const lightClasses = secondary
    ? "border-black/20 bg-transparent text-black hover:text-white"
    : "border-black/20 bg-black text-white hover:text-black";

  const hoverBgDark = secondary ? "bg-white" : "bg-black";
  const hoverBgLight = secondary ? "bg-black" : "bg-white";

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${isDark ? darkClasses : lightClasses} ${className}`}
    >
      <span className={`absolute inset-0 w-0 transition-all duration-[400ms] ease-out group-hover:w-full ${isDark ? hoverBgDark : hoverBgLight}`}></span>
      <span className="relative uppercase tracking-widest text-xs font-bold flex items-center gap-2 z-10">
        {children}
      </span>
    </button>
  );
};

export default Button;
