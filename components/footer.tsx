import { Facebook, Instagram, Linkedin, LucideIcon, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface SocialLink {
  icon: LucideIcon
  label: string
  href: string
}

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const socialLinks: SocialLink[] = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
]

const quickLinks: FooterLink[] = [
  { label: "Biz Haqimizda", href: "#about" },
  { label: "Dasturlar", href: "#programs" },
  { label: "Kampus Hayoti", href: "#campus" },
  { label: "O'qituvchilar", href: "#faculty" },
  { label: "Aloqa", href: "#contact" },
]

const resources: FooterLink[] = [
  { label: "Talaba Portali", href: "#" },
  { label: "Kutubxona", href: "#" },
  { label: "Karyera Xizmatlari", href: "#" },
  { label: "Akademik Kalendar", href: "#" },
  { label: "Bitiruvchilar Tarmog'i", href: "#" },
]

const footerSections: FooterSection[] = [
  { title: "Tezkor Havolalar", links: quickLinks },
  { title: "Resurslar", links: resources },
]

const SocialButton = ({ icon: Icon, label, href }: SocialLink) => (
  <Link href={href} className="text-white hover:text-gold-300 transition-colors">
    <Icon size={18} />
    <span className="sr-only">{label}</span>
  </Link>
)

const FooterLink = ({ label, href }: FooterLink) => (
  <li>
    <Link href={href} className="text-college-200 hover:text-gold-300 transition-colors text-sm md:text-base">
      {label}
    </Link>
  </li>
)

const FooterSection = ({ title, links }: FooterSection) => (
  <div>
    <h3 className="text-base md:text-lg font-bold mb-3 md:mb-6">{title}</h3>
    <ul className="space-y-2 md:space-y-3">
      {links.map((link, index) => (
        <FooterLink key={index} {...link} />
      ))}
    </ul>
  </div>
)

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
              {socialLinks.map((link, index) => (
                <SocialButton key={index} {...link} />
              ))}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <FooterSection key={index} {...section} />
          ))}

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

