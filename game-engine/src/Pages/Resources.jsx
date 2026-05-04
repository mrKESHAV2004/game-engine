import React, { useState } from 'react';
import { SectionHeader,Paragraph,Table,TableHead,TableRow,TableCell } from '../components/GlobalComponents';



// ==========================================
// MAIN APP COMPONENT
// ==========================================

export default function Resources() {
  const [activeFilter, setActiveFilter] = useState("All");

  const youtubeResources = [
    {
      title: "The Cherno — Game Engine Series",
      description: "190+ episode series building Hazel, a real C++ engine from zero. The most thorough 'build it yourself' course on YouTube.",
      tags: ["Renderer", "ECS", "C++", "OpenGL"],
      link: "https://www.youtube.com/playlist?list=PLlrATfBNZ98dC-V-N3m0Go4deliWHPFwT",
    },
    {
      title: "javidx9 — olcPixelGameEngine",
      description: "Builds a 2D pixel engine from scratch in C++, then uses it to explain game loops, tilemaps, and pathfinding.",
      tags: ["2D Renderer", "Physics", "C++"],
      link: "https://www.youtube.com/@javidx9",
    },
    {
      title: "pikuma — 2D Engine from Scratch",
      description: "Structured course covering SDL2 windowing, game loops, ECS design, and Lua scripting integration.",
      tags: ["ECS", "Lua scripting", "SDL2"],
      link: "https://www.youtube.com/@pikuma",
    },
    {
      title: "Sebastian Lague — Coding Adventures",
      description: "Deep-dives into specific engine subsystems: procedural terrain, pathfinding, fluid simulation, and ray tracing.",
      tags: ["Simulation", "Pathfinding", "C#"],
      link: "https://www.youtube.com/@SebastianLague",
    },
    {
      title: "Travis Vroman — Kohi Game Engine",
      description: "Livestream series building a cross-platform C engine from scratch using Vulkan. Covers memory management and plugin architectures.",
      tags: ["Vulkan", "Memory mgmt", "C"],
      link: "https://www.youtube.com/@TravisVroman",
    }
  ];

  const readingResources = [
    {
      title: "How to Become a Game Engine Developer",
      author: "Harold Serrano",
      description: "A comprehensive roadmap, architecture overview, and career advice for aspiring engine developers.",
      link: "https://www.haroldserrano.com/blog/how-to-become-a-game-engine-developer",
    },
    {
      title: "3D Game Shaders for Beginners",
      author: "Lettier",
      description: "A brilliant, step-by-step visual guide to understanding and writing 3D graphics shaders from scratch.",
      link: "https://lettier.github.io/3d-game-shaders-for-beginners/",
    },
    {
      title: "Awesome Game Engine Dev",
      author: "Stevinz",
      description: "A massive curated GitHub list of game engine development resources, libraries, frameworks, and articles.",
      link: "https://github.com/stevinz/awesome-game-engine-dev?tab=readme-ov-file#game-engines",
    },
    {
      title: "Study Game Engines",
      author: "Open Source Collective",
      description: "A collaborative repository analyzing the architecture and source code of various open-source game engines.",
      link: "https://github.com/study-game-engines",
    }
  ];

  const githubResources = [
    { title: "godotengine/godot", language: "C++", tags: ["GUI Editor", "2D/3D Renderer", "Audio Bus"], link: "https://github.com/godotengine/godot" },
    { title: "bevyengine/bevy", language: "Rust", tags: ["ECS", "Asset Server", "wgpu"], link: "https://github.com/bevyengine/bevy" },
    { title: "SanderMertens/flecs", language: "C", tags: ["ECS", "High-Performance", "Data-Oriented"], link: "https://github.com/SanderMertens/flecs" },
    { title: "friflo/Friflo.Engine.ECS", language: "C#", tags: ["ECS", "High-Performance"], link: "https://github.com/friflo/Friflo.Engine.ECS" },
    { title: "cocos2d/cocos2d-x", language: "C++", tags: ["Sprite Batching", "Mobile First", "2D"], link: "https://github.com/cocos2d/cocos2d-x" },
    { title: "photonstorm/phaser", language: "TypeScript", tags: ["Browser", "WebGL", "2D Framework"], link: "https://github.com/photonstorm/phaser" },
    { title: "raysan5/raylib", language: "C", tags: ["Minimal Renderer", "Educational", "No Dependencies"], link: "https://github.com/raysan5/raylib" },
    { title: "love2d/love", language: "C++ / Lua", tags: ["2D Framework", "Lua Binding", "OpenGL"], link: "https://github.com/love2d/love" },
    { title: "FyroxEngine/Fyrox", language: "Rust", tags: ["Scene Editor", "ECS", "2D/3D"], link: "https://github.com/FyroxEngine/Fyrox" },
    { title: "gideros/gideros", language: "C++ / Lua", tags: ["2D/3D", "Mobile", "Framework"], link: "https://github.com/gideros/gideros" },
    { title: "isadorasophia/murder", language: "C#", tags: ["ECS", "Pixel Art", "Framework"], link: "https://github.com/isadorasophia/murder" },
    { title: "study-game-engines/godot-shaders", language: "GLSL", tags: ["Shaders", "Godot", "Graphics"], link: "https://github.com/study-game-engines/godot-shaders" },
    { title: "libgdx/libgdx", language: "Java", tags: ["Framework", "Android/iOS", "2D"], link: "https://github.com/libgdx/libgdx" },
    { title: "TheCherno/Hazel", language: "C++", tags: ["Educational", "Vulkan/OpenGL", "ECS"], link: "https://github.com/TheCherno/Hazel" },
  ];

  const filters = ["All", "C++ / C", "Rust", "C#", "Web / JS", "ECS", "Shaders"];

  const filteredRepos = githubResources.filter(repo => {
    if (activeFilter === "All") return true;
    if (activeFilter === "C++ / C") return repo.language.includes("C++") || repo.language === "C";
    if (activeFilter === "Rust") return repo.language === "Rust";
    if (activeFilter === "C#") return repo.language === "C#";
    if (activeFilter === "Web / JS") return repo.language === "TypeScript" || repo.language.includes("JS");
    if (activeFilter === "ECS") return repo.tags.some(t => t.toLowerCase().includes("ecs"));
    if (activeFilter === "Shaders") return repo.tags.some(t => t.toLowerCase().includes("shader") || t.toLowerCase().includes("renderer") || t.toLowerCase().includes("glsl"));
    return true;
  });

  const getTagStyles = (tag) => {
    const lowerTag = tag.toLowerCase();
    if (lowerTag.includes("render") || lowerTag.includes("glsl") || lowerTag.includes("shader")) return "bg-[rgba(108,138,255,0.15)] text-e-indigo border-[rgba(108,138,255,0.3)]";
    if (lowerTag.includes("ecs") || lowerTag.includes("data")) return "bg-[rgba(245,158,11,0.15)] text-e-amber border-[rgba(245,158,11,0.3)]";
    if (lowerTag.includes("gui") || lowerTag.includes("editor")) return "bg-[rgba(74,222,128,0.15)] text-e-green border-[rgba(74,222,128,0.3)]";
    if (lowerTag.includes("audio")) return "bg-[rgba(244,114,182,0.15)] text-e-pink border-[rgba(244,114,182,0.3)]";
    if (lowerTag.includes("mobile") || lowerTag.includes("web") || lowerTag.includes("browser")) return "bg-[rgba(45,212,191,0.15)] text-e-teal border-[rgba(45,212,191,0.3)]";
    return "bg-e-bg3 text-e-mu border-e-bd2";
  };

  return (
    <div className="bg-e-bg text-e-tx font-sans text-[15px] leading-[1.7] flex min-h-screen overflow-x-hidden scroll-smooth w-full">
      
      {/* CSS Reset & Theme - Preserving original styling */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600;700&display=swap');
        
        :root {
          --e-bg: #0b0f19;
          --e-bg2: #111520;
          --e-bg3: #1a1f2e;
          --e-tx: #f1f5f9;
          --e-mu: #94a3b8;
          --e-dim: #64748b;
          --e-bd: #222b3d;
          --e-bd2: #334155;
          --e-indigo: #818cf8;
          --e-teal: #2dd4bf;
          --e-purple: #c084fc;
          --e-amber: #fbbf24;
          --e-green: #4ade80;
          --e-red: #f87171;
          --e-pink: #f472b6;
        }

        body { font-family: 'Inter', sans-serif; background-color: var(--e-bg); color: var(--e-tx); margin: 0; padding: 0; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .bg-e-bg { background-color: var(--e-bg); }
        .bg-e-bg2 { background-color: var(--e-bg2); }
        .bg-e-bg3 { background-color: var(--e-bg3); }
        .text-e-tx { color: var(--e-tx); }
        .text-e-mu { color: var(--e-mu); }
        .text-e-dim { color: var(--e-dim); }
        .border-e-bd { border-color: var(--e-bd); }
        .border-e-bd2 { border-color: var(--e-bd2); }
        .text-e-indigo { color: var(--e-indigo); }
        .text-e-teal { color: var(--e-teal); }
        .text-e-amber { color: var(--e-amber); }
        .text-e-green { color: var(--e-green); }
        .text-e-red { color: var(--e-red); }

        ::-webkit-scrollbar { width:6px; height: 6px; }
        ::-webkit-scrollbar-track { background: var(--e-bg2); }
        ::-webkit-scrollbar-thumb { background: var(--e-bd2); border-radius:3px; }
      `}</style>

      <main id="main" className="flex-1 w-full min-w-0">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14 pb-20 pt-10 md:pt-[60px]">
          <SectionHeader id="resources" sectionNumber="§ 5.3" titleText="Learning" highlightText="Resources" />
          <Paragraph className="mb-10 max-w-3xl">
            A curated collection of the best technical series, repositories, architectures, and deep-dives for building a game engine from scratch.
          </Paragraph>

          {/* Video Series Section */}
            <section id="video-courses" className="mb-14">
              <div className="font-mono text-[10px] tracking-[.1em] uppercase text-e-dim mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-e-red"></span> Video Series
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {youtubeResources.map((resource, idx) => (
                  <div key={idx} className="bg-e-bg2 border border-e-bd rounded-xl p-5 hover:border-e-bd2 transition-colors flex flex-col">
                    <h3 className="text-[15px] font-semibold text-e-tx mb-2">{resource.title}</h3>
                    <p className="text-[13px] text-e-mu mb-4 flex-1">{resource.description}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-e-bd">
                      <div className="flex flex-wrap gap-1.5">
                        {resource.tags.slice(0, 2).map((tag, tidx) => (
                          <span key={tidx} className="text-[10px] font-mono text-e-dim">{tag}</span>
                        ))}
                      </div>
                      <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-[12px] text-e-indigo hover:underline">Watch ↗</a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Articles & Lists Section */}
            <section id="reading" className="mb-16">
              <div className="font-mono text-[10px] tracking-[.1em] uppercase text-e-dim mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-e-teal"></span> Articles & Guides
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {readingResources.map((item, idx) => (
                  <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="block bg-e-bg2 border border-e-bd rounded-xl p-5 hover:bg-e-bg3 transition-colors group">
                    <h3 className="text-[15px] font-semibold text-e-tx group-hover:text-e-teal transition-colors flex items-center justify-between">
                      {item.title}
                      <span className="text-e-dim group-hover:text-e-teal">↗</span>
                    </h3>
                    <div className="text-[11px] font-mono text-e-dim my-1.5">By {item.author}</div>
                    <p className="text-[13px] text-e-mu m-0 mt-2">{item.description}</p>
                  </a>
                ))}
              </div>
            </section>

            <hr className="border-e-bd my-12" />

            {/* GitHub Tabular Section */}
            <section id="repositories">
              <div className="font-mono text-[10px] tracking-[.1em] uppercase text-e-dim mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-e-indigo"></span> Architecture Reference Repositories
              </div>
              
              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {filters.map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3 py-1.5 rounded-full text-[12px] font-medium transition-colors border ${
                      activeFilter === filter 
                        ? 'bg-e-indigo text-white border-e-indigo' 
                        : 'bg-e-bg2 text-e-mu border-e-bd hover:border-e-bd2 hover:text-e-tx'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Data Table */}
              <Table>
                <TableHead headers={['Repository', 'Language', 'Architecture Tags', 'Action']} />
                <tbody>
                  {filteredRepos.length > 0 ? (
                    filteredRepos.map((repo, idx) => (
                      <TableRow key={idx}>
                        <TableCell highlight="text-e-tx font-medium">{repo.title}</TableCell>
                        <TableCell>
                          <span className="text-[12px] text-e-mu bg-e-bg3 border border-e-bd2 px-2 py-0.5 rounded font-mono">
                            {repo.language}
                          </span>
                        </TableCell>
                        <TableCell className="w-1/2">
                          <div className="flex flex-wrap gap-1.5">
                            {repo.tags.map((tag, tidx) => (
                              <span
                                key={tidx}
                                className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getTagStyles(tag)}`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <a
                            href={repo.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[12px] font-medium text-e-indigo hover:text-white transition-colors flex items-center gap-1"
                          >
                            Source ↗
                          </a>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center py-8 text-e-dim text-[13px]">
                        No repositories found matching the "{activeFilter}" filter.
                      </td>
                    </tr>
                  )}
            </tbody>
          </Table>
        </section>

      </div>
    </main>
  </div>
  );
}