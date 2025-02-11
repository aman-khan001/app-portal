import React from "react";
import Logo from "./Logo";
import { Categories } from "./Categories";

const Navbar = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-0 py-3" aria-label="Main navigation">
    <div className="container extend-navbar mx-md-auto mx-0">
      <Logo />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Categories />
          <li className="nav-item dropdown ms-md-1">
            <a className="nav-link dropdown-toggle" href="#" id="dropdown_platforms" data-bs-toggle="dropdown" aria-expanded="false">Platforms</a>
            <ul className="dropdown-menu shadow" aria-labelledby="dropdown_platforms">
              <li className="px-md-1">
                <a className="dropdown-item px-md-2" href="https://app-portal.foxart.co/platforms/android">
                  <img src="https://app-portal.foxart.co/images/platforms/1698324710.webp" alt="Android" className="rounded-circle w-25px" /> Android
                </a>
              </li>
              <li className="px-md-1">
                <a className="dropdown-item px-md-2" href="https://app-portal.foxart.co/platforms/ios">
                  <img src="https://app-portal.foxart.co/images/platforms/1698324884.webp" alt="iOS" className="rounded-circle w-25px" /> iOS
                </a>
              </li>
              <li className="px-md-1">
                <a className="dropdown-item px-md-2" href="https://app-portal.foxart.co/platforms/windows">
                  <img src="https://app-portal.foxart.co/images/platforms/1698324737.webp" alt="Windows" className="rounded-circle w-25px" /> Windows
                </a>
              </li>
              <li className="px-md-1">
                <a className="dropdown-item px-md-2" href="https://app-portal.foxart.co/platforms/mac">
                  <img src="https://app-portal.foxart.co/images/platforms/1698324864.webp" alt="Mac" className="rounded-circle w-25px" /> Mac
                </a>
              </li>
              <li className="px-md-1">
                <a className="dropdown-item px-md-2" href="https://app-portal.foxart.co/platforms/linux">
                  <img src="https://app-portal.foxart.co/images/platforms/1698324842.webp" alt="Linux" className="rounded-circle w-25px" /> Linux
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link ms-md-1" href="https://app-portal.foxart.co/favorites">Favorites</a>
          </li>

          <li className="nav-item">
            <a className="nav-link ms-md-1" href="https://app-portal.foxart.co/contact">Contact</a>
          </li>
        </ul>
        <form className="d-flex">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle me-0 pe-0 pt-0 pb-md-0" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="fi fi-us"></span> English
              </a>
              <ul className="dropdown-menu shadow" aria-labelledby="dropdown01">
                <li className="mb-md-0 mb-1">
                  <a className="dropdown-item" href="https://app-portal.foxart.co/ar">
                    <span className="fi fi-sa"></span> عربي
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </nav>
</div>

  );
};

export default Navbar;
