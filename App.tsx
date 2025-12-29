
import React, { useState } from 'react';
import { LabelConfig, ViewMode } from './types';
import LabelDesigner from './components/LabelDesigner';
import BottleMockup from './components/BottleMockup';

const STATIC_VARIANTS: Record<string, Partial<LabelConfig>> = {
  'Original': {
    themeColor: '#fdfbf4',
    accentColor: '#2d2a26',
    title: 'Natural Rice Bran Liquid Soap',
    subtitle: 'Pure Heritage Formula',
    description: 'A naturally produced product through the traditional saponification process of rice bran oil. This is not a chemical surfactant based product. It retains all the nourishing skin benefits of rice bran oil while providing mild and gentle cleansing.',
    ingredients: ['Saponified Rice Bran Oil', 'Aqua', 'Vegetable Glycerin', 'Tocopherol (Vitamin E)', 'Citric Acid']
  },
  'Tea Tree': {
    themeColor: '#f1f5f0',
    accentColor: '#3d5a42',
    title: 'Clarifying Rice Bran Soap',
    subtitle: 'Enriched with Tea Tree Oil',
    description: 'Harnessing the natural power of rice bran oil combined with therapeutic-grade Tea Tree oil. Ideal for anti-acne care and deep purification. Provides a gentle cleansing ritual that leaves skin balanced, nourished, and clear.',
    ingredients: ['Saponified Rice Bran Oil', 'Aqua', 'Melaleuca Alternifolia (Tea Tree) Oil', 'Vegetable Glycerin', 'Green Clay']
  },
  'Eucalyptus': {
    themeColor: '#f0f7f8',
    accentColor: '#3d525a',
    title: 'Invigorating Rice Bran Soap',
    subtitle: 'Fresh Eucalyptus Extract',
    description: 'Experience a skin-nourishing bath enriched with refreshing Eucalyptus essential oils. This surfactant-free formula uses natural saponification to preserve the antioxidant properties of rice bran, offering a cooling and revitalizing wash.',
    ingredients: ['Saponified Rice Bran Oil', 'Aqua', 'Eucalyptus Globulus Oil', 'Peppermint Oil', 'Vegetable Glycerin']
  },
  'Lavender': {
    themeColor: '#f4f1f8',
    accentColor: '#4a3d5a',
    title: 'Soothing Rice Bran Soap',
    subtitle: 'French Lavender & Rice Oil',
    description: 'Designed for a calming evening ritual. This mild and gentle cleanser allows users to enjoy skin cleansing while deeply nourishing with the essential lipids of rice bran. Enriched with Lavender to soothe both skin and soul.',
    ingredients: ['Saponified Rice Bran Oil', 'Aqua', 'Lavandula Angustifolia Oil', 'Glycerin', 'Alkanet Root Powder']
  }
};

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.FLAT);
  const [variant, setVariant] = useState<LabelConfig['variant']>('Original');

  const config: LabelConfig = {
    textColor: '#1a1816',
    variant: variant,
    ...(STATIC_VARIANTS[variant] as any)
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-stone-900 text-white py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-display tracking-tight mb-2">OrangUtan</h1>
        <p className="text-stone-400 font-serif italic text-lg uppercase tracking-widest text-sm">Natural Heritage Skincare</p>
      </header>

      <main className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-200">
          {/* Controls Bar */}
          <div className="border-b border-stone-100 p-6 flex flex-col md:flex-row gap-6 items-center justify-between bg-stone-50/50">
            <div className="flex gap-2 p-1 bg-stone-200/50 rounded-xl">
              {(['FLAT', 'MOCKUP'] as ViewMode[]).map(mode => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                    viewMode === mode 
                      ? 'bg-white text-stone-900 shadow-sm' 
                      : 'text-stone-500 hover:text-stone-700'
                  }`}
                >
                  {mode} VIEW
                </button>
              ))}
            </div>

            <div className="flex gap-4 items-center">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Collection:</span>
              <div className="flex gap-2">
                {(['Original', 'Tea Tree', 'Eucalyptus', 'Lavender'] as const).map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                      variant === v
                        ? 'bg-stone-900 text-white border-stone-900'
                        : 'bg-transparent text-stone-600 border-stone-300 hover:border-stone-800'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Designer Canvas Area */}
          <div className="p-8 lg:p-12 bg-[#faf9f6] min-h-[600px] flex items-center justify-center">
            <div className="w-full">
              {viewMode === ViewMode.FLAT ? (
                <div className="max-w-5xl mx-auto">
                  <LabelDesigner config={config} />
                  <div className="mt-8 flex justify-center gap-12 text-stone-400">
                      <div className="flex flex-col items-center">
                          <span className="text-2xl font-display">180</span>
                          <span className="text-[10px] uppercase tracking-widest">Width cm</span>
                      </div>
                      <div className="flex items-center text-xl">×</div>
                      <div className="flex flex-col items-center">
                          <span className="text-2xl font-display">60</span>
                          <span className="text-[10px] uppercase tracking-widest">Height cm</span>
                      </div>
                  </div>
                </div>
              ) : (
                <BottleMockup 
                  config={config} 
                  labelElement={<LabelDesigner config={config} />} 
                />
              )}
            </div>
          </div>
          
          {/* Footer Info */}
          <div className="border-t border-stone-100 p-8 grid md:grid-cols-3 gap-8 bg-stone-50">
            <div>
              <h5 className="font-bold text-stone-900 text-sm mb-2">The Philosophy</h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                OrangUtan celebrates the intersection of tropical biodiversity and ancient saponification crafts. We use only food-grade rice bran oil to ensure every wash is a treatment.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-900 text-sm mb-2">Skin Benefits</h5>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>• Naturally high in Gamma-Oryzanol</li>
                <li>• Rich in Vitamin E and Fatty Acids</li>
                <li>• Supports natural skin barrier function</li>
                <li>• Gentle for all skin types</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-stone-900 text-sm mb-2">Sustainable Design</h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                Our 180x60cm label is designed for 1L bulk dispensers, reducing plastic waste and promoting cultural aesthetics in the bathroom.
              </p>
              <button className="mt-4 w-full py-2 bg-stone-900 text-white rounded-lg text-xs font-bold hover:bg-stone-800 transition-colors">
                ORDER COLLECTION
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 text-center text-stone-400 text-xs pb-10">
        &copy; {new Date().getFullYear()} OrangUtan Natural Soaps. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;
