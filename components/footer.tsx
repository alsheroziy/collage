import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-college-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-6">
              <div className="relative h-8 w-8 md:h-10 md:w-10 overflow-hidden rounded-full bg-gold-500">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=K"
                  alt="Kollej Logosi"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-lg md:text-xl font-bold">Kollej</span>
            </Link>
            <p className="text-college-200 mb-4 md:mb-6 text-sm md:text-base">
              Sifatli ta'lim va qo'llab-quvvatlovchi jamiyat orqali talabalarga akademik mukammallik va shaxsiy
              rivojlanishga erishishga imkon berish.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <Link href="#" className="text-white hover:text-gold-300 transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-gold-300 transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-gold-300 transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-gold-300 transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white hover:text-gold-300 transition-colors">
                <Youtube size={18} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-6">Tezkor Havolalar</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-college-200 hover:text-gold-300 transition-colors text-sm md:text-base"
                >
                  Biz Haqimizda
                </Link>
              </li>
              <li>
                <Link
                  href="#programs"
                  className="text-college-200 hover:text-gold-300 transition-colors text-sm md:text-base"
                >
                  Dasturlar
                </Link>
              </li>
              <li>
                <Link
                  href="#campus"
                  className="text-college-200 hover:text-gold-300 transition-colors text-sm md:text-base"
                >
                  Kampus Hayoti
                </Link>
              </li>
              <li>
                <Link
                  href="#faculty"
                  className="text-college-200 hover:text-gold-300 transition-colors text-sm md:text-base"
                >
                  O'qituvchilar
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-college-200 hover:text-gold-300 transition-colors text-sm md:text-base"
                >
                  Aloqa
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-6">Resurslar</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="#" className="text-college-200 hover:text-gold-300 transition-colors text-sm md:text-base">
                  Talaba Portali
                </Link>
              </li>
              <li>
                <Link href="#" className="text-college-200 hover:text-gold-300 transition-colors text-sm md:text-base">
                  Kutubxona
                </Link>
              </li>
              <li>
                <Link href="#" className="text-college-200 hover:text-gold-300 transition-colors text-sm md:text-base">
                  Karyera Xizmatlari
                </Link>
              </li>
              <li>
                <Link href="#" className="text-college-200 hover:text-gold-300 transition-colors text-sm md:text-base">
                  Akademik Kalendar
                </Link>
              </li>
              <li>
                <Link href="#" className="text-college-200 hover:text-gold-300 transition-colors text-sm md:text-base">
                  Bitiruvchilar Tarmog'i
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-6">Obuna Bo'ling</h3>
            <p className="text-college-200 mb-3 md:mb-4 text-sm md:text-base">
              Kollejimiz haqidagi yangiliklar va yangilanishlarni olish uchun bizning axborot byulletenimizga obuna
              bo'ling.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="w-full px-3 md:px-4 py-2 rounded-md bg-college-800 border border-college-700 text-white placeholder-college-300 focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm"
                required
              />
              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-college-950 font-medium py-2 px-4 rounded-md transition-colors text-sm md:text-base"
              >
                Obuna Bo'lish
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-college-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-college-300">
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} Kollej. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex justify-center space-x-4 mt-3 md:mt-4 text-xs md:text-sm">
            <Link href="#" className="hover:text-gold-300 transition-colors">
              Maxfiylik Siyosati
            </Link>
            <Link href="#" className="hover:text-gold-300 transition-colors">
              Foydalanish Shartlari
            </Link>
            <Link href="#" className="hover:text-gold-300 transition-colors">
              Qulaylik
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

