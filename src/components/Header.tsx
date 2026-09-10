import React from 'react';
import { Language } from '../types';
import { Palette, Compass, Layers, Brush, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentTab: 'steps' | 'fat-lean' | 'brushes' | 'playground';
  onTabChange: (tab: 'steps' | 'fat-lean' | 'brushes' | 'playground') => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  language,
  onLanguageChange,
}) => {
  const isZh = language === 'zh';

  return (
    <header className="sticky top-0 z-40 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-900/10 border border-amber-800/20 flex items-center justify-center text-amber-900 shadow-xs">
              <Palette className="w-5 h-5 text-amber-900" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-stone-900 font-serif-title flex items-center gap-2">
                <span>{isZh ? '油画入门系统指南' : 'Oil Painting Primer'}</span>
                <span className="text-xs font-sans font-medium px-2 py-0.5 rounded-full bg-amber-100/80 text-amber-800 border border-amber-200 hidden sm:inline-block">
                  {isZh ? '从零开始' : 'Beginner to Atelier'}
                </span>
              </h1>
              <p className="text-xs text-stone-500 hidden md:block">
                {isZh
                  ? '系统拆解油画全流程、画笔挑选与“肥盖瘦”物理法则'
                  : 'A complete step-by-step masterclass, brush selector & layering physics'}
              </p>
            </div>
          </div>

          {/* Navigation Tabs (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-stone-100/80 border border-stone-200/80 rounded-xl text-sm">
            <button
              id="nav-tab-steps"
              onClick={() => onTabChange('steps')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-medium transition-all duration-150 cursor-pointer ${
                currentTab === 'steps'
                  ? 'bg-white text-stone-900 shadow-xs border border-stone-200/60 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              <Compass className="w-4 h-4 text-amber-700" />
              <span>{isZh ? '完整制作步骤' : 'Painting Steps'}</span>
            </button>

            <button
              id="nav-tab-fat-lean"
              onClick={() => onTabChange('fat-lean')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-medium transition-all duration-150 cursor-pointer ${
                currentTab === 'fat-lean'
                  ? 'bg-white text-stone-900 shadow-xs border border-stone-200/60 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              <Layers className="w-4 h-4 text-blue-700" />
              <span>{isZh ? '“肥盖瘦”法则解密' : 'Fat-Over-Lean Rule'}</span>
            </button>

            <button
              id="nav-tab-brushes"
              onClick={() => onTabChange('brushes')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-medium transition-all duration-150 cursor-pointer ${
                currentTab === 'brushes'
                  ? 'bg-white text-stone-900 shadow-xs border border-stone-200/60 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              <Brush className="w-4 h-4 text-emerald-700" />
              <span>{isZh ? '画笔精选全指南' : 'Brush Selection Guide'}</span>
            </button>

            <button
              id="nav-tab-playground"
              onClick={() => onTabChange('playground')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-medium transition-all duration-150 cursor-pointer ${
                currentTab === 'playground'
                  ? 'bg-white text-stone-900 shadow-xs border border-stone-200/60 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-purple-700" />
              <span>{isZh ? '虚拟笔触画布' : 'Stroke Playground'}</span>
            </button>
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-stone-100 p-0.5 rounded-lg border border-stone-200">
              <button
                id="lang-btn-en"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Switch to English"
              >
                English
              </button>
              <button
                id="lang-btn-zh"
                onClick={() => onLanguageChange('zh')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  language === 'zh'
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="切换为简体中文"
              >
                中文
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sub-Navigation Bar */}
        <div className="flex lg:hidden overflow-x-auto py-2.5 gap-2 border-t border-stone-200/60 no-scrollbar">
          <button
            onClick={() => onTabChange('steps')}
            className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
              currentTab === 'steps'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{isZh ? '制作步骤' : 'Steps'}</span>
          </button>

          <button
            onClick={() => onTabChange('fat-lean')}
            className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
              currentTab === 'fat-lean'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isZh ? '肥盖瘦法则' : 'Fat over Lean'}</span>
          </button>

          <button
            onClick={() => onTabChange('brushes')}
            className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
              currentTab === 'brushes'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700'
            }`}
          >
            <Brush className="w-3.5 h-3.5" />
            <span>{isZh ? '画笔选购' : 'Brushes'}</span>
          </button>

          <button
            onClick={() => onTabChange('playground')}
            className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
              currentTab === 'playground'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isZh ? '笔触画布' : 'Playground'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
