import React, { useState } from 'react';
import { Language } from '../types';
import { Layers, AlertTriangle, CheckCircle2, Droplet, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

interface FatOverLeanVisualizerProps {
  language: Language;
}

export const FatOverLeanVisualizer: React.FC<FatOverLeanVisualizerProps> = ({ language }) => {
  const isZh = language === 'zh';
  const [mode, setMode] = useState<'correct' | 'mistake'>('correct');
  const [activeLayer, setActiveLayer] = useState<number>(3);

  const layerData = [
    {
      level: 1,
      name: {
        en: 'Layer 1: Imprimatura & Ground Wash',
        zh: '第1层：单色底色与稀释着色层（Imprimatura）',
      },
      oilRatio: '0% - 10%',
      solventRatio: '90% - 100%',
      property: {
        en: 'Ultra-Lean, fast drying, porous matte film',
        zh: '极瘦、极快干（几十分钟）、多微孔亚光层',
      },
      mediumMix: {
        en: '100% Odorless Mineral Spirits (No oil)',
        zh: '100% 无味松节水/矿物酒精（完全不加干性油）',
      },
      purpose: {
        en: 'Binds with gesso pores without slipping; dries in under 1 hour so drawing lines adhere firmly.',
        zh: '微小色粉直接渗入石膏底胶孔隙，绝不打滑；极速干燥以便迅速起稿构图。',
      },
      colorTone: 'from-amber-800 to-amber-950',
    },
    {
      level: 2,
      name: {
        en: 'Layer 2: Local Color Block-in',
        zh: '第2层：固有色大色块铺陈层（Lean Layer）',
      },
      oilRatio: '20% - 30%',
      solventRatio: '70% - 80%',
      property: {
        en: 'Lean, quick drying (24-48h), semi-matte',
        zh: '偏瘦、干透较快（1-2天）、微亚光质感',
      },
      mediumMix: {
        en: '1 part Linseed Oil + 4 parts Mineral Spirits',
        zh: '1份 精炼亚麻籽油 + 4份 无味溶剂',
      },
      purpose: {
        en: 'Locks in big local color masses, shadow values, and temperatures while maintaining a flat, receptive tooth.',
        zh: '铺设大面积冷暖基调与暗部阴影，形成薄润平整、吸附力强的附着基底。',
      },
      colorTone: 'from-amber-700 to-amber-900',
    },
    {
      level: 3,
      name: {
        en: 'Layer 3: Modeling & Body Color',
        zh: '第3层：主体造型与形体塑造（Medium-Fat Layer）',
      },
      oilRatio: '50%',
      solventRatio: '50%',
      property: {
        en: 'Balanced medium, buttery viscosity, satin sheen',
        zh: '油量适中平衡、黄油般浓郁触感、缎面微光',
      },
      mediumMix: {
        en: '1 part Linseed Oil + 1 part Mineral Spirits',
        zh: '1份 亚麻油 + 1份 优质无味溶剂（经典1:1调色油）',
      },
      purpose: {
        en: 'Allows wet-into-wet blending, impasto brush marks, sculptural highlights, and velvety shadow depth.',
        zh: '支持湿画法（Wet-on-wet）融合过渡、塑造浑厚立体感与光影转折。',
      },
      colorTone: 'from-amber-600 to-amber-800',
    },
    {
      level: 4,
      name: {
        en: 'Layer 4: Glazes & Final Highlights',
        zh: '第4层：光学透明罩染与终极高光（Fat Layer）',
      },
      oilRatio: '80% - 100%',
      solventRatio: '0% - 20%',
      property: {
        en: 'Ultra-Fat, slow drying (5-8 days), elastic & luminous',
        zh: '最肥、慢干（5-8天）、高柔韧弹性、如彩玻般晶莹通透',
      },
      mediumMix: {
        en: 'Stand Oil, Sun-Thickened Oil, or pure tube oil',
        zh: '稠化亚麻油（Stand oil）、厚重纯管装原膏或专业罩染油',
      },
      purpose: {
        en: 'Stained-glass depth, maximum light refraction, flexible protective outer membrane.',
        zh: '实现如彩色玻璃般的光学透光反射，形成极具弹性、永不龟裂的坚固表皮。',
      },
      colorTone: 'from-amber-500 to-amber-700',
    },
  ];

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>{isZh ? '油画百年不裂的物理物理定律' : 'The Core Archival Physics'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-title">
          {isZh ? '“肥盖瘦”法则究竟是什么？' : 'Mastering the "Fat Over Lean" Principle'}
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          {isZh
            ? '油画颜料不是靠水分蒸发，而是通过吸收空气中的氧气进行化学氧化聚合。因此，“油多”（肥）和“油少”（瘦）决定了漆膜干燥的先后速度与机械弹性。'
            : 'Unlike watercolor or acrylic, oil paint cures through chemical oxidation, not water evaporation. The ratio of oil to solvent dictates curing speed, volumetric shrinkage, and mechanical elasticity.'}
        </p>
      </div>

      {/* Interactive Simulation Switcher */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
          <div>
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <span>{isZh ? '截面物理模拟器' : 'Cross-Section Layer Simulator'}</span>
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              {isZh
                ? '对比“规范作画（肥盖瘦）”与“致命错误（瘦盖肥）”在数月后的物理演变'
                : 'Compare how correct layering vs improper layering ages over time'}
            </p>
          </div>

          <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200 self-stretch sm:self-auto">
            <button
              onClick={() => setMode('correct')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                mode === 'correct'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isZh ? '正确做法：肥盖瘦' : 'Correct: Fat over Lean'}</span>
            </button>
            <button
              onClick={() => setMode('mistake')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                mode === 'mistake'
                  ? 'bg-rose-700 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>{isZh ? '致命错误：瘦盖肥' : 'Fatal Error: Lean over Fat'}</span>
            </button>
          </div>
        </div>

        {/* Visual Graphic Representation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
          {/* Canvas Cross Section Diagram */}
          <div className="lg:col-span-6 bg-stone-900 rounded-xl p-6 text-white relative overflow-hidden border border-stone-800 shadow-inner">
            <div className="flex items-center justify-between text-xs text-stone-400 mb-4 pb-2 border-b border-stone-800">
              <span className="font-semibold tracking-wider uppercase">
                {isZh ? '显微剖面结构图' : 'Microscopic Stratum Cross-Section'}
              </span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${mode === 'correct' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-rose-950 text-rose-400 border border-rose-800'}`}>
                {mode === 'correct' ? (isZh ? '永久保存状态' : 'Stable Archival') : (isZh ? '严重龟裂断层' : 'Severe Craquelure')}
              </span>
            </div>

            {/* Simulated Layers */}
            <div className="space-y-2">
              {mode === 'correct' ? (
                <>
                  {/* Layer 4 (Top - Fat) */}
                  <div 
                    onClick={() => setActiveLayer(4)}
                    className={`group cursor-pointer rounded-lg p-3 transition-all border ${activeLayer === 4 ? 'bg-amber-500/20 border-amber-400 ring-2 ring-amber-400/30' : 'bg-amber-600/10 border-amber-600/30 hover:bg-amber-600/20'}`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-300 flex items-center gap-1.5">
                        <Droplet className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                        {isZh ? '表层：肥层（罩染/纯油高光）' : 'Top: Fat Glaze / Pure Oil Layer'}
                      </span>
                      <span className="text-[11px] bg-amber-900/60 px-2 py-0.5 rounded text-amber-200">
                        {isZh ? '80-100% 油分 · 慢干有弹性' : '80-100% Oil · Slow & Flexible'}
                      </span>
                    </div>
                    <div className="h-4 mt-2 rounded bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 shadow-xs relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/10 opacity-60"></div>
                    </div>
                  </div>

                  {/* Layer 3 (Mid-Fat) */}
                  <div 
                    onClick={() => setActiveLayer(3)}
                    className={`group cursor-pointer rounded-lg p-3 transition-all border ${activeLayer === 3 ? 'bg-amber-600/20 border-amber-400 ring-2 ring-amber-400/30' : 'bg-amber-700/10 border-amber-700/30 hover:bg-amber-700/20'}`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-200 flex items-center gap-1.5">
                        <Droplet className="w-3.5 h-3.5 text-amber-200" />
                        {isZh ? '中层：造型层（适中油分）' : 'Mid: Modeling Body Layer'}
                      </span>
                      <span className="text-[11px] bg-amber-900/60 px-2 py-0.5 rounded text-amber-200">
                        {isZh ? '50% 油分 · 适中速度' : '50% Oil · Medium Speed'}
                      </span>
                    </div>
                    <div className="h-5 mt-2 rounded bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 shadow-xs"></div>
                  </div>

                  {/* Layer 2 (Lean) */}
                  <div 
                    onClick={() => setActiveLayer(2)}
                    className={`group cursor-pointer rounded-lg p-3 transition-all border ${activeLayer === 2 ? 'bg-amber-700/20 border-amber-400 ring-2 ring-amber-400/30' : 'bg-amber-800/10 border-amber-800/30 hover:bg-amber-800/20'}`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-100 flex items-center gap-1.5">
                        <Droplet className="w-3.5 h-3.5 text-stone-400" />
                        {isZh ? '初层：瘦油大色块层' : 'Base: Lean Color Block-in'}
                      </span>
                      <span className="text-[11px] bg-stone-800 px-2 py-0.5 rounded text-stone-300">
                        {isZh ? '20% 油分 · 快干微孔' : '20% Oil · Fast & Porous'}
                      </span>
                    </div>
                    <div className="h-4 mt-2 rounded bg-gradient-to-r from-amber-900 via-stone-800 to-amber-950 shadow-xs"></div>
                  </div>

                  {/* Gesso & Canvas Substrate */}
                  <div 
                    onClick={() => setActiveLayer(1)}
                    className={`cursor-pointer rounded-lg p-3 bg-stone-800/60 border ${activeLayer === 1 ? 'border-amber-400 ring-2 ring-amber-400/30' : 'border-stone-700/60'}`}
                  >
                    <div className="flex items-center justify-between text-xs text-stone-300">
                      <span className="font-semibold">{isZh ? '底料层与亚麻布基底' : 'Gesso Primer & Linen Substrate'}</span>
                      <span className="text-[10px] text-stone-400">{isZh ? '吸收性结实抓地' : 'Absorbent tooth'}</span>
                    </div>
                    <div className="h-3 mt-1.5 rounded bg-stone-700/60 border-t border-stone-600 flex items-center justify-center">
                      <span className="text-[9px] text-stone-400 tracking-wider uppercase font-mono">100% Cotton / Linen Fabric</span>
                    </div>
                  </div>
                </>
              ) : (
                /* Mistake Scenario: Lean applied over Fat */
                <div className="space-y-3">
                  <div className="rounded-lg p-3 bg-rose-950/40 border border-rose-600/50">
                    <div className="flex items-center justify-between text-xs text-rose-300 font-bold">
                      <span>{isZh ? '表面：脆弱脆皮（后涂瘦油层）' : 'Surface: Brittle Lean Layer (Fast-Drying)'}</span>
                      <span className="text-[11px] bg-rose-900/60 px-2 py-0.5 rounded text-rose-200">
                        {isZh ? '干得飞快，毫无弹性' : 'Dries Fast & Brittle'}
                      </span>
                    </div>
                    {/* Cracked Visual */}
                    <div className="mt-2 h-7 rounded bg-stone-300 relative overflow-hidden flex items-center justify-around px-2">
                      <div className="w-1.5 h-full bg-stone-900 -rotate-12 transform"></div>
                      <div className="w-2 h-full bg-stone-900 rotate-12 transform"></div>
                      <div className="w-1 h-full bg-stone-900 -rotate-6 transform"></div>
                      <div className="w-2.5 h-full bg-stone-900 rotate-18 transform"></div>
                      <div className="w-1.5 h-full bg-stone-900 -rotate-15 transform"></div>
                    </div>
                    <p className="text-[11px] text-rose-200/90 mt-2">
                      {isZh
                        ? '💥 表面脆层迅速硬化收缩，而底层慢干油性层在持续蠕动氧化，将表皮硬生生拉扯撕裂成不可逆的深裂纹！'
                        : '💥 The brittle surface skins over and hardens rapidly. The soft oily stratum underneath moves and shifts as it oxidizes, tearing the top coat into jagged fissures!'}
                    </p>
                  </div>

                  <div className="rounded-lg p-3 bg-amber-900/40 border border-amber-600/50">
                    <div className="flex items-center justify-between text-xs text-amber-300 font-bold">
                      <span>{isZh ? '底层：湿软多油层（错误先涂）' : 'Underneath: Soft Fatty Oil Layer (Slow-Drying)'}</span>
                      <span className="text-[11px] bg-amber-950 px-2 py-0.5 rounded text-amber-200">
                        {isZh ? '被闷在内部，长期软糯无法呼吸' : 'Trapped without oxygen'}
                      </span>
                    </div>
                    <div className="h-6 mt-2 rounded bg-amber-600/80"></div>
                  </div>

                  <div className="rounded-lg p-2.5 bg-stone-800 border border-stone-700">
                    <span className="text-xs text-stone-400">{isZh ? '画布基底' : 'Canvas Ground'}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <span>{isZh ? '点击图层可查看具体配比与配方' : 'Click any layer above to inspect recipe'}</span>
              <span className="text-amber-400 font-mono text-[11px]">
                {mode === 'correct' ? (isZh ? '化学氧化协调完成' : 'Stable Polymer Chain') : (isZh ? '应力失衡撕裂' : 'Stress Rupture')}
              </span>
            </div>
          </div>

          {/* Detailed Selected Layer Breakdown */}
          <div className="lg:col-span-6 space-y-4">
            {mode === 'correct' ? (
              <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md">
                    {isZh ? `选中的层级: ${activeLayer} / 4` : `Selected Stratum: ${activeLayer} / 4`}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                    <Droplet className="w-3.5 h-3.5 text-amber-600" />
                    <span>{isZh ? '亚麻油与溶剂比' : 'Medium Ratio'}</span>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-stone-900 font-serif-title">
                  {layerData[activeLayer - 1].name[language]}
                </h4>

                {/* Ratio Bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-stone-700">
                    <span className="text-blue-700">
                      {isZh ? `溶剂: ${layerData[activeLayer - 1].solventRatio}` : `Solvent: ${layerData[activeLayer - 1].solventRatio}`}
                    </span>
                    <span className="text-amber-700">
                      {isZh ? `干性油: ${layerData[activeLayer - 1].oilRatio}` : `Oil: ${layerData[activeLayer - 1].oilRatio}`}
                    </span>
                  </div>
                  <div className="h-3.5 rounded-full bg-stone-200 overflow-hidden flex">
                    <div 
                      className="bg-blue-600 h-full transition-all duration-300" 
                      style={{ width: layerData[activeLayer - 1].solventRatio.includes('100%') ? '100%' : layerData[activeLayer - 1].solventRatio.includes('70%') ? '75%' : layerData[activeLayer - 1].solventRatio.includes('50%') ? '50%' : '15%' }}
                    />
                    <div 
                      className="bg-amber-500 h-full transition-all duration-300"
                      style={{ width: layerData[activeLayer - 1].oilRatio.includes('100%') ? '85%' : layerData[activeLayer - 1].oilRatio.includes('50%') ? '50%' : layerData[activeLayer - 1].oilRatio.includes('20%') ? '25%' : '0%' }}
                    />
                  </div>
                </div>

                {/* Detailed Spec Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white rounded-lg border border-stone-200/80">
                    <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                      {isZh ? '调配媒介剂推荐' : 'Recommended Mix'}
                    </div>
                    <div className="text-xs font-semibold text-stone-900 mt-1">
                      {layerData[activeLayer - 1].mediumMix[language]}
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-stone-200/80">
                    <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                      {isZh ? '物理特性' : 'Physical Quality'}
                    </div>
                    <div className="text-xs font-semibold text-stone-900 mt-1">
                      {layerData[activeLayer - 1].property[language]}
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-amber-50/70 rounded-lg border border-amber-200/70 text-xs text-amber-950 leading-relaxed">
                  <span className="font-bold">{isZh ? '作画意图：' : 'Practical Purpose: '}</span>
                  {layerData[activeLayer - 1].purpose[language]}
                </div>
              </div>
            ) : (
              <div className="bg-rose-50 rounded-xl p-6 border border-rose-200 space-y-3">
                <div className="flex items-center gap-2 text-rose-800 font-bold">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                  <span>{isZh ? '为什么“瘦盖肥”会毁掉一幅画？' : 'Why "Lean over Fat" Destroys Artwork'}</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {isZh
                    ? '当你在慢干的纯油层（如亚麻籽油或厚涂色）未彻底硬化之前，直接用大量松节油调和的快干颜料涂在上面时：'
                    : 'When you brush thin, solvent-rich fast-drying paint over a wet or semi-dry oily paint layer:'}
                </p>
                <ul className="space-y-2 text-xs text-stone-700 list-disc list-inside">
                  <li>
                    {isZh
                      ? '上层“瘦油”数小时就结硬壳变脆；'
                      : 'The top lean layer dries and hardens into a brittle shell within hours;'}
                  </li>
                  <li>
                    {isZh
                      ? '下层“肥油”需要数周乃至数月继续缓慢氧化、膨胀与微幅位移；'
                      : 'The underlying fatty layer continues to oxidize, expand, and shift for months underneath;'}
                  </li>
                  <li>
                    {isZh
                      ? '底层持续蠕动的应力将上方硬壳撕得粉碎，形成如干涸河床般的不可逆裂缝（Craquelure）。'
                      : 'Underlying stress inevitably ruptures the top shell into irreparable spiderweb cracks (craquelure).'}
                  </li>
                </ul>
                <div className="pt-2 text-xs font-semibold text-rose-900 bg-white p-3 rounded-lg border border-rose-200">
                  {isZh
                    ? '💡 记忆口诀：“底层薄又瘦，面层厚且肥；前慢后快干，岁月不留痕。”'
                    : '💡 Atelier Axiom: "Lean at the base, fat at the peak; slow over fast, centuries to last."'}
                </div>
              </div>
            )}

            {/* Three Companion Rules of Oil Painting */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-3 bg-stone-100 rounded-lg border border-stone-200">
                <div className="text-[11px] font-bold text-stone-500 uppercase">
                  {isZh ? '原则 1' : 'Rule 1'}
                </div>
                <div className="text-xs font-bold text-stone-900 mt-0.5">
                  {isZh ? '肥盖瘦' : 'Fat over Lean'}
                </div>
                <div className="text-[10px] text-stone-500 mt-1">
                  {isZh ? '油多盖油少' : 'More oil on top'}
                </div>
              </div>

              <div className="p-3 bg-stone-100 rounded-lg border border-stone-200">
                <div className="text-[11px] font-bold text-stone-500 uppercase">
                  {isZh ? '原则 2' : 'Rule 2'}
                </div>
                <div className="text-xs font-bold text-stone-900 mt-0.5">
                  {isZh ? '厚盖薄' : 'Thick over Thin'}
                </div>
                <div className="text-[10px] text-stone-500 mt-1">
                  {isZh ? '立体厚堆在面' : 'Impasto above wash'}
                </div>
              </div>

              <div className="p-3 bg-stone-100 rounded-lg border border-stone-200">
                <div className="text-[11px] font-bold text-stone-500 uppercase">
                  {isZh ? '原则 3' : 'Rule 3'}
                </div>
                <div className="text-xs font-bold text-stone-900 mt-0.5">
                  {isZh ? '慢干盖快干' : 'Slow over Fast'}
                </div>
                <div className="text-[10px] text-stone-500 mt-1">
                  {isZh ? '快干成分放底层' : 'Fast driers below'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Mediums & What they do */}
      <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-6">
        <h3 className="text-lg font-bold text-stone-900 font-serif-title flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-700" />
          <span>{isZh ? '新手必备媒介剂速查指南' : 'The Beginner Medium Decoder'}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded-xl border border-stone-200/80 space-y-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
              {isZh ? '100% 瘦 (Lean)' : '100% Lean Solvent'}
            </span>
            <h4 className="text-sm font-bold text-stone-900">
              {isZh ? '无味矿物酒精 / 松节油' : 'Odorless Mineral Spirits (OMS)'}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {isZh
                ? '如 Gamblin Gamsol。仅用于打底稀释、擦拭高光与洗笔。它完全挥发，不留下任何油脂粘合剂。'
                : 'e.g. Gamblin Gamsol. Evaporates 100% without leaving a film. For underpaintings, thin washes, and brush cleaning.'}
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200/80 space-y-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
              {isZh ? '标准肥 (Fat)' : 'Classic Fat Medium'}
            </span>
            <h4 className="text-sm font-bold text-stone-900">
              {isZh ? '精炼亚麻籽油' : 'Refined Linseed Oil'}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {isZh
                ? '油画界最通用的干性植物油。延展颜料流动性，延长干燥时间（3-5天），增加漆膜光泽与柔韧度。'
                : 'The standard binder of oil paint. Increases gloss, transparency, and flow while extending open drying time.'}
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200/80 space-y-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">
              {isZh ? '超重肥 (Ultra-Fat)' : 'Ultra-Fat Glaze Medium'}
            </span>
            <h4 className="text-sm font-bold text-stone-900">
              {isZh ? '稠化亚麻油 (Stand Oil)' : 'Stand Oil (Thickened)'}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {isZh
                ? '真空加热聚合的高粘度油，质地如蜂蜜。用于古典透明罩染（Glazing），形成搪瓷般平滑、极耐老化的通透膜。'
                : 'Vacuum-heated polymerized oil with honey-like consistency. Ideal for flawless, brushmark-free luminous glazes.'}
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200/80 space-y-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
              {isZh ? '现代快干树脂' : 'Modern Alkyd Driers'}
            </span>
            <h4 className="text-sm font-bold text-stone-900">
              {isZh ? '快干媒介剂 (Liquin / Galkyd)' : 'Liquin / Galkyd Resin'}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {isZh
                ? '醇酸树脂配方，能让油画在24小时内表干。注意：若使用快干树脂，必须从第一层开始连续使用，切忌放在纯油之上。'
                : 'Petroleum/alkyd based resin that makes oil paint dry in 24 hours. Must be used consistently from early stages upward.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
