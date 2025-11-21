export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
}

export function getProjects(): Project[] {
  return [
    {
      id: 1,
      title: "RoktoDorkar - Online Blood Donation Management Platform",
      description: `RoktoDorkar connects verified blood donors and recipients nationwide with real-time matching, dashboards, and 24/7 support,ensuring secure and free emergency assistance.`,
      image:
        "https://i.postimg.cc/VLbSyZ29/Screenshot-2025-07-24-013448.png?height=300&width=400",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Node.js",
        "Express.js",
        "NextAuth",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      category: "Fullstack",
      liveUrl: "https://www.roktodorkar.com/",
      githubUrl: "https://github.com/RashedulHaqueRasel1",
    },
    {
      id: 2,
      title: "Fresh, Flavor-Packed Pizzas Crafted to Excite",
      description: `Enjoy handcrafted pizzas made with fresh ingredients, bold flavors, endless customization, and signature creations—delivered hot for an unforgettable taste experience every time.`,
      image:
        "https://res.cloudinary.com/dzov2ohym/image/upload/v1763682427/Hero_section_rzp0mw.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Node.js",
        "Express.js",
        "NextAuth",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      category: "Fullstack",
      liveUrl: "https://pizzacraving.com",
      githubUrl: "https://github.com/RashedulHaqueRasel1",
    },
    {
      id: 3,
      title:
        "Houston's Trusted Roofing Partner for Residential & Commercial Projects",
      description: `Borrelli Roofing, led by owner Constantino, delivers Houston homeowners and businesses trusted, high-quality roofing, drone inspections, certifications, and exceptional service.`,
      image:
        "https://res.cloudinary.com/dzov2ohym/image/upload/v1763679458/Screenshot_2025-11-21_045617_g2p9ue.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "cloudinary",
      ],
      category: "Frontend",
      liveUrl: "https://borrelliroofing.com",
      githubUrl: "https://github.com/RashedulHaqueRasel1",
    },
    {
      id: 4,
      title: "Giftap - Your Gifting Solution",
      description:
        "Giftap offers personalized gifting with real-time tracking, seller chat, and role-based dashboards for smooth e-commerce experiences.",
      image: "https://i.postimg.cc/Vk3f1YQD/image.png?height=300&width=400",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Socket.io",
      ],
      category: "Fullstack",
      liveUrl: "https://giftap901.web.app",
      githubUrl: "https://github.com/naiemjoy1/giftap_client",
    },
    {
      id: 5,
      title: "onemartt - E-commerce Groceries Website",
      description:
        "OneMartt simplifies grocery shopping with role-based dashboards, attendance tracking, and seamless online & offline sales.",
      image: "https://i.postimg.cc/6QY9DCcx/image.png?height=300&width=400",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Node.js",
        "Express.js",
        "NextAuth",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      category: "Fullstack",
      liveUrl: "https://www.onemartt.com",
      githubUrl: "https://github.com",
    },
    {
      id: 6,
      title: "Tenrus - E-commerce Website",
      description: `Tenrus is a modern e-commerce platform offering diverse clothing collections with bulk or online ordering, supported by secure dashboards for admin`,
      image:
        "https://i.postimg.cc/J0y43tbV/Screenshot-2025-07-24-015435.png?height=300&width=400",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Node.js",
        "Express.js",
        "NextAuth",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      category: "Fullstack",
      liveUrl: "https://www.tenrus.com/",
      githubUrl: "https://github.com/RashedulHaqueRasel1",
    },
    {
      id: 7,
      title: "Arizona’s Premier Stone, Tile & Masonry Experts",
      description: `Delivering elite craftsmanship in custom stone, tile, and masonry with integrity, durability, and precision for residential and commercial projects across Arizona.`,
      image:
        "https://res.cloudinary.com/dzov2ohym/image/upload/v1763683916/Screenshot_2025-11-21_061137_hdjlnx.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      category: "Frontend",
      liveUrl: "https://www.elitestonebuildersaz.cloud",
      githubUrl: "https://github.com/RashedulHaqueRasel1",
    },
    {
      id: 8,
      title: "Laptop Gallery - Tech Destination",
      description:
        "User-friendly gadget store with SSLCommerz payments, filtering, search, and email confirmations for a smooth shopping experience.",
      image: "https://i.postimg.cc/4N7jGpfR/image.png?height=300&width=400",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "SSLCommerz",
      ],
      category: "Fullstack",
      liveUrl: "https://laptop-gallery.netlify.app/",
      githubUrl: "https://github.com/RashedulHaqueRasel1",
    },
    {
      id: 9,
      title: "Short Caption",
      description:
        "Short Caption is a fullstack platform for browsing, sharing, and favoriting Bangla & English captions with user authentication and category filters.",
      image: "https://i.postimg.cc/yNsVWLxZ/image.png?height=300&width=400",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "DaisyUI",
        "React Router Dom",
        "React Hook Form",
        "Axios",
        "Firebase Authentication",
        "SweetAlert",
        "Vercel",
      ],
      category: "Fullstack",
      liveUrl: "https://short-caption.vercel.app/",
      githubUrl: "https://github.com/RashedulHaqueRasel1/Short-Caption",
    },
    {
      id: 10,
      title: "Love Link - Matrimony Platform",
      description:
        "Secure matrimony platform with Stripe payments, premium memberships, and advanced filtering to help users find ideal life partners.",
      image: "https://i.postimg.cc/505g29cH/image.png?height=300&width=400",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Stripe",
      ],
      category: "Fullstack",
      liveUrl: "https://love-link-client.vercel.app/",
      githubUrl: "https://github.com/RashedulHaqueRasel1/Love-Link",
    },
    {
      id: 11,
      title: "EasyHire - Job Search Platform",
      description:
        "Streamlined job search and recruitment platform with deadline tracking, PDF downloads, and recruiter job updates.",
      image: "https://i.postimg.cc/YCj6ZxMQ/image.png?height=300&width=400",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "JWT",
      ],
      category: "Frontend",
      liveUrl: "https://easyhire-rasel.web.app/",
      githubUrl: "https://github.com/RashedulHaqueRasel1/EasyHire",
    },
    {
      id: 12,
      title: "Asia Adventure",
      description:
        "Tourist spot management web app with add/view features, personalized lists, and secure authentication.",
      image: "https://i.postimg.cc/wTryyYYs/image.png?height=300&width=400",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "DaisyUI",
        "Meraki UI",
        "Axios",
        "Swiper.js",
      ],
      category: "Frontend",
      liveUrl: "https://asiaadventure-rasel.surge.sh/",
      githubUrl: "https://github.com/RashedulHaqueRasel1/Asia-Adventure",
    },
  ];
}
