const ListGridFilter = () => {
  const options = [
    "Date: newest First",
    "Most Recent",
    "Recent",
    "Best Selling",
    "Old Review",
  ];

  const selectOptions = options.map((option, index) => (
    <option key={index}>{option}</option>
  ));

  return (
    <div className="listing_filter_row db-767">
      <div className="col-md-8">
        <div className="page_control_shorting right_area text-end tac-xsd">
          <ul>
            <li className="list-inline-item short_by_text listone">Sort by:</li>
            <li className="list-inline-item listwo">
              <select className="form-select show-tick">{selectOptions}</select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListGridFilter;
