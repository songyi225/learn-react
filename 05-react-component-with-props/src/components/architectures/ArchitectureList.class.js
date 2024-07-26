// const list = h(
//   "ul", // 컴포넌트 타입
//   { className: "architectures", lang: "en" }, // 컴포넌트 속성(props)
//   ...children // 컴포넌트 자식들(칠드런) -> 리액트 엘리먼트 | 문자 | 숫자 | null 또는 데이터 배열
// );

import React from "https://esm.sh/react";

class ArchitectureList extends React.Component {
  render() {
    // props 객체
    const { lang, children } = this.props;

    return React.createElement(
      "ul",
      { className: "architectures", lang },
      children
    );
  }
}

export default ArchitectureList;
