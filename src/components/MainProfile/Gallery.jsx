import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import AcademyDetails from "./AcademyDetails";
import { backendUrl } from "../../config";
import { useSelector } from "react-redux";
import axios from "axios";

const Gallery = ({ insData }) => {
  const { instituteId } = useSelector((store) => store.User);
  const [imageData, setImageData] = useState([]);

  const images = [
    {
      id: 1,
      src: `${
        imageData.length > 0
          ? `data:${imageData[0].contentType};base64,${imageData[0].base64}`
          : ""
      }`,
      alt: "Main Image",
      large: true,
    },
    {
      id: 2,
      src: `${
        imageData.length > 1
          ? `data:${imageData[1].contentType};base64,${imageData[1].base64}`
          : ""
      }`,
      alt: "Small Image 1",
      large: false,
    },
    {
      id: 3,
      src: `${
        imageData.length > 2
          ? `data:${imageData[2].contentType};base64,${imageData[2].base64}`
          : ""
      }`,
      alt: "Small Image 2",
      large: false,
    },
  ];
  async function getImage() {
    await axios
      .get(`${backendUrl}/app/v1/image/getImage/${instituteId}`)
      .then((res) => {
        console.log(res.data.images);
        setImageData(res.data.images);
      })
      .catch((err) => console.error("Failed to fetch images", err));
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    <Container>
      {/* Image Grid */}
      <AcademyDetails insData={insData} />
      <div className="mt-6 mb-10 grid grid-cols-3 gap-4 px-[16px] md:px-0">
        {/* Left Big Image */}
        <div className="col-span-2">
          <div className="bg-gray-200 rounded-md h-80 flex items-center justify-center">
            {images[0].src ? (
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-80 object-cover rounded-md"
              />
            ) : (
              <span className="text-gray-400">{"Image"}</span>
            )}
          </div>
        </div>

        {/* Right 2 Small Images */}
        <div className="flex flex-col space-y-4">
          {images.slice(1).map((image, index) => (
            <div
              key={image.id}
              className="bg-gray-200 rounded-md h-38 flex items-center justify-center relative"
            >
              {image.src ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-38 object-cover rounded-md "
                />
              ) : (
                <span className="text-gray-400">{"Image"}</span>
              )}

              {/* Show all button on last image */}
              {index === 1 && (
                <button className="absolute bottom-[16px] right-[16px] bg-[#737373] text-white text-xs px-[20px] py-[10px] rounded-md">
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
