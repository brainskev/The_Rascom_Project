const WhyChoose = () => {
  const reasons = [
    {
      iconClass: "flaticon-price-tag",
      title: "Best Price",
      description:
        "We're committed to offering you the most competitive prices in the market, and the best possible deals, ensuring that you get the most out of your investment.",
      delay: 100,
      style: "style1",
    },
    {
      iconClass: "flaticon-car",
      title: "Ready Title Deeds",
      description:
        "Ensuring transparency, legality, and ease of transaction, our meticulously prepared title deeds provide you with the assurance and security you deserve.",
      delay: 200,
      style: "style2",
    },
    {
      iconClass: "flaticon-trust",
      title: "Trusted by Thousands",
      description:
        "Our services have earned the trust of thousands, With a proven track record of success and client satisfaction",
      style: "style3",
    },

  ];

  return (
    <>
      {reasons.map((reason, index) => (
        <div
          className="col-sm-6 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={reason.delay}
          key={index}
        >
          <div className="why_chose_us home7_style">
            <div className={`icon ${reason.style}`}>
              <span className={reason.iconClass} />
            </div>
            <div className="details">
              <h5 className="title">{reason.title}</h5>
              <p>{reason.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
