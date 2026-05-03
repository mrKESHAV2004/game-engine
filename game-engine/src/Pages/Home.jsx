import {
  SectionHeader, SubHeading, CodeBlock, Callout,InlineCode,Token,Table,TableHead,TableRow,TableCell,FeatureCard,Badge,ArrowList, ArrowListItem,Paragraph,CheckListItem
} from '../components/GlobalComponents';
import { Sidebar } from '../components/Navbar';

export default function Home() {
  return (
    <>
    <Sidebar/>
    <div className="bg-e-bg text-e-tx font-sans text-[15px] leading-[1.7] flex min-h-screen overflow-x-hidden scroll-smooth">
      {/* Global Custom CSS preserving the pseudo elements and scrollbars */}
      <style>{`
        ::-webkit-scrollbar       { width:6px; }
        ::-webkit-scrollbar-track { background:#0c0e14; }
        ::-webkit-scrollbar-thumb { background:#2e3447; border-radius:3px; }
        .hero-glow::before {
          content:''; position:absolute; inset:0; pointer-events:none;
          background:radial-gradient(ellipse 60% 80% at 80% 50%,rgba(108,138,255,.08) 0%,transparent 70%);
        }
        .pipe-step + .pipe-step::before {
          content:'→'; position:absolute; left:0; top:50%;
          transform:translate(-50%,-50%);
          color:#3d4460; font-size:14px; z-index:1;
        }
      `}</style>

      <main id="main" className="md:ml-[260px] flex-1 min-w-0">
        
        {/* Hero */}
        <div className="hero-glow bg-e-bg2 border-b border-e-bd px-8 md:px-14 pt-14 pb-12 relative overflow-hidden">
          <div className="font-mono text-[11px] tracking-[.12em] uppercase text-e-teal inline-flex items-center gap-2 bg-e-teal-b border border-e-teal-d px-3 py-1 rounded-full mb-5">
            ⚙ Complete Field Notes — Rev 2
          </div>
          <h1 className="font-serif font-bold leading-[1.1] text-white mb-3" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Building a <em className="not-italic text-e-indigo petit-formal-script-regular">2D Game Engine</em><br />From Zero to Production
          </h1>
          <Paragraph className="max-w-[560px] mb-8">
            Fundamental concepts, strict architecture blueprints, team concern deep-dives, and a 28-week delivery plan — everything a developer needs on one page.
          </Paragraph>
          <div className="flex flex-wrap gap-5 font-mono text-[11px] text-e-dim">
            <span className="flex items-center gap-1.5">📁 <b className="text-e-mu">engine_notes.jsx</b></span>
            <span className="flex items-center gap-1.5">📐 <b className="text-e-mu">5-tier architecture</b></span>
            <span className="flex items-center gap-1.5">🚩 <b className="text-e-mu">5 team concerns annotated</b></span>
            <span className="flex items-center gap-1.5">⏰ <b className="text-e-mu">28-week roadmap</b></span>
            <span className="flex items-center gap-1.5">🔧 <b className="text-e-mu">7 language stacks</b></span>
          </div>
        </div>

        {/* Concern Strip */}
        <div className="bg-e-amber-b border-b border-[#3d2700] px-8 md:px-14 py-[10px] flex items-center gap-3.5 flex-wrap">
          <span className="font-mono text-[10px] tracking-[.1em] uppercase text-e-amber shrink-0">⚠ Team concerns flagged throughout:</span>
          <span className="text-xs font-semibold text-e-amber bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.3)] px-3 py-0.5 rounded-full">Graphics API</span>
          <span className="text-xs font-semibold text-e-amber bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.3)] px-3 py-0.5 rounded-full">Multithreading</span>
          <span className="text-xs font-semibold text-e-amber bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.3)] px-3 py-0.5 rounded-full">Layering</span>
          <span className="text-xs font-semibold text-e-amber bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.3)] px-3 py-0.5 rounded-full">Garbage Collectors</span>
          <span className="text-xs font-semibold text-e-amber bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.3)] px-3 py-0.5 rounded-full">Shaders</span>
        </div>

        <div className="px-8 md:px-14 pb-20 pt-[60px]">

          {/* §1.1 What is a Game Engine */}
          <section className="mb-16">
            <SectionHeader id="what-is-it" sectionNumber="§ 1.1" titleText="What is a" highlightText="Game Engine?" />
            <Paragraph>
              At its core, a game engine is a <strong className="text-e-tx font-semibold">strict hardware abstraction layer</strong>. Its single job is to isolate pure game logic from the volatile, platform-specific demands of the Operating System (OS) and Graphics Processing Unit (GPU).
            </Paragraph>
            <Paragraph>
              Instead of writing code that talks directly to Windows, macOS, or a specific graphics card, game developers write "Game Code" — like making a character jump. The engine translates that jump into the complex math and hardware instructions needed to update physics and render pixels. It removes magic and provides a predictable, data-oriented environment running in a tightly controlled loop.
            </Paragraph>

            <Callout type="info" label="Key insight">
              <strong className="text-e-tx">The engine is not the game.</strong> The engine is the operating system your game runs on top of. Every decision you make building the engine will constrain — or liberate — the game teams that use it for years.
            </Callout>

            <SubHeading>The Mental Model</SubHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              <FeatureCard icon="🎮" iconBg="bg-e-indigo-b" borderTopColor="border-t-e-indigo" title="Game Code" description="The logic unique to your game: character stats, level design, dialogue. This should be 100% portable — it never calls OpenGL or reads raw keyboard state directly." />
              <FeatureCard icon="⚙️" iconBg="bg-e-teal-b" borderTopColor="border-t-e-teal" title="Engine Layer" description="The reusable machinery: renderer, physics, audio, ECS, asset manager. Platform-agnostic. The engine translates game intent into hardware commands." />
              <FeatureCard icon="🖥️" iconBg="bg-e-amber-b" borderTopColor="border-t-e-amber" title="OS / Hardware" description="The actual machine: GPU drivers, OS windowing, file system, audio device. The engine isolates all game code from this volatile, vendor-specific layer." />
            </div>
          </section>

          {/* §1.2 Core Components */}
          <section className="mb-16">
            <SectionHeader id="components" sectionNumber="§ 1.2" titleText="Core" highlightText="Components" />
            <Paragraph>
              An engine is broken into specific subsystems, each handling a different hardware responsibility. Every subsystem is a contained module with a well-defined interface to the rest of the engine.
            </Paragraph>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <FeatureCard icon="🖼️" iconBg="bg-e-indigo-b" borderTopColor="border-t-e-indigo" title="Renderer Pipeline" description="Collects draw calls from ECS systems, sorts by layer and texture, batches sprites sharing an atlas into single GPU draw calls, executes shaders, swaps framebuffer. Sprite batching is the single highest-leverage optimisation in 2D.">
                <Badge type="indigo">OpenGL</Badge>
                <Badge type="indigo">Vulkan</Badge>
                <Badge type="default">Texture Atlas</Badge>
                <Badge type="default">Z-sorting</Badge>
              </FeatureCard>
              <FeatureCard icon="🔩" iconBg="bg-e-teal-b" borderTopColor="border-t-e-teal" title="ECS — Entity-Component-System" description="Entities are numeric IDs. Components are plain data structs stored in contiguous arrays. Systems iterate matching arrays — no virtual dispatch, no OOP inheritance, cache-friendly by construction.">
                <Badge type="teal">EnTT</Badge>
                <Badge type="teal">flecs</Badge>
                <Badge type="default">Sparse-set</Badge>
                <Badge type="default">Archetype</Badge>
              </FeatureCard>
              <FeatureCard icon="🧲" iconBg="bg-e-purple-b" borderTopColor="border-t-e-purple" title="Physics Engine" description="Broadphase (spatial hash) quickly rules out impossible collisions. Narrowphase (SAT/GJK) tests candidate pairs precisely. Impulse resolution applies corrective forces. Trigger sensors fire events without blocking movement.">
                <Badge type="purple">Box2D</Badge>
                <Badge type="purple">rapier2d</Badge>
                <Badge type="default">SAT</Badge>
                <Badge type="default">GJK</Badge>
              </FeatureCard>
              <FeatureCard icon="📦" iconBg="bg-e-amber-b" borderTopColor="border-t-e-amber" title="Asset Manager" description="Handle-based loader: request returns an opaque handle immediately; loading is async. A cache map prevents duplicate decodes. Reference counting drives eviction — assets unload when no handle remains.">
                <Badge type="amber">stb_image</Badge>
                <Badge type="amber">Hot reload</Badge>
                <Badge type="default">Ref-count</Badge>
              </FeatureCard>
              <FeatureCard icon="🎮" iconBg="bg-e-green-b" borderTopColor="border-t-e-green" title="Input System" description="OS events polled once per real frame into a platform-agnostic state map. Action mapping layer binds logical actions (Jump, Fire) to physical buttons — enabling remapping without touching game code.">
                <Badge type="green">SDL3</Badge>
                <Badge type="default">Action map</Badge>
                <Badge type="default">Input buffer</Badge>
              </FeatureCard>
              <FeatureCard icon="🔊" iconBg="bg-[#1f0a18]" borderTopColor="border-t-e-pink" title="Audio Engine" description="Sound emitters pass through spatial processing (distance attenuation, panning). SFX, music, and voice hit separate mixer channels. Both paths merge at master mixer before the audio device.">
                <Badge type="pink">miniaudio</Badge>
                <Badge type="default">OpenAL</Badge>
                <Badge type="default">Positional</Badge>
              </FeatureCard>
              <FeatureCard icon="📡" iconBg="bg-e-red-b" borderTopColor="border-t-e-red" title="Event Bus" description="Typed event structs. Publishers emit; subscribers register by event type. Dispatch deferred to end-of-tick to prevent re-entrant mutation during system iteration. Zero coupling between producers and consumers.">
                <Badge type="red">Pub/sub</Badge>
                <Badge type="default">Deferred</Badge>
                <Badge type="default">Typed events</Badge>
              </FeatureCard>
              <FeatureCard icon="🗺️" iconBg="bg-e-indigo-b" borderTopColor="border-t-e-indigo" title="Scene Manager" description="Named scene registry with async loading. Stacked scenes let a pause menu overlay gameplay without unloading it. Transition hooks (fade, cut) allow smooth scene changes. OnEnter/OnExit lifecycle events per scene.">
                <Badge type="indigo">Stack</Badge>
                <Badge type="indigo">Async load</Badge>
                <Badge type="default">Transitions</Badge>
              </FeatureCard>
            </div>
          </section>

          {/* §1.3 How to Start */}
          <section className="mb-16">
            <SectionHeader id="where-start" sectionNumber="§ 1.3" titleText="How to" highlightText="Start" />
            <Paragraph>
              The golden rule: <strong className="text-e-tx font-semibold">Build the loop first. Draw a sprite. Ship something playable before writing a single line of editor code.</strong> Do not start with the ECS or a physics engine.
            </Paragraph>

            <Callout type="success" label="The Skeleton rule">
              The first milestone is exactly this — a window opens, a sprite appears, WASD moves it, the window does not crash. Everything else is Phase 2 or later.
            </Callout>

            <SubHeading>Build order</SubHeading>
            <Table>
              <TableHead headers={['#', 'Step', "What you're proving", 'Library / tool']} />
              <tbody>
                <TableRow>
                  <TableCell highlight="text-e-indigo">1</TableCell>
                  <TableCell><strong className="text-e-tx">Window + GL context</strong></TableCell>
                  <TableCell>OS integration, graphics context creation, clear loop</TableCell>
                  <TableCell><InlineCode>SDL3</InlineCode> / <InlineCode>GLFW</InlineCode></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell highlight="text-e-indigo">2</TableCell>
                  <TableCell><strong className="text-e-tx">Fixed-timestep game loop</strong></TableCell>
                  <TableCell>Real-time loop, accumulator, fps logging, spiral-of-death cap</TableCell>
                  <TableCell><InlineCode>std::chrono</InlineCode></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell highlight="text-e-indigo">3</TableCell>
                  <TableCell><strong className="text-e-tx">Keyboard + mouse polling</strong></TableCell>
                  <TableCell>Input abstraction, IsDown/IsPressed edges, once-per-frame</TableCell>
                  <TableCell><InlineCode>SDL_Event</InlineCode></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell highlight="text-e-indigo">4</TableCell>
                  <TableCell><strong className="text-e-tx">Single sprite on screen</strong></TableCell>
                  <TableCell>PNG loading, texture upload, UV mapping, textured quad draw</TableCell>
                  <TableCell><InlineCode>stb_image</InlineCode> + OpenGL</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell highlight="text-e-teal">5</TableCell>
                  <TableCell><strong className="text-e-tx">Sprite batching</strong></TableCell>
                  <TableCell>Atlas packing, group-by-texture, single draw call per atlas</TableCell>
                  <TableCell>Custom + <InlineCode>RenderDoc</InlineCode></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell highlight="text-e-teal">6</TableCell>
                  <TableCell><strong className="text-e-tx">AABB collisions</strong></TableCell>
                  <TableCell>Broadphase, collision callback, trigger sensors</TableCell>
                  <TableCell>Custom AABB</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell highlight="text-e-teal">7</TableCell>
                  <TableCell><strong className="text-e-tx">Handle-based asset cache</strong></TableCell>
                  <TableCell>Ref-counting, load-once, hot path has no malloc</TableCell>
                  <TableCell>Custom handles</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell highlight="text-e-purple">8</TableCell>
                  <TableCell><strong className="text-e-tx">EnTT ECS refactor</strong></TableCell>
                  <TableCell>Sparse-set storage, query iteration, system scheduling</TableCell>
                  <TableCell><InlineCode>EnTT</InlineCode></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell highlight="text-e-purple">9</TableCell>
                  <TableCell><strong className="text-e-tx">Box2D physics integration</strong></TableCell>
                  <TableCell>Rigid body, constraints, wrapped behind PhysicsBody component</TableCell>
                  <TableCell><InlineCode>Box2D 2.4</InlineCode></TableCell>
                </TableRow>
              </tbody>
            </Table>

            <CodeBlock langLeft="C++ — pseudocode" langRight="Minimal fixed-timestep skeleton">
              <Token type="keyword">const</Token> <Token type="type">double</Token> <Token type="plain">FIXED_DT</Token> <Token type="operator">=</Token> <Token type="number">1.0</Token> <Token type="operator">/</Token> <Token type="number">60.0</Token>;{"\n"}
              <Token type="type">double</Token> <Token type="plain">accumulator</Token>  <Token type="operator">=</Token> <Token type="number">0.0</Token>;{"\n"}
              <Token type="type">double</Token> <Token type="plain">previous_time</Token> <Token type="operator">=</Token> <Token type="function">now</Token>();{"\n\n"}
              <Token type="keyword">while</Token> (<Token type="plain">running</Token>) {"{"}{"\n"}
              {"  "}<Token type="type">double</Token> <Token type="plain">frame_time</Token> <Token type="operator">=</Token> <Token type="function">min</Token>(<Token type="function">now</Token>() - <Token type="plain">previous_time</Token>, <Token type="number">0.25</Token>);  <Token type="comment">// cap: no spiral</Token>{"\n"}
              {"  "}<Token type="plain">previous_time</Token> <Token type="operator">=</Token> <Token type="function">now</Token>();{"\n"}
              {"  "}<Token type="plain">accumulator</Token> <Token type="operator">+=</Token> <Token type="plain">frame_time</Token>;{"\n"}
              {"  "}<Token type="plain">input</Token>.<Token type="function">poll</Token>();                         <Token type="comment">// once per real frame</Token>{"\n"}
              {"  "}<Token type="keyword">while</Token> (<Token type="plain">accumulator</Token> <Token type="operator">&gt;=</Token> <Token type="plain">FIXED_DT</Token>) {"{"}{"\n"}
              {"    "}<Token type="plain">physics</Token>.<Token type="function">step</Token>(<Token type="plain">FIXED_DT</Token>);{"\n"}
              {"    "}<Token type="plain">ecs</Token>.<Token type="function">update_systems</Token>(<Token type="plain">FIXED_DT</Token>);{"\n"}
              {"    "}<Token type="plain">accumulator</Token> <Token type="operator">-=</Token> <Token type="plain">FIXED_DT</Token>;{"\n"}
              {"  "}{"}"}{"\n"}
              {"  "}<Token type="keyword">const</Token> <Token type="type">double</Token> <Token type="plain">alpha</Token> <Token type="operator">=</Token> <Token type="plain">accumulator</Token> <Token type="operator">/</Token> <Token type="plain">FIXED_DT</Token>;  <Token type="comment">// interpolation factor</Token>{"\n"}
              {"  "}<Token type="plain">renderer</Token>.<Token type="function">draw</Token>(<Token type="plain">alpha</Token>);{"\n"}
              {"}"}
            </CodeBlock>
          </section>

          {/* §1.4 Testing */}
          <section className="mb-16">
            <SectionHeader id="how-test" sectionNumber="§ 1.4" titleText="Testing" highlightText="Each System" />
            <Paragraph>
              Early-stage engine testing is visual. You rely on console logging, colour-coded overlays, and failure modes that are unmistakable.
            </Paragraph>

            <div className="flex flex-col gap-3">
              <div className="bg-e-bg2 border border-e-bd rounded-2xl px-5 py-[18px] flex gap-4 items-start">
                <div className="w-[38px] h-[38px] rounded-lg flex items-center justify-center text-[18px] shrink-0 bg-e-indigo-b">🪟</div>
                <div><h4 className="text-sm font-bold text-e-tx mb-1.5">Testing the Window & Platform Layer</h4><p className="text-[13px] text-e-mu leading-[1.6] m-0">Open the window. Change the clear colour from code (<InlineCode>glClearColor(r, g, b, 1)</InlineCode>). If the window opens without crash and the colour changes, the platform layer is functional. Try resizing — does the viewport update? Try closing — does it exit cleanly?</p></div>
              </div>
              <div className="bg-e-bg2 border border-e-bd rounded-2xl px-5 py-[18px] flex gap-4 items-start">
                <div className="w-[38px] h-[38px] rounded-lg flex items-center justify-center text-[18px] shrink-0 bg-e-teal-b">⏱️</div>
                <div><h4 className="text-sm font-bold text-e-tx mb-1.5">Testing the Game Loop</h4><p className="text-[13px] text-e-mu leading-[1.6] m-0">Move your single sprite using <InlineCode>pos.x += vel * fixed_dt</InlineCode>. Then intentionally call <InlineCode>sleep(1000ms)</InlineCode> for one second. If the game crashes trying to execute 60 backed-up physics ticks, your loop is broken — add the 250ms cap. Speed should be identical at 30fps and 144fps.</p></div>
              </div>
              <div className="bg-e-bg2 border border-e-bd rounded-2xl px-5 py-[18px] flex gap-4 items-start">
                <div className="w-[38px] h-[38px] rounded-lg flex items-center justify-center text-[18px] shrink-0 bg-e-purple-b">⌨️</div>
                <div><h4 className="text-sm font-bold text-e-tx mb-1.5">Testing Input</h4><p className="text-[13px] text-e-mu leading-[1.6] m-0">Map WASD to sprite XY movement. Verify <strong className="text-e-tx">IsPressed()</strong> only fires on the first frame of a keypress. Verify <strong className="text-e-tx">IsReleased()</strong> fires exactly once. Log input events to console for the first week — you'll catch subtle bugs that are impossible to see otherwise.</p></div>
              </div>
              <div className="bg-e-bg2 border border-e-bd rounded-2xl px-5 py-[18px] flex gap-4 items-start">
                <div className="w-[38px] h-[38px] rounded-lg flex items-center justify-center text-[18px] shrink-0 bg-e-amber-b">🎨</div>
                <div><h4 className="text-sm font-bold text-e-tx mb-1.5">Testing the Renderer / Sprite Batching</h4><p className="text-[13px] text-e-mu leading-[1.6] m-0">Open <strong className="text-e-tx">RenderDoc</strong> and capture a frame. Count the draw calls. If you have 200 sprites using the same atlas and see 200 draw calls, batching is broken. Correctly batched: exactly 1 draw call per unique atlas. This is your renderer's primary correctness test.</p></div>
              </div>
              <div className="bg-e-bg2 border border-e-bd rounded-2xl px-5 py-[18px] flex gap-4 items-start">
                <div className="w-[38px] h-[38px] rounded-lg flex items-center justify-center text-[18px] shrink-0 bg-e-red-b">🧱</div>
                <div><h4 className="text-sm font-bold text-e-tx mb-1.5">Testing Physics & Collisions</h4><p className="text-[13px] text-e-mu leading-[1.6] m-0">Write a <strong className="text-e-tx">debug renderer</strong> that draws wireframe AABB boxes over every collider. Boxes turn <span className="text-e-red">red</span> on intersection, <span className="text-e-green">green</span> when clear. Fire <InlineCode>OnCollision</InlineCode> and log to console. This visual test will save you weeks of debugging invisible collision bugs.</p></div>
              </div>
              <div className="bg-e-bg2 border border-e-bd rounded-2xl px-5 py-[18px] flex gap-4 items-start">
                <div className="w-[38px] h-[38px] rounded-lg flex items-center justify-center text-[18px] shrink-0 bg-e-green-b">📦</div>
                <div><h4 className="text-sm font-bold text-e-tx mb-1.5">Testing the Asset Manager</h4><p className="text-[13px] text-e-mu leading-[1.6] m-0">Request the same texture handle twice. Verify the file is opened only once. Drop one handle — asset stays loaded. Drop both — asset evicts. Run with <InlineCode>AddressSanitizer</InlineCode> — any double-free in your ref-counting will surface immediately.</p></div>
              </div>
            </div>
          </section>

          {/* §2.1 Ironclad Rules */}
          <section className="mb-16">
            <SectionHeader id="rules" sectionNumber="§ 2.1" titleText="The 3" highlightText="Ironclad Rules" />
            <Paragraph>
              These rules are not suggestions. Every system in your engine must satisfy all three. Violating any one will eventually force a full architectural rewrite.
            </Paragraph>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              <div className="bg-e-bg2 border border-e-bd border-t-2 border-t-e-indigo rounded-2xl p-5">
                <div className="font-mono text-[32px] font-bold text-e-indigo opacity-40 mb-2.5">01</div>
                <h4 className="text-sm font-semibold text-e-tx mb-1.5">Strict Isolation</h4>
                <p className="text-[13px] leading-[1.6] text-e-mu m-0">Layers only speak to the layer directly below. Game code never calls the GPU or reads raw hardware input. The renderer never reads from the ECS directly.</p>
              </div>
              <div className="bg-e-bg2 border border-e-bd border-t-2 border-t-e-teal rounded-2xl p-5">
                <div className="font-mono text-[32px] font-bold text-e-teal opacity-40 mb-2.5">02</div>
                <h4 className="text-sm font-semibold text-e-tx mb-1.5">Explicit Over Implicit</h4>
                <p className="text-[13px] leading-[1.6] text-e-mu m-0">No magic. If a system runs, it must be visible in the scheduler. Implicit dependencies cause frame-order bugs that only appear on specific hardware at specific frame rates.</p>
              </div>
              <div className="bg-e-bg2 border border-e-bd border-t-2 border-t-e-purple rounded-2xl p-5">
                <div className="font-mono text-[32px] font-bold text-e-purple opacity-40 mb-2.5">03</div>
                <h4 className="text-sm font-semibold text-e-tx mb-1.5">Data-Oriented Design</h4>
                <p className="text-[13px] leading-[1.6] text-e-mu m-0">Components are plain data structs — no virtual methods, no inheritance. Systems iterate contiguous arrays. A CPU cache line is 64 bytes: keep it hot.</p>
              </div>
            </div>
          </section>

          {/* §2.2 Architecture */}
          <section className="mb-16">
            <SectionHeader id="arch" sectionNumber="§ 2.2" titleText="5-Tier" highlightText="Architecture" />
            <Paragraph>
              Dependencies flow strictly downwards. A module may call into the layer below it. It may <em>never</em> call into the layer above it — only emit events through the event bus that upper layers subscribe to.
            </Paragraph>

            <div className="flex flex-col gap-[3px] my-6">
              <div className="flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden border border-e-bd2 hover:translate-x-1 transition-transform">
                <div className="md:w-40 shrink-0 flex items-center justify-center text-center text-xs font-bold py-[14px] px-3 text-white bg-e-purple">Game Code</div>
                <div className="flex-1 bg-e-bg3 flex items-center px-[18px] py-3 text-[13px] text-e-mu md:border-l border-e-bd2">Scenes · Entities · Scripts · Game state · UI logic · Level data</div>
              </div>
              <div className="text-center text-e-dim text-xs py-0.5 font-mono">↓ depends on</div>
              <div className="flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden border border-e-bd2 hover:translate-x-1 transition-transform">
                <div className="md:w-40 shrink-0 flex items-center justify-center text-center text-xs font-bold py-[14px] px-3 text-white bg-e-teal-d">ECS / Scene</div>
                <div className="flex-1 bg-e-bg3 flex items-center px-[18px] py-3 text-[13px] text-e-mu md:border-l border-e-bd2">Entity registry · Component pools · System scheduler · Scene graph · Scene manager</div>
              </div>
              <div className="text-center text-e-dim text-xs py-0.5 font-mono">↓ depends on</div>
              <div className="flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden border border-e-bd2 hover:translate-x-1 transition-transform">
                <div className="md:w-40 shrink-0 flex items-center justify-center text-center text-xs font-bold py-[14px] px-3 text-white bg-e-indigo-d">Core Systems</div>
                <div className="flex-1 bg-e-bg3 flex items-center px-[18px] py-3 text-[13px] text-e-mu md:border-l border-e-bd2">Renderer · Physics · Input · Audio · Asset manager · Event bus · Animation</div>
              </div>
              <div className="text-center text-e-dim text-xs py-0.5 font-mono">↓ depends on</div>
              <div className="flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden border border-e-bd2 hover:translate-x-1 transition-transform">
                <div className="md:w-40 shrink-0 flex items-center justify-center text-center text-xs font-bold py-[14px] px-3 text-white bg-e-amber">Platform Layer</div>
                <div className="flex-1 bg-e-bg3 flex items-center px-[18px] py-3 text-[13px] text-e-mu md:border-l border-e-bd2">Window context · File I/O · Timer / clock · Threading primitives · OS APIs</div>
              </div>
              <div className="text-center text-e-dim text-xs py-0.5 font-mono">↓ depends on</div>
              <div className="flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden border border-e-bd2 hover:translate-x-1 transition-transform">
                <div className="md:w-40 shrink-0 flex items-center justify-center text-center text-xs font-bold py-[14px] px-3 text-white bg-e-dim">OS / Hardware</div>
                <div className="flex-1 bg-e-bg3 flex items-center px-[18px] py-3 text-[13px] text-e-mu md:border-l border-e-bd2">OpenGL · Vulkan · Metal · WebGPU · GPU driver · OS file system · Audio device</div>
              </div>
            </div>

            <Callout type="warning" label="⚠ Team concern — Layering">
              "How do we prevent every system from depending on every other system? We've seen spaghetti in past projects." — See <a href="#c-layering" className="text-e-amber underline">§ 4.3 for full mitigation.</a>
            </Callout>

            <SubHeading>Enforcement mechanisms</SubHeading>
            <ArrowList>
              <ArrowListItem><strong className="text-e-tx">CMake library targets</strong> — Each layer is a separate CMake target. Cross-layer includes that violate the dependency direction fail to link. No compiler warnings: build failures.</ArrowListItem>
              <ArrowListItem><strong className="text-e-tx">Forward declarations</strong> — Never include a higher-layer header from a lower-layer module. Use forward declarations at every boundary.</ArrowListItem>
              <ArrowListItem><strong className="text-e-tx">Event bus as upward channel</strong> — The only way a lower layer communicates upward is by emitting a typed event. Upper layers subscribe. No direct calls upward ever.</ArrowListItem>
              <ArrowListItem><strong className="text-e-tx">Dependency graph review</strong> — Run <InlineCode>cmake --graphviz=deps.dot</InlineCode> quarterly. Flag any cycles immediately.</ArrowListItem>
            </ArrowList>
          </section>

          {/* §2.3 Game Loop */}
          <section className="mb-16">
            <SectionHeader id="loop" sectionNumber="§ 2.3" titleText="The Fixed-Timestep" highlightText="Game Loop" />
            <Paragraph>
              The game loop is the heartbeat. A deterministic simulation requires a <strong className="text-e-tx font-semibold">fixed timestep</strong>, while rendering runs at a variable rate. The accumulator pattern solves this by separating the two.
            </Paragraph>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-6">
              <div className="bg-e-bg2 border border-e-bd rounded-2xl p-5">
                <h4 className="text-sm font-semibold text-e-teal mb-1.5">✓ Fixed-rate update path</h4>
                <p className="text-[13px] leading-[1.6] text-e-mu m-0">Physics and game logic run exactly at <InlineCode>FIXED_DT = 1/60s</InlineCode>. This guarantees determinism: the same input always produces the same output. Essential for replays, networking, and physics stability.</p>
              </div>
              <div className="bg-e-bg2 border border-e-bd rounded-2xl p-5">
                <h4 className="text-sm font-semibold text-e-indigo mb-1.5">✓ Variable-rate render path</h4>
                <p className="text-[13px] leading-[1.6] text-e-mu m-0">Rendering runs as fast as the GPU allows. The <InlineCode>alpha</InlineCode> factor (remainder / fixed_dt) linearly interpolates object positions between physics ticks, eliminating visual jitter on high-refresh monitors.</p>
              </div>
            </div>

            <SubHeading>System execution order within each fixed tick</SubHeading>
            <Table>
              <TableHead headers={['Step', 'System', 'Why this order']} />
              <tbody>
                <TableRow>
                  <TableCell highlight="text-e-indigo">1</TableCell>
                  <TableCell><strong className="text-e-tx">Input poll</strong></TableCell>
                  <TableCell>Must be first — all downstream systems read from this frame's input snapshot</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell highlight="text-e-indigo">2</TableCell>
                  <TableCell><strong className="text-e-tx">Physics step</strong></TableCell>
                  <TableCell>Physics must see this frame's input before game logic does</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell highlight="text-e-teal">3</TableCell>
                  <TableCell><strong className="text-e-tx">Game logic / ECS</strong></TableCell>
                  <TableCell>Reads physics results; applies game rules, AI, cooldowns</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell highlight="text-e-teal">4</TableCell>
                  <TableCell><strong className="text-e-tx">Animation update</strong></TableCell>
                  <TableCell>Reads final transform; advances sprite frames, fires timeline events</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell highlight="text-e-purple">5</TableCell>
                  <TableCell><strong className="text-e-tx">Event dispatch</strong></TableCell>
                  <TableCell>Flushed after all systems — prevents re-entrant mutation during iteration</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell highlight="text-e-purple">6</TableCell>
                  <TableCell><strong className="text-e-tx">Camera update</strong></TableCell>
                  <TableCell>Follows targets after they've moved; camera lag needs final positions</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell highlight="text-e-amber">7</TableCell>
                  <TableCell><strong className="text-e-tx">Render (free-rate)</strong></TableCell>
                  <TableCell>Outside the fixed loop — uses interpolated positions, submits to GPU</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <SubHeading>Common pitfalls</SubHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="bg-e-bg2 border border-e-bd border-t-2 border-t-e-red rounded-2xl p-5">
                <h4 className="text-sm font-semibold text-e-tx mb-1.5">Spiral of Death</h4>
                <p className="text-[13px] leading-[1.6] text-e-mu m-0">If each physics tick takes longer than <InlineCode>FIXED_DT</InlineCode>, the accumulator grows faster than it drains. Fix: cap <InlineCode>frame_time = min(frame_time, 0.25)</InlineCode>.</p>
              </div>
              <div className="bg-e-bg2 border border-e-bd border-t-2 border-t-e-red rounded-2xl p-5">
                <h4 className="text-sm font-semibold text-e-tx mb-1.5">Missing dt Multiply</h4>
                <p className="text-[13px] leading-[1.6] text-e-mu m-0">Any velocity applied without multiplying by <InlineCode>dt</InlineCode> becomes frame-rate dependent. At 120fps the game runs 2x faster than at 60fps.</p>
              </div>
              <div className="bg-e-bg2 border border-e-bd border-t-2 border-t-e-amber rounded-2xl p-5">
                <h4 className="text-sm font-semibold text-e-tx mb-1.5">Rendering Physics Positions Directly</h4>
                <p className="text-[13px] leading-[1.6] text-e-mu m-0">Without interpolation, objects jitter visibly when render rate differs from physics rate. Always: <InlineCode>render_pos = prev + (curr - prev) * alpha</InlineCode>.</p>
              </div>
              <div className="bg-e-bg2 border border-e-bd border-t-2 border-t-e-amber rounded-2xl p-5">
                <h4 className="text-sm font-semibold text-e-tx mb-1.5">Reading Input Inside Systems</h4>
                <p className="text-[13px] leading-[1.6] text-e-mu m-0">If two physics ticks fire in one real frame, they must see the <em>same</em> input state. Poll input exactly once per real frame, before the fixed loop begins.</p>
              </div>
            </div>
          </section>

          {/* §2.4 Pipelines */}
          <section className="mb-16">
            <SectionHeader id="pipelines" sectionNumber="§ 2.4" titleText="Core" highlightText="Pipelines" />
            
            <SubHeading className="!mt-0">Renderer pipeline — Data compression</SubHeading>
            <Paragraph>
              <strong className="text-e-tx font-semibold">The golden rule: a texture bind is a draw call break.</strong> One texture atlas = one draw call for every sprite it contains. Batch counts dictate 2D performance, not polygon counts.
            </Paragraph>

            <div className="flex flex-col md:flex-row items-stretch bg-e-bg3 border border-e-bd2 rounded-2xl overflow-hidden my-5">
              <div className="flex-1 py-4 px-3 text-center relative bg-[rgba(108,138,255,0.08)]"><div className="font-bold text-[13px] text-e-tx mb-1">Collect</div><div className="text-e-dim text-[11px]">Draw calls from ECS</div></div>
              <div className="flex-1 py-4 px-3 text-center relative bg-[rgba(167,139,250,0.08)] pipe-step"><div className="font-bold text-[13px] text-e-tx mb-1">Sort</div><div className="text-e-dim text-[11px]">Layer → Shader → Texture</div></div>
              <div className="flex-1 py-4 px-3 text-center relative bg-[rgba(45,212,191,0.12)] pipe-step"><div className="font-bold text-[13px] text-e-teal mb-1">Batch</div><div className="text-e-dim text-[11px]">Group by atlas</div></div>
              <div className="flex-1 py-4 px-3 text-center relative bg-[rgba(96,216,243,0.08)] pipe-step"><div className="font-bold text-[13px] text-e-tx mb-1">Upload</div><div className="text-e-dim text-[11px]">Vertex buffer to GPU</div></div>
              <div className="flex-1 py-4 px-3 text-center relative bg-[rgba(74,222,128,0.08)] pipe-step"><div className="font-bold text-[13px] text-e-tx mb-1">Execute</div><div className="text-e-dim text-[11px]">Shader + swap</div></div>
            </div>

            <Callout type="warning" label="⚠ Team concern — Shaders">
              "Shaders are a black box for half the team. How do we structure the pipeline so graphics and engine programmers don't block each other?" — See <a href="#c-shaders" className="text-e-amber underline">§ 4.5 for full mitigation.</a>
            </Callout>

            <SubHeading>Physics collision pipeline</SubHeading>
            <Paragraph>
              Reduces O(N²) collision checks to O(N) broadphase + O(k) narrowphase where k ≪ N.
            </Paragraph>
            <div className="flex flex-col md:flex-row items-stretch bg-e-bg3 border border-e-bd2 rounded-2xl overflow-hidden my-5">
              <div className="flex-1 py-4 px-3 text-center relative bg-[rgba(71,85,105,0.1)]"><div className="font-bold text-[13px] text-e-tx mb-1">All entities</div><div className="text-e-dim text-[11px]">N objects in world</div></div>
              <div className="flex-1 py-4 px-3 text-center relative bg-[rgba(108,138,255,0.08)] pipe-step"><div className="font-bold text-[13px] text-e-tx mb-1">Broadphase</div><div className="text-e-dim text-[11px]">Spatial hash grid</div></div>
              <div className="flex-1 py-4 px-3 text-center relative bg-[rgba(167,139,250,0.08)] pipe-step"><div className="font-bold text-[13px] text-e-tx mb-1">Narrowphase</div><div className="text-e-dim text-[11px]">SAT / GJK tests</div></div>
              <div className="flex-1 py-4 px-3 text-center relative bg-[rgba(248,113,113,0.08)] pipe-step"><div className="font-bold text-[13px] text-e-tx mb-1">Resolution</div><div className="text-e-dim text-[11px]">Impulse apply</div></div>
              <div className="flex-1 py-4 px-3 text-center relative bg-[rgba(245,158,11,0.08)] pipe-step"><div className="font-bold text-[13px] text-e-tx mb-1">Triggers</div><div className="text-e-dim text-[11px]">OnEnter / OnExit</div></div>
            </div>

            <SubHeading>ECS data flow</SubHeading>
            <CodeBlock langLeft="C++ / EnTT" langRight="System query pattern">
              <Token type="comment">// Systems declare exactly what they read and write.</Token>{"\n"}
              <Token type="keyword">void</Token> <Token type="function">MovementSystem</Token>(<Token type="type">entt::registry</Token><Token type="operator">&</Token> <Token type="plain">reg</Token>, <Token type="type">float</Token> <Token type="plain">dt</Token>) {"{"}{"\n"}
              {"    "}<Token type="keyword">auto</Token> <Token type="plain">view</Token> <Token type="operator">=</Token> <Token type="plain">reg</Token>.<Token type="function">view</Token><Token type="operator">&lt;</Token><Token type="type">Transform</Token>, <Token type="keyword">const</Token> <Token type="type">Velocity</Token><Token type="operator">&gt;</Token>();{"\n"}
              {"    "}<Token type="keyword">for</Token> (<Token type="keyword">auto</Token> [<Token type="plain">entity</Token>, <Token type="plain">xfm</Token>, <Token type="plain">vel</Token>] : <Token type="plain">view</Token>.<Token type="function">each</Token>()) {"{"}{"\n"}
              {"        "}<Token type="plain">xfm</Token>.<Token type="plain">position</Token> <Token type="operator">+=</Token> <Token type="plain">vel</Token>.<Token type="plain">value</Token> <Token type="operator">*</Token> <Token type="plain">dt</Token>;  <Token type="comment">// contiguous array — L1 cache stays hot</Token>{"\n"}
              {"    "}{"}"}{"\n"}
              {"}"}{"\n"}
              <Token type="keyword">struct</Token> <Token type="type">Player</Token> {"{}"};  <Token type="comment">// Tag component — zero-size marker, no data</Token>{"\n"}
              <Token type="keyword">auto</Token> <Token type="plain">players</Token> <Token type="operator">=</Token> <Token type="plain">reg</Token>.<Token type="function">view</Token><Token type="operator">&lt;</Token><Token type="type">Transform</Token>, <Token type="type">entt::exclude_t</Token><Token type="operator">&lt;</Token><Token type="type">Enemy</Token><Token type="operator">&gt;&gt;</Token>();
            </CodeBlock>
          </section>

          {/* §2.5 Frame Budget */}
          <section className="mb-16">
            <SectionHeader id="budget" sectionNumber="§ 2.5" titleText="16.67ms" highlightText="Frame Budget" />
            <Paragraph>
              Every architectural rule exists to ensure all game logic completes within the 60 FPS frame boundary. At 60Hz, you have exactly <strong className="text-e-tx font-semibold">16.67 milliseconds</strong>. This is your budget. There is no overdraft.
            </Paragraph>

            <div className="rounded-lg overflow-hidden h-[42px] flex my-4">
              <div className="flex items-center justify-center text-xs font-bold text-white px-2.5" style={{width: '30%', background: '#0d9488'}}>Physics ~5ms</div>
              <div className="flex items-center justify-center text-xs font-bold text-white px-2.5" style={{width: '18%', background: '#3d56cc'}}>Logic ~3ms</div>
              <div className="flex items-center justify-center text-xs font-bold text-white px-2.5" style={{width: '36%', background: '#b91c1c'}}>Render ~6ms</div>
              <div className="flex items-center justify-center text-xs font-bold text-white px-2.5 bg-e-amber" style={{width: '16%'}}>Misc ~2.7ms</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-3">
              <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-[3px] shrink-0" style={{background: '#0d9488'}}></div><span className="text-xs text-e-mu">Physics / collision</span></div>
              <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-[3px] shrink-0" style={{background: '#3d56cc'}}></div><span className="text-xs text-e-mu">Logic / ECS systems</span></div>
              <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-[3px] shrink-0 bg-[#b91c1c]"></div><span className="text-xs text-e-mu">Render / GPU submit</span></div>
              <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-[3px] shrink-0 bg-e-amber"></div><span className="text-xs text-e-mu">Audio / misc overhead</span></div>
            </div>

            <SubHeading>Budget by target frame rate</SubHeading>
            <Table>
              <TableHead headers={['Target', 'Budget', 'Physics', 'Logic/ECS', 'Render', 'Misc']} />
              <tbody>
                <TableRow>
                  <TableCell highlight="font-semibold text-e-mu">30 fps</TableCell>
                  <TableCell>33.3 ms</TableCell><TableCell>~10 ms</TableCell><TableCell>~5 ms</TableCell><TableCell>~12 ms</TableCell><TableCell>~4 ms</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell highlight="font-semibold text-e-teal">60 fps</TableCell>
                  <TableCell>16.7 ms</TableCell><TableCell>~5 ms</TableCell><TableCell>~3 ms</TableCell><TableCell>~6 ms</TableCell><TableCell>~2 ms</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell highlight="font-semibold text-e-indigo">120 fps</TableCell>
                  <TableCell>8.3 ms</TableCell><TableCell>~2 ms</TableCell><TableCell>~1.5 ms</TableCell><TableCell>~3 ms</TableCell><TableCell>~1 ms</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <Callout type="info" label="Profiling rule">
              Do not guess where time is spent. Use <InlineCode>Tracy</InlineCode> or <InlineCode>Remotery</InlineCode> to instrument each system with named zones. The bottleneck is almost never where you expect it. Measure first, optimise second.
            </Callout>
          </section>

          {/* §2.6 Roadmap */}
          <section className="mb-16">
            <SectionHeader id="roadmap" sectionNumber="§ 2.6" titleText="MVP" highlightText="Roadmap" />
            <Paragraph>
              Phases are strictly sequential. Do not start Phase 2 until Phase 1's exit criterion is met. Build the minimum system on which a playable prototype can run — then layer in complexity.
            </Paragraph>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {/* Phase 1 */}
              <div className="bg-e-bg2 border border-e-bd border-t-[3px] border-t-e-dim rounded-2xl overflow-hidden">
                <div className="px-5 pt-[18px] pb-3.5 bg-[rgba(71,85,105,0.12)]">
                  <div className="font-mono text-[10px] tracking-[.1em] uppercase mb-1 opacity-70 text-e-mu">Phase 1</div>
                  <h4 className="text-base font-bold text-white mb-[3px]">Skeleton</h4>
                  <div className="text-xs opacity-60 text-e-mu">Weeks 1 – 2</div>
                </div>
                <div className="px-5 pt-3.5 pb-5">
                  <CheckListItem title="Wall-clock game loop" description="fixed timestep, fps counter, 250ms cap" />
                  <CheckListItem title="Window + GL context" description="SDL3, OpenGL 4.6 core, clear colour" />
                  <CheckListItem title="Single sprite on screen" description="stb_image, textured quad, no batching" />
                  <CheckListItem title="Keyboard + mouse polling" description="IsDown, IsPressed, IsReleased" />
                  <div className="pt-3 font-mono text-[11px] text-e-dim">Exit: sprite moves with WASD at stable 60Hz</div>
                </div>
              </div>
              {/* Phase 2 */}
              <div className="bg-e-bg2 border border-e-bd border-t-[3px] border-t-e-indigo rounded-2xl overflow-hidden">
                <div className="px-5 pt-[18px] pb-3.5 bg-e-indigo-b">
                  <div className="font-mono text-[10px] tracking-[.1em] uppercase mb-1 opacity-70 text-e-indigo">Phase 2</div>
                  <h4 className="text-base font-bold text-white mb-[3px]">Playable</h4>
                  <div className="text-xs opacity-60 text-e-indigo">Weeks 3 – 6</div>
                </div>
                <div className="px-5 pt-3.5 pb-5">
                  <CheckListItem title="Sprite batching" description="atlas grouping, RenderDoc validation" />
                  <CheckListItem title="AABB collisions" description="broadphase, OnCollision callback" />
                  <CheckListItem title="Handle-based asset cache" description="ref-count, no hot-path alloc" />
                  <CheckListItem title="Basic audio" description="WAV/OGG, play/stop, miniaudio" />
                  <div className="pt-3 font-mono text-[11px] text-e-dim">Exit: playable platformer prototype</div>
                </div>
              </div>
              {/* Phase 3 */}
              <div className="bg-e-bg2 border border-e-bd border-t-[3px] border-t-e-teal rounded-2xl overflow-hidden">
                <div className="px-5 pt-[18px] pb-3.5 bg-e-teal-b">
                  <div className="font-mono text-[10px] tracking-[.1em] uppercase mb-1 opacity-70 text-e-teal">Phase 3</div>
                  <h4 className="text-base font-bold text-white mb-[3px]">Production</h4>
                  <div className="text-xs opacity-60 text-e-teal">Weeks 7 – 14</div>
                </div>
                <div className="px-5 pt-3.5 pb-5">
                  <CheckListItem title="EnTT ECS refactor" description="sparse-set, archetype queries" />
                  <CheckListItem title="Box2D integration" description="wrapped in PhysicsBody component" />
                  <CheckListItem title="Animation state machine" description="transitions, frame events" />
                  <CheckListItem title="Scene stack manager" description="async load, stacked scenes" />
                  <div className="pt-3 font-mono text-[11px] text-e-dim">Exit: complex RPG prototype functional</div>
                </div>
              </div>
            </div>
          </section>

          {/* §2.7 Tech Stack */}
          <section className="mb-16">
            <SectionHeader id="techstack" sectionNumber="§ 2.7" titleText="Language &" highlightText="Tech Stack Matrix" />
            <Paragraph>
              The right stack depends on team expertise, target platform, and performance requirements. All stacks below are viable for a 2D engine; the trade-offs differ.
            </Paragraph>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* C++ */}
              <div className="bg-e-bg2 border border-e-bd border-t-2 border-t-e-indigo rounded-2xl p-[22px]">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[17px] font-bold text-white">C++</span>
                  <div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[rgba(108,138,255,0.15)] text-e-indigo">Industry Default</span>
                    <div className="flex gap-0.5 mt-1.5 justify-end"><span className="text-e-amber text-xs">★</span><span className="text-e-amber text-xs">★</span><span className="text-e-amber text-xs">★</span><span className="text-e-amber text-xs">★</span><span className="text-e-amber text-xs">★</span></div>
                  </div>
                </div>
                <p className="text-[13px] text-e-mu leading-[1.6] mb-3.5">Maximum control over memory layout. Zero-cost abstractions. Largest game-specific library ecosystem. Most shipped engines use C++.</p>
                <div className="grid grid-cols-2 gap-1 mb-3.5">
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Window</span><span className="text-e-tx font-semibold">SDL3 / GLFW</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Render</span><span className="text-e-tx font-semibold">OpenGL / Vulkan</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">ECS</span><span className="text-e-tx font-semibold">EnTT / flecs</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Physics</span><span className="text-e-tx font-semibold">Box2D</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Audio</span><span className="text-e-tx font-semibold">miniaudio</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Script</span><span className="text-e-tx font-semibold">Lua + sol2</span></div>
                </div>
                <div className="bg-e-bg3 border border-e-bd2 rounded-[6px] px-3.5 py-[9px] text-xs text-e-mu leading-[1.5]"><strong className="text-e-tx">Verdict:</strong> Build here unless there is a strong reason not to. Largest library surface, best hiring, most documentation.</div>
              </div>
              {/* Rust */}
              <div className="bg-e-bg2 border border-e-bd border-t-2 border-t-e-amber rounded-2xl p-[22px]">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[17px] font-bold text-white">Rust</span>
                  <div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[rgba(245,158,11,0.15)] text-e-amber">Modern / Safe</span>
                    <div className="flex gap-0.5 mt-1.5 justify-end"><span className="text-e-amber text-xs">★</span><span className="text-e-amber text-xs">★</span><span className="text-e-amber text-xs">★</span><span className="text-e-amber text-xs">★</span><span className="text-e-amber text-xs">★</span></div>
                  </div>
                </div>
                <p className="text-[13px] text-e-mu leading-[1.6] mb-3.5">C++-level performance with compile-time memory safety. Borrow checker eliminates data races. Bevy is the most architecturally innovative open-source engine to study.</p>
                <div className="grid grid-cols-2 gap-1 mb-3.5">
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Window</span><span className="text-e-tx font-semibold">winit</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Render</span><span className="text-e-tx font-semibold">wgpu</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">ECS</span><span className="text-e-tx font-semibold">bevy_ecs / hecs</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Physics</span><span className="text-e-tx font-semibold">rapier2d</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Audio</span><span className="text-e-tx font-semibold">kira / rodio</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Debug UI</span><span className="text-e-tx font-semibold">egui</span></div>
                </div>
                <div className="bg-e-bg3 border border-e-bd2 rounded-[6px] px-3.5 py-[9px] text-xs text-e-mu leading-[1.5]"><strong className="text-e-tx">Verdict:</strong> Best WASM story. Real memory-safety advantage on large codebases. Learning curve is real but worthwhile.</div>
              </div>
              {/* TypeScript */}
              <div className="bg-e-bg2 border border-e-bd border-t-2 border-t-e-teal rounded-2xl p-[22px]">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[17px] font-bold text-white">TypeScript</span>
                  <div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[rgba(45,212,191,0.15)] text-e-teal">Browser First</span>
                    <div className="flex gap-0.5 mt-1.5 justify-end"><span className="text-e-amber text-xs">★</span><span className="text-e-amber text-xs">★</span><span className="text-e-amber text-xs">★</span><span className="text-e-bd2 text-xs">★</span><span className="text-e-bd2 text-xs">★</span></div>
                  </div>
                </div>
                <p className="text-[13px] text-e-mu leading-[1.6] mb-3.5">Mandatory for browser targets. WebGPU is the modern GPU API replacing WebGL. For performance-critical subsystems, compile C++/Rust to WASM.</p>
                <div className="grid grid-cols-2 gap-1 mb-3.5">
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Render</span><span className="text-e-tx font-semibold">WebGPU / PixiJS</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Framework</span><span className="text-e-tx font-semibold">Phaser 3</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">ECS</span><span className="text-e-tx font-semibold">bitecs</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Physics</span><span className="text-e-tx font-semibold">Rapier (WASM)</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Audio</span><span className="text-e-tx font-semibold">Web Audio API</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Build</span><span className="text-e-tx font-semibold">Vite / esbuild</span></div>
                </div>
                <div className="bg-e-bg3 border border-e-bd2 rounded-[6px] px-3.5 py-[9px] text-xs text-e-mu leading-[1.5]"><strong className="text-e-tx">Verdict:</strong> Mandatory for browser. GC pauses limit performance ceiling — use WASM for the hot path.</div>
              </div>
              {/* C# */}
              <div className="bg-e-bg2 border border-e-bd border-t-2 border-t-e-purple rounded-2xl p-[22px]">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[17px] font-bold text-white">C#</span>
                  <div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[rgba(167,139,250,0.15)] text-e-purple">Unity-Adjacent</span>
                    <div className="flex gap-0.5 mt-1.5 justify-end"><span className="text-e-amber text-xs">★</span><span className="text-e-amber text-xs">★</span><span className="text-e-amber text-xs">★</span><span className="text-e-amber text-xs">★</span><span className="text-e-bd2 text-xs">★</span></div>
                  </div>
                </div>
                <p className="text-[13px] text-e-mu leading-[1.6] mb-3.5">.NET 8 AOT compilation closes much of the performance gap. Large Unity-trained hiring pool. MonoGame (XNA successor) provides a lean engine framework.</p>
                <div className="grid grid-cols-2 gap-1 mb-3.5">
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Framework</span><span className="text-e-tx font-semibold">MonoGame / Nez</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Render</span><span className="text-e-tx font-semibold">Silk.NET</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">ECS</span><span className="text-e-tx font-semibold">Arch ECS</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Physics</span><span className="text-e-tx font-semibold">Aether.Physics2D</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Build</span><span className="text-e-tx font-semibold">dotnet CLI</span></div>
                  <div className="flex items-center gap-1.5 text-xs text-e-mu"><span className="font-mono text-[10px] text-e-dim min-w-[64px]">Script</span><span className="text-e-tx font-semibold">Roslyn API</span></div>
                </div>
                <div className="bg-e-bg3 border border-e-bd2 rounded-[6px] px-3.5 py-[9px] text-xs text-e-mu leading-[1.5]"><strong className="text-e-tx">Verdict:</strong> Excellent if hiring from the Unity ecosystem. MonoGame + Arch ECS is a capable 2D foundation.</div>
              </div>
            </div>
          </section>

          {/* PART III HEADER */}
          <div className="mt-16 pt-8 border-t border-e-bd">
            <div className="font-mono text-[11px] tracking-[.12em] uppercase text-e-dim mb-1.5">Part III</div>
            <div className="font-serif text-[32px] font-bold text-white mb-2">Team Concerns — <span className="text-e-amber">Deep Dives</span></div>
            <Paragraph className="max-w-[560px] m-0">Five concerns raised during planning. Each is analysed with its root risk, concrete mitigations, and code-level guidance.</Paragraph>
          </div>

          {/* §4.1 Graphics API */}
          <section className="mb-16 mt-16">
            <div id="c-graphicsapi" className="section-hdr flex items-center gap-3.5 mb-7 pb-4 border-b border-e-bd scroll-mt-10 animate-fade-up">
              <span className="font-mono text-[11px] text-e-dim bg-e-bg2 border border-e-bd px-2.5 py-1 rounded-[6px] shrink-0">⚠ 4.1</span>
              <h2 className="font-serif text-[26px] font-bold text-e-amber">Graphics API <span className="text-e-mu text-[18px] font-normal">— Selection &amp; Lock-in</span></h2>
            </div>
            <Callout type="warning" label="Team concern — verbatim">
              "Which graphics API do we commit to, and are we locking ourselves in if we pick the wrong one early?"
            </Callout>
            
            <SubHeading>Root risk</SubHeading>
            <Paragraph>
              Choosing Vulkan too early adds months of driver, synchronisation, and memory-management work before a single sprite appears on screen. Choosing OpenGL legacy limits future platform options (macOS caps at 4.1). Choosing a high-level abstraction (bgfx) hides important concepts from the team.
            </Paragraph>

            <SubHeading>The RHI solution</SubHeading>
            <Paragraph>
              Design a thin <strong className="text-e-tx font-semibold">Rendering Hardware Interface (RHI)</strong> — a pure-virtual abstraction that all rendering code calls. Concrete implementations sit behind it. The two-day cost of building the RHI in Phase 1 buys a backend swap at any time for free.
            </Paragraph>

            <CodeBlock langLeft="C++ — interface" langRight="Minimal RHI abstraction">
              <Token type="keyword">class</Token> <Token type="type">IRHI</Token> {"{"}{"\n"}
              <Token type="keyword">public</Token>:{"\n"}
              {"    "}<Token type="keyword">virtual</Token> <Token type="type">TextureHandle</Token> <Token type="function">CreateTexture</Token>(<Token type="keyword">const</Token> <Token type="type">TextureDesc</Token><Token type="operator">&</Token> <Token type="plain">desc</Token>) <Token type="operator">=</Token> <Token type="number">0</Token>;{"\n"}
              {"    "}<Token type="keyword">virtual</Token> <Token type="type">BufferHandle</Token>  <Token type="function">CreateBuffer</Token>(<Token type="keyword">const</Token>  <Token type="type">BufferDesc</Token><Token type="operator">&</Token>  <Token type="plain">desc</Token>) <Token type="operator">=</Token> <Token type="number">0</Token>;{"\n"}
              {"    "}<Token type="keyword">virtual</Token> <Token type="keyword">void</Token>          <Token type="function">SetShader</Token>(<Token type="type">ShaderHandle</Token> <Token type="plain">shader</Token>)    <Token type="operator">=</Token> <Token type="number">0</Token>;{"\n"}
              {"    "}<Token type="keyword">virtual</Token> <Token type="keyword">void</Token>          <Token type="function">DrawIndexed</Token>(<Token type="type">uint32_t</Token> <Token type="plain">count</Token>)       <Token type="operator">=</Token> <Token type="number">0</Token>;{"\n"}
              {"    "}<Token type="keyword">virtual</Token> <Token type="keyword">void</Token>          <Token type="function">Present</Token>()                         <Token type="operator">=</Token> <Token type="number">0</Token>;{"\n"}
              {"}"};{"\n"}
              <Token type="comment">// Game code never sees concrete backends:</Token>{"\n"}
              <Token type="keyword">class</Token> <Token type="type">OpenGLRHI</Token> : <Token type="keyword">public</Token> <Token type="type">IRHI</Token> {"{ "} <Token type="comment">/* ... */</Token> {" }"};{"\n"}
              <Token type="keyword">class</Token> <Token type="type">VulkanRHI</Token>  : <Token type="keyword">public</Token> <Token type="type">IRHI</Token> {"{ "} <Token type="comment">/* swap in at Week 19 if needed */</Token> {" }"};
            </CodeBlock>

            <ArrowList>
              <ArrowListItem><strong className="text-e-tx">OpenGL 4.6 core profile to start.</strong> Well-documented, runs on all desktop hardware, great tooling (RenderDoc). No legacy cruft from core profile.</ArrowListItem>
              <ArrowListItem><strong className="text-e-tx">RHI interface from day one.</strong> ~2 days of overhead in Phase 1. Eliminates the cost of a future backend swap entirely.</ArrowListItem>
              <ArrowListItem><strong className="text-e-tx">Formal Vulkan decision gate at Week 19.</strong> Run RenderDoc and Tracy. Is the OpenGL submission overhead actually a bottleneck under your target load? Evidence-based, not preference-based.</ArrowListItem>
              <ArrowListItem><strong className="text-e-tx">macOS consideration.</strong> macOS supports OpenGL only to 4.1. Validate all shaders at 4.1 feature level from the start in CI. Use Metal via MoltenVK if 4.6 features are needed.</ArrowListItem>
            </ArrowList>
          </section>

          {/* §4.2 Multithreading */}
          <section className="mb-16">
            <div id="c-threading" className="section-hdr flex items-center gap-3.5 mb-7 pb-4 border-b border-e-bd scroll-mt-10 animate-fade-up">
              <span className="font-mono text-[11px] text-e-dim bg-e-bg2 border border-e-bd px-2.5 py-1 rounded-[6px] shrink-0">⚠ 4.2</span>
              <h2 className="font-serif text-[26px] font-bold text-e-amber">Multithreading <span className="text-e-mu text-[18px] font-normal">— Model &amp; Safety</span></h2>
            </div>
            <Callout type="warning" label="Team concern — verbatim">
              "We don't want to build single-threaded and have to retrofit threading later. But we also don't want threading bugs to block early iteration."
            </Callout>

            <SubHeading>Threading introduction schedule</SubHeading>
            <Table>
              <TableHead headers={['Thread', 'Introduced', 'Owns', 'Communicates via']} />
              <tbody>
                <TableRow>
                  <TableCell><strong className="text-e-tx">Main / Logic</strong></TableCell>
                  <TableCell><InlineCode>Phase 1</InlineCode></TableCell>
                  <TableCell>ECS update, input, AI, physics, scene</TableCell>
                  <TableCell>Single-threaded — direct calls</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong className="text-e-tx">Render thread</strong></TableCell>
                  <TableCell><InlineCode>Phase 2</InlineCode></TableCell>
                  <TableCell>All GPU state, all RHI calls, framebuffer</TableCell>
                  <TableCell>Double-buffered RenderCommandBuffer</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong className="text-e-tx">Job pool</strong></TableCell>
                  <TableCell><InlineCode>Phase 3</InlineCode></TableCell>
                  <TableCell>Parallel ECS systems, pathfinding, AI</TableCell>
                  <TableCell>Component access declarations → scheduler</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong className="text-e-tx">Streaming thread</strong></TableCell>
                  <TableCell><InlineCode>Phase 4</InlineCode></TableCell>
                  <TableCell>Async asset decode, texture staging</TableCell>
                  <TableCell>Lock-free request queue → completion poll</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <ArrowList>
              <ArrowListItem><strong className="text-e-tx">The GPU thread owns all GPU resources.</strong> No other thread may call RHI functions. Enforce this with thread-ID assertions in debug builds — violations become immediate crashes, not silent corruption.</ArrowListItem>
              <ArrowListItem><strong className="text-e-tx">ThreadSanitizer (TSan) in CI from Phase 2.</strong> Run the full test suite under TSan on every PR. Data races surface immediately. Do not defer — a race found in Phase 4 costs 10× more to fix than one found in Phase 2.</ArrowListItem>
              <ArrowListItem><strong className="text-e-tx">Lock-free queue for streaming.</strong> The streaming thread and main thread communicate via a lock-free MPSC queue. The main thread polls for completions; it never blocks waiting for an asset.</ArrowListItem>
            </ArrowList>
          </section>

          {/* §4.3 Layering */}
          <section className="mb-16">
            <div id="c-layering" className="section-hdr flex items-center gap-3.5 mb-7 pb-4 border-b border-e-bd scroll-mt-10 animate-fade-up">
              <span className="font-mono text-[11px] text-e-dim bg-e-bg2 border border-e-bd px-2.5 py-1 rounded-[6px] shrink-0">⚠ 4.3</span>
              <h2 className="font-serif text-[26px] font-bold text-e-amber">Layering <span className="text-e-mu text-[18px] font-normal">— Enforcing Boundaries</span></h2>
            </div>
            <Callout type="warning" label="Team concern — verbatim">
              "How do we prevent every system from depending on every other system? We've seen this cause spaghetti in past projects."
            </Callout>

            <SubHeading>What spaghetti looks like in practice</SubHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-5">
              <div className="bg-e-bg2 border border-e-bd border-t-2 border-t-e-red rounded-2xl p-5"><h4 className="text-sm font-semibold text-e-tx mb-1.5">Renderer reads from ECS</h4><p className="text-[13px] leading-[1.6] text-e-mu m-0">The renderer directly queries entity components instead of reading a command buffer. Now Renderer depends on ECS — a Core system depends on an ECS concept. The layer cake collapses.</p></div>
              <div className="bg-e-bg2 border border-e-bd border-t-2 border-t-e-red rounded-2xl p-5"><h4 className="text-sm font-semibold text-e-tx mb-1.5">Physics spawns entities</h4><p className="text-[13px] leading-[1.6] text-e-mu m-0">The physics resolution code creates a spark entity when objects collide. Now Physics depends on the ECS entity factory. Two Core systems are coupled. Neither can be tested in isolation.</p></div>
              <div className="bg-e-bg2 border border-e-bd border-t-2 border-t-e-red rounded-2xl p-5"><h4 className="text-sm font-semibold text-e-tx mb-1.5">Game code calls OpenGL</h4><p className="text-[13px] leading-[1.6] text-e-mu m-0">A script calls <InlineCode>glBlendFunc</InlineCode> directly. Now game code depends on the GPU API. Porting to Vulkan or WASM requires touching every script that does this.</p></div>
            </div>

            <ArrowList>
              <ArrowListItem><strong className="text-e-tx">Separate CMake library targets per layer.</strong> <InlineCode>Platform</InlineCode>, <InlineCode>Core</InlineCode>, <InlineCode>ECS</InlineCode>, <InlineCode>Game</InlineCode> are four separate CMake static libraries. Cross-layer violations fail at link time — not review time.</ArrowListItem>
              <ArrowListItem><strong className="text-e-tx">Event bus as the only upward channel.</strong> When Physics needs to tell Game that a collision occurred, it emits a <InlineCode>CollisionEvent</InlineCode> to the bus. Game code subscribes. Physics never holds a pointer to any game object.</ArrowListItem>
              <ArrowListItem><strong className="text-e-tx">Quarterly graphviz review.</strong> Run <InlineCode>cmake --graphviz=deps.dot build/</InlineCode> and render it. If any arrow points upward through the layer hierarchy, that is an architectural bug — fix it before it multiplies.</ArrowListItem>
            </ArrowList>
          </section>

          {/* §4.4 Garbage Collectors */}
          <section className="mb-16">
            <div id="c-gc" className="section-hdr flex items-center gap-3.5 mb-7 pb-4 border-b border-e-bd scroll-mt-10 animate-fade-up">
              <span className="font-mono text-[11px] text-e-dim bg-e-bg2 border border-e-bd px-2.5 py-1 rounded-[6px] shrink-0">⚠ 4.4</span>
              <h2 className="font-serif text-[26px] font-bold text-e-amber">Garbage Collectors <span className="text-e-mu text-[18px] font-normal">— Pauses &amp; Memory</span></h2>
            </div>
            <Callout type="warning" label="Team concern — verbatim">
              "If we bind a scripting language with a GC (Lua, Python), will GC pauses kill our frame timing? And how do we handle C++ memory without leaks?"
            </Callout>

            <SubHeading>Scripting layer GC risk</SubHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-5">
              <div className="bg-e-bg2 border border-e-bd border-t-2 border-t-e-amber rounded-2xl p-5">
                <h4 className="text-sm font-semibold text-e-tx mb-1.5">Lua 5.4 — tunable incremental GC</h4>
                <p className="text-[13px] leading-[1.6] text-e-mu m-0 mb-2.5">Lua's GC is incremental and tunable. The risk is real if scripts allocate per-frame (creating tables, closures, string concatenations inside <InlineCode>update()</InlineCode>).</p>
                <Badge type="green">Low risk if rules followed</Badge>
              </div>
              <div className="bg-e-bg2 border border-e-bd border-t-2 border-t-e-red rounded-2xl p-5">
                <h4 className="text-sm font-semibold text-e-tx mb-1.5">Python — reference counter + cyclic GC</h4>
                <p className="text-[13px] leading-[1.6] text-e-mu m-0 mb-2.5">CPython's cyclic GC can pause. Python should only be used for editor tooling, not the shipped game loop — the GC issue is irrelevant at runtime.</p>
                <Badge type="red">Runtime: avoid. Tooling: fine.</Badge>
              </div>
            </div>

            <CodeBlock langLeft="C++ / Lua" langRight="Tuning Lua GC for real-time use">
              <Token type="comment">// Tune Lua GC at engine startup:</Token>{"\n"}
              <Token type="function">lua_gc</Token>(<Token type="plain">L</Token>, <Token type="plain">LUA_GCSETSTEPMUL</Token>,  <Token type="number">100</Token>);  <Token type="comment">// step size (lower = smaller pauses)</Token>{"\n"}
              <Token type="function">lua_gc</Token>(<Token type="plain">L</Token>, <Token type="plain">LUA_GCSETPAUSE</Token>,    <Token type="number">200</Token>);  <Token type="comment">// threshold (higher = rarer)</Token>{"\n"}
              <Token type="comment">// Force a full collect ONLY during scene transitions:</Token>{"\n"}
              <Token type="keyword">void</Token> <Token type="function">OnSceneUnload</Token>() {"{"}{"\n"}
              {"    "}<Token type="function">lua_gc</Token>(<Token type="plain">L</Token>, <Token type="plain">LUA_GCCOLLECT</Token>, <Token type="number">0</Token>);  <Token type="comment">// safe — screen is black anyway</Token>{"\n"}
              {"}"}{"\n"}
              <Token type="comment">// THE RULE: No Lua allocations inside update().</Token>{"\n"}
              <Token type="comment">// All tables/closures created in init() and reused.</Token>
            </CodeBlock>

            <SubHeading>C++ engine memory strategy</SubHeading>
            <ArrowList>
              <ArrowListItem><strong className="text-e-tx">No raw new/delete in engine code.</strong> Use <InlineCode>std::unique_ptr</InlineCode> at allocation sites and <InlineCode>std::shared_ptr</InlineCode> only at actual shared-ownership boundaries.</ArrowListItem>
              <ArrowListItem><strong className="text-e-tx">Frame allocator for hot path.</strong> Allocate a 16 MB arena at startup. Each frame: a bump pointer starts at the arena base. Allocations just increment the pointer. At end-of-frame: reset. Zero fragmentation, zero individual frees.</ArrowListItem>
              <ArrowListItem><strong className="text-e-tx">ASan + UBSan in CI from day one.</strong> Every PR runs with AddressSanitizer and UndefinedBehaviourSanitizer. Double-frees, use-after-free, and buffer overflows surface as immediate test failures.</ArrowListItem>
              <ArrowListItem><strong className="text-e-tx">Heaptrack audit at Week 22.</strong> Run Heaptrack under full game load. Confirm: zero heap allocations per frame on the main thread. All hot-path memory comes from arenas or pre-allocated pools.</ArrowListItem>
            </ArrowList>
          </section>

          {/* §4.5 Shaders */}
          <section className="mb-16">
            <div id="c-shaders" className="section-hdr flex items-center gap-3.5 mb-7 pb-4 border-b border-e-bd scroll-mt-10 animate-fade-up">
              <span className="font-mono text-[11px] text-e-dim bg-e-bg2 border border-e-bd px-2.5 py-1 rounded-[6px] shrink-0">⚠ 4.5</span>
              <h2 className="font-serif text-[26px] font-bold text-e-amber">Shaders <span className="text-e-mu text-[18px] font-normal">— Pipeline &amp; Team Access</span></h2>
            </div>
            <Callout type="warning" label="Team concern — verbatim">
              "Shaders are a black box for half the team. How do we structure the shader pipeline so engine and graphics programmers don't block each other?"
            </Callout>

            <SubHeading>Phased shader system — no bottleneck</SubHeading>
            <Table>
              <TableHead headers={['Phase', 'Feature', 'Owner', 'What it unlocks']} />
              <tbody>
                <TableRow>
                  <TableCell><InlineCode>1</InlineCode></TableCell>
                  <TableCell><strong className="text-e-tx">Hard-coded sprite shader</strong></TableCell>
                  <TableCell>Graphics lead</TableCell>
                  <TableCell>Sprite on screen. No abstraction — keep it simple.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><InlineCode>2</InlineCode></TableCell>
                  <TableCell><strong className="text-e-tx">ShaderLibrary</strong></TableCell>
                  <TableCell>Engine team</TableCell>
                  <TableCell>Named map of compiled programs. Hot-reload on file change in debug builds.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><InlineCode>3</InlineCode></TableCell>
                  <TableCell><strong className="text-e-tx">Material system</strong></TableCell>
                  <TableCell>Engine team</TableCell>
                  <TableCell>Material = (ShaderHandle, UniformMap). Game code creates materials; engine manages GPU state.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><InlineCode>4</InlineCode></TableCell>
                  <TableCell><strong className="text-e-tx">Permutation system</strong></TableCell>
                  <TableCell>Graphics team</TableCell>
                  <TableCell>Variants via #define injection at load. NO_LIGHTING, POINT_LIGHT, NORMAL_MAP — no runtime branching.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><InlineCode>4</InlineCode></TableCell>
                  <TableCell><strong className="text-e-tx">Post-processing pipeline</strong></TableCell>
                  <TableCell>Graphics team</TableCell>
                  <TableCell>Composable passes: bloom → chromatic aberration → colour grade. Each pass reads/writes RenderTarget.</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <CodeBlock langLeft="GLSL + C++" langRight="Shader permutation via define injection">
              <Token type="keyword">struct</Token> <Token type="type">ShaderKey</Token> {"{"}{"\n"}
              {"    "}<Token type="type">bool</Token> <Token type="plain">lighting</Token>   <Token type="operator">=</Token> <Token type="keyword">false</Token>;{"\n"}
              {"    "}<Token type="type">bool</Token> <Token type="plain">normal_map</Token> <Token type="operator">=</Token> <Token type="keyword">false</Token>;{"\n"}
              {"    "}<Token type="type">bool</Token> <Token type="plain">outline</Token>    <Token type="operator">=</Token> <Token type="keyword">false</Token>;{"\n"}
              {"}"};{"\n"}
              <Token type="type">std::string</Token> <Token type="function">build_preamble</Token>(<Token type="type">ShaderKey</Token> <Token type="plain">key</Token>) {"{"}{"\n"}
              {"    "}<Token type="type">std::string</Token> <Token type="plain">p</Token> <Token type="operator">=</Token> <Token type="string">"#version 460 core\\n"</Token>;{"\n"}
              {"    "}<Token type="keyword">if</Token> (<Token type="plain">key</Token>.<Token type="plain">lighting</Token>)   <Token type="plain">p</Token> <Token type="operator">+=</Token> <Token type="string">"#define USE_LIGHTING\\n"</Token>;{"\n"}
              {"    "}<Token type="keyword">if</Token> (<Token type="plain">key</Token>.<Token type="plain">normal_map</Token>) <Token type="plain">p</Token> <Token type="operator">+=</Token> <Token type="string">"#define USE_NORMAL_MAP\\n"</Token>;{"\n"}
              {"    "}<Token type="keyword">if</Token> (<Token type="plain">key</Token>.<Token type="plain">outline</Token>)    <Token type="plain">p</Token> <Token type="operator">+=</Token> <Token type="string">"#define USE_OUTLINE\\n"</Token>;{"\n"}
              {"    "}<Token type="keyword">return</Token> <Token type="plain">p</Token>;{"\n"}
              {"}"}{"\n"}
              <Token type="comment">// shader.glsl uses #ifdef — one file, N variants, no runtime branching</Token>
            </CodeBlock>

            <ArrowList>
              <ArrowListItem><strong className="text-e-tx">ShaderLibrary owned by the render thread.</strong> The main thread enqueues a hot-reload request via the command buffer. The render thread picks it up between frames and recompiles. Game code is never blocked.</ArrowListItem>
              <ArrowListItem><strong className="text-e-tx">Offline compilation in release builds.</strong> Cache compiled shader binaries on disk. Binary keyed by source hash — stale cache auto-invalidates. Eliminates per-launch compilation stall for end users.</ArrowListItem>
              <ArrowListItem><strong className="text-e-tx">Variant explosion guard.</strong> Document the maximum variant count per shader (e.g. max 8 permutations of the sprite shader). Beyond 8, the compiled program count grows exponentially. Set the limit in Phase 4 before the shader library gets large.</ArrowListItem>
            </ArrowList>
          </section>

          {/* §5.1 ADR */}
          <section className="mb-16">
            <SectionHeader id="adr" sectionNumber="§ 5.1" titleText="Architecture" highlightText="Decision Log" />
            <Paragraph>
              These five decisions are finalised in Phase 1 (Week 4). Changes after Phase 2 carry extreme rework cost. Each maps directly to a team concern.
            </Paragraph>

            <div className="flex flex-col gap-2.5 my-5">
              {/* ADR 1 */}
              <div className="bg-e-bg2 border border-e-bd rounded-2xl px-5 py-[18px] grid grid-cols-1 lg:grid-cols-[140px_1fr_1fr] gap-4 items-start">
                <div><div className="font-mono text-[10px] text-e-dim mb-1">ADR-01 · Graphics API</div><div className="font-bold text-e-tx text-[13px]">OpenGL 4.6 behind RHI</div></div>
                <div><div className="text-[11px] text-e-dim mb-1 font-mono uppercase tracking-[.06em]">Decision</div><div className="text-[13px] text-e-mu">OpenGL 4.6 core profile behind a thin RHI interface. Vulkan migration decision gate at Week 19 backed by profiling evidence.</div></div>
                <div><div className="text-[11px] text-e-dim mb-1 font-mono uppercase tracking-[.06em]">Alternatives</div><div className="text-xs text-e-dim font-mono">Vulkan from day 1 / bgfx / sokol_gfx</div></div>
              </div>
              {/* ADR 2 */}
              <div className="bg-e-bg2 border border-e-bd rounded-2xl px-5 py-[18px] grid grid-cols-1 lg:grid-cols-[140px_1fr_1fr] gap-4 items-start">
                <div><div className="font-mono text-[10px] text-e-dim mb-1">ADR-02 · Threading</div><div className="font-bold text-e-tx text-[13px]">Phased thread model</div></div>
                <div><div className="text-[11px] text-e-dim mb-1 font-mono uppercase tracking-[.06em]">Decision</div><div className="text-[13px] text-e-mu">Phase 1: single thread. Phase 2: render thread + command buffer. Phase 3: job pool. Phase 4: streaming thread. TSan in CI from Phase 2.</div></div>
                <div><div className="text-[11px] text-e-dim mb-1 font-mono uppercase tracking-[.06em]">Alternatives</div><div className="text-xs text-e-dim font-mono">Full multi-thread from day 1 / actor model</div></div>
              </div>
              {/* ADR 3 */}
              <div className="bg-e-bg2 border border-e-bd rounded-2xl px-5 py-[18px] grid grid-cols-1 lg:grid-cols-[140px_1fr_1fr] gap-4 items-start">
                <div><div className="font-mono text-[10px] text-e-dim mb-1">ADR-03 · Layering</div><div className="font-bold text-e-tx text-[13px]">5-layer + CMake enforcement</div></div>
                <div><div className="text-[11px] text-e-dim mb-1 font-mono uppercase tracking-[.06em]">Decision</div><div className="text-[13px] text-e-mu">Five named layers. Each is a separate CMake target. Cross-layer violations fail at link time. Event bus is the sole upward communication channel.</div></div>
                <div><div className="text-[11px] text-e-dim mb-1 font-mono uppercase tracking-[.06em]">Alternatives</div><div className="text-xs text-e-dim font-mono">Flat module structure / namespace-only separation</div></div>
              </div>
              {/* ADR 4 */}
              <div className="bg-e-bg2 border border-e-bd rounded-2xl px-5 py-[18px] grid grid-cols-1 lg:grid-cols-[140px_1fr_1fr] gap-4 items-start">
                <div><div className="font-mono text-[10px] text-e-dim mb-1">ADR-04 · Memory</div><div className="font-bold text-e-tx text-[13px]">Frame allocator + smart ptrs</div></div>
                <div><div className="text-[11px] text-e-dim mb-1 font-mono uppercase tracking-[.06em]">Decision</div><div className="text-[13px] text-e-mu">Frame linear allocator for hot path. Intrusive ref-count for asset handles. No raw new/delete. ASan + UBSan in CI from day one.</div></div>
                <div><div className="text-[11px] text-e-dim mb-1 font-mono uppercase tracking-[.06em]">Alternatives</div><div className="text-xs text-e-dim font-mono">std::shared_ptr everywhere / jemalloc</div></div>
              </div>
              {/* ADR 5 */}
              <div className="bg-e-bg2 border border-e-bd rounded-2xl px-5 py-[18px] grid grid-cols-1 lg:grid-cols-[140px_1fr_1fr] gap-4 items-start">
                <div><div className="font-mono text-[10px] text-e-dim mb-1">ADR-05 · Shaders</div><div className="font-bold text-e-tx text-[13px]">Phased shader system</div></div>
                <div><div className="text-[11px] text-e-dim mb-1 font-mono uppercase tracking-[.06em]">Decision</div><div className="text-[13px] text-e-mu">Phase 1: hard-coded. Phase 2: ShaderLibrary. Phase 3: Material system. Phase 4: permutations + post-processing pipeline.</div></div>
                <div><div className="text-[11px] text-e-dim mb-1 font-mono uppercase tracking-[.06em]">Alternatives</div><div className="text-xs text-e-dim font-mono">SPIR-V + shader graph from day 1</div></div>
              </div>
            </div>
          </section>

          {/* §5.2 Glossary */}
          <section className="mb-16">
            <SectionHeader id="glossary" sectionNumber="§ 5.2" titleText="Glossary" highlightText="" />
            <Table>
              <TableHead headers={['Term', 'Definition']} />
              <tbody>
                <TableRow><TableCell><InlineCode>ADR</InlineCode></TableCell><TableCell>Architecture Decision Record — a short document recording a significant technical decision and its rationale.</TableCell></TableRow>
                <TableRow><TableCell><InlineCode>alpha</InlineCode></TableCell><TableCell>The interpolation factor (accumulator / fixed_dt) passed to the renderer to smooth object positions between physics ticks.</TableCell></TableRow>
                <TableRow><TableCell><InlineCode>ASan</InlineCode></TableCell><TableCell>AddressSanitizer — a compiler instrumentation tool that detects memory errors (use-after-free, buffer overrun) at runtime.</TableCell></TableRow>
                <TableRow><TableCell><InlineCode>ECS</InlineCode></TableCell><TableCell>Entity-Component-System — entities are IDs, components are data, systems contain all logic. No OOP inheritance.</TableCell></TableRow>
                <TableRow><TableCell><InlineCode>Frame allocator</InlineCode></TableCell><TableCell>A linear bump allocator reset at the end of each frame. Zero fragmentation, zero individual frees on the hot path.</TableCell></TableRow>
                <TableRow><TableCell><InlineCode>RHI</InlineCode></TableCell><TableCell>Rendering Hardware Interface — a thin abstraction over a specific GPU API (OpenGL, Vulkan). Game code never calls the GPU directly.</TableCell></TableRow>
                <TableRow><TableCell><InlineCode>SAT</InlineCode></TableCell><TableCell>Separating Axis Theorem — a narrowphase algorithm that tests convex polygon intersection by checking if any separating axis exists.</TableCell></TableRow>
                <TableRow><TableCell><InlineCode>Shader permutation</InlineCode></TableCell><TableCell>A compiled variant of a shader produced by injecting #define flags at load time. Avoids runtime branching in GLSL.</TableCell></TableRow>
                <TableRow><TableCell><InlineCode>Spiral of death</InlineCode></TableCell><TableCell>The fixed-timestep loop failure mode where each physics tick takes longer than fixed_dt, causing the accumulator to grow infinitely.</TableCell></TableRow>
                <TableRow><TableCell><InlineCode>TSan</InlineCode></TableCell><TableCell>ThreadSanitizer — detects data races at runtime. Run in CI from the moment multithreading is introduced.</TableCell></TableRow>
                <TableRow><TableCell><InlineCode>UBSan</InlineCode></TableCell><TableCell>UndefinedBehaviourSanitizer — detects C++ undefined behaviour (signed overflow, null deref, misaligned access) at runtime.</TableCell></TableRow>
                <TableRow><TableCell><InlineCode>Z-sorting</InlineCode></TableCell><TableCell>Sorting draw calls by depth layer and Y-position within a layer to determine render order of overlapping sprites.</TableCell></TableRow>
              </tbody>
            </Table>

            <div className="mt-12 p-6 bg-e-bg2 border border-e-bd rounded-2xl text-center">
              <div className="font-serif text-[18px] text-e-mu mb-1.5 italic">"Build the loop first. Draw a sprite. Move it.</div>
              <div className="font-serif text-[18px] text-e-mu italic">Ship something playable before building the editor."</div>
              <div className="mt-3 font-mono text-[11px] text-e-dim">— Game Engine Architecture (J. Gregory) &amp; Game Programming Patterns (R. Nystrom)</div>
            </div>
          </section>

        </div>
      </main>
    </div>
    </>
    
  );
}