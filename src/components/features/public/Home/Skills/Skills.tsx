"use client"

import { motion } from "framer-motion"
import { Code, Server, Wrench, Users, Sparkles } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "TailwindCSS", icon: "💨" },
    ],
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚀" },
      { name: "MongoDB", icon: "🍃" },
    ],
    icon: Server,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: "📝" },
      { name: "VSCode", icon: "💻" },
      { name: "Figma", icon: "🎯" },
      { name: "Firebase", icon: "🔥" },
      { name: "Vercel", icon: "▲" },
      { name: "GitHub", icon: "🐙" },
      { name: "Postman", icon: "📮" },
    ],
    icon: Wrench,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", icon: "💬" },
      { name: "Time Management", icon: "⏰" },
      { name: "Problem Solving", icon: "🧩" },
      { name: "Team Work", icon: "🤝" },
    ],
    icon: Users,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Skills & Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What I Bring to the Table</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive skill set spanning modern web technologies and professional capabilities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300" />

              {/* Content */}
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl ${category.bgColor} border border-white/10`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <div className={`h-1 w-16 bg-gradient-to-r ${category.color} rounded-full mt-2`} />
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/skill"
                    >
                      <span className="text-2xl flex-shrink-0">{skill.icon}</span>
                      <span className="text-white font-medium text-sm group-hover/skill:text-purple-300 transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            // { number: "3+", label: "Years Experience" },
            { number: "20+", label: "Projects Completed" },
            { number: "15+", label: "Technologies" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
