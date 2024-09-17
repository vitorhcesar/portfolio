'use client'

import { Button } from '@/components/ui/button'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projetos', 'testemunhos', 'tecnologias', 'contato']
      let currentSection = 'home'
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          const elementTop = top + window.scrollY
          const elementBottom = bottom + window.scrollY

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = section
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Chame a função imediatamente para definir a seção inicial
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Ajuste este valor conforme a altura do seu cabeçalho
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setActiveSection(sectionId)
    }
    
    setMobileMenuOpen(false)
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-teal-600 z-50"
        style={{ scaleX }}
      />
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm">
        <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
          <Link href="/" className="text-xl font-bold text-white">
            Dev. Vítor Hugo
          </Link>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <ul className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-black md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-4`}>
            {['Home', 'Projetos', 'Testemunhos', 'Tecnologias', 'Contato'].map((item) => (
              <li key={item}>
                <Button
                  variant="ghost"
                  className={`w-full md:w-auto hover:text-teal-600 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-teal-600' : ''
                  }`}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
          {/* <Button asChild className="hidden md:inline-flex border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"> */}
          <Button asChild variant='secondary' className="hidden md:inline-flex">
            <Link href="/orcamento">Faça seu orçamento</Link>
          </Button>
        </nav>
      </header>
    </>
  )
}
