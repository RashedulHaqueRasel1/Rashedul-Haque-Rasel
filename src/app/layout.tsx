import LoadingLayout from "@/components/ui/loading-layout";
import "./globals.css";
import { Cinzel, Inter } from "next/font/google";

// You can change this to your custom favicon icon, title and description
export const metadata = {
  title: "Rashedul Haque Rasel - Portfolio",
  description:
    "A portfolio showcasing the skills and projects of Rashedul Haque Rasel, a web developer specializing in full-stack development.",
  // icons: {
  //   icon: 'https://i.postimg.cc/d31q0rXz/Rashedul-Haque-Rasel1.png?height=32&width=32',
  // },
};
const inter = Inter({ subsets: ["latin"] });

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={cinzel.variable}>
      <body>
        <main>{children}</main>
      </body>
      <LoadingLayout>
        <main>{children}</main>
      </LoadingLayout>
    </html>
  );
}
