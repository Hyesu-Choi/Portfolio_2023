import React, { useState } from "react";

import Cocktailer from "../../assets/cocktailer.jpg";
import Apperal from "../../assets/apperal.jpg";
import Yoga from "../../assets/Yoga.jpg";
import Twg from "../../assets/twg.jpg";
import PortfolioMain from "../../assets/portfolio.jpg";
import Spotify from "../../assets/spotify.jpg";
import Youtube from "../../assets/youtube.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const MyWorks = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div id="works" className="works section">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="work-item">
            <div className="work-img">
              <img src={Youtube} alt="" />
            </div>
            <div className="work-description">
              <h2>PC Website</h2>
              <h3>Youtube</h3>
              <h4>기여도</h4>
              <p>퍼블리싱 / 프론트엔드 프로젝트</p>
              <h4>사용 스킬</h4>
              <p>React, Typescript, Redux, YoutubeApi</p>
              <h4>개발 페이지</h4>
              <p>메인 페이지, 비디오 상세보기, 비디오 검색</p>
              <h4>제작 기간</h4>
              <p>1주 이내</p>
              <button className="button">
                <a href="https://tranquil-belekoy-64d7e3.netlify.app">
                  사이트 보기
                </a>
              </button>
              <button className="button">
                <a href="https://github.com/Hyesu-Choi/VideoApp">
                  작업코드 보기
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="work-item">
            <div className="work-img">
              <img src={Spotify} alt="" />
            </div>
            <div className="work-description">
              <h2>PC Website</h2>
              <h3>Spotify</h3>
              <h4>기여도</h4>
              <p>퍼블리싱 / 프론트엔드 프로젝트</p>
              <h4>사용 스킬</h4>
              <p>React, Context Api, Spotify Api</p>
              <h4>개발 페이지</h4>
              <p>메인 페이지</p>
              <h4>제작 기간</h4>
              <p>1주 이내</p>
              <button className="button">
                <a href="https://extraordinary-liger-034b7a.netlify.app">
                  사이트 보기
                </a>
              </button>
              <button className="button">
                <a href="https://github.com/Hyesu-Choi/musicApp">
                  작업코드 보기
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="work-item">
            <div className="work-img">
              <img src={PortfolioMain} alt="" />
            </div>
            <div className="work-description">
              <h2>Responsive Website</h2>
              <h3>포트폴리오 메인 리뉴얼</h3>
              <h4>기여도</h4>
              <p>퍼블리싱 / 프론트엔드 프로젝트</p>
              <h4>사용 스킬</h4>
              <p>Js, React</p>
              <h4>개발 페이지</h4>
              <p>메인 페이지</p>
              <h4>제작 기간</h4>
              <p>1주 이내</p>
              <button className="button">
                <a href="https://hyesu-choi.github.io/Portfolio_2023/">
                  사이트 보기
                </a>
              </button>
              <button className="button">
                <a href="https://github.com/Hyesu-Choi/Portfolio_2023">
                  작업코드 보기
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="work-item">
            <div className="work-img">
              <img src={Cocktailer} alt="" />
            </div>
            <div className="work-description">
              <h2>Responsive Website</h2>
              <h3>COCKTAILER</h3>
              <h4>기여도</h4>
              <p>기획 / 디자인 / 퍼블리싱 팀 프로젝트</p>
              <h4>사용 스킬</h4>
              <p>Photoshop, jQuery, JS, flexslider</p>
              <h4>개발 페이지</h4>
              <p>성인인증창, 메인, 서브페이지</p>
              <h4>제작 기간</h4>
              <p>1주 이내</p>
              <button className="button">
                <a href="https://hyesu-choi.github.io/Cocktailer/">
                  사이트 보기
                </a>
              </button>
              <button className="button">
                <a href="https://github.com/Hyesu-Choi/Cocktailer">
                  작업코드 보기
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="work-item">
            <div className="work-img">
              <img src={Apperal} alt="" />
            </div>
            <div className="work-description">
              <h2>Desktop Website</h2>
              <h3>Apparel</h3>
              <h4>기여도</h4>
              <p>기획 / 퍼블리싱 프로젝트</p>
              <h4>사용 스킬</h4>
              <p>jQuery, js, ps</p>
              <h4>개발 페이지</h4>
              <p>메인 페이지</p>
              <h4>제작 기간</h4>
              <p>1주 이내</p>
              <button className="button">
                <a href="https://hyesu-choi.github.io/Apparel/">사이트 보기</a>
              </button>
              <button className="button">
                <a href="https://github.com/Hyesu-Choi/Apparel">
                  작업코드 보기
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="work-item">
            <div className="work-img">
              <img src={Yoga} alt="" />
            </div>
            <div className="work-description">
              <h2>PC Website</h2>
              <h3>Yoga</h3>
              <h4>기여도</h4>
              <p>퍼블리싱 프로젝트</p>
              <h4>사용 스킬</h4>
              <p>Js</p>
              <h4>개발 페이지</h4>
              <p>메인 페이지</p>
              <h4>제작 기간</h4>
              <p>1주 이내</p>
              <button className="button">
                <a href="https://hyesu-choi.github.io/Yoga/">사이트 보기</a>
              </button>
              <button className="button">
                <a href="https://github.com/Hyesu-Choi/Yoga">작업코드 보기</a>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

{
  /**
const MyWorks = () => {
  return (
    <div id="works" className="works section">
      <div className="work-container">

        


        <div className="work-item">
          <div className="work-img">
            <img src={Yoga} alt="" />
          </div>
          <div className="work-description">
            <h1>04</h1>
            <h2>PC Website</h2>
            <h3>Yoga</h3>
            <h4>기여도</h4>
            <p>퍼블리싱 프로젝트</p>
            <h4>사용 스킬</h4>
            <p>Js</p>
            <h4>개발 페이지</h4>
            <p>메인 페이지</p>
            <h4>제작 기간</h4>
            <p>1주 이내</p>
            <button className="button">
              <a href="https://hyesu-choi.github.io/Yoga/">사이트 보기</a>
            </button>
            <button className="button">
              <a href="https://github.com/Hyesu-Choi/Yoga">작업코드 보기</a>
            </button>
          </div>
        </div>



      </div>
    </div>
  );
};
 */
}
export default MyWorks;
