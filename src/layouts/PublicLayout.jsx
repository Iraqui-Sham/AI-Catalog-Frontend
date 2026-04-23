import Header from "../components/Header";

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />

      <div className="pt-20">{children}</div>
    </>
  );
}