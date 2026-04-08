const FestiveBackground = () => (
  <div
    className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    aria-hidden="true"
  >
    {/* Subtle stripe pattern inspired by brand palette */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `repeating-linear-gradient(
          90deg,
          hsl(170 45% 50%) 0px,
          hsl(170 45% 50%) 12px,
          transparent 2px,
          transparent 80px
          
        )`,
      }}
    />
    {/* Soft color blobs */}
    <div className="absolute top-[15%] -left-32 w-96 h-96 rounded-full bg-primary/[0.04] blur-3xl" />
    <div className="absolute top-[50%] -right-32 w-80 h-80 rounded-full bg-secondary/[0.05] blur-3xl" />
    <div className="absolute bottom-[10%] left-1/3 w-72 h-72 rounded-full bg-accent/[0.04] blur-3xl" />
  </div>
);

export default FestiveBackground;
