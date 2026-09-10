import { PaintingStep } from '../types';

export const PAINTING_STEPS: PaintingStep[] = [
  {
    id: 'setup-safety',
    stepNumber: 1,
    phase: {
      en: 'Studio Preparation & Safety',
      zh: '画室准备与安全规范',
    },
    title: {
      en: 'Workspace Setup & Solvent Safety',
      zh: '画架布局、调色板与溶剂安全',
    },
    summary: {
      en: 'Arrange an ergonomic easel setup, master safe solvent handling, and organize your palette logically before touching canvas.',
      zh: '合理布置画架与光线，掌握无味溶剂的通风与防燃规范，建立标准调色板色序。',
    },
    goal: {
      en: 'Establish a clean, well-ventilated, fire-safe environment with all tools within comfortable arm reach.',
      zh: '建立空气流通、远离火源的安全画室环境，并准备好调色板与工具。',
    },
    materialsNeeded: {
      en: [
        'Easel & Palette (Glass or balanced wood)',
        'Odorless Mineral Spirits (Gamsol/Sansodor)',
        'Stainless steel brush washer with airtight lid',
        'Cotton rags or blue shop paper towels',
        'Metal trash can filled with water for oily rags',
        'Palette knife for clean mixing',
      ],
      zh: [
        '画架与调色板（推荐木质或防反光玻璃板）',
        '无味矿物酒精/松节油（如 Gamsol、Sansodor）',
        '密封洗笔筒（带滤网，沉淀颜料残渣）',
        '纯棉抹布或无屑厚吸水纸巾',
        '注水金属垃圾桶（专门收纳含油废布，防止自燃）',
        '调色刀（用于调色，保护画笔毛丝）',
      ],
    },
    ratioFormula: {
      en: 'No paint yet. Prepare solvents in closed containers only.',
      zh: '此阶段不调油，溶剂须装入带盖密封容器中。',
    },
    dryingTime: {
      en: 'Immediate (Prep stage)',
      zh: '准备阶段（无需干燥时间）',
    },
    instructions: {
      en: [
        'Position your easel so light falls from your non-dominant side (left side for right-handed artists) to avoid casting shadows on your canvas.',
        'Arrange your oil colors around the perimeter of the palette in spectral order (White -> Yellows -> Reds -> Blues -> Earth tones -> Black), keeping the expansive center free for mixing.',
        'Never use odorless mineral spirits in an unventilated closet; ensure gentle cross-ventilation even with odorless brands.',
        'Crucial Safety Rule: Linseed oil cures through an exothermic oxidation reaction. Never crumple solvent/oil soaked rags in open plastic bins—always submerge them in water or lay them flat on concrete to dry.',
      ],
      zh: [
        '摆放画架：让光线从非惯用手的一侧射入（右手执笔则光源在左前方），避免手部阴影遮挡画布。',
        '调色板排色法：沿调色板边缘按光谱色序排列（钛白 → 黄色系 → 红色系 → 蓝色系 → 泥土色/褐色系 → 象牙黑），中央留出宽敞区域专供刮刀调和。',
        '通风警示：所谓“无味溶剂”只是去除了芳香烃气味，但挥发气体依然存在，工作区必须保持空气自然流通。',
        '防自燃军规：亚麻籽油通过氧化放热反应干燥。沾染油画媒介剂与溶剂的碎布绝不可随意揉成团扔进普通垃圾桶，必须浸泡入水或摊平彻底风干，以防氧化积热自燃！',
      ],
    },
    expertTip: {
      en: 'Mix your colors with a flexible palette knife rather than your brushes. Mixing with brushes forces thick paint deep into the metal ferrule where it is nearly impossible to clean out.',
      zh: '始终坚持用调色刀调色，而不是拿画笔搅匀。用毛笔调色会把浓稠颜料压进金属笔箍根部，极难清洗并会导致笔毛分叉变硬。',
    },
    beginnerTrap: {
      en: 'Buying hardware-store paint thinner instead of artist-grade odorless mineral spirits (OMS). Hardware thinner contains toxic aromatic hydrocarbons that cause severe headaches.',
      zh: '误买五金店劣质油漆稀释剂代替专业美术无味松节油。工业溶剂含高浓度有毒芳香烃，挥发气体会导致头痛头晕与呼吸道不适。',
    },
  },
  {
    id: 'surface-imprimatura',
    stepNumber: 2,
    phase: {
      en: 'Canvas Preparation',
      zh: '基底准备与有色底',
    },
    title: {
      en: 'Toning the Canvas (Imprimatura)',
      zh: '打有色底（Imprimatura 单色铺底）',
    },
    summary: {
      en: 'Kill the blinding glare of raw white canvas with a sheer, warm mid-tone wash such as Raw Umber or Burnt Sienna.',
      zh: '用生褐或熟赭加微量溶剂稀释，为纯白画布涂上一层通透的暖灰色底色，消除眩光并建立基准中间调。',
    },
    goal: {
      en: 'Establish a harmonious neutral middle value so subsequent lights and darks can be judged with precise relative contrast.',
      zh: '消除白画布的强烈欺骗性对比，在柔和中间调基底上准确判断亮部与暗部的明度阶梯。',
    },
    materialsNeeded: {
      en: [
        'Stretched canvas primed with acrylic or oil gesso',
        'Earth tone paint (Raw Umber, Burnt Sienna, or Burnt Umber)',
        'Odorless Mineral Spirits (100% solvent, 0% oil)',
        'Large wide flat wash brush or cotton rag',
      ],
      zh: [
        '已刷好丙烯或油性底料（Gesso）的绷框画布或木画板',
        '大地色系单色颜料（生褐 Raw Umber、熟赭 Burnt Sienna 或生赭）',
        '无味溶剂（100% 松节油/溶剂，不含植物干性油）',
        '大号平头猪鬃刷或干净棉布',
      ],
    },
    ratioFormula: {
      en: '100% Solvent + Minimal pigment (Watery wash consistency, like strong tea)',
      zh: '100% 溶剂 + 极微量颜料（浓茶般稀薄通透的流质）',
    },
    dryingTime: {
      en: '20 to 60 minutes (Raw umber dries fastest due to natural manganese content)',
      zh: '20 至 60 分钟（生褐色含天然锰元素，具备极快催干特性）',
    },
    instructions: {
      en: [
        'Squeeze a small dab of Raw Umber or Burnt Sienna on your palette. Raw Umber produces a neutral olive-brown, while Burnt Sienna gives a warm golden glow.',
        'Dip your large flat brush into mineral spirits and dissolve the pigment until it reaches the consistency of watercolor or iced tea.',
        'Brush the wash vigorously across the entire surface of the canvas.',
        'Take a clean, dry cotton cloth and gently wipe back in broad swirls to create an even, glowing, matte translucent film. It should not feel sticky or gummy.',
      ],
      zh: [
        '在调色板上挤出少量生褐（中性偏冷灰橄榄）或熟赭（温暖温润的金褐色）。',
        '用大号刷子蘸取足量无味溶剂将颜料彻底化开，调成类似红茶或水彩一样的轻薄水性流质。',
        '用大号排笔快速横扫纵刷，均匀覆盖整张白色画布。',
        '趁湿用干燥平整的纯棉抹布轻轻打圈擦拭，吸走多余浮油与色粉，留下一层均匀如琥珀般透光的半透明亚光底色。',
      ],
    },
    expertTip: {
      en: 'Raw Umber is universally loved by classical masters because the raw earth naturally contains manganese oxides, which act as a natural drying agent, allowing you to begin drawing in under an hour.',
      zh: '古典大师首选生褐色（Raw Umber），因为天然生褐矿石中富含二氧化锰成分，具有天然快干催化作用，铺完底不到一小时便可干透起稿。',
    },
    beginnerTrap: {
      en: 'Using oil medium (linseed oil) during this step. If your imprimatura has oil, it violates the "fat over lean" rule and will take days to dry before you can even sketch!',
      zh: '在打底阶段加入亚麻籽油或调色油。底色层必须是完全“瘦”（Lean）的无油薄层；若加了厚油不仅干燥需数天，还会使后续图层极易打滑或产生附着不良。',
    },
  },
  {
    id: 'underdrawing-value',
    stepNumber: 3,
    phase: {
      en: 'Drawing & Value Structure',
      zh: '起稿构图与单色明暗',
    },
    title: {
      en: 'Underdrawing & Wipe-Out (Grisaille / Form Block-in)',
      zh: '起草构图与“擦减法”明暗定型',
    },
    summary: {
      en: 'Map out key shapes, linear proportions, and shadow masses using either thin brush lines or the master "wipe-out" reduction method.',
      zh: '用细笔勾勒轮廓关键点，利用沾有微量溶剂的棉布直接擦出受光高光，快速确立画面的黑白灰素描关系。',
    },
    goal: {
      en: 'Lock in rock-solid proportions and distinct light/shadow separation before adding full color complexity.',
      zh: '在引入丰富色彩之前，彻底解决构图比例、动势与受光面/背光面的二元明暗骨架。',
    },
    materialsNeeded: {
      en: [
        '#2 Round brush or #4 Filbert (synthetic or hog)',
        'Thin Raw Umber / Burnt Umber mixture',
        'Cotton rag or Q-tips / paper stumps wrapped in cloth',
        'Solvent container for dampening wipe-out tools',
      ],
      zh: [
        '2号圆头笔或4号小榛形笔（合成毛或软猪鬃）',
        '生褐或熟褐单色颜料（溶剂稀释）',
        '纯棉抹布、棉签（擦拭高光与微调边界）',
        '微湿溶剂杯（辅助擦洗减色）',
      ],
    },
    ratioFormula: {
      en: '100% Solvent + Earth color (Zero oil added - keep it lean)',
      zh: '100% 溶剂 + 极微量褐系颜料（绝对零油分，保持最瘦状态）',
    },
    dryingTime: {
      en: '1 to 3 hours',
      zh: '1 至 3 小时',
    },
    instructions: {
      en: [
        'Using a small round brush dipped in thin earth paint, lightly sketch key gesture lines, horizon coordinates, and major silhouette contours.',
        'Identify all cast shadows and form shadows: block them in uniformly with a medium-dark transparent glaze of umber.',
        'The Wipe-out Secret: Wrap your index finger in a soft rag, moisten it slightly with solvent, and wipe away the damp imprimatura where light strikes the subject to expose pure highlight areas.',
        'Step back 6 to 10 feet (2 to 3 meters) from your easel: squint your eyes to confirm that the silhouette reads clearly as a distinct 3D form even without color.',
      ],
      zh: [
        '用沾有稀薄褐色颜料的小圆头笔，轻轻标出画面关键几何转折点、透视线与外轮廓剪影。',
        '区分光影：将所有投影（Cast Shadow）与暗部（Form Shadow）用透明褐色整体统一铺上一层微暗调子。',
        '大师擦拭法（Wipe-out）：将干净白布裹在食指上，稍微蘸一点点溶剂，在受光最亮处直接擦出底层的透亮高光，形成自然的明暗雕刻感。',
        '退后三米观察：眯起眼睛看画面，确认即使在没有色彩的情况下，黑白灰三层大关系是否具有震撼的体积感与空间深度。',
      ],
    },
    expertTip: {
      en: 'Squinting filters out high-frequency distracting details and forces your optical system to evaluate luminance values directly. If the values are wrong, no amount of expensive paint will rescue the piece.',
      zh: '半闭双眼（眯眼观察法）能过滤掉细枝末节的视觉噪音，强迫大脑只聚焦于明度大色块。如果明度素描关系错了，再昂贵的纯正颜色也救不回画面的体积感。',
    },
    beginnerTrap: {
      en: 'Drawing underdrawings with graphite pencils. Graphite contains slick carbon that will bleed through oil layers years later as an unsightly silver shadow, and oil cannot adhere to thick graphite.',
      zh: '用普通铅笔起油画底稿。铅笔石墨含有滑性碳粉，不仅阻碍油画颜料附着，数年后石墨还会从油画层中向外泛渗，浮出灰银色脏痕。请务必使用油画色水或色粉炭笔起稿。',
    },
  },
  {
    id: 'lean-color-block',
    stepNumber: 4,
    phase: {
      en: 'First Color Stage',
      zh: '初阶着色与瘦油层',
    },
    title: {
      en: 'Blocking in Color (The Lean Layer)',
      zh: '第一层色彩铺陈（瘦油底色层）',
    },
    summary: {
      en: 'Lay in the dominant chromatic areas with broad brushes, using minimal medium and keeping shadow areas thin and transparent.',
      zh: '使用大号平头或榛形笔迅速铺设各大色块的冷暖基调，暗部保持轻薄透气，严格控制油分配比。',
    },
    goal: {
      en: 'Cover all remaining canvas ground with approximate local colors and temperatures without getting bogged down in fine details.',
      zh: '迅速消灭底色，为天空、背景、主体建立准确的冷暖关系与固有色基调，保持画面扁平薄润。',
    },
    materialsNeeded: {
      en: [
        'Full palette of limited primaries (Ultramarine, Cadmium Red, Cadmium Yellow, Burnt Sienna, Titanium White)',
        'Medium ratio: 80% Solvent + 20% Refined Linseed Oil',
        '#6 to #10 Flat & Filbert hog bristle brushes',
      ],
      zh: [
        '标准基色阵列（群青、镉红、镉黄、生赭、钛白等）',
        '第一层媒介剂配比：80% 溶剂 + 20% 精炼亚麻籽油',
        '6至10号大中型平头或榛形猪鬃笔',
      ],
    },
    ratioFormula: {
      en: 'LEAN FORMULA: 80% Solvent + 20% Linseed Oil (Quick drying, matte, minimal oil)',
      zh: '瘦油配方：80% 溶剂 + 20% 亚麻籽油（干得快、亚光微孔、低油性）',
    },
    dryingTime: {
      en: '24 to 48 hours to be touch-dry',
      zh: '表干需 24 至 48 小时',
    },
    instructions: {
      en: [
        'Mix your first color batches slightly darker and duller than final appearance, as subsequent layers will build intensity.',
        'Keep shadow areas lean, liquid, and semi-transparent. Let the dark underpainting breathe through.',
        'Work from general masses to specific planes: tackle the sky or background atmosphere first, followed by midground, then foreground elements.',
        'Do not blend edges yet! Keep transitions flat and distinct like a clean mosaic tile pattern.',
      ],
      zh: [
        '第一遍调色可以比心中最终目标略微灰一点、暗半度，留出后续提亮与加浓纯度的空间。',
        '暗部永远画得薄，亮部可以略厚：保持背光区域透明而深远，让底层温暖的透气感显现。',
        '从大色块到小形体：先铺满天空和背景背景幕布，再铺中间景物与前景主体。',
        '不要急着揉擦过渡边缘！让色块之间保持清晰明确的刀削式交界，像漂亮的彩色马赛克一样分明。',
      ],
    },
    expertTip: {
      en: 'Keep your brush strokes directional. If you are painting a tabletop, brush horizontally; if a wall, brush vertically; if a sphere, curve your stroke with the form.',
      zh: '笔触必须顺应物体的结构转折：平坦桌面走横向笔触，立面墙体走纵向笔触，球体或人脸结构则顺应曲面弧度排笔。',
    },
    beginnerTrap: {
      en: 'Dipping into pure linseed oil right away. Applying excessive oil in layer 1 ensures the surface stays sticky for a week and guarantees later layers will crack!',
      zh: '第一遍上色就直接狂蘸纯亚麻籽油。底层如果吸饱了厚重干性油，不仅表层一周都黏稠难干，更严重违反了“肥盖瘦”法则，导致日后全画龟裂！',
    },
  },
  {
    id: 'fat-over-lean-form',
    stepNumber: 5,
    phase: {
      en: 'Core Technique & Architecture',
      zh: '形体塑造与核心法则',
    },
    title: {
      en: 'Building Form & The "Fat Over Lean" Rule',
      zh: '形体塑造与“肥盖瘦”法则实施',
    },
    summary: {
      en: 'Apply thicker paint and increase the proportion of oil medium in each succeeding layer to ensure physical flexibility and longevity.',
      zh: '进入厚涂塑造阶段，后续每一层都必须增加油类媒介剂比例（肥），使表面漆膜比底层更具弹性和透光度。',
    },
    goal: {
      en: 'Model roundness, surface texture, and optical volume while adhering strictly to classical structural archival principles.',
      zh: '塑造结实的体积结构、高光肌理与光影转折，同时在物理层面上杜绝因干燥收缩率差异引起的画面裂痕。',
    },
    materialsNeeded: {
      en: [
        'Medium ratio: 50% Solvent + 50% Stand Oil or Cold-Pressed Linseed Oil',
        'Pure tube paint (less diluted, rich buttery body)',
        'Variety of Filberts, Brights, and flexible palette knives for impasto',
      ],
      zh: [
        '第二/三层媒介剂配比：50% 溶剂 + 50% 稠化亚麻油（Stand Oil）或冷压亚麻油',
        '原装管装纯颜料（质地如厚奶油，不加过多稀释）',
        '各号榛形笔、短平笔（Bright）与油画塑形刮刀',
      ],
    },
    ratioFormula: {
      en: 'FAT OVER LEAN (肥盖瘦): Layer 1 (20% Oil) < Layer 2 (50% Oil) < Layer 3 (75-100% Oil)',
      zh: '肥盖瘦铁律：第一层（20%油） < 第二层（50%油） < 表面层（75-100%油）',
    },
    dryingTime: {
      en: '3 to 7 days per application pass',
      zh: '每遍着色需要 3 至 7 天氧化结膜',
    },
    instructions: {
      en: [
        'Why Fat over Lean? Oil dries through chemical oxidation, not evaporation. Fatty layers containing more oil take longer to dry and cure into a flexible, rubbery film. Lean layers dry fast and brittle. If a brittle lean layer is placed atop an elastic fatty layer, the surface skin splits open—causing craquelure (cracking).',
        'Load your brush with buttery paint on one side of the bristles. Lay the stroke down decisively with one confident stroke—do not continuously pat or fuss over it.',
        'Use the "Thick over Thin" companion rule: keep dark recessed planes thin and translucent, while building opaque, sculptural impasto dabs on the crest of forms receiving direct light.',
        'Feather the soft terminator line (core shadow) using a clean dry filbert or fan brush with light feather-touch pressure.',
      ],
      zh: [
        '为什么必须“肥盖瘦”？油画颜料不是靠水分蒸发，而是通过吸收空气中氧气形成三维网状聚合膜。油多的“肥层”（Fat）干燥慢但柔韧有弹性；油少的“瘦层”（Lean）干燥快但质脆。若把快干脆硬的瘦层涂在缓慢蠕动的软肥层上，表面必会被底层拉扯撕裂成密密麻麻的裂纹！',
        '取色技巧：将厚润颜料单侧饱满蘸在笔尖边缘，落笔要稳准狠，一笔到位，切忌在画布上来回反复涂抹抹平。',
        '“厚盖薄”（Thick over Thin）法则：暗部与阴影必须始终保持薄透，受光迎光面（如鼻梁、苹果高光、浪花尖峰）则大胆采用膏状厚涂（Impasto）。',
        '羽化明暗交界线：利用一支干净柔软的干榛形笔或扇形笔，如羽毛抚摸般轻轻扫拂边缘，实现柔和朦胧的过渡。',
      ],
    },
    expertTip: {
      en: 'Never introduce quick-drying alkyd mediums on top of slow-drying linseed layers. Any fast-drying medium must be used early in the lower strata of the painting.',
      zh: '切忌在慢干的纯亚麻籽油层之上，突然涂抹快干性树脂（Alkyd/快干剂）。任何快干成分只能存在于底层，越往表面层越应使用慢干、柔韧的干性油。',
    },
    beginnerTrap: {
      en: 'Overworking and "mushing" colors together on the canvas. If you mix colors directly on the canvas with aggressive scrubbing, you produce muddy brown sludge. Always mix your precise hue on the palette first.',
      zh: '在画布上狂乱揉色导致“浑汤起泥”。若直接在画布上反复用力打圈搅拌不同颜色，三原色瞬间混成浑浊灰泥。请务必先在调色板上调准色彩倾向，再一笔落准在画布上。',
    },
  },
  {
    id: 'glazing-scumbling-details',
    stepNumber: 6,
    phase: {
      en: 'Refinement & Luminosity',
      zh: '罩染、干擦与细节深化',
    },
    title: {
      en: 'Glazing, Scumbling & Final Highlights',
      zh: '光学透明罩染（Glazing）、干擦与点睛高光',
    },
    summary: {
      en: 'Utilize transparent jewel-like glazes over dried layers to create depth, and dry-brush opaque scumbles to simulate atmospheric light.',
      zh: '在彻底干燥的底层上涂抹如彩色玻璃般的极薄透明色层（罩染），结合干笔擦拭（提白干擦），呈现立体透光的深邃光学质感。',
    },
    goal: {
      en: 'Harness the optical stained-glass physics unique to oil paint, unattainable in acrylics or watercolors.',
      zh: '发挥油画特有的多层光学折射特性，让底层色彩透过透明光泽层反弹入人眼，制造珠宝般内发光的生动氛围。',
    },
    materialsNeeded: {
      en: [
        'Glaze Medium: 1 part Stand Oil + 1 part Venetian Turpentine or Odorless Mineral Spirits',
        'Transparent oil pigments (e.g., Quinacridone Magenta, Transparent Red Oxide, Ultramarine Blue, Phthalo Green)',
        'Ultra-soft brushes (Sable rounds, badger mop, synthetic liners)',
        'Titanium White + Cadmium Yellow dab for point-source specular highlights',
      ],
      zh: [
        '罩染媒介剂：1份 稠化亚麻油（Stand oil）+ 1份 优质无味溶剂或威尼斯松脂',
        '透明色号颜料（注意色管标有空心正方形□的透明色，如喹吖啶酮、透明红氧化铁、群青、酞菁蓝）',
        '极软画笔（纯貂毛圆头笔、拖笔、细长勾线笔）',
        '纯钛白加极微量镉黄（用于聚焦点光源的绝顶高光）',
      ],
    },
    ratioFormula: {
      en: 'ULTRA FAT: 70-100% Oil / Glaze medium + tiny translucent drop of pigment',
      zh: '极肥配方：70%-100% 滋润慢干罩染油 + 微量透明色滴（像有色清漆）',
    },
    dryingTime: {
      en: '3 to 5 days',
      zh: '3 至 5 天',
    },
    instructions: {
      en: [
        'Ensure the underlying layer is bone-dry to the touch. Pressing your fingernail into the paint must leave zero dent before you glaze.',
        'GLAZING: Mix a transparent jewel color into your glaze medium. Brush it evenly across a dry form; it acts like a sheet of colored stained glass, intensifying saturation and darkening values without losing underlying detail.',
        'SCUMBLING: Take a stiff bristle brush with nearly dry, semi-opaque light paint (no medium). Lightly drag it over textured canvas to skim the tops of bumps, producing an optical atmospheric veil or haze.',
        'Final Accents: Place your specular highlights (pure un-thinned paint) in single, crisp, raised peaks of impasto right where direct light reflects into the viewer’s eye.',
      ],
      zh: [
        '检查底漆状态：用指甲轻按画布最厚处，必须坚硬如石、毫无下陷压痕，确认彻底干燥后才能进行透明罩染。',
        '透明罩染（Glazing）：取一丁点透明颜料调入充沛的罩染油中，薄薄扫过干透的形体。它就像一层透光的彩色玻璃纸，大幅提升色泽浓郁度与景深，且完全保留底层的素描线条。',
        '干擦提光（Scumbling）：用干燥稍硬的笔刷蘸取不加任何油的半干亮色，在抹布上擦掉多余颜料后，在粗糙画布表面轻快掠过，颜料只挂在画布织纹突起处，形成迷人的雾气、绒毛或逆光微尘感。',
        '落款与终极高光：用勾线笔蘸取醇厚纯白（带微黄温感），在反光焦点一笔点出凸起的雕塑感高光，瞬间激活整幅画面的水润光彩！',
      ],
    },
    expertTip: {
      en: 'Always check the pigment opacity symbols on your paint tubes! Squares with empty centers (□) are transparent (ideal for glazes); black squares (■) are opaque (which will make glazes look milky and muddy).',
      zh: '务必认清油画颜料管背面的透明度符号！空心方块（□）代表纯透明色（罩染神级利器）；实心方块（■）是不透明遮盖色，若用来罩染会变成浑浊像牛奶打翻一样的雾斑。',
    },
    beginnerTrap: {
      en: 'Glazing over a semi-dry layer ("skinning over"). If the paint is only dry on the surface skin but soft underneath, brushing wet glaze medium over it will tear the delicate film and ruin weeks of work!',
      zh: '在半干假凝（表面结膜而内里仍然软糯）的颜料上罩染。此时刷毛与溶剂会直接撕破娇嫩的表皮，把未干的底漆翻出来搅成一团废糊，毁掉数天的辛劳！',
    },
  },
  {
    id: 'curing-and-varnishing',
    stepNumber: 7,
    phase: {
      en: 'Preservation & Completion',
      zh: '氧化固化与保护光油',
    },
    title: {
      en: 'Curing & Protective Varnishing',
      zh: '全画固化氧化与涂布保护光油',
    },
    summary: {
      en: 'Understand that oil paint cures by slow oxidation over months, and apply protective varnish to unify sheen and shield against atmospheric pollutants.',
      zh: '认清油画是靠长达数月乃至一年的持续吸收氧气硬化，适时涂布专业上光油，统一哑光与光泽反差，隔绝紫外线与尘埃。',
    },
    goal: {
      en: 'Unify patchy "sunken-in" dull spots with vibrant luster while creating a sacrificial barrier that conservators can remove a century later.',
      zh: '解决不同色块因吸油不均产生的干瘪发乌斑块（吸油现象），形成一层可逆的高透光防尘防刮保护盾。',
    },
    materialsNeeded: {
      en: [
        'Retouch Varnish (safe for paintings after 1-2 months) OR',
        'Gamvar / Dammar final picture varnish (after 6-12 months full cure)',
        'Wide 2-inch synthetic or goat-hair varnishing brush',
        'Lint-free tack cloth and dust-free drying space',
      ],
      zh: [
        '润色光油（Retouch Varnish，完成1-2个月后可用，透气呼吸）或',
        '专业最终画面上光油（如 Gamvar，透气合成树脂；传统达玛树脂须等待6-12个月）',
        '2英寸宽软质羊毛排刷或超细人造毛平刷',
        '防静电去尘粘布、无尘干燥摆放空间',
      ],
    },
    ratioFormula: {
      en: '100% Pure Varnish (Do not mix into painting oil medium; apply only as external topcoat)',
      zh: '100% 原液光油（不可掺入作画颜料中使用，仅作为画作完成后的外层封闭层）',
    },
    dryingTime: {
      en: 'Varnish coat dries in 24 hours; underlying oil cures over 6 to 12 months',
      zh: '光油表干约 24 小时；而底层油画的内部彻底结晶需要 6 至 12 个月',
    },
    instructions: {
      en: [
        'Notice "Sunken-In" spots? Areas rich in pigment and solvent sink into the canvas ground, looking dull and matte, while fatty areas shine. Varnish evens out the refractive index of the entire painting.',
        'Wait the appropriate curing window: Modern synthetic varnishes like Gamvar can be applied as soon as the thickest paint resists a fingernail test (usually 2-6 months), while traditional Dammar varnish requires 6 to 12 months of full oxidation.',
        'Wipe the painting with a dry microfiber cloth to remove dust.',
        'Lay the painting flat on a table so varnish does not run. Pour a thin puddle and cross-hatch with your wide brush in gentle perpendicular strokes from edge to edge.',
        'Cover the drying painting with an inverted cardboard box or tent to prevent airborne lint from landing on the wet glass-smooth varnish.',
      ],
      zh: [
        '为什么干透后会发乌（Sunken-in 吸油发灰）？颜料中的溶剂渗入底胶孔隙，导致部分色块失去光泽发枯，而多油处又亮光闪闪。上光油能够重新渗透润泽，让所有色彩如同浸在清水中一样重新焕发饱和光泽。',
        '掌握上光时机：现代特制合成树脂光油（如 Gamblin Gamvar）具有分子微孔透气性，在厚处指甲按压无痕时（约完成2-4个月）即可涂布；而传统天然达玛光油必须静置6至12个月彻底氧化后方可上光。',
        '除尘：在施涂前，用无绒软布彻底拂去画面附着的微小浮尘。',
        '水平涂布：将画作平放在干净桌面上，防止光油顺垂流淌。将少量光油倒在画布中央，持宽排笔以“十”字交叉笔法迅速平扫推开。',
        '防尘罩防护：上光后立即在上方倒扣一个干净的纸箱盖住，防止空气中的飞絮和猫毛落在未干的光油镜面上。',
      ],
    },
    expertTip: {
      en: 'Always use a reversible picture varnish (one soluble in mild mineral spirits) rather than polyurethane or hardware clear-coats! This ensures future art restorers can remove and replace the dirty varnish in 100 years without damaging your paint layer.',
      zh: '绝对只能使用可逆的美术专用画面光油，千万不要用五金店的聚氨酯清漆！正规光油能在百年后由艺术品修复师用温和溶剂轻松洗去重上，而不会伤及底下珍贵的原作颜料层。',
    },
    beginnerTrap: {
      en: 'Sealing a fresh painting with non-breathable varnish within days of finishing. Oil needs oxygen to complete its curing chain; suffocating it will trap soft, runny paint beneath an airtight shell forever!',
      zh: '画完刚几天就急不可耐地上密闭传统光油。油画是通过持续从空气中吸收氧分子来形成坚韧晶体结构的；一旦被不透气层过早隔绝，内部颜料将永远保持黏软甚至从内溃烂！',
    },
  },
];
