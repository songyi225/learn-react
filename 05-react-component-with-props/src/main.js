import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

// 데이터 가져오기
import listData from "./data/list.js";

// 컴포넌트 불러오기
import NumberList from "./components/NumberList.function.js";
import ArchitectureList from "./components/architectures/ArchitectureList.class.js";
import ArchitectureItem from "./components/architectures/ArchitectureItem.class.js";

const container = document.getElementById("react-app");

if (container) {
  const architectureList = React.createElement(ArchitectureList, {
    lang: "en",
    children: listData.items.map(({ id, title }) =>
      React.createElement(ArchitectureItem, { id, title })
    ),
  });

  const numberList = React.createElement(NumberList, { count: 9 });
  // DOM 요소를 리액트 돔 루트로 만든 후, 리액트 앱 렌더링
  createRoot(container).render(numberList);
}
// 존재하지 않는다면?
else {
  // 개발자에게 경고
  alert('문서에 "#app" 요소가 존재하지 않습니다.');
}
