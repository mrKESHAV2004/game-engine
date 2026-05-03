// ==========================================
// NAVIGATION / SIDEBAR
// ==========================================

const NavLink = ({ href, icon, text, badge, activeId }) => {
  const id = href.substring(1);
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

export const Sidebar = ({ activeId }) => (
  <aside id="sidebar" className="w-[260px] min-h-screen bg-e-bg2 border-r border-e-bd fixed top-[60px] left-0 flex flex-col z-[100] overflow-y-auto hidden md:flex">

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


export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[60px] bg-e-bg2/80 backdrop-blur-sm border-b border-e-bd z-[200] flex items-center justify-between px-6">
      {/* Left: Terminal Dots + Brand */}
      <div className="flex items-center gap-4">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_4px_#ff5f57]"></span>
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_4px_#ffbd2e]"></span>
          <span className="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_4px_#28c840]"></span>
        </div>

        <div className="h-4 w-px bg-e-bd"></div>

        <div>
          <span className="font-mono text-[10px] text-e-teal tracking-[.12em] uppercase">Dev Field Notes</span>
          <h1 className="font-serif text-[15px] font-bold text-e-tx leading-none lavishly-yours-regular">2D Game Engine</h1>
        </div>
      </div>

      {/* Center: Nav Links */}
      <div className="flex items-center gap-1.5">
        <a
          href="/"
          className="px-3 py-1.5 rounded-md text-e-mu text-[13px] font-medium hover:bg-e-bg3 hover:text-e-tx transition-colors"
        >
          Fundamentals
        </a>
        <a
          href="/resources"
          className="px-3 py-1.5 rounded-md text-e-mu text-[13px] font-medium hover:bg-e-bg3 hover:text-e-tx transition-colors"
        >
          Resources
        </a>
        <a
          href="/documents"
          className="px-3 py-1.5 rounded-md text-e-mu text-[13px] font-medium hover:bg-e-bg3 hover:text-e-tx transition-colors"
        >
          Documents
        </a>
      </div>

      {/* Right: Meta Info */}
      <div className="font-mono text-[10px] text-e-dim">
        rev 2 · 28 weeks
      </div>
    </nav>
  );
}
