'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, MotionValue, useTransform } from "framer-motion"
import Image from "next/image"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    link: string
  }
  progress: MotionValue<number>
  index: number
  icons: React.ReactNode[]
}

export default function ProjectCard({ project, progress, index, icons }: ProjectCardProps) {
  const y = useTransform(progress, [0, 1], [100, -100])
  const top = 100 + index * 100 // Increasing top value for each project

  const handleGoToProject = () => {
    window.open(project.link, "_blank")
  }

  return (
    <motion.div
      style={{ y, top: `${top}px` }}
      className="sticky flex justify-center items-center"
    >
      <Card className="overflow-hidden bg-zinc-900 border-zinc-800 max-w-6xl w-full">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-full">
              <Image
                src={project.image}
                alt={project.title + ' image'}
                objectFit="cover"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-zinc-400 md:text-lg">{project.description}</p>
              <div className="flex gap-2 py-2">
                {icons.map((ico, index) => (
                  <div key={index} className="flex text-2xl items-center text-white">
                    {ico}
                  </div>
                ))}
              </div>
              <Button className="mt-4 self-start bg-teal-600 text-white hover:bg-teal-700" onClick={handleGoToProject}>Ver projeto</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}