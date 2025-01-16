"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

export default function HelpAndSupportPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      question: "¿Cómo puedo crear una cuenta?",
      answer:
        "Para crear una cuenta, haz clic en el botón 'Registrarse' en la esquina superior derecha de la página principal. Sigue las instrucciones proporcionadas para completar el proceso de registro. Si necesitas ayuda adicional, por favor contacta a nuestro equipo de soporte.",
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
    <div className="max-w-7xl min-h-screen mx-auto py-12 px-4 ">
      <h2 className="text-xl md:text-4xl font-semibold mb-4">Preguntas Frecuentes</h2>
      <Input
        type="search"
        placeholder="Buscar en las FAQ..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <Accordion
        type="multiple"
        defaultValue={["item-0", "item-1"]}
        className="w-full"
      >
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
  );
}
