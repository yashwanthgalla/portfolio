import { useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 40,
  stiffness: 80,
  mass: 1.5,
};

interface TiltedCardProps {
  imageSrc: string;
  altText?: string;
  captionText?: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: ReactNode;
  displayOverlayContent?: boolean;
}

export default function TiltedCard({
  imageSrc,
  altText = "Organic image card",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.05,
  rotateAmplitude = 8,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 300,
    damping: 40,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.5);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative flex flex-col items-center justify-center [perspective:1000px] overflow-hidden select-none"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative [transform-style:preserve-3d] border border-[#E6E2DA] rounded-[40px] overflow-hidden bg-[#F2F0EB] group shadow-[0_10px_25px_rgba(45,58,49,0.03)]"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-[40px] transition-all duration-700 ease-out"
        />

        {displayOverlayContent && overlayContent && (
          <div className="absolute inset-0 flex items-center justify-center rounded-[40px] bg-[#2D3A31]/40 text-white">
            {overlayContent}
          </div>
        )}
      </motion.div>

      {showTooltip && captionText && (
        <motion.figcaption
          className="pointer-events-none absolute top-0 left-0 rounded-full border border-[#E6E2DA] bg-white/95 backdrop-blur-xs px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#2D3A31] shadow-[0_4px_10px_rgba(45,58,49,0.05)]"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
