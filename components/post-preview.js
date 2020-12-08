import Link from "next/link";
import DateComponent from "../components/date";

export default function PostPreview({ title, date, slug }) {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h3 className="text-xl leading-snug">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="text-lg pl-6 date">
          <DateComponent dateString={date} />
        </div>
      </div>

      <style jsx>{`
        .date {
          flex: 0 0 9rem;
        }
      `}</style>
    </div>
  );
}
