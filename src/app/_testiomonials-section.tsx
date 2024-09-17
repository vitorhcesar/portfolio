'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  { name: "João Silva", image: "/avatar1.jpg", text: "Vítor é um desenvolvedor excepcional. Seu trabalho superou todas as expectativas." },
  { name: "Maria Oliveira", image: "/avatar2.jpg", text: "Trabalhar com Vítor foi uma experiência incrível. Ele é criativo e eficiente." },
  { name: "Carlos Santos", image: "/avatar3.jpg", text: "A dedicação e habilidade técnica do Vítor são impressionantes. Recomendo fortemente." },
]

export default function TestimonialsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section id="testemunhos" ref={containerRef} className="py-20 overflow-hidden px-4 md:px-0">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">O que dizem sobre mim</h2>
      <motion.div
        className="flex space-x-6"
        animate={isInView ? { x: [0, -1000] } : {}}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <Card key={index} className="w-80 flex-shrink-0 bg-zinc-900 border-zinc-800">
            <CardContent className="p-6 text-center">
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
              </Avatar>
              <p className="mb-2 text-zinc-300">{testimonial.text}</p>
              <p className="font-semibold text-teal-600">{testimonial.name}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </section>
  )
}