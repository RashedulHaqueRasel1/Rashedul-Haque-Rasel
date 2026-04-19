import ThemeBackground from "@/components/ui/theme-background";
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";
import "../globals.css";
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeBackground>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </ThemeBackground>
  );
}
