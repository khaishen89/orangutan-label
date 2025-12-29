
import React from 'react';
import { LabelConfig } from '../types';
import { ORANGUTAN_LOGO_SVG, TEXTURE_OVERLAY } from '../constants';

interface LabelDesignerProps {
  config: LabelConfig;
}

const LabelDesigner: React.FC<LabelDesignerProps> = ({ config }) => {
  // 180x60 aspect ratio (3:1)
  return (
    <div 
      className="relative w-full aspect-[3/1] rounded-lg shadow-2xl overflow-hidden border border-stone-200"
      style={{ backgroundColor: config.themeColor }}
    >
      {TEXTURE_OVERLAY}
      
      {/* Decorative Border */}
      <div className="absolute inset-4 border border-stone-800/20 pointer-events-none"></div>
      <div className="absolute inset-6 border-2 border-stone-800/10 pointer-events-none"></div>

      <div className="relative h-full flex divide-x divide-stone-800/10">
        
        {/* LEFT SECTION - Usage & Ingredients */}
        <div className="w-1/3 p-8 flex flex-col justify-center gap-4 text-xs">
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-1 opacity-70">How to Ritual</h4>
            <p className="text-stone-700 leading-relaxed">
              Apply to damp skin. Massage gently to allow the rice bran oils to penetrate. Rinse with warm water to reveal soft, nourished skin.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-1 opacity-70">Pure Ingredients</h4>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-[10px] text-stone-600 italic">
              {config.ingredients.map((ing, i) => (
                <span key={i}>{ing}{i < config.ingredients.length - 1 ? " • " : ""}</span>
              ))}
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-stone-800/10">
            <p className="text-[9px] opacity-60">
              Made with passion. No synthetic surfactants. No parabens. Cruelty-free. 
              Proudly crafted for the conscious skin.
            </p>
          </div>
        </div>

        {/* CENTER SECTION - Primary Branding */}
        <div className="w-1/3 p-6 flex flex-col items-center justify-center text-center relative">
          {/* Subtle cultural pattern background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            <div className="w-48 h-48 border-[20px] border-stone-800 rounded-full"></div>
          </div>

          <div className="w-24 h-24 mb-4">
            {ORANGUTAN_LOGO_SVG(config.accentColor)}
          </div>
          
          <h1 className="text-4xl font-display tracking-tight text-stone-900 mb-1" style={{ color: config.textColor }}>
            OrangUtan
          </h1>
          <p className="text-[10px] uppercase tracking-[0.3em] font-medium mb-6 opacity-70">
            Certified Original
          </p>
          
          <div className="h-px w-20 bg-stone-800/20 mb-6"></div>
          
          <h2 className="text-xl font-serif italic mb-2 leading-tight">
            {config.title}
          </h2>
          <p className="text-[11px] font-medium tracking-wide uppercase opacity-80 mb-4">
            — {config.subtitle} —
          </p>
          
          <div className="absolute bottom-6 text-[9px] tracking-widest font-bold opacity-40">
            180 CM × 60 CM  |  PREMIUM SERIES
          </div>
        </div>

        {/* RIGHT SECTION - Brand Story & Details */}
        <div className="w-1/3 p-8 flex flex-col justify-center text-xs leading-relaxed text-stone-700">
           <h4 className="font-bold uppercase tracking-widest mb-2 opacity-70">The Heritage</h4>
           <p className="mb-4">
            {config.description}
           </p>
           
           <div className="flex items-end justify-between mt-auto">
             <div className="flex flex-col gap-1">
               <div className="w-24 h-6 bg-stone-300/30 rounded flex items-center justify-center text-[8px] font-mono">
                 BATCH: ORU-2024-001
               </div>
               <p className="text-[9px] italic opacity-50">Naturally crafted in small batches.</p>
             </div>
             
             {/* Mock QR or Barcode */}
             <div className="w-12 h-12 bg-stone-800/10 flex flex-col gap-[2px] p-1">
               {Array.from({length: 8}).map((_, i) => (
                 <div key={i} className="bg-stone-800 h-[2px]" style={{ width: `${Math.random() * 100}%` }}></div>
               ))}
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default LabelDesigner;
