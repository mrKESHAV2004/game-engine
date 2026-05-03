import React, { useEffect, useState } from 'react';
import { SectionHeader, FeatureCard, Badge, Paragraph, SubHeading } from '../components/GlobalComponents';

const Documents = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const docs = [
    {
      id: 'arch-pdf',
      title: "Architecture Blueprint",
      description: "Full technical specification of the 5-tier engine architecture.",
      file: "/2D_Game_Engine_Architecture.pdf",
      type: "PDF Viewer",
      badgeType: "indigo",
      icon: "📄"
    },
    {
      id: 'clean-pdf',
      title: "Clean Code Guide",
      description: "Best practices for engine module decoupling and maintenance.",
      file: "/2d_engine_clean.pdf",
      type: "PDF Viewer",
      badgeType: "indigo",
      icon: "📄"
    },
    {
      id: 'frame-video',
      title: "16ms Frame Analysis",
      description: "Video breakdown of performance and frame timing constraints.",
      file: "/Anatomy_of_a_16-Millisecond_Frame__2D_Engine_Architecture.mp4",
      type: "Video Player",
      badgeType: "red",
      icon: "🎥"
    },
    {
      id: 'arch-ppt',
      title: "Slide Deck",
      description: "Architectural walkthrough presentation slides.",
      file: "/2D_Game_Engine_Architecture.pptx",
      type: "Download PPTX",
      badgeType: "amber",
      icon: "📊"
    }
  ];

  const renderViewer = () => {
    if (!selectedDoc) return (
      <div className="flex items-center justify-center h-full text-e-dim font-mono text-sm border-2 border-dashed border-e-bd rounded-2xl">
        Select a document to preview
      </div>
    );

    if (selectedDoc.file.endsWith('.pdf')) {
      return (
        <iframe 
          src={selectedDoc.file} 
          className="w-full h-full rounded-2xl border border-e-bd bg-white"
          title={selectedDoc.title}
        />
      );
    }

    if (selectedDoc.file.endsWith('.mp4')) {
      return (
        <video controls className="w-full max-h-full rounded-2xl border border-e-bd bg-black">
          <source src={selectedDoc.file} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center h-full text-e-mu border border-e-bd rounded-2xl bg-e-bg2 p-8 text-center">
        <div className="text-4xl mb-4">📊</div>
        <h4 className="text-white font-bold mb-2">{selectedDoc.title}</h4>
        <p className="text-sm mb-6">Preview not available for PPTX files in browser.</p>
        <a 
          href={selectedDoc.file} 
          className="bg-e-amber text-e-bg px-6 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
        >
          Download for Offline Viewing
        </a>
      </div>
    );
  };

  return (
    <div className="bg-e-bg text-e-tx font-sans text-[15px] leading-[1.7] flex min-h-screen overflow-x-hidden">
      <main className="md:ml-[260px] flex-1 min-w-0">
        <div className="px-8 md:px-14 pb-20 pt-[60px]">
          <SectionHeader 
            id="documents" 
            sectionNumber="§ 5.2" 
            titleText="Project" 
            highlightText="Library" 
          />
          
          <div className="flex flex-col lg:flex-row gap-8 mt-8">
            {/* Sidebar List */}
            <div className="lg:w-1/3 flex flex-col gap-4">
              <SubHeading className="mt-0">Select Document</SubHeading>
              {docs.map((doc) => (
                <button 
                  key={doc.id}
                  onClick={() => setSelectedDoc(doc)}
                  className={`text-left transition-all duration-200 ${selectedDoc?.id === doc.id ? 'scale-[1.02]' : ''}`}
                >
                  <FeatureCard 
                    title={doc.title}
                    description={doc.description}
                    icon={doc.icon}
                    iconBg={`bg-e-${doc.badgeType}-b`}
                    borderTopColor={selectedDoc?.id === doc.id ? `border-t-e-teal` : `border-t-e-${doc.badgeType}`}
                  >
                    <Badge type={doc.badgeType}>{doc.type}</Badge>
                  </FeatureCard>
                </button>
              ))}
            </div>

            {/* Viewer Area */}
            <div className="lg:w-2/3 flex flex-col gap-4">
              <SubHeading className="mt-0">Document Preview</SubHeading>
              <div className="h-[600px] sticky top-[60px]">
                {renderViewer()}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Documents;