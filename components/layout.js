import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div>
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
    </>
  );
}
