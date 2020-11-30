import { memo } from "react";

export default memo(({ projects = [] }) => {
  return (
    <section className="flex-col md:flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <p className="md:text-left text-lg mt-5 pl-16 pr-16 leading-relaxed">
        <span className="underline">좋은 팀/조직문화</span>와 그런 문화를 갖는
        팀으로 만드는 것에 관심이 많습니다.
        <br />
        실력이 뛰어난 개발자보다 훌륭한 작업물을 만드는{" "}
        <span className="underline">창작자</span>가 되려고 노력합니다.
        <br />
        작가이자 러너인 <span className="underline">무라카미 하루키</span>를
        좋아합니다.
        <br />
        <a title="왓챠" href="https://watcha.com" target="_blank">
          왓챠
        </a>
        에서 만난 비제이에게 개발자로서의 삶에서 가장 큰 영향을 받았고
        <br />
        독일의 해커 친구들에게 창작자로서 많은 영향을 받았습니다.
      </p>
      {/* <p>{projects.map((p) => p.name).join(", ")}</p> */}
    </section>
  );
});
