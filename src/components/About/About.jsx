import React from "react";

const About = () => {
  return (
    <div id="about" className="about section">
      <div className="about-me-box">
        <h2>ABOUT ME</h2>
        <div className="about-me">
          <div className="emoji"></div>
          <div className="about-text">
            <p>
              안녕하세요 프론트엔드 개발 / 퍼블리셔 최혜수입니다. <br />
              HTML의 구조를 잘 이해하고 있으며, 웹 접근성과 웹표준에 맞는
              마크업을 구현하고 있습니다. <br />
              디자인의 의도에 맞는 CSS를 구현하며, JavaScript, jQury 문법을
              이해하고 있습니다.
            </p>
            <button className="button resume-down-button">
              <a download="" href="./assets/_2023.pdf">
                이력서 보기<span>→</span>
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* 스킬 : html, css, js, jquery, react */}
      <div className="about-skill-box">
        <h2>MY SKILLS</h2>

        <div className="skills-wrapper">
          <div className="card">
            <div className="circle">
              <div className="bar"></div>
              <div className="box">
                <span></span>
              </div>
            </div>
            <div className="text">HTML</div>
          </div>
          <div className="card css">
            <div className="circle">
              <div className="bar"></div>
              <div className="box">
                <span></span>
              </div>
            </div>
            <div className="text">CSS</div>
          </div>
          <div className="card js">
            <div className="circle">
              <div className="bar"></div>
              <div className="box">
                <span></span>
              </div>
            </div>
            <div className="text">Javascript / jQuery</div>
          </div>
          <div className="card ps">
            <div className="circle">
              <div className="bar"></div>
              <div className="box">
                <span></span>
              </div>
            </div>
            <div className="text">Photoshop / Illustrator</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
