import React from "react";

function Card({ src, title, text, target, id }) {
  return (
    <>
      <div className="col-md-6 col-lg-4 mb-5">
        <div
          className="portfolio-item mx-auto"
          data-bs-toggle="modal"
          data-bs-target={target}
        >
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img className="img-fluid" src={src} alt="..." />
        </div>
      </div>

      <div
        class="portfolio-modal modal fade"
        id={id}
        tabindex="-1"
        aria-labelledby={id}
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0">
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-center pb-5">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
                      {title}
                    </h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img class="img-fluid rounded mb-5" src={src} alt="..." />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p class="mb-4">{text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
