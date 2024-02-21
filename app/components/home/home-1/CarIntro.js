"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const CarIntro = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="ol9ixt74uE8"
        onClose={() => setOpen(false)}
      />

      <div className="row">
        <div className="col-lg-12">
          <div className="posr">
            <div className="home1_divider_video_pop">
              <div className="video_popup_icon">
                <button
                  className="video_popup_btn popup-img popup-youtube"
                  role="button"
                  onClick={() => setOpen(true)}
                >
                  <span className="flaticon-play" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12 col-xl-9">
          <div className="home1_divider_content">
            <h2 className="title" style={{ color: '#1a3760' }}>We Make Finding Land Simple</h2>
            <p className="para">
              At Rascom what matters to us is making your land search and buying
              experience as simple as possible, so you can find the right land
              quickly and get on with making it yours.
            </p>
          </div>
        </div>
        {/* End col-md-9 */}
      </div >
    </>
  );
};

export default CarIntro;
