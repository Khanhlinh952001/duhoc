import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CarouselComponent = (props) => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={3000} // Adjust the autoPlaySpeed to make it slower
      keyBoardControl={true}
      customTransition="all .8" // Adjust transition speed
      transitionDuration={800} // Adjust transition duration
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item"
    >
      <div className="mx-2 relative">
        <img
          className="h-80 w-80 enlarged-image"
          src="https://www.mokwon.ac.kr/kr/img/sub03/sub030407_img01.jpg"
          alt="Item 1"
        />
        <div className="absolute top-0 left-0 right-0 mt-4 mr-12 text-black text-center">
          <h1 className="text-lg font-bold bg-white rounded-xl">MOKWON UNIVERSITY</h1>
        </div>
      </div>

      <div className="mx-2 relative">
        <img
          className="h-80 w-80 enlarged-image"
          src="https://plus.cnu.ac.kr/Upl/en/_main_swap/en_main_swap_0_1678256154.jpg"
          alt="Item 1"
        />
        <div className="absolute top-0 left-0 right-0 mt-4 mr-12 text-black text-center">
          <h1 className="text-lg font-bold bg-white rounded-xl">CHUNGNAM UNIVERSITY</h1>
        </div>
      </div>
      <div className="mx-2 relative">
        <img
          className="h-80 w-80 enlarged-image"
          src="https://ktmeducational.edu.np/uploads/gallery/imgpreview.jpg"
          alt="Item 1"
        />
        <div className="absolute top-0 left-0 right-0 mt-4 mr-12 text-black text-center">
          <h1 className="text-lg font-bold bg-white rounded-xl">HANNAM UNIVERSITY</h1>
        </div>
      </div>
      <div className="mx-2 relative">
        <img
          className="h-80 w-80 enlarged-image"
          src="https://uploaded.kcampus.kr/large_20230222_78421520_cd31a79631.jpg"
          alt="Item 1"
        />
        <div className="absolute top-0 left-0 right-0 mt-4 mr-12 text-black text-center">
          <h1 className="text-lg font-bold bg-white rounded-xl ">HANBAT UNIVERSITY</h1>
        </div>
      </div>
      {/* ... rest of the code ... */}
    </Carousel>
  );
};

export default CarouselComponent;
