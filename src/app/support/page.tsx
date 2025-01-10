"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function HelpAndSupportPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí iría la lógica para manejar el envío del formulario
    /*  toast({
      title: "Mensaje enviado",
      description:
        "Hemos recibido tu mensaje. Te responderemos lo antes posible.",
    }); */
  };

  const faqs = [
    {
      question: "¿Cómo puedo crear una cuenta?",
      answer:
        "Para crear una cuenta, haz clic en el botón 'Registrarse' en la esquina superior derecha de la página principal. Sigue las instrucciones proporcionadas para completar el proceso de registro.",
    },
    {
      question: "¿Cómo puedo restablecer mi contraseña?",
      answer:
        "Si has olvidado tu contraseña, haz clic en 'Olvidé mi contraseña' en la página de inicio de sesión. Se te enviará un correo electrónico con instrucciones para restablecer tu contraseña.",
    },
    {
      question: "¿Cómo puedo contactar al soporte técnico?",
      answer:
        "Puedes contactar a nuestro equipo de soporte técnico utilizando el formulario de contacto en esta página. También puedes enviarnos un correo electrónico directamente a support@example.com.",
    },
    {
      question: "¿Cuáles son los horarios de atención al cliente?",
      answer:
        "Nuestro equipo de atención al cliente está disponible de lunes a viernes, de 9:00 AM a 6:00 PM (hora local). Para consultas fuera de este horario, por favor utiliza el formulario de contacto y te responderemos lo antes posible.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preguntas Frecuentes</h2>
        <Input
          type="search"
          placeholder="Buscar en las FAQ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />
        <Accordion type="single" collapsible className="w-full">
          {faqs
            .filter(
              (faq) =>
                faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" required />
          </div>
          <div>
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="subject">Asunto</Label>
            <Input id="subject" required />
          </div>
          <div>
            <Label htmlFor="message">Mensaje</Label>
            <Textarea id="message" required />
          </div>
          <Button type="submit">Enviar mensaje</Button>
        </form>
      </div>
    </div>
  );
}
