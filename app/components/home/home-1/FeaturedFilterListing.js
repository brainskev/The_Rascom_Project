"use client";
import listingsData from "@/data/listingCar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FeaturedFilterListing = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? listingsData.slice(0, 6)
      : listingsData.slice(0, 6).filter((item) => item.tags.includes(filter));

  return (
    <div className="popular_listing_sliders ">
      {/* Nav tabs */}
      <div className="nav nav-tabs  justify-content-center">
        <button
          className={filter === "*" ? "active nav-link" : "nav-link"}
          onClick={() => setFilter("*")}
        >
          All Plots
        </button>

        <button
          className={filter === "new" ? "active nav-link" : "nav-link"}
          onClick={() => setFilter("new")}
        >
          New Plots
        </button>
        <button
          className={filter === "used" ? "active nav-link" : "nav-link"}
          onClick={() => setFilter("used")}
        >
          Sold Plots
        </button>
      </div>
      {/* Tab panes */}
      <div className="row">
        {filteredItems.map((listing) => (
          <div className="col-sm-6 col-xl-4" key={listing.id}>
            <div className="car-listing">
              <div className="thumb">
                {listing.featured ? (
                  <>
                    <div className="tag">FEATURED</div>
                  </>
                ) : undefined}
                {!listing.featured ? (
                  <>
                    <div className="tag blue">SPECIAL</div>
                  </>
                ) : undefined}

                <Link href="/listing-single-v1">
                  <Image
                    width={284}
                    height={183}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    priority
                    src={listing.image}
                    alt={listing.title}
                  />
                </Link>
                <div className="thmb_cntnt2">
                  <ul className="mb0">
                    <li className="list-inline-item">
                      <a className="text-white" href="/listing-single-v1">
                        <span className="flaticon-photo-camera mr3" />{" "}
                        {listing.photosCount}
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-white" href="/listing-single-v1">
                        <span className="flaticon-play-button mr3" />{" "}
                        {listing.videosCount}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="thmb_cntnt3">
                  <ul className="mb0">
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-shuffle-arrows" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="details">
                <div className="wrapper">
                  <h5 className="price">KES. {listing.price}</h5>
                  <h5 className="title">
                    <Link href="/listing-single-v1">{listing.title}</Link>
                  </h5>
                  <div className="listign_review">
                    <ul className="mb0">
                      <li className="list-inline-item">
                        <span className="title">Purpose: </span>
                      </li>
                      <li className="list-inline-item">
                        <a href="/listing-single-v1">{listing.para}</a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default FeaturedFilterListing;
