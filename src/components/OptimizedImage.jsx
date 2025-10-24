export default function OptimizedImage({ imageUrl, alt = "", priority = false, className, width, height }) {
  // Enhanced optimizations for better performance:
  // - Use native lazy-loading unless image is marked as priority
  // - Use async decoding
  // - Add fetchpriority="high" when priority is true
  // - Add width/height attributes to prevent layout shift (CLS)
  return (
    <img
      src={imageUrl}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchpriority={priority ? "high" : undefined}
      className={className}
      width={width}
      height={height}
      style={width && height ? { aspectRatio: `${width}/${height}` } : undefined}
    />
  );
}
