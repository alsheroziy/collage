"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    image: "https://news.az/uploads/2022/08/12/news/176835/original/176835-0842718.jpg",
    title: "Bizning Kollejimizga Xush Kelibsiz",
    description: "Talabalarni akademik mukammallik va shaxsiy rivojlanishga yo'naltirish",
    buttonText: "Batafsil",
    buttonLink: "#about",
  },
  {
    id: 2,
    image: "https://www.eschoolnews.com/files/2020/12/education-system-students.jpg",
    title: "Bizning Dasturlarni Kashf Eting",
    description: "Muvaffaqiyatga tayyorlash uchun mo'ljallangan keng qamrovli dasturlar",
    buttonText: "Dasturlarni Ko'rish",
    buttonLink: "#programs",
  },
  {
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxCh8fet0nb0i-Wesyp1SiiJfWeoWm297JAb5-UE8s318CFPdij43M8WuKsn2uReyfxZk&usqp=CAU",
    title: "Kampus Hayoti",
    description: "Jonli va inkluziv jamiyatni his qiling",
    buttonText: "Kampusni O'rganish",
    buttonLink: "#campus",
  },
]

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <header className="relative">
      {/* Navigation */}
      <nav
        className={cn(
          "absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent transition-all duration-1000",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10",
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gold-500 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=K"
                  alt="Kollej Logosi"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-gold-300">
                Kollej
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-white hover:text-gold-300 transition-colors relative group">
                Biz Haqimizda
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#programs" className="text-white hover:text-gold-300 transition-colors relative group">
                Dasturlar
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#campus" className="text-white hover:text-gold-300 transition-colors relative group">
                Kampus
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#faculty" className="text-white hover:text-gold-300 transition-colors relative group">
                O'qituvchilar
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#contact" className="text-white hover:text-gold-300 transition-colors relative group">
                Aloqa
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Button className="bg-gold-500 hover:bg-gold-600 text-college-950 transition-transform hover:scale-105">
                Ariza Topshirish
              </Button>
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              className="md:hidden text-white transition-transform hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "absolute top-full left-0 right-0 bg-college-900 md:hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden py-0",
          )}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-white hover:text-gold-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Biz Haqimizda
            </Link>
            <Link
              href="#programs"
              className="text-white hover:text-gold-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dasturlar
            </Link>
            <Link
              href="#campus"
              className="text-white hover:text-gold-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Kampus
            </Link>
            <Link
              href="#faculty"
              className="text-white hover:text-gold-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              O'qituvchilar
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-gold-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Aloqa
            </Link>
            <Button className="bg-gold-500 hover:bg-gold-600 text-college-950 w-full">Ariza Topshirish</Button>
          </div>
        </div>
      </nav>

      {/* Slider */}
      <div className="relative h-[600px] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className={cn(
                "object-cover transition-transform duration-10000 ease-out",
                index === currentSlide ? "scale-105" : "scale-100",
              )}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-16 text-white">
              <h1
                className={cn(
                  "text-2xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4 transition-all duration-1000",
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                )}
              >
                {slide.title}
              </h1>
              <p
                className={cn(
                  "text-sm md:text-lg lg:text-xl mb-4 md:mb-6 max-w-2xl transition-all duration-1000 delay-300",
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                )}
              >
                {slide.description}
              </p>
              <Button
                asChild
                className={cn(
                  "bg-gold-500 hover:bg-gold-600 text-college-950 text-sm md:text-base transition-all duration-1000 delay-500 hover:scale-105",
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                )}
              >
                <Link href={slide.buttonLink}>{slide.buttonText}</Link>
              </Button>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                index === currentSlide ? "bg-gold-500 w-6" : "bg-white/50",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-transform hover:scale-110"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-transform hover:scale-110"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </header>
  )
}

