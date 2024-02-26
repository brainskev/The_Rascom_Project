import Blog from "@/app/components/home/home-1/Blog";
import CarIntro from "@/app/components/home/home-1/CarIntro";
import Category from "@/app/components/home/home-1/Category";
import PopularListings from "@/app/components/home/home-1/PopularListings";
import WhyChoose from "@/app/components/common/WhyChoose";
import LoginSignupModal from "@/app/components/common/login-signup";
import HeaderTop from "@/app/components/home/home-1/HeaderTop";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import Header from "@/app/components/home/home-1/Header";
import MobileMenu from "@/app/components/common/MobileMenu";
import Link from "next/link";
import FeaturedFilterListing from "@/app/components/home/home-1/FeaturedFilterListing";
import Hero from "@/app/components/home/home-1/Hero";
import Footer from "@/app/components/common/Footer";
import Testimonial from "@/app/components/common/Testimonial";
import Partner from "@/app/components/common/Partner";
import Counter from "@/app/components/home/home-1/Counter";
import DefaultHeader from "@/app/components/common/DefaultHeader";

export const metadata = {
  title: "Rascom - Affordable Land For Sale",
  description: `We offer affordable and genuine land for sale along Kangundo Road ,Eastern Bypass,
   Mombasa Road and along Thika Road with Ready Title Deeds. `,
};

const Home_1 = () => {
  return (
    <div className="wrapper">
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <HeaderSidebar />
      </div>
      {/* Sidebar Panel End */}

      {/* header top */}
      <HeaderTop />
      {/* End header top */}

      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}


      {/* Hero */}
      <Hero />
      {/* End Hero */}
      <HeaderTop />
      {/* Featured Product  */}
      <section className="featured-product">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Featured Listings</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos-delay="100" data-aos="fade-up">
              <FeaturedFilterListing />
              <HeaderTop />
            </div>
          </div>
          {/* End .row */}

          <div className="row mt20">
            <div className="col-lg-12">
              <div className="text-center">
                <Link href="./listing-v1" className="more_listing">
                  Show All Plots{" "}
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Featured Product  */}

      {/* Why Chose us  */}
      <section className="why-chose pt0 pb90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Why Choose Us?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <WhyChoose />
          </div>
        </div>
      </section>
      {/* Why Chose us  */}

      {/* Delivery Divider */}
      <section className="deliver-divider bg-img1">
        <div className="container">
          <CarIntro />
        </div>
      </section>
      {/* End Delivery Divider */}

      {/* Our Popular Listing */}
      <section className="popular-listing pb80 bg-ptrn1 bgc-heading-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2 className="text-white">Popular Listings</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="col-lg-12">
            <div className="home1_popular_listing">
              <div className="listing_item_4grid_slider dots_none">
                <PopularListings />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Popular Listing */}

      {/* <!-- Funfact --> */}
      <section className="our-funfact pt50 pb30">
        <div className="container">
          <div className="row">
            <Counter />
          </div>
        </div>
      </section>
      {/* <!-- End Funfact --> */}

      {/* Testimonials  */}
      <section className="our-testimonials-home1 pt120 pb120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Testimonials</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial_slider_home1">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonials  */}

      {/* Our Blog */}
      <section className="our-blog pb90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Recent Articles</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <Blog />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Our Blog */}

      {/* Our Partners */}
      {/* <section className="our-partner pt0 pb100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Achivements</h2>
              </div>
            </div>
          </div>
         

          <div className="partner_divider">
            <div className="row">
              <Partner />
            </div>
          
          </div>
        </div>
      </section> */}
      {/* End  Our Partners */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}

      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="logInModal"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <LoginSignupModal />
      </div>
      {/* End Modal */}
    </div>
    // End wrapper
  );
};

export default Home_1;
