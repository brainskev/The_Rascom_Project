"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Marvin McKinney",
    title: "Marketing Coordinator",
    text: "I want to express my gratitude to Rascom as a company for their dedication and transparency with clients. I am impressed and inspired to invest with Rascom and will happily recommend them to friends. Thank you, Rascom, and your outstanding staff..",
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    title: "President of Sales",
    text: "I want to express my gratitude to Rascom as a company for their dedication and transparency with clients. I am impressed and inspired to invest with Rascom and will happily recommend them to friends. Thank you, Rascom, and your outstanding staff.",
  },
  {
    id: 3,
    name: "Marvin McKinney",
    title: "Marketing Coordinator",
    text: "I want to express my gratitude to Rascom as a company for their dedication and transparency with clients. I am impressed and inspired to invest with Rascom and will happily recommend them to friends. Thank you, Rascom, and your outstanding staff..",
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    title: "President of Sales",
    text: "I want to express my gratitude to Rascom as a company for their dedication and transparency with clients. I am impressed and inspired to invest with Rascom and will happily recommend them to friends. Thank you, Rascom, and your outstanding staff.",
  },
];

const Testimonial = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        speed={1000}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{
          el: ".js-pagination-pag",
          spaceBetween: 10,
          clickable: true,
        }}
        breakpoints={{
          // breakpoints for responsive design
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial_box">
              <div className="thumb">
                <Image
                  width={70}
                  height={70}
                  className="rounded-circle"
                  src={`/images/testimonial/${testimonial.id}.png`}
                  alt={`${testimonial.id}.png`}
                />
                <h4 className="title">
                  {testimonial.name} <br />
                  <small>{testimonial.title}</small>
                </h4>
              </div>
              <div className="details">
                <div className="icon">
                  <span className="fa fa-quote-left" />
                </div>
                <p>{testimonial.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-5 text-center">
        <div className=" js-pagination-pag" />
      </div>
    </>
  );
};

export default Testimonial;
