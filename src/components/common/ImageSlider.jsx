import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

export default function ImageSlider({ imageList }) {
  return (
    <div className="relative">
      <Swiper>
        {imageList.map((image, index) => (
          <SwiperSlide
            key={index}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spacebetween={50}
            slidesperview={3}
          >
            <div className="absolute top-2 right-2 bg-black/30 px-2 rounded-md text-white font-semibold">
              {index + 1}
            </div>
            <img
              src={image.photoURL}
              alt="이미지"
              className="w-full h-[360px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
