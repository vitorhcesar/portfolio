'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-zinc-900 px-4 md:px-0">
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
          Transformando ideias em código, <br />
          criando o futuro digital.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
          Olá, eu sou Vítor Hugo. Desenvolvedor full-stack apaixonado por criar soluções inovadoras e impactantes.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild size="lg" className="w-full md:w-auto bg-teal-600 text-white hover:bg-teal-700">
              <Link href="#contact">Entre em contato</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full md:w-auto border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">
              <Link href="/orcamento">
                Quero orçamento para projeto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Button variant="secondary" size="lg" className="w-full md:w-auto bg-zinc-800 text-white hover:bg-zinc-700">
            <Download className="mr-2 h-4 w-4" />
            Baixe meu CV
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
