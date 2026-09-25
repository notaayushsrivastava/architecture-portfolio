'use client';

import React, { useState, useEffect } from 'react';
import { X, Sparkles, Construction, ArrowRight } from 'lucide-react';

interface ModalData {
  isOpen: boolean;
  title: string;
  description: string;
  href?: string;
}

export function UnimplementedModal() {
  const [modalData, setModalData] = useState<ModalData>({
    isOpen: false,
    title: 'Yet to be implemented',
    description: 'This monograph or section is currently under preparation and will be available in the upcoming portfolio release.',
  });

  const closeModal = () => {
    setModalData((prev) => ({ ...prev, isOpen: false }));
  };

  useEffect(() => {
    // Global click listener for all anchor tags with hash links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Check if it's a hash link
      if (href.startsWith('#')) {
        const targetId = href.substring(1);
        if (!targetId) {
          e.preventDefault();
          setModalData({
            isOpen: true,
            title: 'Yet to be implemented',
            description: 'This feature or page is currently in development.',
            href,
          });
          return;
        }

        const element = document.getElementById(targetId);
        // If the element does not exist on the page, intercept and open modal
        if (!element) {
          e.preventDefault();
          let customTitle = 'Yet to be implemented';
          let customDesc = 'This monograph or section is currently under preparation and will be available in the upcoming portfolio release.';

          if (href.startsWith('#project-')) {
            const projectName = targetId.replace('project-', '').replace(/-/g, ' ');
            customTitle = `Project Case Study: ${projectName.toUpperCase()}`;
            customDesc = `The full architectural drawings, axonometric diagrams, and high-resolution monographs for this project are currently being compiled for publication.`;
          } else if (href === '#blog') {
            customTitle = 'Architectural Journal & Essays';
            customDesc = 'The architectural publication journal and spatial essays are currently in preparation.';
          } else if (href === '#privacy' || href === '#terms' || href === '#faq') {
            customTitle = 'Legal & Atelier Documentation';
            customDesc = 'Studio guidelines, commission terms, and frequently asked questions are available upon direct inquiry.';
          }

          setModalData({
            isOpen: true,
            title: customTitle,
            description: customDesc,
            href,
          });
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!modalData.isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop overlay with blur */}
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-canvas rounded-3xl border border-line-hairline shadow-2xl p-6 sm:p-8 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header Row with Badge & Close Button */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-mono text-[11px] uppercase tracking-wider font-semibold">
            <Construction className="w-3.5 h-3.5" />
            <span>Yet to be implemented</span>
          </div>

          <button
            type="button"
            onClick={closeModal}
            className="w-8 h-8 rounded-full border border-line-hairline bg-canvas-surface hover:bg-neutral-200 text-ink-primary flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="flex flex-col gap-3">
          <h3
            id="modal-title"
            className="text-xl sm:text-2xl font-bold text-ink-primary tracking-tight"
          >
            {modalData.title}
          </h3>

          <p className="text-sm text-ink-secondary leading-relaxed font-light">
            {modalData.description}
          </p>

          {modalData.href && (
            <div className="mt-2 py-2 px-3 bg-canvas-surface rounded-xl border border-line-hairline flex items-center justify-between text-xs font-mono text-ink-muted">
              <span>Target Reference:</span>
              <span className="text-ink-primary font-semibold">{modalData.href}</span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-8 pt-5 border-t border-line-hairline flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={closeModal}
            className="px-6 py-2.5 rounded-full bg-ink-primary text-white text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-colors active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <span>Understood</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
