import { BrushItem, BristleMaterial } from '../types';

export const BRUSH_ITEMS: BrushItem[] = [
  {
    id: 'filbert',
    name: {
      en: 'Filbert Brush',
      zh: '榛形笔（卵圆头笔）',
    },
    alias: {
      en: 'The Workhorse of Realism',
      zh: '油画写实全能王 / 猫舌笔',
    },
    iconShape: 'oval',
    bestFor: {
      en: 'Blending, figurative art, organic forms, portraits, flower petals, soft transitions',
      zh: '柔和虚化、人物肖像、肤色过渡、自然有机形体、花卉与树冠',
    },
    characteristics: {
      en: 'Flat bristle assembly with an arched, gently rounded tip. Combines the broad coverage of a flat with the delicate blending softness of a round.',
      zh: '笔毛呈扁平状，但顶端打磨成柔和的弧形卵圆拱形。兼具平头笔的铺色面积与圆头笔的柔顺边线，不会在两端留下生硬的直角刀刻痕迹。',
    },
    recommendedSize: {
      en: '#4, #6, and #10 (Hog or stiff synthetic)',
      zh: '4号、6号及10号（中硬度猪鬃或特制弹性合成毛）',
    },
    inStarterKit: true,
    strokeDescription: {
      en: 'Produces soft, rounded patches flat-on; turns on edge to carve smooth curved ribbons without sharp gouges.',
      zh: '平扫时产生柔和饱满的弧形色块；侧转笔锋时可拉出优美的流线，边缘羽化自然无棱角。',
    },
    proTips: {
      en: [
        'If you could only pack one brush shape for an oil portrait session, make it a medium #6 Filbert.',
        'Rotate the brush in your fingers while pulling a stroke to vary the mark thickness organically from thick volume to fine tapered edge.',
      ],
      zh: [
        '如果去户外写生或画人物肖像只允许带一种笔形，大师们几乎都会毫不犹豫选择中号榛形笔。',
        '在运笔过程中用手指轻微旋转笔杆，可以一笔从丰腴饱满的色块自然渐变为纤细微翘的收尾。',
      ],
    },
  },
  {
    id: 'flat',
    name: {
      en: 'Flat Brush',
      zh: '平头笔（长平峰笔）',
    },
    alias: {
      en: 'The Architecture & Ground Builder',
      zh: '几何铺色与平整块面之王',
    },
    iconShape: 'rectangle',
    bestFor: {
      en: 'Wide skies, flat background washes, architectural planes, sharp geometric cuts, water surfaces',
      zh: '大面积天空平涂、建筑体块、锐利直边、静物立面、水面与水平倒影',
    },
    characteristics: {
      en: 'Long rectangular bristles with a perfectly squared chisel edge. High paint carrying capacity with excellent spring for long, unbroken swathes.',
      zh: '笔毛较长且排列成规整平直的矩形，顶端形成如刀刃般的平直刀锋。吸附颜料量大，回弹力强，能拉出长而均匀的色带。',
    },
    recommendedSize: {
      en: '#8 or #10 for blocking in; #4 for medium planes',
      zh: '8号或10号用于大面积铺底起色；4号用于中小形体平直切面',
    },
    inStarterKit: true,
    strokeDescription: {
      en: 'Bold, square-ended broad strokes when dragged flat; razor-sharp straight lines when sliced using the chisel edge.',
      zh: '正面排刷呈刚劲整齐的矩形大色块；立起侧锋运笔则能划出如钢尺般笔直锐利的细线。',
    },
    proTips: {
      en: [
        'Use the chisel end like a knife to slice clean edges along rooftops, horizon lines, or table surfaces.',
        'Do not continuously dab with a flat; lay the stroke down like laying a parquet floor tile.',
      ],
      zh: [
        '善用扁笔的刀口侧锋，像裁纸刀一样沿着房檐、地平线或桌角轻轻一切，线条精准决绝。',
        '切忌拿长平头笔在画布上胡乱乱戳；要像铺设平整大理石地砖一样，稳稳地平推排布色块。',
      ],
    },
  },
  {
    id: 'bright',
    name: {
      en: 'Bright Brush',
      zh: '短平笔（平头短峰笔）',
    },
    alias: {
      en: 'The Heavy Impasto Chisel',
      zh: '重彩厚涂雕塑刀 / 强弹短笔',
    },
    iconShape: 'square',
    bestFor: {
      en: 'Sculptural impasto, thick butter strokes, carving edges into wet paint, landscape rocks and bark',
      zh: '堆叠厚彩（Impasto）、刀削式坚实笔触、岩石粗粝肌理、树皮与近景浮雕感刻画',
    },
    characteristics: {
      en: 'Similar to a flat brush, but the bristles are significantly shorter—roughly equal in width and length. Offers maximum stiffness, rigidity, and control against heavy-bodied viscous paint.',
      zh: '外形与平头笔相似，但毛长仅约为平头笔的一半。短而紧凑的毛锋赋予其极其强悍的硬挺支撑力，能轻松推动未经稀释的浓稠油画膏体。',
    },
    recommendedSize: {
      en: '#6 (Chungking hog bristle)',
      zh: '6号（首选中硬度重庆白猪鬃）',
    },
    inStarterKit: true,
    strokeDescription: {
      en: 'Short, decisive, punchy marks with noticeable physical texture and bristle ridges.',
      zh: '短促、果断、有力的方形厚实印记，表面留有清晰硬挺的猪鬃刮痕肌理。',
    },
    proTips: {
      en: [
        'Because the bristles are short and rigid, brights can drag or scrape away underlying paint if pressed too hard. Use a light, depositing touch when laying paint on top.',
        'Excellent for pushing thick paint sideways like a stiff trowel.',
      ],
      zh: [
        '因为毛峰短而刚硬，若用力过猛会直接将底层的湿颜料刮蹭剥落。涂盖表层时手腕要轻柔，把颜料“搁”在画布上。',
        '非常适合像小型抹墙泥刀一样，把厚重颜料横向碾压在画布上，形成饱满的粗粒光影感。',
      ],
    },
  },
  {
    id: 'round',
    name: {
      en: 'Round Brush',
      zh: '圆头笔（点线细部笔）',
    },
    alias: {
      en: 'The Sketcher & Detailer',
      zh: '勾形草图与精微刻画之笔',
    },
    iconShape: 'circle-point',
    bestFor: {
      en: 'Initial linear sketching, delicate tree branches, iris pupils, hair strands, calligraphy lines, signatures',
      zh: '起稿单色定位线、树枝藤蔓、眼球虹膜、发丝细节、书法式勾勒与作者最后落款签名',
    },
    characteristics: {
      en: 'Circular bundle of hair tapering to a fine central point. Holds a surprising volume of fluid paint and releases it continuously based on pressure.',
      zh: '笔毛圆柱形聚拢，尖端收敛成细腻锐利的中心尖峰。腹部蓄色饱满，随手部压力可自如收放粗细。',
    },
    recommendedSize: {
      en: '#1 or #2 for delicate detail; #6 for gestural line sketching',
      zh: '1号或2号用于精微细节；6号用于大动势轮廓勾勒',
    },
    inStarterKit: true,
    strokeDescription: {
      en: 'Fine pinpoint precision at low pressure, expanding smoothly into wide tear-drop gestures as pressure increases.',
      zh: '轻压时如针尖般纤细，随着手腕下压自然膨胀出泪滴状或圆浑线段，收笔回弹极快。',
    },
    proTips: {
      en: [
        'Thin your oil paint slightly with odorless mineral spirits to a fluid ink consistency so a small round brush can glide across canvas without dragging.',
        'Never twist a round brush against the palette when mixing; gently roll it to form a sharp tip.',
      ],
      zh: [
        '使用小号圆头笔勾线前，务必加微量溶剂将颜料调和成类似稀墨汁的流淌状，笔尖才不会在粗糙布纹上出现滞顿飞白。',
        '切忌在调色板上大力扭按圆头笔尖！取色后在边缘轻轻一滚，笔毛就会自然聚拢成锋。',
      ],
    },
  },
  {
    id: 'fan',
    name: {
      en: 'Fan Brush',
      zh: '扇形笔（羽毛扫笔）',
    },
    alias: {
      en: 'The Atmosphere & Foliage Blender',
      zh: '柔光虚化与云雾生发笔',
    },
    iconShape: 'fan',
    bestFor: {
      en: 'Feathering harsh edges, soft cloud horizons, tree pine needles, fur, grasses, and subtle atmospheric dust',
      zh: '柔和虚化边缘、天空云雾羽化、松针与野草质感、动物绒毛以及水波反光闪烁感',
    },
    characteristics: {
      en: 'Bristles spread out horizontally in a flat, half-circle fan shape. Distinctively airy and light on contact.',
      zh: '笔毛向两侧呈扁平的半圆形孔雀开屏状发散。接触画布时受力极分散轻盈，几乎没有压强感。',
    },
    recommendedSize: {
      en: '#2 or #4 (Soft synthetic or badger hair)',
      zh: '2号或4号（软质合成毛或天然獾毛）',
    },
    inStarterKit: false,
    strokeDescription: {
      en: 'Soft, multi-point comb strokes when loaded with paint; whispy smoke-like blurring when brushed dry over wet paint.',
      zh: '蘸取颜料时呈现梳齿般的平行微细触点；干燥状态下轻扫湿画面则产生梦幻般如烟雾蒸腾的虚化效果。',
    },
    proTips: {
      en: [
        'Do not stamp a fan brush uniformly over trees like a cookie cutter! Angle it randomly and use only a corner of the fan for believable, wild leafy volume.',
        'Use it bone-dry to gently wipe away hard ridge boundaries between two contrasting colors.',
      ],
      zh: [
        '切忌拿着扇形笔在树上像盖图章一样规整狂敲，那会变成死板的塑料树！必须随时转动角度，只用扇形的一个侧角去破碎边缘。',
        '最绝妙的用法是保持笔毛完全干爽，像微风拂过湖面一样轻轻掠过两个色块交界，硬边立刻化解为无形烟霞。',
      ],
    },
  },
  {
    id: 'mop',
    name: {
      en: 'Mop / Badger Blender',
      zh: '晕染拖笔 / 獾毛拂笔',
    },
    alias: {
      en: 'The Classical Glaze Smoother',
      zh: '古典罩染与无痕渐变神器',
    },
    iconShape: 'mop-dome',
    bestFor: {
      en: 'Eliminating all brushmarks, porcelain-smooth skin transitions, Renaissance style sfumato gradients, evening sky glow',
      zh: '彻底抹平笔触刮痕、陶瓷般无瑕肤质、达芬奇式渐隐晕涂（Sfumato）、静穆黄昏天空天幕',
    },
    characteristics: {
      en: 'Large, bulbous, dome-shaped bundle of ultra-soft natural hairs (goat, squirrel, or badger). Used almost exclusively dry to blend.',
      zh: '硕大、圆蓬如粉扑般的极软天然毛刷（羊毛、松鼠毛或柔软獾毛）。几乎绝不直接蘸取纯颜料，而是纯干扫使用。',
    },
    recommendedSize: {
      en: '1-inch to 1.5-inch diameter dome',
      zh: '1英寸至1.5英寸圆拱型拖笔',
    },
    inStarterKit: false,
    strokeDescription: {
      en: 'Zero deposit of pigment; seamlessly melts adjacent paint zones into an imperceptible, photographic gradient.',
      zh: '不留任何新增颜色，只将画布上已有的相邻色阶悄然融化相嵌，达到不见笔迹的极高镜面境界。',
    },
    proTips: {
      en: [
        'Clean the mop on a dry rag after every single sweep. If pigment builds up in the fluffy hairs, it will smear darks into your clean lights.',
        'Barely touch the canvas—think of tickling a butterfly’s wings.',
      ],
      zh: [
        '每在画布上扫过一笔，必须立即在干抹布上将毛峰上的浮色擦净，否则极易将暗部脏色带入纯净的亮部区域。',
        '运笔下压距离以毫米计——力度要轻如羽毛拂动，仅仅拂平浮在表面的微小油画突棱。',
      ],
    },
  },
  {
    id: 'rigger',
    name: {
      en: 'Rigger / Script Liner',
      zh: '勾线笔（长毫线笔 / 细长草笔）',
    },
    alias: {
      en: 'The Long Filament Calligrapher',
      zh: '超长连贯细线与作者签名笔',
    },
    iconShape: 'long-needle',
    bestFor: {
      en: 'Continuous long lines, ship rigging masts, bare winter tree twigs, electrical wires, whiskers, signing artwork',
      zh: '极长不间断流畅细线、船帆缆绳、枯树小枝、电线杆拉线、动物胡须、草叶与签署落款',
    },
    characteristics: {
      en: 'Extraordinarily long, slender hairs mounted in a narrow ferrule. The long belly acts as a deep reservoir of fluid paint.',
      zh: '笔毛极长且纤细，虽然只有几毫米宽，但长长的毛腹如蓄水池般能吸饱大量流质稀薄颜料，无需频繁蘸色。',
    },
    recommendedSize: {
      en: '#0 or #1 (Synthetic or Kolinsky sable)',
      zh: '0号或1号（精细弹性尼龙或红貂毛）',
    },
    inStarterKit: false,
    strokeDescription: {
      en: 'Razor-thin, uniform lines that can run for 12+ inches without breaking or running out of color.',
      zh: '粗细均匀、极薄如丝的连贯线条，一笔可滑出数十厘米而不干枯断线。',
    },
    proTips: {
      en: [
        'The paint MUST be diluted with solvent or fast medium until it flows like liquid fountain pen ink. Thick paint will choke a rigger instantly.',
        'Hold the very tail-end of the long brush handle to let your arm pivot smoothly from the shoulder rather than cramping the wrist.',
      ],
      zh: [
        '颜料必须用溶剂稀释至钢笔墨水般能自由滴落的流动状态，浓稠原膏会瞬间让纤细笔毫瘫痪凝固。',
        '握笔时手持笔杆末端，利用肩关节带动整条手臂平稳划动，切忌死扣手腕，否则线条会颤抖发僵。',
      ],
    },
  },
  {
    id: 'knife',
    name: {
      en: 'Palette Knife (Painting Knife)',
      zh: '油画调色刀 / 绘画刮刀',
    },
    alias: {
      en: 'The Indestructible Metal Impasto Tool',
      zh: '永不磨损的纯色利器与厚涂神刀',
    },
    iconShape: 'trowel-blade',
    bestFor: {
      en: 'Mixing clean colors on the palette, scraping off mistakes, applying crisp crystalline rock textures, jewel-like palette knife painting',
      zh: '调色板干净调和颜色、铲除作画失误、塑造山石结晶反光断崖、纯刮刀厚涂立体画法',
    },
    characteristics: {
      en: 'Flexible cranked spring-steel blade with an offset wooden handle. Keeps your knuckles well away from wet canvas while applying paint.',
      zh: '弯柄弹簧钢薄刃，握柄处有向下弯折的曲颈设计，确保手部关节绝不会触碰弄脏画布表面。极易一擦即净。',
    },
    recommendedSize: {
      en: 'Teardrop or diamond shaped medium flexible blade (approx. 2 inches long)',
      zh: '水滴形或菱形中号弹力刮刀（刃长约5厘米）',
    },
    inStarterKit: true,
    strokeDescription: {
      en: 'Crisp, multi-faceted faceted slabs of pure, un-muddled color with glossy sculptural bevels.',
      zh: '棱角分明、多切面的纯净厚彩块面，带有反光极强的雕塑级立体折角。',
    },
    proTips: {
      en: [
        'Never mix paint with delicate hair brushes! Always mix your piles with the flat back of a palette knife to save your brushes from ruin.',
        'Wipe the blade on a cloth between colors with a single pinch—a knife cleans in 1 second without wasting any solvents.',
      ],
      zh: [
        '切勿用昂贵的毛笔在调色板上搅拌大堆颜料！永远用调色刀平背碾压调和，保护笔根免遭颜料堵塞。',
        '用抹布一捏一拉仅需1秒即可彻底清洁，完全不需要消耗任何洗笔溶剂，极其环保耐用。',
      ],
    },
  },
];

export const BRISTLE_MATERIALS: BristleMaterial[] = [
  {
    id: 'hog-bristle',
    name: {
      en: 'Chungking Hog Bristle (Natural White Boar Hair)',
      zh: '中国重庆白猪鬃（天然硬鬃毛）',
    },
    stiffness: {
      en: 'Firm & Springy (High Resistance)',
      zh: '硬挺刚韧、回弹极佳（强支撑力）',
    },
    bestPaintViscosity: {
      en: 'Heavy-body buttery paint straight from the tube; early blocking and impasto',
      zh: '未经稀释的原装厚重膏状颜料；大幅铺底与立体厚涂',
    },
    durability: {
      en: 'Extremely durable; split "flags" at bristle ends hold massive paint volume',
      zh: '极为皮实耐用；天然分叉的“毛旗”（Flags）储色量极大',
    },
    description: {
      en: 'The undisputed classic of the oil painting world for over 400 years. Its natural curvature and split ends physically shovel viscous oil paint without flopping over.',
      zh: '四百年来油画艺术无可争议的传统黄金标准。猪鬃毛末端天然具有分叉（毛旗），能像无数细小微钩一样抓牢浓稠的油画膏体，落笔力道苍劲。',
    },
  },
  {
    id: 'synthetic-filament',
    name: {
      en: 'Modern Stiff Synthetic Filaments',
      zh: '现代特制高弹合成人造纤维',
    },
    stiffness: {
      en: 'Medium-Stiff with uniform spring',
      zh: '中度硬挺、回弹稳定均匀',
    },
    bestPaintViscosity: {
      en: 'Medium viscosity paint thinned with mineral spirits or medium; versatile everyday use',
      zh: '加入媒介剂后的适中浓稠度；通用全能型日常刻画',
    },
    durability: {
      en: 'Immune to chemical damage from solvents; easier to wash thoroughly than natural hairs',
      zh: '耐松节油腐蚀，比天然动物毛更容易清洗干净且不易发霉',
    },
    description: {
      en: 'Engineered synthetic fibers that maintain crisp razor edges longer than animal hairs. Leaves smoother, finer brush marks than coarse hog bristle.',
      zh: '高科技聚合聚酯纤维，能长久保持规整锋利的刀口边缘。相比粗犷的猪鬃，它留下的刷痕更细腻柔和，性价比极高。',
    },
  },
  {
    id: 'kolinsky-sable',
    name: {
      en: 'Kolinsky Red Sable & Soft Badger',
      zh: '纯正红貂毛与天然软毛（柯林斯基貂毛）',
    },
    stiffness: {
      en: 'Ultra-Soft & Resilient',
      zh: '至柔至顺、细微回弹如绸缎',
    },
    bestPaintViscosity: {
      en: 'Very fluid glazes, thin washes, delicate eye and skin portraits, fine linework',
      zh: '极流动的透明罩染层、稀薄水洗、微细肖像五官与发丝勾勒',
    },
    durability: {
      en: 'Delicate; requires gentle care and cannot withstand scrubbing heavy impasto',
      zh: '娇贵细腻；需悉心养护，不可用于大力刮擦粗厚硬颜料',
    },
    description: {
      en: 'The crown jewel for delicate glazing, glass-smooth finishes, and realistic portrait skin. Holds needle-sharp points when wet and creates zero unwanted surface texture.',
      zh: '古典写实派画家的顶级秘宝。其毛尖微如针芒，沾湿后自动聚峰，在画布上扫过如丝绸抚摩，绝不留下哪怕一根粗糙的画笔刮痕。',
    },
  },
];

export const STARTER_KIT_RECOMMENDATION = {
  title: {
    en: 'The Essential 5-Tool Beginner Starter Kit',
    zh: '新手必备：最实用五件套画笔配置',
  },
  subtitle: {
    en: 'Do not buy expensive 24-brush sets! 85% of classical oil paintings are created with just these 5 essential shapes:',
    zh: '切忌盲目购买乱七八糟的24支大套装！90%的古典与现代油画仅靠这5件核心工具即可完美完成：',
  },
  items: [
    {
      tool: {
        en: '#6 Filbert (Chungking Hog Bristle)',
        zh: '#6号 榛形笔（重庆白猪鬃）',
      },
      role: {
        en: 'The primary painter: blending, forms, mid-size massing without harsh edges.',
        zh: '主力主攻手：形体塑造、柔和边界与自然面块过渡，无死角全能。',
      },
    },
    {
      tool: {
        en: '#8 Flat (Stiff Hog Bristle)',
        zh: '#8号 长平头笔（硬猪鬃）',
      },
      role: {
        en: 'The blocker: wide background skies, table planes, sharp chisel cuts.',
        zh: '开路先锋：快速大面积铺底、天空背景与整齐的平直切面。',
      },
    },
    {
      tool: {
        en: '#6 Bright (Stiff Hog Bristle)',
        zh: '#6号 短平笔（硬猪鬃）',
      },
      role: {
        en: 'The sculptor: heavy impasto, rocks, tactile texture, deliberate paint dabs.',
        zh: '雕塑利刃：浓重色块堆叠、岩石粗粝肌理与高光厚涂点缀。',
      },
    },
    {
      tool: {
        en: '#2 Round (Synthetic or Sable)',
        zh: '#2号 圆头笔（高弹合成纤维或软毛）',
      },
      role: {
        en: 'The precision tool: linear underdrawing, sharp accents, branches, signature.',
        zh: '精微刻画：起稿线条定点、细小高光折光、枝叶与最后签名。',
      },
    },
    {
      tool: {
        en: 'Medium Flexible Palette Knife',
        zh: '中号菱形弯柄调色刀（弹簧钢）',
      },
      role: {
        en: 'The palette guardian: rapid clean color mixing, scraping errors, crisp rock edges.',
        zh: '调色板守护者：快速碾压调和纯净色彩，1秒擦净，不伤笔毛。',
      },
    },
  ],
};

export const BRUSH_CLEANING_STEPS = [
  {
    step: 1,
    title: {
      en: 'Wipe Clean with Rag',
      zh: '抹布彻底捏拭吸色',
    },
    desc: {
      en: 'Squeeze the ferrule and bristles firmly inside a cotton rag to draw out 80% of residual wet paint before using any liquid.',
      zh: '在蘸任何液体之前，先用纯棉布紧紧包裹金属笔箍与毛束，由根部向外用力捏出80%的残余湿颜料。',
    },
  },
  {
    step: 2,
    title: {
      en: 'Gentle Solvent Swish',
      zh: '无味溶剂轻晃沉淀',
    },
    desc: {
      en: 'Swish the brush lightly across the wire grate of an airtight solvent jar. NEVER push down violently on the bottom of the jar.',
      zh: '将笔毛在洗笔筒滤网上方轻柔划动清洗，让颜料沉入筒底。严禁将笔尖死死顶压在筒底碾磨，那会造成毛束永久弯折断裂！',
    },
  },
  {
    step: 3,
    title: {
      en: 'Brush Soap & Warm Water Wash',
      zh: '专用洗笔皂与温水揉洗',
    },
    desc: {
      en: 'Rub the damp brush over a bar of specialized brush cleaner (e.g. The Masters Brush Cleaner) or olive oil soap. Lather in the palm of your hand until foam is snow white.',
      zh: '将微湿笔毛在专业洗笔皂（如 The Masters）或纯植物橄榄油皂上打圈蘸取，在手心揉出泡沫，直到泡沫完全洁白无色。',
    },
  },
  {
    step: 4,
    title: {
      en: 'Reshape & Dry Horizontally',
      zh: '指尖聚拢锋芒，平卧阴干',
    },
    desc: {
      en: 'Pinch the bristles back into their crisp original shape with your fingertips. Lay the brush FLAT on a towel. NEVER dry brushes standing bristle-up in a cup, as trapped water rots the wooden handle and dissolves the ferrule glue!',
      zh: '用指尖将湿笔毛重新捏整齐聚峰。将画笔水平平放于干毛巾上阴干。千万不要将湿画笔笔毛朝上插在笔筒里晾晒！倒流的肥皂水会渗入笔箍融化胶水，导致木杆胀裂脱落！',
    },
  },
];
