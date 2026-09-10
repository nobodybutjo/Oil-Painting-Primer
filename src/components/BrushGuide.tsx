import React, { useState } from 'react';
import { Language, BrushShapeId } from '../types';
import {
  BRUSH_ITEMS,
  BRISTLE_MATERIALS,
  STARTER_KIT_RECOMMENDATION,
  BRUSH_CLEANING_STEPS,
} from '../data/brushGuide';
import {
  Brush,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ShoppingBag,
  Shield,
  Layers,
  ChevronRight,
  Info,
} from 'lucide-react';

interface BrushGuideProps {
  language: Language;
  onTryInPlayground?: (brushId: BrushShapeId) => void;
}

export const BrushGuide: React.FC<BrushGuideProps> = ({
  language,
  onTryInPlayground,
}) => {
  const isZh = language === 'zh';
  const [selectedBrushId, setSelectedBrushId] = useState<BrushShapeId>('filbert');
  const [activeTab, setActiveTab] = useState<'shapes' | 'materials' | 'starter-kit' | 'care'>('shapes');

  const selectedBrush =
    BRUSH_ITEMS.find((b) => b.id === selectedBrushId) || BRUSH_ITEMS[0];

  // Helper to render realistic SVG representation of brush tips and strokes
  const renderBrushSvg = (id: BrushShapeId) => {
    switch (id) {
      case 'filbert':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full text-stone-700">
            {/* Wooden Handle */}
            <path d="M56 120 L56 75 L64 75 L64 120 Z" fill="#8b5a2b" />
            {/* Nickel Ferrule */}
            <path d="M54 75 L54 50 L66 50 L66 75 Z" fill="#b0bec5" stroke="#78909c" strokeWidth="1" />
            <line x1="54" y1="62" x2="66" y2="62" stroke="#607d8b" strokeWidth="1" />
            {/* Oval Arch Bristles */}
            <path
              d="M54 50 C54 30, 56 15, 60 15 C64 15, 66 30, 66 50 Z"
              fill="#e2cba8"
              stroke="#bcaaa4"
              strokeWidth="1.5"
            />
            {/* Bristle hair lines */}
            <line x1="58" y1="48" x2="59" y2="20" stroke="#d7ccc8" strokeWidth="0.8" />
            <line x1="62" y1="48" x2="61" y2="20" stroke="#d7ccc8" strokeWidth="0.8" />
          </svg>
        );
      case 'flat':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full">
            {/* Wooden Handle */}
            <path d="M55 120 L55 75 L65 75 L65 120 Z" fill="#8b5a2b" />
            {/* Nickel Ferrule */}
            <path d="M52 75 L52 50 L68 50 L68 75 Z" fill="#b0bec5" stroke="#78909c" strokeWidth="1" />
            {/* Rectangular Bristles */}
            <path
              d="M52 50 L52 18 L68 18 L68 50 Z"
              fill="#e2cba8"
              stroke="#bcaaa4"
              strokeWidth="1.5"
            />
            {/* Sharp Chisel Top Line */}
            <line x1="52" y1="18" x2="68" y2="18" stroke="#8d6e63" strokeWidth="2" />
          </svg>
        );
      case 'bright':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full">
            {/* Wooden Handle */}
            <path d="M55 120 L55 75 L65 75 L65 120 Z" fill="#8b5a2b" />
            {/* Ferrule */}
            <path d="M52 75 L52 48 L68 48 L68 75 Z" fill="#b0bec5" stroke="#78909c" strokeWidth="1" />
            {/* Short Square Bristles */}
            <path
              d="M52 48 L52 30 L68 30 L68 48 Z"
              fill="#e2cba8"
              stroke="#bcaaa4"
              strokeWidth="1.5"
            />
            <line x1="52" y1="30" x2="68" y2="30" stroke="#8d6e63" strokeWidth="2" />
          </svg>
        );
      case 'round':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full">
            {/* Wooden Handle */}
            <path d="M57 120 L57 75 L63 75 L63 120 Z" fill="#8b5a2b" />
            {/* Round Ferrule */}
            <path d="M56 75 L56 52 L64 52 L64 75 Z" fill="#b0bec5" stroke="#78909c" strokeWidth="1" />
            {/* Tapered Sharp Point */}
            <path
              d="M56 52 C55 35, 59 16, 60 14 C61 16, 65 35, 64 52 Z"
              fill="#bcaaa4"
              stroke="#8d6e63"
              strokeWidth="1.5"
            />
          </svg>
        );
      case 'fan':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full">
            {/* Wooden Handle */}
            <path d="M57 120 L57 78 L63 78 L63 120 Z" fill="#8b5a2b" />
            {/* Ferrule */}
            <path d="M55 78 L53 60 L67 60 L65 78 Z" fill="#b0bec5" stroke="#78909c" strokeWidth="1" />
            {/* Fan-spread bristles */}
            <path
              d="M53 60 C36 45, 30 25, 40 22 C55 20, 65 20, 80 22 C90 25, 84 45, 67 60 Z"
              fill="#e2cba8"
              stroke="#bcaaa4"
              strokeWidth="1"
            />
            {/* Splayed lines */}
            <line x1="60" y1="60" x2="42" y2="25" stroke="#d7ccc8" strokeWidth="1" />
            <line x1="60" y1="60" x2="60" y2="21" stroke="#d7ccc8" strokeWidth="1" />
            <line x1="60" y1="60" x2="78" y2="25" stroke="#d7ccc8" strokeWidth="1" />
          </svg>
        );
      case 'mop':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full">
            {/* Wooden Handle */}
            <path d="M56 120 L56 80 L64 80 L64 120 Z" fill="#8b5a2b" />
            {/* Wide Ferrule */}
            <path d="M52 80 L50 62 L70 62 L68 80 Z" fill="#b0bec5" stroke="#78909c" strokeWidth="1" />
            {/* Big Fluffy Dome */}
            <path
              d="M50 62 C40 50, 42 22, 60 20 C78 22, 80 50, 70 62 Z"
              fill="#cfd8dc"
              stroke="#90a4ae"
              strokeWidth="1.5"
            />
          </svg>
        );
      case 'rigger':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full">
            {/* Wooden Handle */}
            <path d="M58 120 L58 85 L62 85 L62 120 Z" fill="#8b5a2b" />
            {/* Thin Ferrule */}
            <path d="M58 85 L58 70 L62 70 L62 85 Z" fill="#b0bec5" stroke="#78909c" strokeWidth="1" />
            {/* Needle Long Hairs */}
            <path
              d="M58 70 L59 10 L61 10 L62 70 Z"
              fill="#8d6e63"
              stroke="#5d4037"
              strokeWidth="1"
            />
          </svg>
        );
      case 'knife':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full">
            {/* Wooden Handle */}
            <path d="M56 120 L56 88 L64 88 L64 120 Z" fill="#5c4033" rx="2" />
            {/* Cranked Neck */}
            <path d="M60 88 L60 68 L68 55" fill="none" stroke="#b0bec5" strokeWidth="3" />
            {/* Flexible Diamond Steel Blade */}
            <polygon
              points="68,55 82,35 68,15 54,35"
              fill="#cfd8dc"
              stroke="#90a4ae"
              strokeWidth="1.5"
            />
            {/* Highlight gleam */}
            <line x1="68" y1="18" x2="68" y2="52" stroke="#ffffff" strokeWidth="1.5" />
          </svg>
        );
    }
  };

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-300/60 text-emerald-900 text-xs font-semibold">
          <Brush className="w-3.5 h-3.5" />
          <span>{isZh ? '画笔全解与选购避坑' : 'The Definitive Brush Manual'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-title">
          {isZh ? '如何挑选与使用油画笔？' : 'How to Select & Master Oil Painting Brushes'}
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          {isZh
            ? '不同于水彩笔的吸水性，油画笔的核心在于“硬挺度”、“储色量”与“边缘控制”。理解每种笔形的切面与毛料特性，少走数年弯路。'
            : 'Unlike watercolor brushes that prioritize water absorption, oil brushes depend on spring resistance, bristle flagging, and edge precision. Learn the anatomy and capabilities of every classic shape.'}
        </p>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 bg-stone-100 rounded-xl border border-stone-200 text-xs sm:text-sm font-semibold">
          <button
            onClick={() => setActiveTab('shapes')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              activeTab === 'shapes'
                ? 'bg-white text-stone-900 shadow-xs border border-stone-200/60'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {isZh ? '8大核心笔形解析' : '8 Classic Brush Shapes'}
          </button>
          <button
            onClick={() => setActiveTab('materials')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              activeTab === 'materials'
                ? 'bg-white text-stone-900 shadow-xs border border-stone-200/60'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {isZh ? '猪鬃 vs 尼龙 vs 貂毛' : 'Bristle & Hair Types'}
          </button>
          <button
            onClick={() => setActiveTab('starter-kit')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              activeTab === 'starter-kit'
                ? 'bg-white text-stone-900 shadow-xs border border-stone-200/60'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {isZh ? '新手必备5件套' : 'Starter Kit (5 Tools)'}
          </button>
          <button
            onClick={() => setActiveTab('care')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              activeTab === 'care'
                ? 'bg-white text-stone-900 shadow-xs border border-stone-200/60'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {isZh ? '洗笔与保养秘籍' : 'Cleaning & Maintenance'}
          </button>
        </div>
      </div>

      {/* TAB 1: BRUSH SHAPES EXPLORER */}
      {activeTab === 'shapes' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Brush Shape Selector Pills */}
          <div className="lg:col-span-4 space-y-2">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider px-1">
              {isZh ? '选择笔形查看详情' : 'Select Brush Shape'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2">
              {BRUSH_ITEMS.map((item) => {
                const isSelected = item.id === selectedBrushId;
                return (
                  <button
                    key={item.id}
                    id={`brush-select-${item.id}`}
                    onClick={() => setSelectedBrushId(item.id)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-50/80 border-amber-300 ring-2 ring-amber-300/40 shadow-xs'
                        : 'bg-white border-stone-200/80 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center p-1">
                        {renderBrushSvg(item.id)}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-stone-900">
                          {item.name[language]}
                        </div>
                        <div className="text-[10px] text-stone-500 truncate max-w-[130px]">
                          {item.alias[language]}
                        </div>
                      </div>
                    </div>
                    {item.inStarterKit && (
                      <span className="hidden sm:inline-block text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                        {isZh ? '新手必备' : 'Starter'}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Brush Detailed Profile */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
            <div className="bg-stone-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-stone-800 border border-stone-700 p-2 flex-shrink-0 flex items-center justify-center shadow-inner">
                {renderBrushSvg(selectedBrush.id)}
              </div>
              <div className="space-y-2 text-center sm:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-amber-400">
                    {selectedBrush.alias[language]}
                  </span>
                  {selectedBrush.inStarterKit && (
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                      {isZh ? '★ 建议新手首批购入' : '★ Essential in Beginner Kit'}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold font-serif-title">
                  {selectedBrush.name[language]}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {selectedBrush.characteristics[language]}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Best Applications & Stroke Quality */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                  <div className="text-xs font-bold text-stone-600 uppercase tracking-wider">
                    {isZh ? '最擅长领域 / 适用场景' : 'Ideal Subject Matter & Application'}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-900 font-medium leading-relaxed">
                    {selectedBrush.bestFor[language]}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/80 space-y-1.5">
                  <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                    {isZh ? '笔触印记与切面特性' : 'Stroke Profile & Mark Quality'}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-900 font-medium leading-relaxed">
                    {selectedBrush.strokeDescription[language]}
                  </p>
                </div>
              </div>

              {/* Recommended Sizes */}
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200/80 flex items-start gap-3">
                <Info className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-blue-950">
                  <span className="font-bold">
                    {isZh ? '建议起步尺寸：' : 'Recommended Beginner Sizes: '}
                  </span>
                  <span>{selectedBrush.recommendedSize[language]}</span>
                </div>
              </div>

              {/* Pro Atelier Tips */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  {isZh ? '大师级运笔秘技' : 'Atelier Technique & Handling'}
                </h4>
                <div className="space-y-2">
                  {selectedBrush.proTips[language].map((tip, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800 p-3 rounded-lg bg-stone-50 border border-stone-200/70"
                    >
                      <span className="w-5 h-5 rounded-full bg-amber-900 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Playground Quick Action */}
              {onTryInPlayground && (
                <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                  <span className="text-xs text-stone-500">
                    {isZh
                      ? '想在画布上亲手试画该笔型的笔触印记吗？'
                      : 'Want to test paint strokes with this brush on a virtual canvas?'}
                  </span>
                  <button
                    onClick={() => onTryInPlayground(selectedBrush.id)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-all shadow-xs cursor-pointer"
                  >
                    <span>{isZh ? '进入笔触画布实测' : 'Test in Canvas Playground'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: BRISTLE MATERIALS GUIDE */}
      {activeTab === 'materials' && (
        <div className="space-y-8">
          <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-3">
            <h3 className="text-lg font-bold text-stone-900 font-serif-title">
              {isZh ? '三大刷毛材质全面对决' : 'Natural Hog vs Synthetic vs Kolinsky Sable'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-3xl">
              {isZh
                ? '油画颜料粘度极高，普通软水彩笔在原装油画颜料面前会像湿拖把一样瘫软无力。了解不同毛质的刚硬度与抗溶剂能力是选笔的关键。'
                : 'Oil paint has immense viscosity. Soft watercolor hair collapses immediately when trying to manipulate heavy paint. Here is how the three core hair types perform:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRISTLE_MATERIALS.map((mat) => (
              <div
                key={mat.id}
                className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between space-y-4 shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-stone-100 text-stone-800">
                      {mat.id === 'hog-bristle'
                        ? (isZh ? '传统硬毛之王' : 'The Traditional King')
                        : mat.id === 'synthetic-filament'
                        ? (isZh ? '高性价比首选' : 'Modern Workhorse')
                        : (isZh ? '贵族细腻罩染' : 'Glaze Precision')}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-stone-900 font-serif-title">
                    {mat.name[language]}
                  </h4>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {mat.description[language]}
                  </p>

                  <div className="space-y-2 pt-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/80">
                      <div className="text-[10px] font-bold text-stone-400 uppercase">
                        {isZh ? '硬挺度与回弹性' : 'Stiffness & Spring'}
                      </div>
                      <div className="font-semibold text-stone-900 mt-0.5">
                        {mat.stiffness[language]}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/80">
                      <div className="text-[10px] font-bold text-stone-400 uppercase">
                        {isZh ? '最佳匹配颜料状态' : 'Best Paint Viscosity'}
                      </div>
                      <div className="font-semibold text-stone-900 mt-0.5">
                        {mat.bestPaintViscosity[language]}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/80">
                      <div className="text-[10px] font-bold text-stone-400 uppercase">
                        {isZh ? '耐用性与溶剂耐受' : 'Durability & Solvents'}
                      </div>
                      <div className="font-semibold text-stone-900 mt-0.5">
                        {mat.durability[language]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Long Handle vs Short Handle Explainer */}
          <div className="bg-amber-50/60 rounded-2xl p-6 sm:p-8 border border-amber-200/80 space-y-3">
            <h4 className="text-base font-bold text-amber-950 flex items-center gap-2">
              <Info className="w-5 h-5 text-amber-700" />
              <span>{isZh ? '为什么油画笔必须是长笔杆？' : 'Why Do Oil Brushes Have Long Handles?'}</span>
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {isZh
                ? '水彩笔和插画笔通常是短木杆，因为作者伏案低头作画；而正统油画笔杆长度达到 30厘米以上。这是为了让画家在竖直画架前可以完全伸直整条手臂握笔，退后在正常视距观察全画的素描明度与比例，避免“只见树木不见森林”的近视眼误区。'
                : 'Watercolor brushes feature short handles for tabletop desk work, but oil brushes have 12-inch (30cm) long wooden handles. This allows you to stand at arm’s length from an upright easel, observing full tonal values and proportions from proper viewing distance.'}
            </p>
          </div>
        </div>
      )}

      {/* TAB 3: STARTER KIT RECOMMENDATION */}
      {activeTab === 'starter-kit' && (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{isZh ? '极简实用主义配置' : 'Minimalist Atelier Standard'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif-title">
                {STARTER_KIT_RECOMMENDATION.title[language]}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {STARTER_KIT_RECOMMENDATION.subtitle[language]}
              </p>
            </div>

            <div className="space-y-3 pt-4">
              {STARTER_KIT_RECOMMENDATION.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-stone-50 border border-stone-200/80 hover:border-stone-300 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-stone-900 text-white font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-stone-900">
                        {item.tool[language]}
                      </div>
                      <div className="text-xs text-stone-600 mt-0.5">
                        {item.role[language]}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <span>
                {isZh
                  ? '省钱忠告：千万不要贪便宜在电商平台买30块钱24支的所谓“豪华大礼包”。低劣画笔不仅严重掉毛粘在画布上抠不下来，而且笔箍松动、洗两次就会炸毛分叉。买5支优质好笔，可以用上数年之久！'
                  : 'Budget Advice: Avoid cheap 24-piece synthetic multipacks! Inferior brushes shed loose bristles constantly onto wet paint and split after two washes. Five quality brushes will serve you for years.'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: BRUSH CARE & CLEANING */}
      {activeTab === 'care' && (
        <div className="space-y-8">
          <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-stone-800 px-2.5 py-1 rounded-md">
              <Shield className="w-3.5 h-3.5" />
              <span>{isZh ? '画笔寿命延长10倍的秘诀' : 'Archival Brush Longevity'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-title">
              {isZh ? '油画笔专业四步深度清洗法' : 'The 4-Step Master Brush Cleaning Protocol'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl">
              {isZh
                ? '如果不清洗彻底，干结在笔根金属圈（笔箍 Ferrule）里的油画颜料会把笔毛撑开，造成无法挽回的“炸毛”。养成每次作画结束后的规范清洗仪式：'
                : 'Dried oil paint inside the metal ferrule is the #1 killer of brushes. Once hardened, it acts as a wedge that forces bristles apart permanently. Follow this studio protocol:'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BRUSH_CLEANING_STEPS.map((cs) => (
              <div
                key={cs.step}
                className="bg-white rounded-xl border border-stone-200 p-5 space-y-2 shadow-xs"
              >
                <span className="w-6 h-6 rounded-full bg-amber-900 text-white text-xs font-bold flex items-center justify-center">
                  {cs.step}
                </span>
                <h4 className="text-sm font-bold text-stone-900">
                  {cs.title[language]}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {cs.desc[language]}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-rose-800">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>{isZh ? '绝对禁忌：不可倒插晾干！' : 'Golden Rule: Never Dry Brushes Standing Up!'}</span>
            </div>
            <p className="leading-relaxed">
              {isZh
                ? '清洗后若将湿画笔毛朝上插在笔筒里，残留的微量水与皂液会顺着毛丝倒流灌入金属笔箍内部，直接溶解固定笔毛的环氧树脂胶水，并导致木制笔杆吸水膨胀开裂、笔头整体脱落！务必横平卧放在毛巾上阴干。'
                : 'If you stand wet brushes upright in a cup to dry, gravity drains moisture and residual soap deep down into the metal ferrule. This rots the wooden handle, cracks the lacquer, and dissolves the glue binding the bristles! Always dry flat horizontally.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
