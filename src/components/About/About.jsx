import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Html from "../../assets/skills-html.png";
import Js from "../../assets/skills-js.png";
import Css from "../../assets/skills-css.png";
import Jq from "../../assets/skills-jq.png";
import Jq2 from "../../assets/skills-jq2.png";
import ReactIcon from "../../assets/skills-react.png";
import Ts from "../../assets/skills-ts.png";

import Git from "../../assets/skills-git.png";
import Slack from "../../assets/skills-slack.png";
import Figma from "../../assets/skills-figma.png";

const About = () => {
  return (
    <div id="about" className="about section">
      <div className="about-me-box">
        <h2>ABOUT ME</h2>

        <div className="about-me">
          <div className="emoji"></div>
          <div className="about-text">
            <p>
              안녕하세요 2년차 프론트엔드 개발자 최혜수 입니다.  <br />
              HTML, CSS, Javascipt 를 기반으로 웹 프론트엔드 개발을 주로 하고 있습니다. <br />
              사용자 중심의 UI/UX 개발을 추구하며, 웹접근성과 반응형 디자인에도 깊은 관심을 가지고 있습니다. <br />
              웹 성능 최적화와 사용자 경험 개선을 위해 끊임없이 연구하고 공부하고 있습니다.
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

        <div className="frontend-skills">
          <h1>FRONT-END SKILLS</h1>
          <div className="skills-wrapper">
            <div className="skill-card">
              <img src={Html} alt="" />
            </div>
            <div className="skill-card">
              <img src={Js} alt="" />
            </div>
            <div className="skill-card">
              <img src={Css} alt="" />
            </div>
            <div className="skill-card">
              <img src={Jq2} alt="" />
            </div>
            <div className="skill-card">
              <img src={ReactIcon} alt="" />
            </div>
            {/* <div className="skill-card">
              <img src={Ts} alt="" />
            </div> */}
          </div>
        </div>
        <div className="frontend-skills tools">
          <h1>TOOLS</h1>
          <div className="skills-wrapper">
            <div className="skill-card">
              <img src={Git} alt="" />
            </div>
            <div className="skill-card">
              <img src={Slack} alt="" />
            </div>
            <div className="skill-card">
              <img src={Figma} alt="" />
            </div>
          </div>
        </div>

        {/* <div className="skills-wrapper">
          <div className="card">
            <div className="circle">
              <CircularProgressbar value={95} text={`95%`} />
            </div>
            <div className="text">HTML</div>
          </div>
          <div className="card css">
            <div className="circle">
              <CircularProgressbar value={90} text={`90%`} />
            </div>
            <div className="text">CSS</div>
          </div>
          <div className="card js">
            <div className="circle">
              <CircularProgressbar value={80} text={`80%`} />
            </div>
            <div className="text">Javascript / jQuery</div>
          </div>
          <div className="card ps">
            <div className="circle">
              <CircularProgressbar value={80} text={`80%`} />
            </div>

            <div className="text">Photoshop / Illustrator</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
