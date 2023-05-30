import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollUp() {
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    // 350 이상이면 up버튼 뵈고, 350 이하면 버튼 사라지게
    if (ScrollY > 350) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  // up 버튼 클릭하면 스크롤이 맨 위로 올라감
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0); // ScrollY 의 값을 0으로 초기화
    setBtnStatus(false); // 버튼 숨김
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  return (
    <div
      onClick={handleTop}
      className={BtnStatus ? "scrollup show-scroll" : "scrollup"}
    >
      <FaArrowUp />
    </div>
  );
}
