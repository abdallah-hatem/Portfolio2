/**
 * Rough-ink displacement used on display type. The reference site bakes its big
 * headings as distressed images; this keeps the type live and roughens the edges
 * at render time instead.
 */
export function PosterFilters() {
  return (
    <svg className="poster-filters" aria-hidden="true" focusable="false">
      <filter id="poster-ink" x="-6%" y="-6%" width="112%" height="112%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.82"
          numOctaves="3"
          seed="7"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="1.7"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}
