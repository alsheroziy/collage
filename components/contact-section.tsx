"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, LucideIcon, Mail, MapPin, Phone } from "lucide-react"
import type React from "react"
import { useState } from "react"

interface ContactInfo {
  icon: LucideIcon
  title: string
  content: string | string[]
}

interface FormField {
  id: string
  label: string
  type?: string
  placeholder: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    title: "Manzil",
    content: "123 Kollej Ko'chasi, Shahar, Viloyat 12345"
  },
  {
    icon: Phone,
    title: "Telefon",
    content: "(123) 456-7890"
  },
  {
    icon: Mail,
    title: "Email",
    content: "qabul@kollej.edu"
  },
  {
    icon: Clock,
    title: "Ish Vaqti",
    content: ["Dushanba - Juma: 8:00 - 17:00", "Shanba: 9:00 - 13:00"]
  }
]

const formFields: FormField[] = [
  {
    id: "name",
    label: "Ismingiz",
    placeholder: "Alisher Navoiy"
  },
  {
    id: "email",
    label: "Email Manzil",
    type: "email",
    placeholder: "alisher@example.com"
  },
  {
    id: "subject",
    label: "Mavzu",
    placeholder: "Qabul haqida so'rov"
  },
  {
    id: "message",
    label: "Xabar",
    placeholder: "Xabaringizni shu yerga yozing..."
  }
]

const ContactInfoItem = ({ icon: Icon, title, content }: ContactInfo) => (
  <div className="flex items-start">
    <Icon className="text-gold-500 mr-3 md:mr-4 mt-1" size={20} />
    <div>
      <h4 className="font-semibold text-college-900 text-sm md:text-base">{title}</h4>
      {Array.isArray(content) ? (
        content.map((line, index) => (
          <p key={index} className="text-gray-700 text-xs md:text-sm">
            {line}
          </p>
        ))
      ) : (
        <p className="text-gray-700 text-xs md:text-sm">{content}</p>
      )}
    </div>
  </div>
)

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
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
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
              {formFields.map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  {field.id === "message" ? (
                    <Textarea
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full min-h-[100px] md:min-h-[150px] text-sm"
                    />
                  ) : (
                    <Input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full text-sm"
                    />
                  )}
                </div>
              ))}
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
                {contactInfo.map((info, index) => (
                  <ContactInfoItem key={index} {...info} />
                ))}
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

