import Link from "next/link";
import MainMenu from "./MainMenu";
import Image from "next/image";

const DashboardHeader = () => {
  return (
    <header className="header-nav menu_style_home_one home3_style dashbord_style main-menu">
      {/* Ace Responsive Menu */}
      <nav className="posr">
        <div className="container-fluid d-flex align-items-center">
          {/* Menu Toggle btn*/}
          <div className="menu-toggle">
            <button type="button" id="menu-btn">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <Link href="/" className="navbar_brand float-start dn-md">
            <Image
              width={140}
              height={45}
              className="logo1 img-fluid"
              src="/images/header-logo2.svg"
              alt="header-logo.svg"
            />
            <Image
              width={140}
              height={45}
              className="logo2 img-fluid"
              src="/images/header-logo2.svg"
              alt="header-logo2.svg"
            />
          </Link>
          {/* Responsive Menu Structure*/}
          <ul
            // id="respMenu"
            className="ace-responsive-menu text-end"
            data-menu-style="horizontal"
          >
            <MainMenu />
            <li className="add_listing">
              <Link href="/add-listings">+ Add Listing</Link>
            </li>
            <li
              className="sidebar_panel"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <a className="sidebar_switch pt0" role="button">
                <span />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;
