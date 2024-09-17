'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aqui você implementaria a lógica para enviar o email
    console.log('Form submitted:', formState)
    // Resetar o formulário após o envio
    setFormState({ name: '', email: '', phone: '', message: '' })
  }
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <section id="contato" className="py-20 bg-zinc-900 px-4 md:px-0">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Entre em Contato</h2>
        <Card className="bg-zinc-800 border-zinc-700">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-zinc-300">Nome</label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-zinc-700 border-zinc-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-zinc-300">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-zinc-700 border-zinc-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1 text-zinc-300">Celular</label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleChange}
                  className="bg-zinc-700 border-zinc-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-zinc-300">Motivo para contato</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="bg-zinc-700 border-zinc-600 text-white"
                />
              </div>
              <Button type="submit" className="w-full bg-teal-600 text-white hover:bg-teal-700">Enviar Mensagem</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}