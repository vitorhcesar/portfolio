import ContactSection from "./_contact-section"
import Header from "./_header"
import HeroSection from "./_hero-section"
import ProjectsSection from "./_projects-section"
import TechnologiesSection from "./_tecnologies-section"
import TestimonialsSection from "./_testiomonials-section"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-16">
        <HeroSection />
        <ProjectsSection />
        <TestimonialsSection />
        <TechnologiesSection />
        <ContactSection />
      </main>

      <footer className="text-md text-muted-foreground py-6 bg-zinc-900 text-center">
        &copy; 2024 Todos os direitos reservados.
      </footer>
    </div>
  )
}
