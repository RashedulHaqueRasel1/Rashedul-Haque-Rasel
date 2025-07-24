"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Facebook } from "lucide-react"
import { motion } from "framer-motion"
import Head from "next/head"


export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  // const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // toast({
    //   title: "Message sent successfully!",
    //   description: "Thank you for reaching out. I&#39;ll get back to you soon.",
    // })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (

    <section id="contact" className="py-12 sm:py-16 md:py-20 relative">

      {/* Head */}
      <Head>
        {/* General Meta Tags */}
        <title>Rashedul Haque Rasel - Full Stack Web Developer</title>
        <meta name="title" content="Rashedul Haque Rasel - Full Stack Web Developer" />
        <meta
          name="description"
          content="Explore the portfolio of Rashedul Haque Rasel, a full-stack web developer skilled in React, Next.js, Node.js, MongoDB, and more. Passionate about creating modern web applications."
        />
        <meta
          name="keywords"
          content="Rashedul Haque Rasel, web developer, full stack developer, React.js, Next.js, Node.js, Tailwind CSS, MongoDB, portfolio, Bangladesh developer"
        />
        <meta name="author" content="Rashedul Haque Rasel" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://rashedul-haque-rasel.vercel.app/" />

        {/* Favicon (optional) */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rashedul-haque-rasel.vercel.app/" />
        <meta property="og:title" content="Rashedul Haque Rasel - Full Stack Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore Rashedul's skills, education, and projects in web development, blending modern frontend and backend technologies."
        />
        <meta property="og:image" content="https://i.postimg.cc/qBNdJcLg/Rashedul-Haque-Rasel.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://rashedul-haque-rasel.vercel.app/" />
        <meta name="twitter:title" content="Rashedul Haque Rasel - Full Stack Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Passionate full-stack developer with experience in React, Next.js, Node.js, and MongoDB. Check out my latest work!"
        />
        <meta name="twitter:image" content="https://i.postimg.cc/qBNdJcLg/Rashedul-Haque-Rasel.jpg" />

        {/* Social Profiles (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rashedul Haque Rasel",
              "url": "https://rashedul-haque-rasel.vercel.app/",
              "image": "https://i.postimg.cc/qBNdJcLg/Rashedul-Haque-Rasel.jpg",
              "sameAs": [
                "https://www.facebook.com/Rashedul.haque.Rase1/",
                "https://www.linkedin.com/in/rashedul-haque-rasel/",
                "https://github.com/RashedulHaqueRasel1",
                "https://wa.link/9ch9lg"
              ],
              "jobTitle": "Full Stack Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Web Wizards"
              }
            }),
          }}
        />
      </Head>

      {/* Contact Section */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Have a project in mind or want to collaborate? I&#39;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Let&#39;s Connect</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
                I&#39;m always open to discussing new opportunities, creative projects, or just having a chat about
                technology and development.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-900 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <div>
                  <p className="font-medium text-white text-sm sm:text-base">Email</p>
                  <a
                    href="mailto:rashedulhaquerasel1@gmail.com"
                    className="text-base font-medium text-white hover:underline hover:text-purple-400 transition-colors duration-300"
                  >
                    rashedulhaquerasel1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-900 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <div>
                  <p className="font-medium text-white text-sm sm:text-base">Phone</p>
                  <a
                    href="https://wa.link/9ch9lg"
                    target="_blank"
                    className="text-base font-medium text-white hover:underline hover:text-purple-400 transition-colors duration-300"
                  >
                    +880 17725-82460 (WhatsApp)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-900 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <div>
                  <p className="font-medium text-white text-sm sm:text-base">Location</p>
                  <p className="text-gray-300 text-sm sm:text-base">Savar, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://www.linkedin.com/in/rashedul-haque-rasel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2 sm:p-3 border border-purple-500 rounded-md bg-transparent text-purple-400 hover:bg-purple-600 hover:border-purple-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                  href="https://github.com/RashedulHaqueRasel1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2 sm:p-3 border border-purple-500 rounded-md bg-transparent text-purple-400 hover:bg-purple-600 hover:border-purple-600 transition-colors"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                  href="https://www.facebook.com/Rashedul.haque.Rase1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2 sm:p-3 border border-purple-500 rounded-md bg-transparent text-purple-400 hover:bg-purple-500 hover:border-purple-500 transition-colors"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            {/* Calendly Embed Placeholder */}
            {/* <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-white mb-4">Schedule a Meeting</h4>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">Book a 30-minute call to discuss your project</p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Schedule Call</Button>
            </div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg order-1 lg:order-2"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Send me a message</h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
