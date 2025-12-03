import { useState } from 'react';
import { Calculator } from 'lucide-react';

/**
 * Mortgage payment calculator component
 */
const MortgageCalculator = ({ price, isDark, t }) => {
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const calculateMonthlyPayment = () => {
    const principal = price * (1 - downPaymentPercent / 100);
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (interestRate === 0) return principal / numberOfPayments;

    const monthlyPayment =
      (principal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    return Math.round(monthlyPayment).toLocaleString();
  };

  return (
    <div className={`p-6 md:p-8 border ${isDark ? 'border-white/10 bg-zinc-900/20' : 'border-black/10 bg-zinc-50'}`}>
      <h3 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-2">
        <Calculator size={18} />
        {t.calculator.title}
      </h3>

      <div className="space-y-6 md:space-y-8">
        <div>
           <div className="flex justify-between text-[10px] md:text-xs font-mono uppercase mb-2 text-zinc-500">
             <span>{t.calculator.price}</span>
             <span>${price.toLocaleString()}</span>
           </div>
           <div className={`h-1 w-full ${isDark ? 'bg-zinc-800' : 'bg-zinc-300'}`}></div>
        </div>

        <div>
           <div className="flex justify-between text-[10px] md:text-xs font-mono uppercase mb-2">
             <span>{t.calculator.downPayment}</span>
             <span>{downPaymentPercent}%</span>
           </div>
           <input 
             type="range" 
             min="0" 
             max="80" 
             value={downPaymentPercent} 
             onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
             className="w-full h-2 bg-zinc-600 rounded-lg appearance-none cursor-pointer accent-white"
           />
        </div>

        <div>
           <div className="flex justify-between text-[10px] md:text-xs font-mono uppercase mb-2">
             <span>{t.calculator.rate}</span>
             <span>{interestRate}%</span>
           </div>
           <input 
             type="range" 
             min="1" 
             max="10" 
             step="0.1"
             value={interestRate} 
             onChange={(e) => setInterestRate(Number(e.target.value))}
             className="w-full h-2 bg-zinc-600 rounded-lg appearance-none cursor-pointer accent-white"
           />
        </div>

        <div className={`pt-6 mt-6 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
          <div className="flex justify-between items-baseline">
             <span className="text-xs md:text-sm font-mono uppercase text-zinc-500">{t.calculator.monthly}</span>
             <span className="text-2xl md:text-3xl font-light">${calculateMonthlyPayment()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
