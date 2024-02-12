import React from "react";
import Social from "./Social";

const CopyRight = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-8 col-xl-9">
          <div className="copyright-widget mt5 text-start mb20-sm">
            <p>
              <a
                href="https://rascom.co.ke"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rasom ltd
              </a>{" "}
              © {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="footer_social_widget text-start text-md-end">
            <ul className="mb0">
              <Social />
            </ul>
          </div>
        </div>
        {/* End .col */}
      </div>
    </div>
  );
};

export default CopyRight;
