import React from "react";
import Card from "./Card";
import Popper from "./Card";

function Portfolio() {
  return (
    <>
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          {/* //Portfolio Section Heading */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>
          {/* //Icon Divider */}
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          {/* <!-- Portfolio Grid Items--> */}
          <div className="row justify-content-center">
            <Card
              src={"assets/img/portfolio/cake.png"}
              title={"TASTY CAKE"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
              }
              target={"#portfolioModal1"}
              id={"portfolioModal1"}
            />
            <Card
              src={"assets/img/portfolio/cabin.png"}
              title={"LOG CABIN"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
              }
              target={"#portfolioModal2"}
              id={"portfolioModal2"}
            />

            <Card
              src={"assets/img/portfolio/circus.png"}
              title={"CIRCUS TENT"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
              }
              target={"#portfolioModal3"}
              id={"portfolioModal3"}
            />
            <Card
              src={"assets/img/portfolio/game.png"}
              title={"CONTROLLER"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
              }
              target={"#portfolioModal4"}
              id={"portfolioModal4"}
            />
            <Card
              src={"assets/img/portfolio/safe.png"}
              title={"LOCKED SAFE"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
              }
              target={"#portfolioModal5"}
              id={"portfolioModal5"}
            />
            <Card
              src={"assets/img/portfolio/submarine.png"}
              title={"SUBMARINE"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
              }
              target={"#portfolioModal6"}
              id={"portfolioModal6"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
