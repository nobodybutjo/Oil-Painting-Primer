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
    <header className="sticky top-0 z-40 bg-[#fdfbf7]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          {/* Logo & Title */}
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 shrink">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-900/10 border border-amber-800/20 flex items-center justify-center text-amber-900 shadow-xs shrink-0">
              <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-amber-900" />
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-xl font-bold tracking-tight text-stone-900 font-serif-title flex items-center gap-2 flex-nowrap">
                <span className="whitespace-nowrap truncate">{isZh ? '油画入门系统指南' : 'Oil Painting Primer'}</span>
                <span className="text-[11px] sm:text-xs font-sans font-medium px-2 py-0.5 rounded-full bg-amber-100/80 text-amber-800 border border-amber-200 hidden sm:inline-block whitespace-nowrap shrink-0">
                  {isZh ? '从零开始' : 'Beginner to Atelier'}
                </span>
              </h1>
              <p className="text-xs text-stone-500 hidden md:block lg:hidden xl:block truncate max-w-xs xl:max-w-md 2xl:max-w-lg">
                {isZh
                  ? '系统拆解油画全流程、画笔挑选与“肥盖瘦”物理法则'
                  : 'Master oil painting workflow, brush selection & layering physics'}
              </p>
            </div>
          </div>

          {/* Navigation Tabs (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 bg-stone-100/80 border border-stone-200/80 rounded-xl text-xs xl:text-sm shrink-0">
            <button
              id="nav-tab-steps"
              onClick={() => onTabChange('steps')}
              className={`flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-3.5 py-1.5 rounded-lg font-medium transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                currentTab === 'steps'
                  ? 'bg-white text-stone-900 shadow-xs border border-stone-200/60 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              <Compass className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-amber-700 shrink-0" />
              <span className="whitespace-nowrap">{isZh ? '制作步骤' : 'Painting Steps'}</span>
            </button>

            <button
              id="nav-tab-fat-lean"
              onClick={() => onTabChange('fat-lean')}
              className={`flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-3.5 py-1.5 rounded-lg font-medium transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                currentTab === 'fat-lean'
                  ? 'bg-white text-stone-900 shadow-xs border border-stone-200/60 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              <Layers className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-blue-700 shrink-0" />
              <span className="whitespace-nowrap">{isZh ? '肥盖瘦法则' : 'Fat over Lean'}</span>
            </button>

            <button
              id="nav-tab-brushes"
              onClick={() => onTabChange('brushes')}
              className={`flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-3.5 py-1.5 rounded-lg font-medium transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                currentTab === 'brushes'
                  ? 'bg-white text-stone-900 shadow-xs border border-stone-200/60 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              <Brush className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-emerald-700 shrink-0" />
              <span className="whitespace-nowrap">{isZh ? '画笔指南' : 'Brush Guide'}</span>
            </button>

            <button
              id="nav-tab-playground"
              onClick={() => onTabChange('playground')}
              className={`flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-3.5 py-1.5 rounded-lg font-medium transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                currentTab === 'playground'
                  ? 'bg-white text-stone-900 shadow-xs border border-stone-200/60 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-purple-700 shrink-0" />
              <span className="whitespace-nowrap">{isZh ? '笔触画布' : 'Stroke Canvas'}</span>
            </button>
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center shrink-0">
            <div className="inline-flex items-center shrink-0 flex-nowrap bg-stone-100 p-0.5 rounded-lg border border-stone-200">
              <button
                id="lang-btn-en"
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 min-w-[48px] text-center ${
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
                type="button"
                onClick={() => onLanguageChange('zh')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 min-w-[48px] text-center ${
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
            className={`whitespace-nowrap shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
              currentTab === 'steps'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <Compass className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">{isZh ? '制作步骤' : 'Steps'}</span>
          </button>

          <button
            onClick={() => onTabChange('fat-lean')}
            className={`whitespace-nowrap shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
              currentTab === 'fat-lean'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">{isZh ? '肥盖瘦法则' : 'Fat over Lean'}</span>
          </button>

          <button
            onClick={() => onTabChange('brushes')}
            className={`whitespace-nowrap shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
              currentTab === 'brushes'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <Brush className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">{isZh ? '画笔指南' : 'Brushes'}</span>
          </button>

          <button
            onClick={() => onTabChange('playground')}
            className={`whitespace-nowrap shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
              currentTab === 'playground'
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">{isZh ? '笔触画布' : 'Playground'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
