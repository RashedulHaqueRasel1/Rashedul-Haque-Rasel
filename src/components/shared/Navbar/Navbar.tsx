
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"

// Navigation items with dropdown support
const navigationItems = [
  { title: "Home", href: "/" },
  {
    title: "Services",
    href: "/services",
    dropdown: [
      { title: "Web Development", href: "/services/web-development" },
      { title: "Mobile Apps", href: "/services/mobile-apps" },
      { title: "UI/UX Design", href: "/services/design" },
    ],
  },
  {
    title: "About",
    href: "/about",
    dropdown: [
      { title: "Our Team", href: "/about/team" },
      { title: "Our Story", href: "/about/story" },
      { title: "Careers", href: "/about/careers" },
    ],
  },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isScrolled, setIsScrolled] = React.useState(false)

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary"></div>
            <span className="text-xl font-bold">Logo Here</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <React.Fragment key={item.title}>
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "text-base font-medium transition-colors hover:text-primary",
                          pathname === item.href ? "text-primary" : "text-foreground",
                        )}
                      >
                        {item.title}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-48">
                      {item.dropdown.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.title} asChild>
                          <Link
                            href={dropdownItem.href}
                            className={cn("w-full", pathname === dropdownItem.href ? "font-medium text-primary" : "")}
                          >
                            {dropdownItem.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-foreground",
                    )}
                  >
                    {item.title}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col px-4 space-y-6 pt-6">
                {navigationItems.map((item) => (
                  <div key={item.title} className="space-y-3">
                    {item.dropdown ? (
                      <>
                        <div className="font-medium text-lg">{item.title}</div>
                        <div className="ml-4 flex flex-col space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.title}
                              href={dropdownItem.href}
                              className={cn(
                                "text-base transition-colors hover:text-primary",
                                pathname === dropdownItem.href ? "font-medium text-primary" : "text-muted-foreground",
                              )}
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-primary",
                          pathname === item.href ? "text-primary" : "text-foreground",
                        )}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
                <Button className="mt-4 w-full">Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
