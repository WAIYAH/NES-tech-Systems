
import React, { useRef, useEffect } from "react";

interface ParallaxImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, className, ...props }) => {
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const y = rect.top / window.innerHeight;
      ref.current.style.transform = `scale(1.07) translateY(${y * 12}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={`transition-transform duration-700 ${className || ""}`}
      {...props}
    />
  );
};

export default ParallaxImage;
