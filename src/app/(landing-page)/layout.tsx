import Header from "@/components/landing-page/Header";

export default function LayoutLandingPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <footer>aqui será o footer</footer>
    </>
  );
}
