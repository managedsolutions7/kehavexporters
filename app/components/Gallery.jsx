"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Gallery Images Array
const galleryImages = [
  { id: 1, src: "/gallery-1.jpg", alt: "State-of-the-art laboratory" },
  { id: 2, src: "/gallery-2.jpg", alt: "Warehouse and logistics operations" },
  { id: 3, src: "/gallery-3.jpeg", alt: "Our dedicated team at work" },
  {
    id: 4,
    src: "/gallery-4.jpeg",
    alt: "Quality control and assurance process",
  },
  { id: 5, src: "/gallery-6.jpg", alt: "Packaging and shipping facility" },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="bg-gradient-to-br from-[#4A945B]/5 to-blue-50/50 py-16 md:py-24 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A3A5A] mb-4">
            Company{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A945B] to-[#5cb670]">
              Gallery
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Take a visual journey through our state-of-the-art facilities,
            dedicated team, and world-class operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={img.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="absolute object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {img.alt}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      Click to view larger
                    </p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5 text-[#1A3A5A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-4 border-t-2 border-[#4A945B]/20">
                <p className="text-gray-700 font-medium text-center">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={galleryImages.map((img) => ({
            src: img.src,
            alt: img.alt,
          }))}
          index={lightboxIndex}
          plugins={[Thumbnails]}
          carousel={{ finite: false }}
          thumbnails={{
            position: "bottom",
            width: 80,
            height: 60,
            border: 2,
            borderRadius: 8,
          }}
        />
      </div>
    </section>
  );
}
