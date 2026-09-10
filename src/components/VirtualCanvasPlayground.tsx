import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Language, BrushShapeId } from '../types';
import {
  Sparkles,
  RotateCcw,
  Palette,
  Sliders,
  Maximize2,
  HelpCircle,
  Brush as BrushIcon,
} from 'lucide-react';

interface VirtualCanvasPlaygroundProps {
  language: Language;
  initialBrush?: BrushShapeId;
}

interface PaintColor {
  name: { en: string; zh: string };
  hex: string;
  rgb: [number, number, number];
}

const OIL_PALETTE_COLORS: PaintColor[] = [
  { name: { en: 'Raw Umber', zh: '生褐（打底色）' }, hex: '#5c3a21', rgb: [92, 58, 33] },
  { name: { en: 'Burnt Sienna', zh: '熟赭（暖褐色）' }, hex: '#8a3324', rgb: [138, 51, 36] },
  { name: { en: 'Yellow Ochre', zh: '土黄（中间调）' }, hex: '#c68b2c', rgb: [198, 139, 44] },
  { name: { en: 'Cadmium Red', zh: '镉红（暖纯色）' }, hex: '#b91c1c', rgb: [185, 28, 28] },
  { name: { en: 'French Ultramarine', zh: '法国群青（深蓝）' }, hex: '#1d3557', rgb: [29, 53, 87] },
  { name: { en: 'Viridian Hue', zh: '翠绿（冷绿）' }, hex: '#1b4332', rgb: [27, 67, 50] },
  { name: { en: 'Titanium White', zh: '钛白（高光色）' }, hex: '#f8fafc', rgb: [248, 250, 252] },
  { name: { en: 'Ivory Black', zh: '象牙黑（最深色）' }, hex: '#1c1917', rgb: [28, 25, 23] },
];

export const VirtualCanvasPlayground: React.FC<VirtualCanvasPlaygroundProps> = ({
  language,
  initialBrush = 'filbert',
}) => {
  const isZh = language === 'zh';
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeBrush, setActiveBrush] = useState<BrushShapeId>(initialBrush);
  const [activeColor, setActiveColor] = useState<PaintColor>(OIL_PALETTE_COLORS[1]); // Burnt Sienna
  const [strokeSize, setStrokeSize] = useState<number>(24);
  const [paintViscosity, setPaintViscosity] = useState<'lean' | 'fat'>('fat');
  const [canvasGround, setCanvasGround] = useState<'imprimatura' | 'linen' | 'white'>('imprimatura');
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  // Initialize or reset canvas background with realistic canvas tooth
  const setupCanvasBackground = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Base tone
    if (canvasGround === 'white') {
      ctx.fillStyle = '#fafaf9';
      ctx.fillRect(0, 0, width, height);
    } else if (canvasGround === 'linen') {
      ctx.fillStyle = '#e8dec8';
      ctx.fillRect(0, 0, width, height);
    } else {
      // Imprimatura (Toned Raw Umber wash)
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#c7a783');
      grad.addColorStop(1, '#b5936d');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    }

    // Subtle canvas weave texture
    ctx.save();
    ctx.globalAlpha = 0.04;
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 4) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 4) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    ctx.restore();
  }, [canvasGround]);

  // Adjust canvas resolution on mount / resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    setupCanvasBackground();
  }, [setupCanvasBackground]);

  // Handle pointer down
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;

    setIsDrawing(true);
    lastPosRef.current = { x, y };

    drawStroke(x, y, x, y);
  };

  // Handle pointer move
  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !lastPosRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;

    drawStroke(lastPosRef.current.x, lastPosRef.current.y, x, y);
    lastPosRef.current = { x, y };
  };

  // Handle pointer up/leave
  const handlePointerUp = () => {
    setIsDrawing(false);
    lastPosRef.current = null;
  };

  // Draw characteristic strokes according to brush shape & viscosity
  const drawStroke = (x1: number, y1: number, x2: number, y2: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.save();

    const [r, g, b] = activeColor.rgb;
    const isLean = paintViscosity === 'lean';
    const baseAlpha = isLean ? 0.35 : 0.88;

    const dx = x2 - x1;
    const dy = y2 - y1;
    const dist = Math.hypot(dx, dy);
    const steps = Math.max(1, Math.floor(dist / 3));

    switch (activeBrush) {
      case 'filbert': {
        // Soft arched oval dab with tapered feathered edge
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${baseAlpha})`;
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const cx = x1 + dx * t;
          const cy = y1 + dy * t;
          ctx.beginPath();
          ctx.ellipse(cx, cy, strokeSize * 0.5, strokeSize * 0.38, Math.atan2(dy, dx), 0, Math.PI * 2);
          ctx.fill();

          // If fat impasto, add internal bristle sheen ridge
          if (!isLean) {
            ctx.fillStyle = `rgba(${Math.min(255, r + 40)}, ${Math.min(255, g + 40)}, ${Math.min(255, b + 40)}, 0.25)`;
            ctx.beginPath();
            ctx.ellipse(cx - 2, cy - 2, strokeSize * 0.25, strokeSize * 0.15, Math.atan2(dy, dx), 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${baseAlpha})`;
          }
        }
        break;
      }

      case 'flat': {
        // Crisp rectangular chisel edge
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${baseAlpha})`;
        ctx.lineWidth = strokeSize;
        ctx.lineCap = 'butt';
        ctx.lineJoin = 'miter';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        // Distinct razor-edge track
        if (!isLean) {
          ctx.strokeStyle = `rgba(${Math.min(255, r + 30)}, ${Math.min(255, g + 30)}, ${Math.min(255, b + 30)}, 0.4)`;
          ctx.lineWidth = strokeSize * 0.2;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
        break;
      }

      case 'bright': {
        // Short stiff impasto strokes with marked bristle drag lines
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${baseAlpha})`;
        ctx.lineWidth = strokeSize * 0.85;
        ctx.lineCap = 'square';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        // 3 tactile bristle scratches
        const perpX = -dy / (dist || 1);
        const perpY = dx / (dist || 1);
        [-0.3, 0, 0.3].forEach((offset) => {
          ctx.strokeStyle = `rgba(${Math.max(0, r - 35)}, ${Math.max(0, g - 35)}, ${Math.max(0, b - 35)}, 0.5)`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(x1 + perpX * strokeSize * offset, y1 + perpY * strokeSize * offset);
          ctx.lineTo(x2 + perpX * strokeSize * offset, y2 + perpY * strokeSize * offset);
          ctx.stroke();
        });
        break;
      }

      case 'round': {
        // Fine flowing tapered line
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${baseAlpha})`;
        ctx.lineWidth = strokeSize * 0.4;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        break;
      }

      case 'fan': {
        // Splayed multi-prong comb lines
        const perpX = -dy / (dist || 1);
        const perpY = dx / (dist || 1);
        const fanPoints = [-0.45, -0.3, -0.15, 0, 0.15, 0.3, 0.45];

        fanPoints.forEach((offset) => {
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${baseAlpha * 0.75})`;
          ctx.lineWidth = 1.8;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(x1 + perpX * strokeSize * offset, y1 + perpY * strokeSize * offset);
          ctx.lineTo(x2 + perpX * strokeSize * offset, y2 + perpY * strokeSize * offset);
          ctx.stroke();
        });
        break;
      }

      case 'mop': {
        // Ultra soft cloud-like smoke blurring
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.08)`;
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const cx = x1 + dx * t;
          const cy = y1 + dy * t;
          ctx.beginPath();
          ctx.arc(cx, cy, strokeSize * 0.9, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
      }

      case 'rigger': {
        // Razor thin long continuous filament line
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${Math.min(1, baseAlpha * 1.2)})`;
        ctx.lineWidth = Math.max(1, strokeSize * 0.12);
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        break;
      }

      case 'knife': {
        // Sculptural beveled impasto slab with hard specular facet
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.95)`;
        const perpX = -dy / (dist || 1);
        const perpY = dx / (dist || 1);
        const w = strokeSize * 0.7;

        ctx.beginPath();
        ctx.moveTo(x1 - perpX * w, y1 - perpY * w);
        ctx.lineTo(x1 + perpX * w, y1 + perpY * w);
        ctx.lineTo(x2 + perpX * w, y2 + perpY * w);
        ctx.lineTo(x2 - perpX * w, y2 - perpY * w);
        ctx.closePath();
        ctx.fill();

        // Bevel highlight
        ctx.strokeStyle = `rgba(255, 255, 255, 0.45)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1 - perpX * w, y1 - perpY * w);
        ctx.lineTo(x2 - perpX * w, y2 - perpY * w);
        ctx.stroke();
        break;
      }
    }

    ctx.restore();
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-300/60 text-purple-900 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isZh ? '互动触感体验' : 'Tactile Stroke Simulator'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-title">
          {isZh ? '虚拟油画笔触画板' : 'Interactive Brush Stroke Canvas'}
        </h2>
        <p className="text-stone-600 text-xs sm:text-sm">
          {isZh
            ? '亲自选择榛形笔、平头笔、扇形笔或调色刀，体会不同切面与浓淡油分（瘦油薄涂 vs 肥油厚涂）在画布上留下的真实触痕。'
            : 'Select any brush shape and test how different bevels, bristle resistance, and medium viscosities deposit paint on canvas.'}
        </p>
      </div>

      {/* Main Studio Container */}
      <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-xs space-y-4">
        {/* Top Control Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
          {/* Brush Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            <span className="text-xs font-bold text-stone-400 uppercase mr-1">
              {isZh ? '笔形:' : 'Brush:'}
            </span>
            {(
              [
                ['filbert', isZh ? '榛形' : 'Filbert'],
                ['flat', isZh ? '平头' : 'Flat'],
                ['bright', isZh ? '短平' : 'Bright'],
                ['round', isZh ? '圆头' : 'Round'],
                ['fan', isZh ? '扇形' : 'Fan'],
                ['mop', isZh ? '晕染拖笔' : 'Mop'],
                ['rigger', isZh ? '勾线' : 'Rigger'],
                ['knife', isZh ? '刮刀' : 'Knife'],
              ] as [BrushShapeId, string][]
            ).map(([id, label]) => (
              <button
                key={id}
                onClick={() => setActiveBrush(id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeBrush === id
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Canvas Clear & Canvas Ground Buttons */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-stone-100 p-1 rounded-lg border border-stone-200 text-xs">
              <button
                onClick={() => setCanvasGround('imprimatura')}
                className={`px-2 py-1 rounded font-medium cursor-pointer ${
                  canvasGround === 'imprimatura'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600'
                }`}
              >
                {isZh ? '生褐底' : 'Toned Ground'}
              </button>
              <button
                onClick={() => setCanvasGround('linen')}
                className={`px-2 py-1 rounded font-medium cursor-pointer ${
                  canvasGround === 'linen'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600'
                }`}
              >
                {isZh ? '亚麻布' : 'Linen'}
              </button>
              <button
                onClick={() => setCanvasGround('white')}
                className={`px-2 py-1 rounded font-medium cursor-pointer ${
                  canvasGround === 'white'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600'
                }`}
              >
                {isZh ? '白底' : 'White'}
              </button>
            </div>

            <button
              onClick={setupCanvasBackground}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors cursor-pointer"
              title="Reset canvas"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isZh ? '清空重画' : 'Reset'}</span>
            </button>
          </div>
        </div>

        {/* Secondary Bar: Color Palette & Paint Thickness Slider */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Authentic Palette Swatches */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-stone-400 uppercase">
              {isZh ? '色序:' : 'Colors:'}
            </span>
            <div className="flex items-center gap-1.5">
              {OIL_PALETTE_COLORS.map((col) => (
                <button
                  key={col.hex}
                  onClick={() => setActiveColor(col)}
                  className={`w-7 h-7 rounded-full transition-all border-2 cursor-pointer shadow-xs ${
                    activeColor.hex === col.hex
                      ? 'scale-115 border-stone-900 ring-2 ring-stone-900/30'
                      : 'border-white hover:scale-105'
                  }`}
                  style={{ backgroundColor: col.hex }}
                  title={col.name[language]}
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-stone-600 ml-1 hidden sm:inline">
              {activeColor.name[language]}
            </span>
          </div>

          {/* Viscosity & Brush Size */}
          <div className="flex items-center gap-4">
            {/* Lean vs Fat Toggle */}
            <div className="flex items-center gap-1 text-xs">
              <span className="text-stone-400 font-bold uppercase mr-1">
                {isZh ? '质感:' : 'Texture:'}
              </span>
              <button
                onClick={() => setPaintViscosity('lean')}
                className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer ${
                  paintViscosity === 'lean'
                    ? 'bg-blue-600 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {isZh ? '瘦油轻薄 (Lean)' : 'Lean Wash'}
              </button>
              <button
                onClick={() => setPaintViscosity('fat')}
                className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer ${
                  paintViscosity === 'fat'
                    ? 'bg-amber-600 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {isZh ? '肥油厚涂 (Impasto)' : 'Fat Impasto'}
              </button>
            </div>

            {/* Size Slider */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-stone-400 font-bold uppercase">
                {isZh ? '笔号:' : 'Size:'}
              </span>
              <input
                type="range"
                min="8"
                max="64"
                value={strokeSize}
                onChange={(e) => setStrokeSize(Number(e.target.value))}
                className="w-20 accent-stone-900 cursor-pointer"
              />
              <span className="font-mono text-stone-600 w-4 text-center">
                {Math.round(strokeSize / 4)}#
              </span>
            </div>
          </div>
        </div>

        {/* The Interactive Canvas */}
        <div className="relative rounded-xl overflow-hidden border border-stone-300 shadow-inner bg-stone-100 touch-none">
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className="w-full h-[400px] sm:h-[480px] cursor-crosshair block"
          />

          {/* Hint Overlay */}
          <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-md text-white text-[11px] px-3 py-1.5 rounded-lg pointer-events-none flex items-center gap-2">
            <BrushIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>
              {isZh
                ? '在画布上按住并拖动鼠标/手指以排笔作画 · 体验不同笔刷刀锋与笔触'
                : 'Click & drag across the canvas to paint · Feel the distinct mark of each brush'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
