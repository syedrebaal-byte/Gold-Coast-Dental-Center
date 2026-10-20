import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export const SmileComparison: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const onMouseDown = () => {
    isDragging.current = true;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="rounded-lg bg-stone-50 border border-stone-200 p-6 sm:p-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#A8895B] uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Aesthetic Transformation</span>
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-stone-900">
            Interactive Smile Makeover Preview
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
            Drag the center divider to inspect how handcrafted porcelain veneers and alignment correct enamel wear, discoloration, and spacing.
          </p>
        </div>

        <div className="text-xs text-stone-500 flex items-center gap-2">
          <MoveHorizontal className="w-4 h-4 text-[#C5A880]" />
          <span>Drag handle horizontally to compare</span>
        </div>
      </div>

      {/* Comparison Viewport */}
      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchMove={onTouchMove}
        className="relative w-full aspect-16/10 sm:aspect-16/9 rounded-lg overflow-hidden select-none cursor-ew-resize border border-stone-200/90 shadow-sm bg-stone-100"
      >
        {/* Layer 1: "After" Image (Complete Aesthetic Veneers) */}
        <img
          src="/assets/images/smile.jpg"
          alt="Completed porcelain veneer smile makeover by Dr. Jerry Karedan"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Layer 2: "Before" Simulated Enamel Discoloration & Wear with clip-path */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          {/* We apply a natural slight desaturation and warm tint to simulate pre-treatment discoloration */}
          <img
            src="/assets/images/smile.jpg"
            alt="Pre-treatment dental condition before cosmetic restoration"
            className="w-full h-full object-cover filter contrast-90 brightness-90 sepia-[0.35] hue-rotate-[340deg]"
          />
          <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide px-3 py-1 rounded">
            Pre-Treatment Presentation
          </div>
        </div>

        {/* After Label (Right side) */}
        <div
          className="absolute top-4 right-4 bg-stone-900/80 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide px-3 py-1 rounded pointer-events-none"
          style={{ opacity: sliderPosition < 85 ? 1 : 0.2 }}
        >
          Dr. Jerry Veneer Restoration
        </div>

        {/* Draggable Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-xl pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular Slider Button Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-stone-900 text-[#C5A880] border-2 border-white flex items-center justify-center shadow-lg">
            <MoveHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Case Details */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-4 border-t border-stone-200 text-xs">
        <div>
          <span className="font-semibold text-stone-800 block mb-0.5">Clinical Challenge</span>
          <p className="text-stone-500 leading-relaxed">
            Incisal edge chipping, intrinsic tetracycline staining, and uneven gumline symmetry causing smile reluctance.
          </p>
        </div>
        <div>
          <span className="font-semibold text-stone-800 block mb-0.5">Custom Treatment Plan</span>
          <p className="text-stone-500 leading-relaxed">
            Conservative preparation of 8 upper porcelain veneers with custom gradation and Pankey smile-curve integration.
          </p>
        </div>
        <div>
          <span className="font-semibold text-stone-800 block mb-0.5">Patient Outcome</span>
          <p className="text-stone-500 leading-relaxed">
            Luminous, natural enamel translucency with perfect lip support and restored chewing stability.
          </p>
        </div>
      </div>
    </div>
  );
};
