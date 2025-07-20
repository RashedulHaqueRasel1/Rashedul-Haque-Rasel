"use client"

import { ArrowUp, Linkedin, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-[#020617]/90 backdrop-blur-sm border-t border-white/10 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Rashedul Haque Rasel</h3>
            <p className="text-gray-400 mb-4">
              MERN Stack Developer passionate about creating amazing web experiences.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="p-2 hover:bg-gray-800 text-white">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-gray-800 text-white">
                <Github className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-gray-800 text-white">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>rasel@example.com</p>
              <p>+880 123 456 789</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            © 2025 Rashedul Haque Rasel. All rights reserved.
          </p>

          {/* <Button onClick={scrollToTop} size="sm" variant="ghost" className="hover:bg-gray-800 text-white">
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button> */}
        </div>
      </div>
    </footer>
  )
}
