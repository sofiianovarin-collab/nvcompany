export function LiquidityField() {
  return (
    <svg viewBox="0 0 640 520" role="img" aria-labelledby="hero-art-title hero-art-desc">
      <title id="hero-art-title">Layered liquidity paths</title>
      <desc id="hero-art-desc">Abstract venue nodes joined by curved bands. No prices, spreads, or live market data.</desc>
      <defs>
        <linearGradient id="field-panel" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#1b2436" />
          <stop offset="1" stopColor="#121826" />
        </linearGradient>
        <radialGradient id="field-glow" cx="50%" cy="42%" r="42%">
          <stop stopColor="#1c6259" stopOpacity="0.28" />
          <stop offset="1" stopColor="#151C2D" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="520" rx="28" fill="url(#field-panel)" />
      <rect width="640" height="520" rx="28" fill="url(#field-glow)" />
      <g fill="none" stroke="#73928c" strokeOpacity="0.1">
        <path d="M48 48h544M48 112h544M48 176h544M48 240h544M48 304h544M48 368h544M48 432h544" />
        <path d="M80 28v464M160 28v464M240 28v464M320 28v464M400 28v464M480 28v464M560 28v464" />
      </g>
      <g fill="none" strokeLinejoin="round" strokeLinecap="round">
        <path d="M48 360c70 0 78-36 128-104s78-92 150-92 112-48 168-86 78-40 118-62" stroke="#143f39" strokeWidth="28" />
        <path d="M48 354c70 0 78-36 128-104s78-92 150-92 112-48 168-86 78-40 118-62" stroke="#1C6259" strokeWidth="16" />
        <path d="M118 118c8 70 48 92 112 108s92 78 132 118 28 96 62 112 86 22 132 8" stroke="#2a4d45" strokeWidth="24" />
        <path d="M118 112c8 70 48 92 112 108s92 78 132 118 28 96 62 112 86 22 132 8" stroke="#7ea894" strokeWidth="14" />
        <path d="M92 430c48-28 70-96 132-108s96 8 150-28 62-70 128-64 78-18 118-42" stroke="#143f39" strokeWidth="24" />
        <path d="M92 424c48-28 70-96 132-108s96 8 150-28 62-70 128-64 78-18 118-42" stroke="#318574" strokeWidth="14" />
      </g>
      <g fill="none" strokeLinecap="round">
        <path className="flow" d="M48 354c70 0 78-36 128-104s78-92 150-92 112-48 168-86 78-40 118-62" stroke="#d5e4d4" strokeWidth="2.2" />
        <path className="flow flow-slow" d="M118 112c8 70 48 92 112 108s92 78 132 118 28 96 62 112 86 22 132 8" stroke="#e7eee2" strokeWidth="1.8" />
        <path className="flow" d="M92 424c48-28 70-96 132-108s96 8 150-28 62-70 128-64 78-18 118-42" stroke="#d5e4d4" strokeWidth="2.2" />
      </g>
      <g className="float-soft">
        <path d="m320 188 68 39v78l-68 39-68-39v-78z" fill="#17433d" stroke="#8fb5a2" />
        <path d="m320 182 68 39-68 39-68-39z" fill="#2f6b5e" />
        <path d="m320 260 68-39v78l-68 39z" fill="#1d4e46" />
        <path d="m320 260-68-39v78l68 39z" fill="#3d7568" />
        <path d="m320 206 28 16-28 16-28-16z" fill="#e7eee2" />
      </g>
      <g>
        <Node x={132} y={92} />
        <Node x={470} y={70} />
        <Node x={528} y={168} />
        <Node x={126} y={392} />
      </g>
    </svg>
  );
}

function Node({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="m0 0 22-12 22 12-22 12z" fill="#c5d4c4" />
      <path d="M0 0v22l22 12V12z" fill="#4d8878" />
      <path d="m22 12 22-12v22L22 34z" fill="#214e47" />
    </g>
  );
}

export function ServiceRibbon() {
  return (
    <svg className="service-ribbon" viewBox="0 0 1120 120" aria-hidden="true">
      <path d="M8 78c120-48 180-8 280-8s150-52 250-52 170 36 270 20 180-24 292-58" fill="none" stroke="#1C6259" strokeWidth="10" strokeLinecap="round" opacity="0.85" />
      <path d="M8 96c140-20 170 18 290 18s160-40 270-28 150 30 250 18 170-10 292-36" fill="none" stroke="#151C2D" strokeWidth="6" strokeLinecap="round" opacity="0.28" />
      <circle cx="288" cy="70" r="7" fill="#F7F5F0" stroke="#1C6259" strokeWidth="2" />
      <circle cx="818" cy="38" r="7" fill="#F7F5F0" stroke="#1C6259" strokeWidth="2" />
    </svg>
  );
}

export function TwoSidedMarket() {
  return (
    <svg viewBox="0 0 520 360" role="img" aria-labelledby="book-title book-desc">
      <title id="book-title">Illustrative market structure</title>
      <desc id="book-desc">Opposing liquidity bands meet around a central market. No prices, sizes, or live data.</desc>
      <defs>
        <linearGradient id="book-panel" x1="0" x2="1" y2="1">
          <stop stopColor="#1b2436" />
          <stop offset="1" stopColor="#121826" />
        </linearGradient>
      </defs>
      <rect width="520" height="360" rx="28" fill="url(#book-panel)" />
      <path d="M40 250c70-10 90-70 140-78s80 8 90 8 40-70 90-78 80-8 120-36" fill="none" stroke="#1C6259" strokeWidth="22" strokeLinecap="round" />
      <path d="M40 118c78 8 92 62 142 74s78-6 96-6 48 64 104 74 86 6 118 28" fill="none" stroke="#8fb3a2" strokeWidth="18" strokeLinecap="round" />
      <path className="flow" d="M40 250c70-10 90-70 140-78s80 8 90 8 40-70 90-78 80-8 120-36" fill="none" stroke="#d7e6d6" strokeWidth="2" />
      <path className="flow flow-slow" d="M40 118c78 8 92 62 142 74s78-6 96-6 48 64 104 74 86 6 118 28" fill="none" stroke="#e7eee2" strokeWidth="2" />
      <circle cx="260" cy="176" r="28" fill="#214e47" stroke="#d7e6d6" />
      <circle cx="260" cy="176" r="8" fill="#e7eee2" />
      <path d="M78 292h18m-9-9v18M430 58h18m-9-9v18" fill="none" stroke="#8fb3a2" strokeWidth="1.2" />
    </svg>
  );
}

export function Ecosystem() {
  return (
    <svg viewBox="0 0 1120 280" role="img" aria-labelledby="eco-title eco-desc">
      <title id="eco-title">Connected market briefs</title>
      <desc id="eco-desc">Abstract paths link an exchange structure and a token structure. No clients or venues are named.</desc>
      <defs>
        <linearGradient id="eco-panel" x1="0" x2="1">
          <stop stopColor="#1b2436" />
          <stop offset="1" stopColor="#151C2D" />
        </linearGradient>
      </defs>
      <rect width="1120" height="280" rx="28" fill="url(#eco-panel)" />
      <g fill="none" strokeLinecap="round">
        <path d="M80 150h250c40 0 50-48 110-48h180" stroke="#8fb3a2" strokeWidth="14" />
        <path d="M80 186h300c48 0 40 40 120 40h250" stroke="#1C6259" strokeWidth="14" />
        <path d="M180 78c40 28 70 48 140 48h220" stroke="#c5d4c4" strokeWidth="8" />
        <path className="flow" d="M80 186h300c48 0 40 40 120 40h250" stroke="#e7eee2" strokeWidth="2" />
      </g>
      <g transform="translate(860 92)">
        <path d="m70 20 48 28v56l-48 28-48-28V48z" fill="#214e47" stroke="#d7e6d6" />
        <path d="m70 48 22 12-22 13-22-13z" fill="#e7eee2" />
      </g>
      <g transform="translate(70 96)">
        <rect width="86" height="64" rx="8" fill="none" stroke="#d7e6d6" />
        <path d="M16 22h54M16 36h40M16 50h28" stroke="#8fb3a2" />
      </g>
    </svg>
  );
}

export function ExchangeMini() {
  return (
    <svg className="mini-art" viewBox="0 0 180 72" aria-hidden="true">
      <path d="M8 50h50c12 0 14-22 36-22h70" fill="none" stroke="#1C6259" strokeWidth="8" strokeLinecap="round" />
      <path d="M8 28h70c16 0 12 22 40 22h46" fill="none" stroke="#151C2D" strokeWidth="4" strokeLinecap="round" opacity="0.35" />
      <circle cx="150" cy="28" r="8" fill="none" stroke="#1C6259" strokeWidth="2" />
    </svg>
  );
}

export function IssuerMini() {
  return (
    <svg className="mini-art" viewBox="0 0 180 72" aria-hidden="true">
      <circle cx="90" cy="36" r="14" fill="#1C6259" />
      <path d="M90 22V8M90 50v14M76 36H28M104 36h48M72 20 40 8M108 20l32-12M72 52 40 64M108 52l32 12" fill="none" stroke="#151C2D" strokeWidth="1.6" opacity="0.55" />
    </svg>
  );
}

export function FirmPlanes() {
  return (
    <svg viewBox="0 0 420 340" role="img" aria-labelledby="fm-art-title fm-art-desc">
      <title id="fm-art-title">Layered architectural planes</title>
      <desc id="fm-art-desc">Abstract framing and planes. This is not a company office, employee, or operating location.</desc>
      <rect width="420" height="340" rx="28" fill="#e7ebe4" />
      <g className="float-soft" fill="none" stroke="#1C6259" strokeWidth="1.4">
        <path d="M70 250 210 78 350 250Z" fill="#d5ddd4" />
        <path d="M96 250 210 112 324 250Z" fill="#c3d0c4" />
        <path d="M124 250 210 150 296 250Z" fill="#1C6259" fillOpacity="0.2" />
        <path d="M48 78h324v184H48z" />
        <path d="M48 78V40h324M48 262v28h324" opacity="0.45" />
        <path d="M210 78v184" opacity="0.5" />
      </g>
    </svg>
  );
}

export function DialogueArt() {
  return (
    <svg className="dialogue-art" viewBox="0 0 480 220" role="img" aria-labelledby="dialogue-title dialogue-desc">
      <title id="dialogue-title">A prepared conversation</title>
      <desc id="dialogue-desc">Two abstract frames linked by a path. No message is shown as sent.</desc>
      <rect x="16" y="28" width="170" height="120" rx="16" fill="none" stroke="#1C6259" strokeWidth="1.6" />
      <path d="M40 64h122M40 88h96M40 112h74" fill="none" stroke="#151C2D" strokeOpacity="0.35" />
      <rect x="294" y="64" width="170" height="120" rx="16" fill="#151C2D" />
      <path d="M318 100h122M318 124h90" fill="none" stroke="#d7e6d6" />
      <path className="flow" d="M186 88h108" fill="none" stroke="#1C6259" strokeWidth="2" />
      <circle cx="240" cy="88" r="5" fill="#1C6259" />
    </svg>
  );
}
