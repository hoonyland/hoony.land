import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div>
        {/* <Alert preview={preview} /> */}
        <main className="max-w-4xl mx-auto">{children}</main>
      </div>
    </>
  );
}
