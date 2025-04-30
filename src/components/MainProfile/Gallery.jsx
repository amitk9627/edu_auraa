import React from "react";
import Container from "../Container/Container";
import AcademyDetails from "./AcademyDetails";

const Gallery = () => {
  const images = [
    { id: 1, src: "", alt: "Main Image", large: true },
    { id: 2, src: "", alt: "Small Image 1", large: false },
    { id: 3, src: "", alt: "Small Image 2", large: false },
  ];

  return (
    <Container>
      {/* Image Grid */}
      <AcademyDetails />
      <div className="mt-6 mb-10 grid grid-cols-3 gap-4">
        {/* Left Big Image */}
        <div className="col-span-2">
          <div className="bg-gray-200 rounded-md h-80 flex items-center justify-center">
            <span className="text-gray-400">
              {images[0].alt || "Image"}
            </span>
          </div>
        </div>

        {/* Right 2 Small Images */}
        <div className="flex flex-col space-y-4">
          {images.slice(1).map((image, index) => (
            <div key={image.id} className="bg-gray-200 rounded-md h-36 flex items-center justify-center relative">
              <span className="text-gray-400">{image.alt || "Image"}</span>

              {/* Show all button on last image */}
              {index === 1 && (
                <button className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-md">
                  Show all
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
