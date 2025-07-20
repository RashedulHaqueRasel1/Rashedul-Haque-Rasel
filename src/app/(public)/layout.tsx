import ThemeBackground from "@/components/ui/theme-background";
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";
import "../globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <ThemeBackground>
        <body>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
        </body>
      </ThemeBackground>
      <footer>
        <Footer />
      </footer>
    </html>
  );
}
