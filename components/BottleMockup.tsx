
import React from 'react';
import { LabelConfig } from '../types';

interface BottleMockupProps {
  config: LabelConfig;
  labelElement: React.ReactNode;
}

const BottleMockup: React.FC<BottleMockupProps> = ({ config, labelElement }) => {
  return (
    <div className="flex items-center justify-center p-8 bg-stone-100 rounded-3xl min-h-[500px] overflow-hidden">
      <div className="relative group cursor-pointer">
        {/* Bottle Cap */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-12 w-24 h-12 bg-zinc-800 rounded-t-lg shadow-xl z-20">
          <div className="w-full h-2 bg-zinc-700 rounded-t-lg mb-1"></div>
          <div className="w-full h-full border-x-4 border-zinc-900"></div>
        </div>
        
        {/* Bottle Neck */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-16 h-8 bg-amber-900/40 backdrop-blur-sm z-10 border-x border-white/10"></div>

        {/* Bottle Body */}
        <div className="w-64 h-96 bg-amber-900/30 rounded-[40px] relative shadow-2xl border border-white/20 backdrop-blur-md overflow-hidden flex items-center justify-center">
          {/* Liquid Simulation */}
          <div className="absolute inset-0 bg-amber-100/20"></div>
          
          {/* Label Wrap Simulation */}
          <div className="w-full h-3/5 relative overflow-hidden flex items-center shadow-inner">
             {/* We simulate the label wrap by showing only a portion of the 180x60 label */}
             <div className="absolute w-[300%] h-full flex transition-transform duration-700 group-hover:-translate-x-1/2">
                <div className="w-full h-full scale-[0.6] origin-left">
                    {labelElement}
                </div>
             </div>
          </div>
          
          {/* Refraction highlights */}
          <div className="absolute top-0 left-4 w-4 h-full bg-white/10 blur-sm pointer-events-none"></div>
          <div className="absolute top-0 right-8 w-2 h-full bg-white/5 blur-[2px] pointer-events-none"></div>
        </div>
        
        {/* Shadow */}
        <div className="w-48 h-8 bg-black/10 blur-xl rounded-full absolute -bottom-4 left-1/2 -translate-x-1/2"></div>
      </div>
      
      <div className="ml-12 max-w-sm">
        <h3 className="text-2xl font-display text-stone-800 mb-2">Shelf Visualization</h3>
        <p className="text-stone-600 italic">
          Hover over the bottle to rotate the label view. Our {config.variant} formula uses amber glass to protect the natural essential oils from UV degradation.
        </p>
      </div>
    </div>
  );
};

export default BottleMockup;
