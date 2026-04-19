import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects | Web Developer Portfolio',
  description: 'Explore the complete portfolio of Rashedul Haque Rasel, featuring modern full-stack web applications, frontend designs, and scalable systems built with the MERN stack.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
