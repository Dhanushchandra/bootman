import React from "react";
import "../ultimate.css";

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  // if (mainNav) {
  //   new bootstrap.ScrollSpy(document.body, {
  //     target: "#mainNav",
  //     offset: 72,
  //   });
  // }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top list-group"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"> </i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded "
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1 ">
              <a className="nav-link py-3 px-0 px-lg-3 rounded " href="#about">
                About
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded "
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
