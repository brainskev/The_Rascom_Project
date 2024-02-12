const Features = () => {
  const featureCategories = [
    {
      title: "Accessibility",
      items: [
        "The plots are accessible through an all-weather murram road at Kanisani stage Kamulu, first exit on your right from Total petrol station in Kamulu",
      ],
    },
    {
      title: "Water and Electricity",
      items: ["Water and electricity are on site makin it easy to develop and add valuer to your property"],
    },
    {
      title: "Gated Community",
      items: ["This project offers a gated community set up fostering togetherness and ensuring the security and safety of the residents."],
    },
    {
      title: "Prime Location",
      items: [
        "The project is the perfect blend of urban and tranquility. With easy access to the main road just 4km away and the CBD only 40 mins drive",
      ],
    },
  ];

  return (
    <>
      <div className="col-lg-12">
        <h4 className="title">Features</h4>
      </div>
      {featureCategories.map((category, index) => (
        <div className="row" key={index}>
          <div className="col-lg-6 col-xl-6">
            <h5 className="subtitle">{category.title}</h5>
          </div>
          <div className="col-lg-6 col-xl-5">
            <ul className="service_list">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
          {index < featureCategories.length - 1 && <hr />}
        </div>
      ))}
    </>
  );
};

export default Features;
