// ==========================================
// TYPOGRAPHY & HEADINGS
// ==========================================

export const SectionHeader = ({ sectionNumber, titleText, highlightText, id }) => (
  <div id={id} className="section-hdr flex items-center gap-3.5 mb-7 pb-4 border-b border-e-bd animate-fade-up scroll-mt-10">
    <span className="font-mono text-[11px] text-e-dim bg-e-bg2 border border-e-bd px-2.5 py-1 rounded-[6px] shrink-0">
      {sectionNumber}
    </span>
    <h2 className="font-serif text-[26px] font-bold text-white">
      {titleText} <span className="text-e-indigo petit-formal-script-regular">{highlightText}</span>
    </h2>
  </div>
);

export const SubHeading = ({ children, className = "" }) => (
  <h3 className={`font-sans text-sm font-semibold uppercase tracking-[.08em] text-e-mu mt-10 mb-3.5 flex items-center gap-2 after:content-[''] after:flex-1 after:h-px after:bg-e-bd ${className}`}>
    {children}
  </h3>
);

export const Paragraph = ({ children, className = "" }) => (
  <p className={`text-e-mu mb-3.5 leading-[1.7] ${className}`}>
    {children}
  </p>
);

// ==========================================
// CALLOUTS & NOTICES
// ==========================================

export const Callout = ({ type = "info", label, children }) => {
  const styles = {
    info: { bg: "bg-e-indigo-b", border: "border-[rgba(108,138,255,0.25)] border-l-e-indigo", text: "text-[rgba(162,182,255,0.85)]", labelColor: "text-e-indigo" },
    success: { bg: "bg-e-green-b", border: "border-[rgba(74,222,128,0.2)] border-l-e-green", text: "text-[rgba(74,222,128,0.85)]", labelColor: "text-e-green" },
    warning: { bg: "bg-e-amber-b", border: "border-[rgba(245,158,11,0.25)] border-l-e-amber", text: "text-[rgba(245,158,11,0.85)]", labelColor: "text-e-amber" },
    error: { bg: "bg-e-red-b", border: "border-[rgba(248,113,113,0.25)] border-l-e-red", text: "text-[rgba(248,113,113,0.85)]", labelColor: "text-e-red" }
  };
  
  const style = styles[type] || styles.info;

  return (
    <div className={`${style.bg} border ${style.border} border-l-[3px] rounded-r-lg px-5 py-4 my-5`}>
      {label && <div className={`font-mono text-[10px] tracking-[.1em] uppercase ${style.labelColor} mb-2 font-semibold`}>{label}</div>}
      <div className={`${style.text} text-[13.5px] m-0 leading-[1.6]`}>
        {children}
      </div>
    </div>
  );
};

// ==========================================
// CODE & TERMINAL
// ==========================================

export const InlineCode = ({ children, color = "text-e-teal" }) => (
  <code className={`font-mono text-[12.5px] bg-e-bg3 ${color} px-1.5 py-0.5 rounded border border-e-bd2`}>
    {children}
  </code>
);

export const CodeBlock = ({ langLeft, langRight, children }) => (
  <div className="bg-[#0a0c12] border border-e-bd rounded-2xl overflow-hidden my-5 font-mono">
    <div className="bg-e-bg3 border-b border-e-bd px-4 py-[9px] flex items-center justify-between">
      <span className="text-[10px] tracking-[.1em] uppercase text-e-dim">{langLeft}</span>
      <span className="text-[11px] text-e-mu">{langRight}</span>
    </div>
    <div className="p-5 overflow-x-auto text-[13px] leading-[1.8] whitespace-pre text-e-tx">
      {children}
    </div>
  </div>
);

export const Token = ({ type, children }) => {
  const colors = {
    keyword: "text-purple-400", // k
    type: "text-cyan-400", // t
    comment: "text-e-dim italic", // c
    string: "text-green-300", // s
    number: "text-amber-300", // n
    function: "text-e-indigo", // fn
    operator: "text-e-mu", // op
    plain: "text-e-tx"
  };
  return <span className={colors[type] || colors.plain}>{children}</span>;
};

// ==========================================
// TABLES
// ==========================================

export const Table = ({ children }) => (
  <div className="overflow-x-auto my-4 rounded-lg border border-e-bd">
    <table className="w-full border-collapse text-[13px]">
      {children}
    </table>
  </div>
);

export const TableHead = ({ headers }) => (
  <thead>
    <tr>
      {headers.map((h, i) => (
        <th key={i} className="bg-e-bg3 text-e-mu font-semibold text-[11px] tracking-[.06em] uppercase px-3.5 py-2.5 text-left border-b border-e-bd2">
          {h}
        </th>
      ))}
    </tr>
  </thead>
);

export const TableRow = ({ children }) => (
  <tr className="hover:bg-e-bg3 transition-colors group">
    {children}
  </tr>
);

export const TableCell = ({ children, highlight = null }) => (
  <td className={`px-3.5 py-2.5 border-b border-e-bd align-top text-e-mu group-last:border-b-0`}>
    {highlight ? <strong className={highlight}>{children}</strong> : children}
  </td>
);

// ==========================================
// CARDS & BADGES
// ==========================================

export const FeatureCard = ({ title, description, icon, iconBg, borderTopColor = "border-t-e-indigo", children }) => (
  <div className={`bg-e-bg2 border border-e-bd border-t-2 ${borderTopColor} rounded-2xl p-5 hover:border-e-bd2 transition-colors`}>
    {icon && (
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-[17px] mb-3 shrink-0 ${iconBg}`}>
        {icon}
      </div>
    )}
    <h4 className="text-sm font-semibold text-e-tx mb-1.5">{title}</h4>
    <p className="text-[13px] leading-[1.6] text-e-mu m-0 mb-2.5">{description}</p>
    {children && <div className="flex flex-wrap gap-1.5 mt-2.5">{children}</div>}
  </div>
);

export const Badge = ({ children, type = "default" }) => {
  const styles = {
    default: "text-e-mu border-e-bd2 bg-e-bg3",
    indigo: "text-e-indigo border-[rgba(108,138,255,0.3)] bg-[rgba(108,138,255,0.08)]",
    teal: "text-e-teal border-[rgba(45,212,191,0.3)] bg-[rgba(45,212,191,0.08)]",
    purple: "text-e-purple border-[rgba(167,139,250,0.3)] bg-[rgba(167,139,250,0.08)]",
    amber: "text-e-amber border-[rgba(245,158,11,0.3)] bg-[rgba(245,158,11,0.08)]",
    green: "text-e-green border-[rgba(74,222,128,0.3)] bg-[rgba(74,222,128,0.08)]",
    pink: "text-e-pink border-[rgba(244,114,182,0.3)] bg-[rgba(244,114,182,0.08)]",
    red: "text-e-red border-[rgba(248,113,113,0.3)] bg-[rgba(248,113,113,0.08)]"
  };
  return (
    <span className={`font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${styles[type]}`}>
      {children}
    </span>
  );
};

// ==========================================
// LISTS
// ==========================================

export const ArrowList = ({ children }) => (
  <ul className="list-none flex flex-col gap-2 my-3.5">
    {children}
  </ul>
);

export const ArrowListItem = ({ children }) => (
  <li className="flex items-start gap-2.5 text-[13px] text-e-mu bg-e-bg3 border border-e-bd2 rounded-lg px-3.5 py-3">
    <span className="text-e-teal font-bold shrink-0 mt-px font-mono">→</span>
    <span>{children}</span>
  </li>
);

export const CheckListItem = ({ checked = true, title, description }) => (
  <div className="flex items-start gap-2.5 py-2 border-b border-e-bd text-[13px] text-e-mu last:border-b-0">
    <span className="text-e-green text-xs shrink-0 mt-0.5">{checked ? '✓' : ''}</span>
    <div>
      <strong className="text-e-tx">{title}</strong> {description && `— ${description}`}
    </div>
  </div>
);

// ==========================================
// NAVIGATION / SIDEBAR
// ==========================================

const NavLink = ({ href, icon, text, badge, activeId }) => {
  const id = href.substring(1); // Remove the '#'
  const isActive = activeId === id;
  
  return (
    <a 
      href={href} 
      className={`nav-link flex items-center gap-[9px] px-2.5 py-[7px] rounded-lg text-e-mu no-underline text-[13.5px] font-medium transition-colors mb-px hover:bg-e-bg3 hover:text-e-tx ${isActive ? 'bg-[#151a2e] !text-[#6c8aff]' : ''}`}
    >
      {icon && <span className="text-[13px] w-[18px] text-center shrink-0">{icon}</span>}
      {text}
      {badge && <span className="w-1.5 h-1.5 rounded-full bg-e-amber ml-auto shrink-0"></span>}
    </a>
  );
};

const Sidebar = ({ activeId }) => (
  <aside id="sidebar" className="w-[260px] min-h-screen bg-e-bg2 border-r border-e-bd fixed top-0 left-0 flex flex-col z-[100] overflow-y-auto hidden md:flex">
    <div className="px-5 pt-[22px] pb-[18px] border-b border-e-bd">
      <div className="flex gap-1.5 mb-3.5">
        <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]"></span>
        <span className="w-[11px] h-[11px] rounded-full bg-[#ffbd2e]"></span>
        <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]"></span>
      </div>
      <span className="font-mono text-[10px] text-e-teal tracking-[.12em] uppercase mb-1.5 block">Dev Field Notes</span>
      <h2 className="font-serif text-[17px] font-bold text-e-tx leading-[1.3]">2D Game Engine</h2>
    </div>

    <div className="px-5 pt-[18px] pb-1">
      <div className="font-mono text-[10px] tracking-[.1em] uppercase text-e-dim mb-2">Other Contents</div>
      <a href="#" className="nav-link flex items-center gap-[9px] px-2.5 py-[7px] rounded-lg text-e-mu no-underline text-[13.5px] font-medium transition-colors mb-px hover:bg-e-bg3 hover:text-e-tx">Game Engine Resources</a>
      <a href="#" className="nav-link flex items-center gap-[9px] px-2.5 py-[7px] rounded-lg text-e-mu no-underline text-[13.5px] font-medium transition-colors mb-px hover:bg-e-bg3 hover:text-e-tx">2D Engine Architecture</a>
      <a href="#" className="nav-link flex items-center gap-[9px] px-2.5 py-[7px] rounded-lg text-e-mu no-underline text-[13.5px] font-medium transition-colors mb-px hover:bg-e-bg3 hover:text-e-tx">16ms Frame Budget</a>
    </div>

    <div className="px-5 pt-[18px] pb-1">
      <div className="font-mono text-[10px] tracking-[.1em] uppercase text-e-dim mb-2">Part I — Fundamentals</div>
      <NavLink href="#what-is-it" icon="🧠" text="What is a Game Engine?" activeId={activeId} />
      <NavLink href="#components" icon="🔩" text="Core Components" activeId={activeId} />
      <NavLink href="#where-start" icon="🚀" text="How to Start" activeId={activeId} />
      <NavLink href="#how-test" icon="🧪" text="Testing Systems" activeId={activeId} />
    </div>

    <div className="px-5 pt-[18px] pb-1">
      <div className="font-mono text-[10px] tracking-[.1em] uppercase text-e-dim mb-2">Part II — Architecture</div>
      <NavLink href="#rules" icon="⚖️" text="3 Ironclad Rules" activeId={activeId} />
      <NavLink href="#arch" icon="🏗️" text="5-Tier Architecture" activeId={activeId} />
      <NavLink href="#loop" icon="🔄" text="The Game Loop" activeId={activeId} />
      <NavLink href="#pipelines" icon="🎨" text="Core Pipelines" activeId={activeId} />
      <NavLink href="#budget" icon="⏱️" text="16ms Frame Budget" activeId={activeId} />
      <NavLink href="#roadmap" icon="🗺️" text="MVP Roadmap" activeId={activeId} />
      <NavLink href="#techstack" icon="📦" text="Tech Stack Matrix" activeId={activeId} />
    </div>

    <div className="px-5 pt-[18px] pb-1">
      <div className="font-mono text-[10px] tracking-[.1em] uppercase text-e-dim mb-2">Part III — Team Concerns</div>
      <NavLink href="#c-graphicsapi" icon="🖥️" text="Graphics API" badge activeId={activeId} />
      <NavLink href="#c-threading" icon="🧵" text="Multithreading" badge activeId={activeId} />
      <NavLink href="#c-layering" icon="🗂️" text="Layering" badge activeId={activeId} />
      <NavLink href="#c-gc" icon="♻️" text="Garbage Collectors" badge activeId={activeId} />
      <NavLink href="#c-shaders" icon="✨" text="Shaders" badge activeId={activeId} />
    </div>

    <div className="px-5 pt-[18px] pb-1">
      <div className="font-mono text-[10px] tracking-[.1em] uppercase text-e-dim mb-2">Reference</div>
      <NavLink href="#adr" icon="📋" text="Decision Log" activeId={activeId} />
      <NavLink href="#glossary" icon="📖" text="Glossary" activeId={activeId} />
    </div>

    <div className="mt-auto px-5 py-4 border-t border-e-bd font-mono text-[10px] text-e-dim">
      engine_notes.v2.jsx — rev 2<br />28 weeks · 5 phases · 5 concerns
    </div>
  </aside>
);

