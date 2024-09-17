import { Card, CardContent } from "@/components/ui/card";
import { AiFillOpenAI } from "react-icons/ai";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaLinux, FaPython, FaReact, FaStripe } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiFirebaseFill, RiJavascriptFill, RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAnthropic, SiDjango, SiFlask, SiFramer, SiGooglegemini, SiLangchain, SiShadcnui } from "react-icons/si";

const technologies = [
  { name: "React", icon: <FaReact className="w-5 h-5 text-white" /> },
  { name: "Next.js", icon: <RiNextjsFill className="w-5 h-5 text-white" /> },
  { name: "HTML", icon: <FaHtml5 className="w-5 h-5 text-white" /> },
  { name: "CSS", icon: <FaCss3Alt className="w-5 h-5 text-white" /> },
  { name: "tailwindcss", icon: <RiTailwindCssFill  className="w-5 h-5 text-white" /> },
  { name: "JavaScript", icon: <RiJavascriptFill className="w-5 h-5 text-white" /> },
  { name: "TypeScript", icon: <BiLogoTypescript className="w-5 h-5 text-white" /> },
  { name: "Python", icon: <FaPython className="w-5 h-5 text-white" /> },
  { name: "shadcn/ui", icon: <SiShadcnui className="w-5 h-5 text-white" /> },
  { name: "Framer Motion", icon: <SiFramer className="w-5 h-5 text-white" /> },
  { name: "Django REST Framework", icon: <SiDjango className="w-5 h-5 text-white" /> },
  { name: "Flask", icon: <SiFlask className="w-5 h-5 text-white" /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql className="w-5 h-5 text-white" /> },
  { name: "MySQL", icon: <GrMysql className="w-5 h-5 text-white" /> },
  { name: "Firebase", icon: <RiFirebaseFill className="w-5 h-5 text-white" /> },
  { name: "Supabase", icon: <RiSupabaseFill className="w-5 h-5 text-white" /> },
  { name: "OpenAI", icon: <AiFillOpenAI className="w-5 h-5 text-white" /> },
  { name: "Anthropic", icon: <SiAnthropic className="w-5 h-5 text-white" /> },
  { name: "Gemini", icon: <SiGooglegemini className="w-5 h-5 text-white" /> },
  { name: "Langchain", icon: <SiLangchain className="w-5 h-5 text-white" /> },
  { name: "Stripe", icon: <FaStripe  className="w-5 h-5 text-white" /> },
  { name: "Linux", icon: <FaLinux  className="w-5 h-5 text-white" /> },
]

export default function TechnologiesSection() {
  return (
    <section id="tecnologias" className="py-20 px-4 md:px-0">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Tecnologias</h2>
      <Card className="container mx-auto max-w-4xl bg-zinc-900 border-zinc-800">
        <CardContent className="p-6">
          <p className="text-lg mb-6 text-zinc-300">
            Sou um desenvolvedor dedicado e sempre em busca de aprendizado. Diariamente, me esforço para me manter atualizado com as últimas tendências e tecnologias do mercado. Minha paixão por aprender novas linguagens e ferramentas me permite oferecer soluções inovadoras e eficientes para cada projeto.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex items-center space-x-2 bg-zinc-800 rounded-lg p-2">
                {tech.icon}
                <span className="text-zinc-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}