import "./globals.css";

// You can change this to your custom favicon icon, title and description
export const metadata = {
  title: 'Create Next Base',
  description: 'A production-ready Next.js starter template crafted by ONTONIM to accelerate your web development workflow. This boilerplate combines modern technologies with enterprise-grade architecture to help you build performant, scalable applications faster.',
  icons: {
    icon: 'https://i.ibb.co/BHMGGW7z/ontonim.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
