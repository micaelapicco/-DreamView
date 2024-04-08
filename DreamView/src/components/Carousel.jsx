import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Movies from "./services/movies";

const Carousel = ({ movies }) => {
  const slides = movies.map((Movies) => <SwiperSlide>{movies}</SwiperSlide>);

  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
