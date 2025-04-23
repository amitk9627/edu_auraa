import React from "react";
import Container from "../Container/Container";
import Star from "../../assets/images/star.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const institutes = [
  {
    title: "Ednite Institute For Success",
    rating: 4.9,
    reviews: 410,
    image:
      "https://s3-alpha-sig.figma.com/img/653d/dd7a/217c475954b42f3a52bb7f3962256495?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uEU634UyE4FZCrIjknHMyD7GHmguhnp2kyda6j8pWeLNXQbk2BWreWNZNCy8x9j-JJe~3vKZebxF71~l6tHNyqLoXiqXRBlj83qMAWhgAGHA-FpHEZQ4wdpPb09Pt99hjdyzHM0-tcsTvxxoTNfQdrZdpqjEP8-OCQlF1rSJ7ZRuRNmqmsbSUIgqARYGcx18u1gOa1eucNXN7Nmcq~Fpcf6kYdzjyr6cbmLFbg8oZ92WnwJAz~R9jGholaWHvlm7N0NniXeoYScf1JyLpe5rRyjZUqinp-z4Gmag~OQ9TE6RtT7FC7sYkygdpiw0zX~OsHZ57SoqJCFYP1-M3JHSzw__", // Replace with your image path
    tags: [
      "JEE ADVANCE",
      "NEET",
      "AIMS",
      "AIPMT",
      "FOUNDATION COURSE",
      "JEE MAINS",
    ],
  },
  {
    title: "Spearhead IELTS",
    rating: 4.9,
    reviews: 410,
    image:
      "https://s3-alpha-sig.figma.com/img/653d/dd7a/217c475954b42f3a52bb7f3962256495?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uEU634UyE4FZCrIjknHMyD7GHmguhnp2kyda6j8pWeLNXQbk2BWreWNZNCy8x9j-JJe~3vKZebxF71~l6tHNyqLoXiqXRBlj83qMAWhgAGHA-FpHEZQ4wdpPb09Pt99hjdyzHM0-tcsTvxxoTNfQdrZdpqjEP8-OCQlF1rSJ7ZRuRNmqmsbSUIgqARYGcx18u1gOa1eucNXN7Nmcq~Fpcf6kYdzjyr6cbmLFbg8oZ92WnwJAz~R9jGholaWHvlm7N0NniXeoYScf1JyLpe5rRyjZUqinp-z4Gmag~OQ9TE6RtT7FC7sYkygdpiw0zX~OsHZ57SoqJCFYP1-M3JHSzw__",
    tags: [
      "IELTS",
      "STUDY VISA",
      "TOURIST VISA",
      "IMMIGRATION CONSULTANTS",
      "PTE",
    ],
  },
  {
    title: "Spearhead IELTS",
    rating: 4.9,
    reviews: 410,
    image:
      "https://s3-alpha-sig.figma.com/img/653d/dd7a/217c475954b42f3a52bb7f3962256495?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uEU634UyE4FZCrIjknHMyD7GHmguhnp2kyda6j8pWeLNXQbk2BWreWNZNCy8x9j-JJe~3vKZebxF71~l6tHNyqLoXiqXRBlj83qMAWhgAGHA-FpHEZQ4wdpPb09Pt99hjdyzHM0-tcsTvxxoTNfQdrZdpqjEP8-OCQlF1rSJ7ZRuRNmqmsbSUIgqARYGcx18u1gOa1eucNXN7Nmcq~Fpcf6kYdzjyr6cbmLFbg8oZ92WnwJAz~R9jGholaWHvlm7N0NniXeoYScf1JyLpe5rRyjZUqinp-z4Gmag~OQ9TE6RtT7FC7sYkygdpiw0zX~OsHZ57SoqJCFYP1-M3JHSzw__",
    tags: [
      "IELTS",
      "STUDY VISA",
      "TOURIST VISA",
      "IMMIGRATION CONSULTANTS",
      "PTE",
    ],
  },
  {
    title: "Ednite Institute For Success",
    rating: 4.9,
    reviews: 410,
    image:
      "https://s3-alpha-sig.figma.com/img/653d/dd7a/217c475954b42f3a52bb7f3962256495?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uEU634UyE4FZCrIjknHMyD7GHmguhnp2kyda6j8pWeLNXQbk2BWreWNZNCy8x9j-JJe~3vKZebxF71~l6tHNyqLoXiqXRBlj83qMAWhgAGHA-FpHEZQ4wdpPb09Pt99hjdyzHM0-tcsTvxxoTNfQdrZdpqjEP8-OCQlF1rSJ7ZRuRNmqmsbSUIgqARYGcx18u1gOa1eucNXN7Nmcq~Fpcf6kYdzjyr6cbmLFbg8oZ92WnwJAz~R9jGholaWHvlm7N0NniXeoYScf1JyLpe5rRyjZUqinp-z4Gmag~OQ9TE6RtT7FC7sYkygdpiw0zX~OsHZ57SoqJCFYP1-M3JHSzw__", // Replace with your image path
    tags: [
      "FOUNDATION COURSE",
      "NEET",
      "AIMS",
      "AIPMT",
      "JEE ADVANCE",
      "JEE MAINS",
    ],
  },
  {
    title: "Spearhead IELTS",
    rating: 4.9,
    reviews: 410,
    image:
      "https://s3-alpha-sig.figma.com/img/653d/dd7a/217c475954b42f3a52bb7f3962256495?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uEU634UyE4FZCrIjknHMyD7GHmguhnp2kyda6j8pWeLNXQbk2BWreWNZNCy8x9j-JJe~3vKZebxF71~l6tHNyqLoXiqXRBlj83qMAWhgAGHA-FpHEZQ4wdpPb09Pt99hjdyzHM0-tcsTvxxoTNfQdrZdpqjEP8-OCQlF1rSJ7ZRuRNmqmsbSUIgqARYGcx18u1gOa1eucNXN7Nmcq~Fpcf6kYdzjyr6cbmLFbg8oZ92WnwJAz~R9jGholaWHvlm7N0NniXeoYScf1JyLpe5rRyjZUqinp-z4Gmag~OQ9TE6RtT7FC7sYkygdpiw0zX~OsHZ57SoqJCFYP1-M3JHSzw__",
    tags: [
      "IELTS",
      "STUDY VISA",
      "TOURIST VISA",
      "IMMIGRATION CONSULTANTS",
      "PTE",
    ],
  },
  {
    title: "Spearhead IELTS",
    rating: 4.9,
    reviews: 410,
    image:
      "https://s3-alpha-sig.figma.com/img/653d/dd7a/217c475954b42f3a52bb7f3962256495?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uEU634UyE4FZCrIjknHMyD7GHmguhnp2kyda6j8pWeLNXQbk2BWreWNZNCy8x9j-JJe~3vKZebxF71~l6tHNyqLoXiqXRBlj83qMAWhgAGHA-FpHEZQ4wdpPb09Pt99hjdyzHM0-tcsTvxxoTNfQdrZdpqjEP8-OCQlF1rSJ7ZRuRNmqmsbSUIgqARYGcx18u1gOa1eucNXN7Nmcq~Fpcf6kYdzjyr6cbmLFbg8oZ92WnwJAz~R9jGholaWHvlm7N0NniXeoYScf1JyLpe5rRyjZUqinp-z4Gmag~OQ9TE6RtT7FC7sYkygdpiw0zX~OsHZ57SoqJCFYP1-M3JHSzw__",
    tags: [
      "IELTS",
      "STUDY VISA",
      "TOURIST VISA",
      "IMMIGRATION CONSULTANTS",
      "PTE",
    ],
  },
  {
    title: "Ednite Institute For Success",
    rating: 4.9,
    reviews: 410,
    image:
      "https://s3-alpha-sig.figma.com/img/653d/dd7a/217c475954b42f3a52bb7f3962256495?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uEU634UyE4FZCrIjknHMyD7GHmguhnp2kyda6j8pWeLNXQbk2BWreWNZNCy8x9j-JJe~3vKZebxF71~l6tHNyqLoXiqXRBlj83qMAWhgAGHA-FpHEZQ4wdpPb09Pt99hjdyzHM0-tcsTvxxoTNfQdrZdpqjEP8-OCQlF1rSJ7ZRuRNmqmsbSUIgqARYGcx18u1gOa1eucNXN7Nmcq~Fpcf6kYdzjyr6cbmLFbg8oZ92WnwJAz~R9jGholaWHvlm7N0NniXeoYScf1JyLpe5rRyjZUqinp-z4Gmag~OQ9TE6RtT7FC7sYkygdpiw0zX~OsHZ57SoqJCFYP1-M3JHSzw__", // Replace with your image path
    tags: [
      "FOUNDATION COURSE",
      "NEET",
      "AIMS",
      "AIPMT",
      "JEE ADVANCE",
      "JEE MAINS",
    ],
  },
  {
    title: "Spearhead IELTS",
    rating: 4.9,
    reviews: 410,
    image:
      "https://s3-alpha-sig.figma.com/img/653d/dd7a/217c475954b42f3a52bb7f3962256495?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uEU634UyE4FZCrIjknHMyD7GHmguhnp2kyda6j8pWeLNXQbk2BWreWNZNCy8x9j-JJe~3vKZebxF71~l6tHNyqLoXiqXRBlj83qMAWhgAGHA-FpHEZQ4wdpPb09Pt99hjdyzHM0-tcsTvxxoTNfQdrZdpqjEP8-OCQlF1rSJ7ZRuRNmqmsbSUIgqARYGcx18u1gOa1eucNXN7Nmcq~Fpcf6kYdzjyr6cbmLFbg8oZ92WnwJAz~R9jGholaWHvlm7N0NniXeoYScf1JyLpe5rRyjZUqinp-z4Gmag~OQ9TE6RtT7FC7sYkygdpiw0zX~OsHZ57SoqJCFYP1-M3JHSzw__",
    tags: [
      "IELTS",
      "STUDY VISA",
      "TOURIST VISA",
      "IMMIGRATION CONSULTANTS",
      "PTE",
    ],
  },
  {
    title: "Spearhead IELTS",
    rating: 4.9,
    reviews: 410,
    image:
      "https://s3-alpha-sig.figma.com/img/653d/dd7a/217c475954b42f3a52bb7f3962256495?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uEU634UyE4FZCrIjknHMyD7GHmguhnp2kyda6j8pWeLNXQbk2BWreWNZNCy8x9j-JJe~3vKZebxF71~l6tHNyqLoXiqXRBlj83qMAWhgAGHA-FpHEZQ4wdpPb09Pt99hjdyzHM0-tcsTvxxoTNfQdrZdpqjEP8-OCQlF1rSJ7ZRuRNmqmsbSUIgqARYGcx18u1gOa1eucNXN7Nmcq~Fpcf6kYdzjyr6cbmLFbg8oZ92WnwJAz~R9jGholaWHvlm7N0NniXeoYScf1JyLpe5rRyjZUqinp-z4Gmag~OQ9TE6RtT7FC7sYkygdpiw0zX~OsHZ57SoqJCFYP1-M3JHSzw__",
    tags: [
      "IELTS",
      "STUDY VISA",
      "TOURIST VISA",
      "IMMIGRATION CONSULTANTS",
      "PTE",
    ],
  },
];

const CoachingInstitutes = () => {
  return (
    <div className="py-[60px] max-md:px-4">
      <Container>
        <h2 className="text-[32px] max-md:text-[24px] leading-[36px] text-[#000000] font-semibold mb-[28px]">
          Popular Coaching Institutes
        </h2>
        <div className="w-[100%]  relative">
          <Swiper
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000, // delay between slides (in ms)
              disableOnInteraction: false, // keeps autoplay going after user interaction
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
              },
              640: {
                slidesPerView: 2.25,
              },
              1024: {
                slidesPerView: 3.2,
              },
            }}
            className="pb-10  h-[430px] max-md:h-auto"
          >
            {institutes.map((institute, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="bg-white rounded-[12px] overflow-hidden p-[20px] h-fit"
                >
                  <img
                    src={institute.image}
                    alt={institute.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="font-semibold text-[#333333] text-[20px] max-md:text-[16px] leading-[20px] tracking-normal mb-[10px]">
                    {institute.title}
                  </h3>
                  <div className="flex items-center mb-[20px]">
                    <span className="text-[#373737] text-[16px] max-md:text-[14px] leading-[16px] font-semibold">
                      {institute.rating}
                    </span>
                    <img className="ml-[2px] mr-[7px]" src={Star}></img>
                    <span className="font-normal text-[16px] max-md:text-[12px] leading-[16px] text-[#373737]">
                      {institute.reviews} Reviews
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 h-16 max-md:h-auto">
                    {institute.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className=" bg-[#F3F3F3] text-[14px] max-md:text-[12px] px-[10px] py-[4px] max-md:py-[1px] rounded-[4px] text-[#6B6B6B]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination mt-10 flex justify-center md:block " />
          <div className="swiper-button-next-custom hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
          {/* {institutes.map((institute, index) => (
            <div
              key={index}
              className="bg-white rounded-[12px] overflow-hidden p-[20px]"
            >
              <img
                src={institute.image}
                alt={institute.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="font-semibold text-[#333333] text-[20px] leading-[20px] tracking-normal mb-[10px]">
                {institute.title}
              </h3>
              <div className="flex items-center mb-[20px]">
                <span className="text-[#373737] text-[16px] leading-[16px] font-semibold">
                  {institute.rating}
                </span>
                <img className="ml-[2px] mr-[7px]" src={Star}></img>
                <span className="font-normal text-[16px] leading-[16px] text-[#373737]">
                  {institute.reviews} Reviews
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {institute.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-[#F3F3F3] text-[14px] px-[10px] py-[4px] rounded-[4px] text-[#6B6B6B]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))} */}
        </div>
      </Container>
    </div>
  );
};

export default CoachingInstitutes;
