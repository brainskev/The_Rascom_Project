"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const counters = [
    { number: 102, label: "Plots For Sale", delay: 100 },
    { number: 500, label: "Customer Reviews", delay: 200 },
    { number: 30, label: "Site Visits Per Day", delay: 300 },
    { number: 1011, label: "Verified Buyers", delay: 400 },
  ];

  return (
    <>
      {counters.map((counter, index) => (
        <div
          key={index}
          className="col-sm-6 col-lg-3"
          data-aos="fade-up"
          data-wow-delay={counter.delay}
        >
          <div className="funfact_one text-center">
            <div className="details">
              <div className="timer">
                <CounterWithAnimation end={counter.number} />
              </div>
              <p className="para">{counter.label}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const CounterWithAnimation = ({ end }) => {
  const countRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, options);

    const currentRef = countRef.current; // Create a local variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <span ref={countRef}>
      {inView ? <CountUp end={end} duration={2} separator="," /> : "0"}
    </span>
  );
};

export default Counter;
