import { useState } from 'react';
import { motion } from 'framer-motion';

interface SmoothImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export default function SmoothImage({ src, alt, className, containerClassName, ...props }: SmoothImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#0c0c0e] ${containerClassName || 'w-full h-full'}`}>
      {/* Loading Skeleton */}
      {!isLoaded && (
        <motion.div
          className="absolute inset-0 z-0 bg-white/5"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className || ''}`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}
