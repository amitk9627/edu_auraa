import React, { useEffect, useRef, useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../../../config";
import { useSelector } from "react-redux";

const Media = () => {
  const { instituteId } = useSelector((store) => store.User);
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(`${backendUrl}/app/v1/image/uploadImage/${instituteId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploadStatus("Upload successful!");
      console.log("Server response:", res.data);
      getImage()
    } catch (err) {
      console.error(err);
      setUploadStatus("Upload failed");
    }
  };

  const navigate = useNavigate()
  const inputRef = useRef(null); // for triggering file input
  const [images, setImages] = useState([]);

  useEffect(() => {
      getImage()
  }, []);

  async function getImage(){
   await axios.get(`${backendUrl}/app/v1/image/getImage/${instituteId}`)
    .then(res => {
      console.log(res.data.images)
      setImages(res.data.images)})
    .catch(err => console.error("Failed to fetch images", err));
  }

  function deleteImage(id){
    axios.delete(`${backendUrl}/app/v1/image/deleteImage/${id}`)
    .then(res => {
      console.log(res.data)
      getImage()})
    .catch(err => console.error("Failed to delete images", err));
  }

  // const data = [
  //   {
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //   },
  // ];
  return (
    <div className="flex flex-col gap-5">
      <div className="h-[124px] flex items-center justify-center border border-gray-700 rounded-2xl">
        <div>
          <p
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            }}
            onClick={() => inputRef.current.click()}
          >
            Select a file or drag and drop
          </p>
          <p className="text-xs">PNG, JPG, MP4 upto 50MB</p>

          {/* Hidden file input */}
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            ref={inputRef}
            style={{ display: "none" }}
          />

          <button
            onClick={handleUpload}
            className="bg-gray-50 px-2 py-1 rounded-md"
          >
            Upload
          </button>
          <p>{uploadStatus}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        {images.length > 0 &&
          images.map((item, i) => {
            return (
            <div key={i} className="relative rounded-lg">
              <button className="cursor-pointer absolute top-1 right-7 text-xl">
                <RiPencilLine />
              </button>
              <button className="cursor-pointer absolute top-1 right-1 text-xl" onClick={async() => await deleteImage(item.id)}>
                <MdOutlineDeleteOutline />
              </button>
              <img
                src={`data:${item.contentType};base64,${item.base64}`}
                alt={item.name}
                className="w-[140px] h-[140px]"
              />
            </div>
          )})}
      </div>
      <div className="w-full flex justify-end pt-2">
        <button
          onClick={() => navigate("/my-profile")}
          className="cursor-pointer py-2 w-[30%] flex items-center justify-center text-[#FFFFFF] rounded-[8px] bg-[#5E5BFB] "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Media;
