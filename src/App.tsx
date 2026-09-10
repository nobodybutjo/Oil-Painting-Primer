import React, { useState, useEffect } from 'react';
import { Language, BrushShapeId } from './types';
import { Header } from './components/Header';
import { StepByStepGuide } from './components/StepByStepGuide';
import { FatOverLeanVisualizer } from './components/FatOverLeanVisualizer';
import { BrushGuide } from './components/BrushGuide';
import { VirtualCanvasPlayground } from './components/VirtualCanvasPlayground';
import {
  Compass,
  Layers,
  Brush,
  Sparkles,
  BookOpen,
  Info,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('oil_primer_lang');
    return saved === 'zh' ? 'zh' : 'en';
  });

  const [currentTab, setCurrentTab] = useState<'steps' | 'fat-lean' | 'brushes' | 'playground'>('steps');
  const [playgroundBrush, setPlaygroundBrush] = useState<BrushShapeId>('filbert');

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('oil_primer_lang', lang);
  };

  const handleTryInPlayground = (brushId: BrushShapeId) => {
    setPlaygroundBrush(brushId);
    setCurrentTab('playground');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isZh = language === 'zh';

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-900 flex flex-col font-sans-body selection:bg-amber-200 selection:text-stone-950">
      {/* Top Header & Sticky Navigation */}
      <Header
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      {/* Hero Overview Strip */}
      <div className="bg-stone-100/70 border-b border-stone-200/80 py-3 sm:py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-semibold text-stone-900">
              {isZh ? '学院派油画经典规制' : 'Classical Atelier Standard'}
            </span>
            <span className="text-stone-400">·</span>
            <span className="hidden sm:inline">
              {isZh
                ? '涵盖起稿构图、肥盖瘦物理法则、画笔切面与画材安全'
                : 'Covers workflow, layering physics, brush geometry & studio safety'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-stone-500 font-medium">
            <span className="hidden md:flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              <span>{isZh ? '无味环保溶剂安全' : 'Solvent Safety'}</span>
            </span>
            <span className="hidden md:flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
              <span>{isZh ? '百年不裂配比法则' : 'Archival Integrity'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {currentTab === 'steps' && (
          <StepByStepGuide
            language={language}
            onNavigateToFatLean={() => setCurrentTab('fat-lean')}
          />
        )}

        {currentTab === 'fat-lean' && (
          <FatOverLeanVisualizer language={language} />
        )}

        {currentTab === 'brushes' && (
          <BrushGuide
            language={language}
            onTryInPlayground={handleTryInPlayground}
          />
        )}

        {currentTab === 'playground' && (
          <VirtualCanvasPlayground
            language={language}
            initialBrush={playgroundBrush}
          />
        )}
      </main>

      {/* Oil Painting Glossary & Terminology Strip */}
      <section className="border-t border-stone-200 bg-stone-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-stone-700" />
              <span>{isZh ? '核心油画专业术语双语速查' : 'Bilingual Atelier Vocabulary'}</span>
            </h3>
            <span className="text-xs text-stone-400 font-mono">EN / 中文 Glossarium</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-white rounded-xl border border-stone-200/80">
              <div className="font-bold text-stone-900 font-serif-title text-sm">
                Imprimatura / 单色底
              </div>
              <p className="text-stone-500 mt-1">
                {isZh
                  ? '在纯白画布上涂抹的极薄透明有色底色（通常为生褐），消除眩光。'
                  : 'A sheer, neutral transparent wash applied over white gesso to banish canvas glare.'}
              </p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-stone-200/80">
              <div className="font-bold text-stone-900 font-serif-title text-sm">
                Fat Over Lean / 肥盖瘦
              </div>
              <p className="text-stone-500 mt-1">
                {isZh
                  ? '表面各层所含的干性油比例必须高于底层，保证弹性并杜绝龟裂。'
                  : 'Succeeding layers must contain more oil medium than prior layers to avoid cracking.'}
              </p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-stone-200/80">
              <div className="font-bold text-stone-900 font-serif-title text-sm">
                Grisaille / 单色灰度素描
              </div>
              <p className="text-stone-500 mt-1">
                {isZh
                  ? '在正式上色前，用单色（灰/褐）将形体明暗素描关系整体解决的画法。'
                  : 'A monochromatic underpainting in grey or brown tones to establish value before color.'}
              </p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-stone-200/80">
              <div className="font-bold text-stone-900 font-serif-title text-sm">
                Glaze & Scumble / 罩染与干擦
              </div>
              <p className="text-stone-500 mt-1">
                {isZh
                  ? '透明色层罩染（透光宝石感）与干笔半不透明提白（雾气绒毛感）。'
                  : 'Transparent jewel-like oil glazes versus dry-brush atmospheric scumbling.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-6 px-4 text-center text-xs text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            {isZh
              ? '油画入门指南 · 经典学院派技法与画笔指南'
              : 'Oil Painting Primer · Classical Atelier Guide & Brush Selector'}
          </p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>English & 简体中文</span>
            <span>·</span>
            <span>Archival Oil Painting Methods</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
