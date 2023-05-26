import React from "react";

import { BiPhone, BiVerticalCenter } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";

const Contact = () => {
  return (
    <div id="contact" className="contact section">
      <h1>CONTACT ME</h1>
      <h3>제 포트폴리오를 봐주셔서 감사합니다.</h3>
      <h3>하단의 연락처로 연락주시면 확인 후 연락드리겠습니다.</h3>
      <p>연락처 :</p>
      <p>
        <BiPhone style={{ verticalAlign: "middle", marginRight: "5px" }} />
        010-3922-0580
      </p>
      <p>
        <BiMailSend style={{ verticalAlign: "middle", marginRight: "5px" }} />
        hs1263@naver.com
      </p>
    </div>
  );
};

export default Contact;
