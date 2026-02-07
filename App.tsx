
import React from 'react';
import { ComparisonChart } from './components/ComparisonChart';
import { SafetySection } from './components/SafetySection';
import { ParentAdvisor } from './components/ParentAdvisor';
import { CONCERNS, COLORS } from './constants';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-slate-500 hover:text-emerald-600 font-medium transition-colors text-sm md:text-base">
    {children}
  </a>
);

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h2>
    <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">E</div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">The E-Bike Initiative</span>
        </div>
        <div className="flex gap-4 md:gap-8">
          <NavLink href="#benefits">Benefits</NavLink>
          <NavLink href="#safety">Safety</NavLink>
          <NavLink href="#finance">Finance</NavLink>
          <NavLink href="#concerns">FAQ</NavLink>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
          Independence • Responsibility • Age 12
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8">
          A Smarter Way to <span className="text-emerald-500">Learn & Lead.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
          I'm 12 now, and I'm ready to take the next step. This isn't just about a bike. It's about personal growth, taking responsibility for my schedule, 
          and building the foundation for an independent adulthood.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#safety" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-lg">
            View My Safety Plan
          </a>
          <a href="#benefits" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
            See the Benefits
          </a>
        </div>
      </section>

      {/* Main Benefits Section */}
      <section id="benefits" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Beyond Transportation" 
            subtitle="The positive impact this decision will have on my daily life, health, and development."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6">🏃‍♂️</div>
              <h3 className="text-xl font-bold mb-4">Healthy Lifestyle</h3>
              <p className="text-slate-600">Studies show e-bikers get more exercise because they ride longer and more often. It’s an active alternative to sitting in a car.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-6">🌱</div>
              <h3 className="text-xl font-bold mb-4">Eco-Friendly</h3>
              <p className="text-slate-600">Lowering our family's carbon footprint. E-bikes produce 0 emissions and cost less than €0.05 to charge fully.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center text-2xl mb-6">⏳</div>
              <h3 className="text-xl font-bold mb-4">Time Efficiency</h3>
              <p className="text-slate-600">Faster than walking and more reliable than public transit. More time for school work and family dinners.</p>
            </div>
          </div>

          <ComparisonChart />
        </div>
      </section>

      {/* Safety Plan */}
      <section id="safety" className="py-24 px-6 md:px-12 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">My 360° Safety Commitment</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Safety is non-negotiable. Even at 12, I have researched and designed a plan to ensure total safety on every trip.</p>
          </div>
          <SafetySection />
          
          <div className="mt-16 p-8 bg-slate-800 rounded-3xl border border-slate-700 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Dutch Road Mastery</h3>
              <p className="text-slate-400 mb-6">Living in the Netherlands, we have the best bike infrastructure in the world. I will use the 'fietspaden' correctly and have already passed my traffic safety course.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> No earphones while riding</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Double locking mechanism</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Routine hardware inspections</li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <div className="bg-slate-700 h-48 rounded-2xl flex items-center justify-center">
                 <img src="https://picsum.photos/seed/bike/400/300" className="rounded-2xl w-full h-full object-cover opacity-50" alt="Bike Safety" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibility & Cost */}
      <section id="finance" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="The Financial Logic" 
            subtitle="Comparing long-term costs and demonstrating my financial contribution to this goal."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-2">My Financial Maturity (Age 12)</h4>
                <div className="flex justify-between items-center text-sm text-slate-600 mb-2">
                  <span>Bike Price: €1,000</span>
                  <span>My Savings: €100</span>
                </div>
                <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[10%]"></div>
                </div>
                <p className="text-xs text-slate-500 mt-2">I have already saved €100 from my allowance and odd jobs.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs mt-1">✓</div>
                  <p className="text-slate-600">I will cover 10% of the initial purchase cost from my own personal savings.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs mt-1">✓</div>
                  <p className="text-slate-600">I will perform all weekly cleaning and basic tire maintenance myself.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs mt-1">✓</div>
                  <p className="text-slate-600">The e-bike removes the need for bus passes (€800+ annual savings).</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 overflow-x-auto">
               <table className="w-full text-left">
                 <thead>
                   <tr className="border-b border-slate-200">
                     <th className="pb-4 font-bold text-slate-400 uppercase text-xs">Method</th>
                     <th className="pb-4 font-bold text-slate-400 uppercase text-xs">Monthly Cost</th>
                     <th className="pb-4 font-bold text-slate-400 uppercase text-xs">Yearly Cost</th>
                   </tr>
                 </thead>
                 <tbody className="text-slate-800">
                   <tr className="border-b border-slate-100">
                     <td className="py-4">Public Transit</td>
                     <td className="py-4 font-semibold">€85.00</td>
                     <td className="py-4 font-bold">€1,020.00</td>
                   </tr>
                   <tr className="border-b border-slate-100">
                     <td className="py-4">Parents' Car (Fuel/Time)</td>
                     <td className="py-4 font-semibold">€120.00</td>
                     <td className="py-4 font-bold">€1,440.00</td>
                   </tr>
                   <tr className="text-emerald-600">
                     <td className="py-4 font-bold">E-Bike (Electricity)</td>
                     <td className="py-4 font-bold">€2.50</td>
                     <td className="py-4 font-black">€30.00*</td>
                   </tr>
                 </tbody>
               </table>
               <p className="text-[10px] text-slate-400 mt-4">*Excluding initial purchase. E-bike pays for itself in ~12 months based on public transport savings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat & FAQ */}
      <section id="concerns" className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Addressing Your Concerns" 
            subtitle="I've thought through the risks. If you have more questions, ask my advisor below!"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              {CONCERNS.map((c, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{c.icon}</span>
                    <h4 className="font-bold text-slate-900">{c.concern}</h4>
                  </div>
                  <p className="text-slate-600 text-sm">{c.solution}</p>
                </div>
              ))}
            </div>
            
            <ParentAdvisor />
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-24 px-6 md:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-8">🤝</div>
          <h2 className="text-4xl font-bold mb-6">A Final Thought</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-10 italic">
            "I understand that €1,000 is a big decision and a significant investment. I am ready to sign a 'Usage Contract' that defines our rules for safety, speed, and chores. I appreciate you taking the time to read through my research and considering my request."
          </p>
          <div className="text-lg font-bold text-slate-900">- Your Responsible 12-Year-Old</div>
        </div>
      </section>
    </div>
  );
};

// Fix: Added missing default export to satisfy index.tsx import
export default App;
