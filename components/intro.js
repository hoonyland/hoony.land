import { memo } from "react";

export default memo(({ projects = [] }) => {
  return (
    <section className="flex-col md:flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-3xl md:text-3xl font-bold tracking-tighter leading-tight">
        장승훈 | Hoony Chang
      </h1>

      <p className="text-center md:text-left text-lg mt-5 leading-relaxed">
        개발자입니다. node.js, react(advanced), rust, django(intermediate)를
        다룹니다.
        <br />
        <a href="https://dotface.kr" target="_blank" title="닷페이스">
          닷페이스
        </a>
        에서 멤버십 서비스 및 콘텐츠 개발을 하고{" "}
        <a title="체인로지스" href="https://chainlogis.co.kr" target="_blank">
          체인로지스
        </a>
        에서 배송서비스 개발을 하고 있습니다.
      </p>
    </section>
  );
});
