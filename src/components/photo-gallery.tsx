"use client";

import { galleryImages } from "@/data/gallery";
import { useBatchAnimation } from "@/hooks/use-scroll-animation";

export function PhotoGallery() {
  const containerRef = useBatchAnimation({
    childSelector: ".gallery-item",
    stagger: 0.05,
  });

  return (
    <section id="gallery" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-mono text-3xl font-bold sm:text-4xl">
          <span className="text-js-yellow">Photo</span> Gallery
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          Moments from our community events
        </p>

        <div
          ref={containerRef}
          className="mt-12 columns-2 gap-4 space-y-4 sm:columns-3 lg:columns-4"
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item group relative overflow-hidden rounded-lg break-inside-avoid"
            >
              <div
                className={`${image.height} w-full`}
                style={{ backgroundColor: image.color + "20" }}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `linear-gradient(135deg, ${image.color}40, transparent)`,
                  }}
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                <p className="p-3 text-sm text-white">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
