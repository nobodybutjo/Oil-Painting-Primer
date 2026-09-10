import React, { useState } from 'react';
import { Language, PaintingStep } from '../types';
import { PAINTING_STEPS } from '../data/paintingSteps';
import {
  Clock,
  Check,
  AlertOctagon,
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  ShieldAlert,
  Sparkles,
  PackageCheck,
  Flame,
  Droplets,
  ExternalLink,
} from 'lucide-react';

interface StepByStepGuideProps {
  language: Language;
  onNavigateToFatLean?: () => void;
}

export const StepByStepGuide: React.FC<StepByStepGuideProps> = ({
  language,
  onNavigateToFatLean,
}) => {
  const isZh = language === 'zh';
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const step = PAINTING_STEPS[currentStepIndex];

  return (
    <div className="space-y-10">
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-300/60 text-amber-900 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isZh ? '正规学院派画法步骤' : 'Classical Atelier Methodology'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-title">
          {isZh ? '油画从零到完成全流程详解' : 'A Beginner’s Complete Journey Through Oil Painting'}
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          {isZh
            ? '油画之所以不同于水彩或水粉，在于其独特的层叠逻辑与慢干可塑性。按照这7个标准阶段推进，确保画面层次分明、光感通透、经久不裂。'
            : 'Unlike fast-drying mediums, oil painting thrives on deliberate stratification. Follow these 7 structured stages from blank canvas to protective varnished masterpiece.'}
        </p>
      </div>

      {/* Step Horizontal Progress Tracker */}
      <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 no-scrollbar">
          {PAINTING_STEPS.map((s, idx) => {
            const isActive = idx === currentStepIndex;
            const isCompleted = idx < currentStepIndex;

            return (
              <button
                key={s.id}
                id={`step-indicator-${s.stepNumber}`}
                onClick={() => setCurrentStepIndex(idx)}
                className={`flex-1 min-w-[120px] sm:min-w-[140px] text-left p-3 rounded-xl transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-amber-50/80 border-amber-300 ring-2 ring-amber-300/40 shadow-xs'
                    : 'bg-stone-50/50 border-stone-200/80 hover:bg-stone-100/80'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-amber-900 text-white'
                        : isCompleted
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-stone-200 text-stone-600'
                    }`}
                  >
                    {isZh ? `阶段 0${s.stepNumber}` : `Step 0${s.stepNumber}`}
                  </span>
                  {isCompleted && (
                    <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                  )}
                </div>
                <div className="text-xs font-semibold text-stone-900 truncate">
                  {s.title[language]}
                </div>
                <div className="text-[10px] text-stone-500 truncate mt-0.5">
                  {s.phase[language]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Step Detail Card */}
      <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
        {/* Banner Header */}
        <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 p-6 sm:p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-amber-400">
                {step.phase[language]}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-title flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-400 text-stone-950 text-sm font-sans font-black">
                  {step.stepNumber}
                </span>
                <span>{step.title[language]}</span>
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800/80 border border-stone-700 text-xs font-medium text-amber-200">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  {isZh ? '表干周期：' : 'Drying window: '}
                  {step.dryingTime[language]}
                </span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed max-w-4xl">
            {step.summary[language]}
          </p>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Key Goal & Medium Ratio Formula */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-1.5">
              <div className="text-xs font-bold text-amber-800 flex items-center gap-1.5 uppercase tracking-wider">
                <PackageCheck className="w-4 h-4 text-amber-700" />
                <span>{isZh ? '本阶段核心目标' : 'Stage Objective'}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-800 font-medium">
                {step.goal[language]}
              </p>
            </div>

            {step.ratioFormula && (
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 space-y-1.5">
                <div className="text-xs font-bold text-blue-800 flex items-center justify-between uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-blue-700" />
                    <span>{isZh ? '媒介剂配比公式' : 'Medium Formula'}</span>
                  </span>
                  {onNavigateToFatLean && (
                    <button
                      onClick={onNavigateToFatLean}
                      className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isZh ? '查看法则详情' : 'Inspect Rule'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-blue-950 font-mono font-medium">
                  {step.ratioFormula[language]}
                </p>
              </div>
            )}
          </div>

          {/* Actionable Instructions */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-500">
              {isZh ? '具体执行步骤（操作要点）' : 'Actionable Instructions'}
            </h4>
            <div className="space-y-3">
              {step.instructions[language].map((inst, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-stone-50 border border-stone-200/70 hover:border-stone-300 transition-colors"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-900 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans-body">
                    {inst}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Required Materials Checklist */}
          <div className="p-5 rounded-xl bg-stone-100/70 border border-stone-200 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-2">
              <PackageCheck className="w-4 h-4 text-stone-700" />
              <span>{isZh ? '必备画材与工具清单' : 'Required Materials & Chemistry'}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              {step.materialsNeeded[language].map((mat, i) => (
                <div key={i} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-stone-200/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                  <span>{mat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tip & Beginner Trap Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Pro Tip */}
            <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-emerald-700" />
                <span>{isZh ? '大师级提效秘籍' : 'Atelier Master Secret'}</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                {step.expertTip[language]}
              </p>
            </div>

            {/* Beginner Trap Warning */}
            <div className="p-5 rounded-xl bg-rose-50/70 border border-rose-200 space-y-2">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4 text-rose-700" />
                <span>{isZh ? '高危避坑警告' : 'Common Beginner Pitfall'}</span>
              </div>
              <p className="text-xs sm:text-sm text-rose-950 leading-relaxed">
                {step.beginnerTrap[language]}
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-stone-200">
            <button
              id="step-prev-btn"
              disabled={currentStepIndex === 0}
              onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                currentStepIndex === 0
                  ? 'opacity-40 cursor-not-allowed text-stone-400 bg-stone-100'
                  : 'text-stone-700 bg-stone-100 hover:bg-stone-200 hover:text-stone-900'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isZh ? '上一个阶段' : 'Previous Stage'}</span>
            </button>

            <span className="text-xs font-semibold text-stone-500">
              {currentStepIndex + 1} / {PAINTING_STEPS.length}
            </span>

            <button
              id="step-next-btn"
              disabled={currentStepIndex === PAINTING_STEPS.length - 1}
              onClick={() =>
                setCurrentStepIndex((prev) =>
                  Math.min(PAINTING_STEPS.length - 1, prev + 1)
                )
              }
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                currentStepIndex === PAINTING_STEPS.length - 1
                  ? 'opacity-40 cursor-not-allowed text-stone-400 bg-stone-100'
                  : 'bg-stone-900 text-white hover:bg-stone-800 shadow-xs'
              }`}
            >
              <span>{isZh ? '下一个阶段' : 'Next Stage'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
