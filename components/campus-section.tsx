"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { MapPin, Book, Users, Coffee, Dumbbell, Home } from "lucide-react"

const campusFeatures = [
  {
    id: "library",
    label: "Kutubxona",
    icon: Book,
    title: "Zamonaviy Kutubxona",
    description:
      "Bizning zamonaviy kutubxonamizda 100,000 dan ortiq kitoblar, raqamli resurslar va yakka tartibda hamda guruh ishlari uchun qulay o'quv joylari mavjud.",
    image: "https://etimg.etb2bimg.com/photo/75729614.cms",
  },
  {
    id: "student-center",
    label: "Talabalar Markazi",
    icon: Users,
    title: "Talabalar Markazi",
    description:
      "Talabalar o'rtasida hamjamiyat va hamkorlikni rivojlantirish uchun mo'ljallangan talabalar faoliyati, to'garaklari va tadbirlari uchun jonli markaz.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOwhW9i7E5Dy0E14_jM_5Wz5YipwY1QPHQk5U013LO721E-ri625XW6o4utbG4OcF1Zo&usqp=CAU",
  },
  {
    id: "cafeteria",
    label: "Oshxona",
    icon: Coffee,
    title: "Ovqatlanish Joylari",
    description:
      "Turli xil ovqatlanish imkoniyatlari va talablar uchun to'yimli va mazali taomlarni taklif etuvchi bir nechta ovqatlanish joylari.",
    image: "https://img.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg",
  },
  {
    id: "sports",
    label: "Sport",
    icon: Dumbbell,
    title: "Sport Inshootlari",
    description:
      "Dam olish va musobaqa sportlari uchun gimnastika zali, suzish havzasi, tennis kortlari va atletika maydonlarini o'z ichiga olgan keng qamrovli sport inshootlari.",
    image: "https://www.allisonacademy.com/wp-content/uploads/2021/10/education-is-important.jpg",
  },
  {
    id: "dormitories",
    label: "Yotoqxonalar",
    icon: Home,
    title: "Talabalar Turar Joyi",
    description:
      "Talabalar uchun qulay va xavfsiz yotoqxonalar, turli xil turar joy imkoniyatlari bilan qo'llab-quvvatlovchi yashash muhitini ta'minlaydi.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOwhW9i7E5Dy0E14_jM_5Wz5YipwY1QPHQk5U013LO721E-ri625XW6o4utbG4OcF1Zo&usqp=CAU",
  },
]

export default function CampusSection() {
  const [activeTab, setActiveTab] = useState("library")

  return (
    <section id="campus" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-college-900 mb-4">Kampus Hayoti</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Ta'lim yo'lingizni yaxshilash uchun mo'ljallangan zamonaviy jihozlar bilan jonli kampus hamjamiyatimizni his
            qiling.
          </p>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-4"></div>
        </div>

        <div className="bg-college-50 rounded-xl p-6 md:p-8">
          <Tabs defaultValue="library" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1 md:gap-2 bg-transparent h-auto mb-4 md:mb-8">
              {campusFeatures.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className={`flex flex-col items-center p-2 md:p-4 rounded-lg data-[state=active]:bg-college-700 data-[state=active]:text-white`}
                >
                  <feature.icon size={20} className="mb-1 md:mb-2" />
                  <span className="text-xs md:text-sm">{feature.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {campusFeatures.map((feature) => (
              <TabsContent key={feature.id} value={feature.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                  <div className="relative h-[200px] sm:h-[250px] md:h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 md:space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-college-800">{feature.title}</h3>
                    <p className="text-sm md:text-base text-gray-700">{feature.description}</p>
                    <div className="flex items-center text-college-700">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm md:text-base">
                        {feature.id === "library"
                          ? "Shimoliy"
                          : feature.id === "student-center"
                            ? "Markaziy"
                            : feature.id === "cafeteria"
                              ? "G'arbiy"
                              : feature.id === "sports"
                                ? "Sharqiy"
                                : "Janubiy"}{" "}
                        Kampusda joylashgan
                      </span>
                    </div>
                    <Button className="bg-gold-500 hover:bg-gold-600 text-college-950 mt-2 md:mt-4 text-sm md:text-base">
                      Virtual Sayohat
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

