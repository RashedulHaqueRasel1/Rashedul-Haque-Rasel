"use client"

import { ArrowUp, Linkedin, Github, Mail, Phone, MapPin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-[#0f172a] text-white pt-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Rashedul Haque Rasel</h3>
            <p className="text-gray-400 mb-5 max-w-xs leading-relaxed">
              Full Stack Developer passionate about building dynamic and responsive web applications.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/rashedul-haque-rasel/" target="_blank" rel="noreferrer">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition hover:cursor-pointer"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://github.com/RashedulHaqueRasel1" target="_blank" rel="noreferrer">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition hover:cursor-pointer"
                >
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://www.facebook.com/Rashedul.haque.Rase1/">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition hover:cursor-pointer"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
              </a>
              <a href="mailto:rashedulhaquerasel1@gmail.com">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition hover:cursor-pointer"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Get In Touch</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <a
                  href="mailto:rashedulhaquerasel1@gmail.com"
                  className="hover:underline hover:text-purple-400"
                >
                  rashedulhaquerasel1@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400" />
                <a href="tel:+8801772582460" className="hover:text-purple-400">
                  +880 17725-82460
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Savar, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center border-t border-gray-800 py-4">
          <p className="text-gray-400 text-sm text-center flex justify-center md:text-left">
            © {new Date().getFullYear()} Rashedul Haque Rasel. All rights reserved.
          </p>

          {/* Optional Scroll to Top Button */}
          {/* 
          <Button onClick={scrollToTop} size="sm" variant="ghost" className="text-white hover:bg-gray-800 mt-4 md:mt-0">
            <ArrowUp className="w-4 h-4 mr-1" />
            Back to Top
          </Button>
          */}
        </div>
      </div>
    </footer>
  )
}
