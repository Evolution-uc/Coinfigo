import  { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

function Write() {
  const progressCircle = useRef<SVGCircleElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      const radius = progressCircle.current.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference * (1 - progress);

      // Use setAttribute to update stroke-dashoffset
      progressCircle.current.setAttribute(
        "stroke-dashoffset",
        offset.toString()
      );
    }

    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[700px] h-64  overflow-hidden flex items-center justify-center bg-blue-500">
            <h1 className="text-white text-2xl font-semibold">
              Thanks COINFIGO as you help me made $20,000 in two <br />
              months,is absolute a game changer for me. <br /> thanks
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[700px] h-64  overflow-hidden flex items-center justify-center  bg-blue-500">
            <h1 className="text-white text-2xl font-semibold">
              "CoinFigo makes investing easy and stress-free! I've seen great
              returns  <br /> and appreciate the platform's simplicity and security."
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[700px] h-64 overflow-hidden flex items-center justify-center  bg-blue-500">
            <h1 className="text-white text-2xl font-semibold">
              "CoinFigo has been a game-changer for my investment strategy. <br /> The
              platform is user-friendly, and I've experienced <br /> solid growth in my
              portfolio. Highly recommend it for anyone <br /> looking to invest with
              confidence!"
            </h1>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          {/* <svg viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" ref={progressCircle}></circle>
        </svg> */}
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default Write;
