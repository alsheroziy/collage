"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    // Show success message (in a real implementation)
    alert("Xabaringiz uchun rahmat! Tez orada siz bilan bog'lanamiz.")
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-college-900 mb-4">Biz Bilan Bog'laning</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Bizning dasturlar yoki kampus haqida savollaringiz bormi? Biz yordam berishga tayyormiz. Quyidagi shakl yoki
            aloqa ma'lumotlari orqali biz bilan bog'laning.
          </p>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-college-50 p-4 md:p-8 rounded-xl">
            <h3 className="text-xl md:text-2xl font-bold text-college-800 mb-4 md:mb-6">Bog'lanish</h3>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                  Ismingiz
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Alisher Navoiy"
                  required
                  className="w-full text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                  Email Manzil
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alisher@example.com"
                  required
                  className="w-full text-sm"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                  Mavzu
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Qabul haqida so'rov"
                  required
                  className="w-full text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                  Xabar
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Xabaringizni shu yerga yozing..."
                  required
                  className="w-full min-h-[100px] md:min-h-[150px] text-sm"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-college-950 text-sm md:text-base"
              >
                Xabar Yuborish
              </Button>
            </form>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-college-800 mb-4 md:mb-6">Aloqa Ma'lumotlari</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-gold-500 mr-3 md:mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-college-900 text-sm md:text-base">Manzil</h4>
                    <p className="text-gray-700 text-xs md:text-sm">123 Kollej Ko'chasi, Shahar, Viloyat 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-gold-500 mr-3 md:mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-college-900 text-sm md:text-base">Telefon</h4>
                    <p className="text-gray-700 text-xs md:text-sm">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-gold-500 mr-3 md:mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-college-900 text-sm md:text-base">Email</h4>
                    <p className="text-gray-700 text-xs md:text-sm">qabul@kollej.edu</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-gold-500 mr-3 md:mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-college-900 text-sm md:text-base">Ish Vaqti</h4>
                    <p className="text-gray-700 text-xs md:text-sm">Dushanba - Juma: 8:00 - 17:00</p>
                    <p className="text-gray-700 text-xs md:text-sm">Shanba: 9:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-college-800 mb-4 md:mb-6">Kampus Xaritasi</h3>
              <div className="relative h-[200px] md:h-[300px] w-full rounded-lg overflow-hidden bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-600 text-sm md:text-base">Interaktiv Kampus Xaritasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

