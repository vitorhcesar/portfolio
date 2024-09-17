'use client'

import ProjectCard from "@/components/project-card";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { FaCss3Alt, FaHtml5, FaLinux } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiFlask, SiFramer, SiShadcnui } from "react-icons/si";

const projects = [
  { 
    title: "Persianas Crystal", 
    description: "Landing page para um cliente no Rio de Janeiro, para venda de persianas, cortinas e outros serviços ofertados pela empresa.", 
    image: "/project1.jpg",
    link: "#",
    icons: [
      <RiNextjsFill key={0} />,
      <RiTailwindCssFill key={1} />,
      <SiShadcnui key={2} />,
      <SiFramer key={3} />,
    ],
  },
  { 
    title: "Portal Agendar", 
    description: "Mudança no CSS da Landing Page e resolução de diversos bugs, principalmente relacionados a responsividade e conexão com API / Gateway de pagamento.", 
    image: "/projects/portal_agendar.png",
    link: "https://portalagendar.com/",
    icons: [
      <FaHtml5 key={0} />,
      <FaCss3Alt key={1} />,
      <SiFlask key={2} />,
      <FaLinux key={3} />,
    ],
  },
]

export default function ProjectsSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section id="projetos" ref={containerRef} className="py-20 px-4 md:px-0">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Projetos em Destaque</h2>
      <div className="space-y-20 md:space-y-40">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} progress={scrollYProgress} index={index} icons={project.icons} />
        ))}
      </div>
    </section>
  )
}