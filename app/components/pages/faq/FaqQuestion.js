const FaqQuestion = () => {
  const faqItems = [
    {
      question: "Who can own land in Kenya?",
      answer:
        "Section 40 of the Constitution of Kenya stipulates that every person has right to own land of any description in any part of Kenya. The National Land policy 1.5.1 (7), (c), (d) put more emphasis on gender equity and land rights. ",
    },
    {
      question: "What is the Intestate Succession?",
      answer:
        " This is when there is no will left by the deceased (intestate). In case the deceased left one surviving spouse and a child or children, the surviving spouse shall be entitled to:- • The personal and household effects of the deceased ",
    },
    {
      question: "Why bother with succession",
      answer:
        " As an owner of a beneficial interest in the land property, you can be part of making decisions involving the property, including how it is used and developed, and get a share of any income that is distributed from the property.",
    },
    {
      question: "Wha is Testate succession.",
      answer:
        "Testate succession is where the deceased leaves a written or oral will. It is important to note that the deceased must have had the capacity (sound mind and off age) to make the will at the time of making the will. In other words, the deceased must have had the knowledge and approved the contents of the will.",
    },
  ];

  return (
    <div className="accordion" id="accordionExample">
      {faqItems.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-header" id={`heading${index}`}>
            <h4 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse${index}`}
              >
                {item.question}
              </button>
            </h4>
          </div>
          <div
            id={`collapse${index}`}
            className={`collapse ${index === 0 ? "show" : ""}`}
            aria-labelledby={`heading${index}`}
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <p className="mb30">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqQuestion;
