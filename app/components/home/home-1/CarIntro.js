"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const CarIntro = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="row">
        <div className="col-md-12 col-xl-9">
          <div className="home1_divider_content">
            <h2 className="title" style={{ color: '#1a3760' }}>We Make Finding Land Simple</h2>
            <div className="containerx">
              <div className="misty-overlay"></div>
              <p className="para misty-text" style={{ color: '#1a3760' }}>
                At Rascom what matters to us is making your land search and buying
                experience as simple as possible, so you can find the right land
                quickly and get on with making it yours.
              </p>
            </div>
          </div>
        </div>
        {/* End col-md-9 */}
      </div >
    </>
  );
};

export default CarIntro;
