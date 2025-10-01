import Navbar from "./Navbar";

interface LayoutProps {
  children: any;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "1rem" }}>{children}</main>
    </div>
  );
}
