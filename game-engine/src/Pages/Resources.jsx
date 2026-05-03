import React, { useEffect } from "react";
import { SectionHeader, Paragraph } from "../components/GlobalComponents";

const Resources = () => {
  

  // YouTube resources data
  const youtubeResources = [
    {
      title: "The Cherno — Game Engine Series",
      description:
        "190+ episode series building Hazel, a real C++ engine from zero — window, event system, renderer, ECS, scripting layer. The most thorough 'build it yourself' course on YouTube.",
      tags: ["Renderer", "ECS", "Editor / ImGui", "C++", "OpenGL", "Beginner → Advanced"],
      link: "https://www.youtube.com/playlist?list=PLlrATfBNZ98dC-V-N3m0Go4deliWHPFwT",
      linkText: "youtube.com/playlist ↗",
    },
    {
      title: "javidx9 (OneLoneCoder) — olcPixelGameEngine",
      description:
        "Builds an entire 2D pixel engine from scratch in C++, then uses it to explain game loop, sprites, tilemaps, raycasting, and pathfinding in self-contained videos. Exceptional for understanding 2D internals.",
      tags: ["2D Renderer", "Physics", "Tilemap", "C++", "Intermediate"],
      link: "https://www.youtube.com/@javidx9",
      linkText: "youtube.com/@javidx9 ↗",
    },
    {
      title: "pikuma — '2D Game Engine from Scratch in C++'",
      description:
        "Structured course-style playlist covering SDL2 windowing, game loop, ECS design, asset store, event system, collision, and Lua scripting integration — exactly the MVP path for an in-house engine.",
      tags: ["ECS", "Asset Store", "Lua scripting", "SDL2", "Structured course"],
      link: "https://www.youtube.com/@pikuma",
      linkText: "youtube.com/@pikuma ↗",
    },
    {
      title: "Sebastian Lague — Coding Adventures",
      description:
        "Deep-dives into specific engine subsystems: procedural terrain, pathfinding, mesh generation, fluid simulation, ray tracing. Each video teaches a concrete system with real source code.",
      tags: ["Renderer", "Simulation", "Pathfinding", "C# / Unity", "All levels"],
      link: "https://www.youtube.com/@SebastianLague",
      linkText: "youtube.com/@SebastianLague ↗",
    },
    {
      title: "ThinMatrix — OpenGL 3D Game Engine in Java",
      description:
        "Long-running series building a full engine from LWJGL upward — VAOs, shaders, textures, terrain, water rendering, GUI. Great model for understanding how the rendering pipeline is layered.",
      tags: ["OpenGL pipeline", "Shaders", "Java / LWJGL", "Intermediate"],
      link: "https://www.youtube.com/@ThinMatrix",
      linkText: "youtube.com/@ThinMatrix ↗",
    },
    {
      title: "Game Maker's Toolkit — How Game Engines Work",
      description:
        "Design-theory videos explaining how physics, camera systems, animation state machines, and AI work across multiple engines. Essential for understanding the 'why' behind architectural decisions.",
      tags: ["Physics", "Camera systems", "AI / pathfinding", "Engine-agnostic"],
      link: "https://www.youtube.com/@GMTK",
      linkText: "youtube.com/@GMTK ↗",
    },
    {
      title: "Travis Vroman — Kohi Game Engine",
      description:
        "Livestream series building a cross-platform C engine from scratch using Vulkan. Covers memory management, platform abstraction, renderer backend abstraction, and the plugin architecture pattern.",
      tags: ["Vulkan renderer", "Memory mgmt", "C", "Advanced"],
      link: "https://www.youtube.com/@TravisVroman",
      linkText: "youtube.com/@TravisVroman ↗",
    },
    {
      title: "GDQuest — Godot Engine deep dives",
      description:
        "Professional-quality Godot tutorials covering its 2D renderer, scene system, signals (event bus), shader graph, and animation player — excellent for studying how a shipped engine exposes these concepts to developers.",
      tags: ["Scene editor", "2D renderer", "Audio", "GDScript", "Open source"],
      link: "https://www.youtube.com/@Gdquest",
      linkText: "youtube.com/@Gdquest ↗",
    },
    {
      title: "Bisqwit — 'Making a NES game' / retro engine building",
      description:
        "Fascinating deep-dives into sprite rendering, tile engines, palette systems, and game loop timing from a hardware-level perspective. Unmatched for understanding why 2D engine primitives are designed the way they are.",
      tags: ["Sprite engine", "Tilemaps", "Hardware-level", "C++", "Advanced"],
      link: "https://www.youtube.com/@Bisqwit",
      linkText: "youtube.com/@Bisqwit ↗",
    },
  ];

  // GitHub resources data
  const githubResources = [
    {
      title: "godotengine/godot",
      description:
        "The gold standard open-source engine. Its 2D renderer is purpose-built (not a scaled 3D pipeline), the scene editor is best-in-class, and its signal system is a clean event bus implementation to study.",
      tags: ["GUI editor", "Dedicated 2D renderer", "Asset pipeline", "Audio bus", "Physics 2D"],
      language: "C++",
      stars: "★ 94k",
      link: "https://github.com/godotengine/godot",
    },
    {
      title: "bevyengine/bevy",
      description:
        "The best reference for a modern ECS-first engine design. Its scheduler (parallel systems, data-driven ordering) and asset system are the most forward-thinking in any open-source engine.",
      tags: ["ECS architecture", "Asset server", "wgpu renderer", "Hot reload", "WASM target"],
      language: "Rust",
      stars: "★ 38k",
      link: "https://github.com/bevyengine/bevy",
    },
    {
      title: "cocos2d/cocos2d-x",
      description:
        "Battle-tested 2D engine used by millions of mobile games. Its sprite batching, texture atlas management, and tilemap system are excellent production-grade references.",
      tags: ["Sprite batching", "Texture atlas", "Mobile first", "Box2D + Chipmunk", "Audio engine"],
      language: "C++",
      stars: "★ 18k",
      link: "https://github.com/cocos2d/cocos2d-x",
    },
    {
      title: "photonstorm/phaser",
      description:
        "The dominant 2D browser game framework. Its scene manager, loader (asset pipeline), and WebGL renderer architecture are clean and well-documented — ideal for studying how a web-targeted engine organises these systems.",
      tags: ["Browser / WebGL", "Scene manager", "Loader system", "WebGL renderer", "Arcade physics"],
      language: "TypeScript",
      stars: "★ 37k",
      link: "https://github.com/photonstorm/phaser",
    },
    {
      title: "raysan5/raylib",
      description:
        "Deceptively simple — no classes, no ECS, just functions. Studying raylib teaches you the minimal primitive set a 2D engine actually needs. Its entire public API fits on one page.",
      tags: ["Minimal renderer", "Audio system", "Learn-by-reading", "No dependencies", "WASM"],
      language: "C",
      stars: "★ 24k",
      link: "https://github.com/raysan5/raylib",
    },
    {
      title: "love2d/love",
      description:
        "LÖVE exposes every engine subsystem (graphics, audio, physics, filesystem, input) as clean Lua modules. Reading its C++ source reveals how a scripting bridge sits on top of a native engine layer.",
      tags: ["OpenGL renderer", "Box2D binding", "OpenAL", "Filesystem layer", "Lua scripting"],
      language: "C++ / Lua",
      stars: "★ 5k",
      link: "https://github.com/love2d/love",
    },
    {
      title: "FyroxEngine/Fyrox",
      description:
        "The only Rust engine with a full scene editor comparable to Godot. Strong for studying how an editor integrates with an ECS runtime and how serialization, property inspection, and undo/redo are architected.",
      tags: ["Scene editor", "ECS", "2D + 3D renderer", "Asset browser", "Rapier physics"],
      language: "Rust",
      stars: "★ 8k",
      link: "https://github.com/FyroxEngine/Fyrox",
    },
    {
      title: "libgdx/libgdx",
      description:
        "14-year-old cross-platform engine still shipping games. Its SpriteBatch, AssetManager, InputProcessor, and Box2D integration are textbook implementations of the core 2D systems a game needs.",
      tags: ["SpriteBatch", "AssetManager", "Android / iOS", "Box2D", "OpenAL"],
      language: "Java / Kotlin",
      stars: "★ 23k",
      link: "https://github.com/libgdx/libgdx",
    },
    {
      title: "TheCherno/Hazel",
      description:
        "The companion repo to The Cherno's YouTube series. Clean layered architecture — application → layer stack → renderer → ECS. Ideal to read alongside the videos as a real, buildable codebase.",
      tags: ["OpenGL + Vulkan", "entt ECS", "ImGui editor", "Educational", "Well-documented"],
      language: "C++",
      stars: "★ 15k",
      link: "https://github.com/TheCherno/Hazel",
    },
  ];

  // Helper: tag color styles (dark theme friendly)
  const getTagStyles = (tag) => {
    const lowerTag = tag.toLowerCase();
    if (lowerTag.includes("render")) return "bg-blue-900/50 text-blue-200";
    if (lowerTag.includes("ecs")) return "bg-yellow-900/50 text-yellow-200";
    if (lowerTag.includes("gui") || lowerTag.includes("scene editor") || lowerTag.includes("editor")) return "bg-green-900/50 text-green-200";
    if (lowerTag.includes("physics")) return "bg-red-900/50 text-red-200";
    if (lowerTag.includes("asset")) return "bg-purple-900/50 text-purple-200";
    if (lowerTag.includes("audio")) return "bg-pink-900/50 text-pink-200";
    if (lowerTag.includes("mobile")) return "bg-cyan-900/50 text-cyan-200";
    if (lowerTag.includes("web") || lowerTag.includes("browser")) return "bg-emerald-900/50 text-emerald-200";
    return "bg-gray-800 text-gray-300";
  };

  return (
    <div className="bg-e-bg text-e-tx font-sans text-[15px] leading-[1.7] flex min-h-screen overflow-x-hidden">
      <main className="md:ml-[260px] flex-1 min-w-0">
        <div className="px-8 md:px-14 pb-20 pt-[60px]">
          <SectionHeader 
            id="resources" 
            sectionNumber="§ 5.3" 
            titleText="Learning" 
            highlightText="Resources" 
          />
          
          <Paragraph className="mb-10">
            A curated collection of the best technical series, repositories, and deep-dives for building a 2D Game Engine from scratch.
          </Paragraph>

          {/* YouTube Section */}
          <section className="mb-16">
            <div className="font-mono text-[10px] tracking-[.1em] uppercase text-e-dim mb-5">
              YouTube — understand how game engines work
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {youtubeResources.map((resource, idx) => (
                <div
                  key={idx}
                  className="bg-e-bg2 border border-e-bd rounded-xl p-5 transition-all hover:border-e-bd2 flex flex-col"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-md bg-e-red-b text-e-red flex items-center justify-center text-sm font-bold">
                      ▶
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-medium text-e-tx">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-e-mu mt-1 leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {resource.tags.map((tag, tidx) => (
                          <span
                            key={tidx}
                            className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${getTagStyles(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-e-indigo hover:opacity-80 mt-4"
                      >
                        {resource.linkText}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-e-bd my-12" />

          {/* GitHub Section */}
          <section>
            <div className="font-mono text-[10px] tracking-[.1em] uppercase text-e-dim mb-5">
              GitHub — 2D game engine repositories
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {githubResources.map((repo, idx) => (
                <div
                  key={idx}
                  className="bg-e-bg2 border border-e-bd rounded-xl p-5 transition-all hover:border-e-bd2 flex flex-col"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-md bg-e-bg3 text-e-mu flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-medium text-e-tx break-words">
                            {repo.title}
                          </h3>
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-e-bg3 text-e-mu font-mono">
                            {repo.language}
                          </span>
                        </div>
                        <span className="text-xs text-e-mu whitespace-nowrap">{repo.stars}</span>
                      </div>
                      <p className="text-sm text-e-mu mt-1 leading-relaxed">
                        {repo.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {repo.tags.map((tag, tidx) => (
                          <span
                            key={tidx}
                            className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${getTagStyles(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={repo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-e-indigo hover:opacity-80 mt-4 break-all"
                      >
                        {repo.link} ↗
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Resources;