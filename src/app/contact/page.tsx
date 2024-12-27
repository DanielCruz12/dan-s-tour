"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-600 mb-4">
            Have questions about our travel packages or need help planning your
            perfect getaway? We are here to help! Fill out the form below, and
            one of our travel experts will get back to you as soon as possible.
          </p>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Our Office</h2>
            <p className="text-gray-600">123 Travel Street</p>
            <p className="text-gray-600">Wanderlust City, WL 12345</p>
            <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-600">Email: info@wanderlusttravel.com</p>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full"
                rows={4}
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
