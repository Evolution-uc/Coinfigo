import  { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";




function Autos() {
    const progressCircle = useRef<SVGCircleElement>(null);
    const progressContent = useRef<HTMLSpanElement>(null);
  
    const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
      if (progressCircle.current) {
        const radius = progressCircle.current.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference * (1 - progress);
  
        // Use setAttribute to update stroke-dashoffset
        progressCircle.current.setAttribute('stroke-dashoffset', offset.toString());
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
        <div className="w-[550px] h-80 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
          <img src={item1} alt="Circular Image" className="w-full h-full object-cover" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[550px] h-80 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
          <img src={item2} alt="Circular Image" className="w-full h-full object-cover" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[550px] h-80 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
          <img src={item3} alt="Circular Image" className="w-full h-full object-cover" />
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
  )
}

export default Autos