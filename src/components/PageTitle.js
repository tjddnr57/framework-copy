import React from "react";
import { useLocation } from "react-router-dom";
import "./PageTitle.css";

function PageTitle() {
  // useLocation 훅을 사용하여 현재 경로를 가져옴
  const location = useLocation();
  const pathname = location.pathname;

  // 경로별 제목 매핑
  const titleMap = {
    "/ProductGroup": "제품군",
    "/ItemMaster": "품목",
    "/Factory": "공장",
    "/Line": "라인",
    "/Process": "공정",
    "/Equipment": "설비",
    "/Mold": "금형",
  };

  // 현재 경로에 해당하는 제목이 있으면 사용, 없으면 기본값 "품목"
  const title = titleMap[pathname] || "품목";

  return (
    <div className="pagetitlecomponent">
      <span>{title}&nbsp;&nbsp;</span>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span>&nbsp;&nbsp;생산정보관리&nbsp;&nbsp;</span>
      <span>&nbsp;&nbsp;{">"}&nbsp;&nbsp;</span>
      <span>&nbsp;&nbsp;품목정보관리&nbsp;&nbsp;</span>
      <span>&nbsp;&nbsp;{">"}&nbsp;&nbsp;</span>
      <span>&nbsp;&nbsp;{title}</span>
    </div>
  );
}

export default PageTitle;
