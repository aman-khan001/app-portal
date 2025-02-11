import { ImFacebook2, ImYoutube } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3 mx-auto">
                {/* <img
                  src="https://app-portal.foxart.co/images/logo.png?t=84"
                  className="footer-logo mb-1"
                  width="128"
                  height="30"
                  alt="App Portal"
                /> */}
                <Image src={'/images/logo.png'} width={128} height={30} />
                <span className="d-block mt-2">
                  Find safe and reliable software and mobile apps on our
                  easy-to-use download website.
                </span>
                <div className="clearfix m-3"></div>
                {/* <a
                  href="https://app-portal.foxart.co/submit-app"
                  className="submit-app"
                >
                  Submit Your App
                </a> */}
                <div className="footer-icons mb-5">
                  <a href="#" className="icon-link">
                    <BsTwitterX />
                  </a>
                  <a href="#" className="icon-link">
                    <ImFacebook2 />
                  </a>
                  <a href="#" className="icon-link">
                    <FaTelegramPlane />
                  </a>
                  <a href="#" className="icon-link">
                    <ImYoutube />
                  </a>
                </div>
              </div>
              <div className="clearfix w-100 d-md-none">&nbsp;</div>
              <div className="col-md-3 col-4">
                <span className="section-head">Pages</span>
                <br />
                <br />
                <ul className="list-unstyled">
                  <li>
                    <a href="https://app-portal.foxart.co/pages/about-us">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-4">
                <span className="section-head">Categories</span>
                <br />
                <br />
                <ul className="list-unstyled">
                  <li>
                    <a href="https://app-portal.foxart.co/categories/games">
                      Games
                    </a>
                  </li>
                  <li>
                    <a href="https://app-portal.foxart.co/categories/entertainment">
                      Entertainment
                    </a>
                  </li>
                  <li>
                    <a href="https://app-portal.foxart.co/categories/communication">
                      Communication
                    </a>
                  </li>
                  <li>
                    <a href="https://app-portal.foxart.co/categories/e-mail">
                      E-mail
                    </a>
                  </li>
                  <li>
                    <a href="https://app-portal.foxart.co/categories/security">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="https://app-portal.foxart.co/categories/tools">
                      Tools
                    </a>
                  </li>
                  <li>
                    <a href="https://app-portal.foxart.co/categories/media">
                      Media
                    </a>
                  </li>
                  <li>
                    <a href="https://app-portal.foxart.co/categories/finance">
                      Finance
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-4">
                <span className="section-head mt-3 mb-4">Platforms</span>
                <br />
                <br />
                <ul className="list-unstyled">
                  <li>
                    <a href="https://app-portal.foxart.co/platforms/android">
                      Android
                    </a>
                  </li>
                  <li>
                    <a href="https://app-portal.foxart.co/platforms/ios">iOS</a>
                  </li>
                  <li>
                    <a href="https://app-portal.foxart.co/platforms/windows">
                      Windows
                    </a>
                  </li>
                  <li>
                    <a href="https://app-portal.foxart.co/platforms/mac">Mac</a>
                  </li>
                  <li>
                    <a href="https://app-portal.foxart.co/platforms/linux">
                      Linux
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-2">
            © 2024 All rights are reserved -{" "}
            <a href="https://app-portal.foxart.co/"> App Portal</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
