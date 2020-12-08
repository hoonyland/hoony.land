import { memo } from "react";

export default memo(({ projects = [] }) => {
  return (
    <section className="container flex-col md:flex-row flex items-left md:items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex md:flex-1 flex-col justify-start">
        <h1 className="text-3xl text-left font-bold tracking-tighter leading-tight">
          장승훈 | Hoony Chang
        </h1>
      </div>

      <div className="md:flex-1">
        <p className="text-left text-lg mt-5 leading-relaxed">
          달리기🏃를 하고 요가🧘를 합니다.
        </p>

        <p className="text-left text-lg mt-5 leading-relaxed">
          개발자입니다. node.js, react, rust, django를 다룹니다. 좋은 코드란
          좋은 목적의 코드라는 생각을 갖고 있습니다.
        </p>

        <p className="text-left text-lg mt-5 leading-relaxed">
          미디어 스타트업{" "}
          <a href="https://dotface.kr" target="_blank" title="닷페이스">
            닷페이스
          </a>
          에서 멤버십 서비스 및 콘텐츠를 만들고 당일배송서비스{" "}
          <a href="https://chainlogis.co.kr" target="_blank" title="체인로지스">
            체인로지스
          </a>
          에서 Fullstack 개발자로 일을 하고 있습니다.
        </p>
      </div>
    </section>
  );
});
