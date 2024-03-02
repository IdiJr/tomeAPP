import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-area footer-design-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
              <div className="footer-wrap">
                <div className="row justify-content-between gy-5">
                  <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div className="single-widget">
                      <div className="footer-title">
                        <h3>About tome</h3>
                      </div>
                      <div className="footerabout-content">
                        <p>
                          tome - Ghana's Best Store since 2021. We
                          sell many Category of products on our web-site.
                        </p>
                      </div>
                      <div className="footer-address">
                        <ul>
                          <li>
                            <i className="las la-phone-volume"></i>
                            <span>
                              <Link to="/">+233 45 678 9123</Link>
                              <br />
                              <Link to="/">+233 57 978 9123</Link>
                            </span>
                          </li>
                          <li>
                            <i className="lar la-envelope"></i>
                            <span>
                              <Link to="/">Student@alx.com</Link>
                              <br />
                              <Link to="/">info@tome.com</Link>
                            </span>
                          </li>
                          <li>
                            <i className="las la-map-marker"></i>
                            <span>
                              Spintex <br />
                              Accra{" "}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="single-widget text-lg-center">
                      <div className="footer-logo">
                        <Link to="/">
                          <img src="" alt="" />
                        </Link>
                      </div>
                      <div className="form-design form-design-1"></div>
                      <div className="footer-social pt-50">
                        <ul>
                          <li>
                            <Link to="/">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fab fa-linkedin-in"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fab fa-pinterest-p"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                    <div className="single-widget">
                      <div className="footer-title">
                        <h3>Company</h3>
                      </div>
                      <div className="footer-link">
                        <ul>
                          <li>
                            <Link to="/">Privacy Policy</Link>
                          </li>
                          <li>
                            <Link to="/">Returns</Link>
                          </li>
                          <li>
                            <Link to="/">Terms & Conditions</Link>
                          </li>
                          <li>
                            <Link to="/">Our Support</Link>
                          </li>
                          <li>
                            <Link to="/">Terms & Service</Link>
                          </li>
                          <li>
                            <Link to="/">Checkout</Link>
                          </li>
                          <li>
                            <Link to="/">Other Issues</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-3 copy-right-section align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-lg-start text-center">
              <div className="copy-right-area">
                <p className="copy-text">
                  Copyright 2024 tome | Designed By
                  <Link to="/">Ali Baba Idi & Emmanuel Addo</Link>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="footer-card-support text-lg-end text-center"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
