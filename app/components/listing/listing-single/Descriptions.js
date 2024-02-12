const Descriptions = () => {
  const paragraphs = [
    {
      className: "first-para",
      content:
        "Occupying over 8,000 square feet, perched over 1,100 feet in the air with absolutely breathtaking panoramic 360-degree views of all of New York City and the surrounding tri-state area, The 82nd Floor at 432 Park Avenue has been completely reimagined by one of the most sought-after design houses in London and represents an utterly unique opportunity to own a globally significant property.",
    },
    {
      className: "mb25",
      content:
        "Occupying over 8,000 square feet, perched over 1,100 feet in the air with absolutely breathtaking panoramic 360-degree views of all of New York City and the surrounding tri-state area, The 82nd Floor at 432 Park Avenue has been completely reimagined by one of the most sought-after design houses in London and represents an utterly unique opportunity to own a globally significant property.",
    },
    {
      className: "mt10 mb20",
      content:
        "The Amrutha Lounge means port in the Turkish language, however the restaurant opens its doors to all aspects of the Mediterranean kitchen. The kitchen will be mostly focused on Mediterranean food; the owners of the restaurant are young professional chefs who can bring new, exciting tastes to Angel, Islington which will show through in the quality of food they prepare.",
    },
  ];

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p className={paragraph.className} key={index}>
          {paragraph.content}
        </p>
      ))}
    </>
  );
};

export default Descriptions;
