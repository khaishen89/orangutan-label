import React from 'react';
import { LabelConfig } from '../types';
import { ORANGUTAN_LOGO_SVG, TEXTURE_OVERLAY } from '../constants';

interface LabelDesignerProps {
  config: LabelConfig;
}

const CulturalMotif = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" className="absolute opacity-[0.04] pointer-events-none inset-0 w-full h-full">
    <defs>
      <pattern id="batik-grid" width="120" height="120" patternUnits="userSpaceOnUse">
        <path d="M60 10 L70 40 L100 50 L70 60 L60 90 L50 60 L20 50 L50 40 Z" fill="currentColor" />
        <circle cx="60" cy="50" r="5" fill="currentColor" />
        <path d="M10 10 Q 30 10 30 30" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M110 10 Q 90 10 90 30" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M10 110 Q 30 110 30 90" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M110 110 Q 90 110 90 90" fill="none" stroke="currentColor" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#batik-grid)" />
  </svg>
);

const LabelDesigner: React.FC<LabelDesignerProps> = ({ config }) => {
  return (
    <div 
      className="relative w-full aspect-[3/1] rounded-sm shadow-2xl overflow-hidden border border-stone-300 transition-all duration-500"
      style={{ backgroundColor: config.themeColor }}
    >
      {/* Background Texture & Patterns */}
      <div className="absolute inset-0 text-stone-900">
        <CulturalMotif />
      </div>
      {TEXTURE_OVERLAY}
      
      {/* Structural Borders */}
      <div className="absolute inset-6 border-[0.5px] border-stone-900/10 pointer-events-none"></div>
      <div className="absolute inset-[26px] border-[0.5px] border-stone-900/5 pointer-events-none"></div>

      <div className="relative h-full flex">
        
        {/* LEFT PANEL: Technical Details & Ritual */}
        <div className="w-[30%] p-10 flex flex-col justify-center border-r border-stone-900/5 bg-white/5">
          <div className="mb-8">
            <h4 className="font-bold uppercase tracking-[0.2em] text-[9px] mb-3 text-stone-400">The Ritual</h4>
            <p className="text-[11px] text-stone-700 leading-relaxed font-serif italic">
              Experience the ancient wisdom of rice bran. Gently lather onto skin, allowing the natural antioxidants to nourish and protect. Rinse to reveal soft, balanced skin.
            </p>
          </div>
          
          <div className="mb-8">
            <h4 className="font-bold uppercase tracking-[0.2em] text-[9px] mb-3 text-stone-400">Composition</h4>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-[9px] text-stone-500 font-serif">
              {config.ingredients.map((ing, i) => (
                <span key={i} className="whitespace-nowrap">{ing}{i < config.ingredients.length - 1 ? " • " : ""}</span>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-stone-900/5">
            <div className="flex items-center gap-2 opacity-40 grayscale">
               <div className="w-6 h-6 border border-current rounded-full flex items-center justify-center text-[8px] font-bold">100</div>
               <span className="text-[8px] uppercase tracking-widest font-bold">Natural Origin</span>
            </div>
          </div>
        </div>

        {/* CENTER PANEL: Brand Identity */}
        <div className="w-[40%] px-8 py-12 flex flex-col items-center justify-center text-center relative">
          {/* Subtle frame for the logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-stone-900/5 rounded-full pointer-events-none"></div>
          
          <div className="w-24 h-24 mb-6 drop-shadow-md transform transition-transform hover:scale-105 duration-700">
            {ORANGUTAN_LOGO_SVG(config.accentColor)}
          </div>
          
          <div className="space-y-1 mb-6">
            <h1 className="text-6xl font-display tracking-tight leading-none" style={{ color: config.textColor }}>
              OrangUtan
            </h1>
            <p className="text-[10px] uppercase tracking-[0.5em] font-semibold text-stone-400">
              Artisanal Botanical Care
            </p>
          </div>
          
          <div className="h-[1px] w-24 bg-stone-900/10 mb-6"></div>
          
          <div className="max-w-[280px]">
            <h2 className="text-2xl font-serif italic text-stone-800 leading-tight mb-2">
              {config.title}
            </h2>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-stone-500">
              {config.subtitle}
            </p>
          </div>
          
          <div className="absolute bottom-10 flex flex-col items-center">
            <span className="text-[8px] tracking-[0.4em] font-bold text-stone-300 uppercase">Premium Heritage Collection</span>
          </div>
        </div>

        {/* RIGHT PANEL: Philosophy & Traceability */}
        <div className="w-[30%] p-10 flex flex-col justify-center border-l border-stone-900/5">
           <div className="mb-8">
             <h4 className="font-bold uppercase tracking-[0.2em] text-[9px] mb-3 text-stone-400">Our Essence</h4>
             <p className="text-[11px] text-stone-600 leading-relaxed font-serif italic line-clamp-6">
              {config.description}
             </p>
           </div>
           
           <div className="mt-auto space-y-6">
             <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-[8px] font-mono text-stone-400 uppercase tracking-tighter">Batch No: OR-2024-BR</p>
                  <p className="text-[8px] font-serif italic text-stone-400">Crafted in the heart of the tropics.</p>
                </div>
                
                {/* Minimal Barcode */}
                <div className="flex items-end h-8 gap-[1.5px] opacity-20">
                  {[2,1,3,1,2,4,1,2,3,1,2,1].map((w, i) => (
                    <div key={i} className="bg-stone-900" style={{ width: `${w}px`, height: `${40 + Math.random() * 60}%` }}></div>
                  ))}
                </div>
             </div>
             
             <div className="flex items-center justify-between pt-4 border-t border-stone-900/5">
                <span className="text-[9px] font-bold text-stone-900/30">180CM × 60CM</span>
                <span className="text-[9px] font-bold text-stone-900/30">L-2024-REF</span>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default LabelDesigner;
