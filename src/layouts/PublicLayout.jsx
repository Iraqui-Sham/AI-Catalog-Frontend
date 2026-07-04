import Header from "../Components/Header";

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />

      <div className="pt-20">{children}</div>
    </>
  );
}