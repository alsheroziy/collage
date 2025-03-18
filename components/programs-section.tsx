import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, FlaskRoundIcon as Flask, Calculator, Globe, Briefcase } from "lucide-react"
import Image from "next/image"
import AnimateOnView from "@/components/animate-on-view"

const programs = [
  {
    id: 1,
    title: "Biznes Boshqaruvi",
    description:
      "Turli biznes muhitlarida muvaffaqiyatga erishish uchun zarur bo'lgan biznes ko'nikmalarini va bilimlarini rivojlantiring.",
    icon: Briefcase,
    color: "bg-college-100 text-college-700",
    image: "https://etimg.etb2bimg.com/photo/75729614.cms",
  },
  {
    id: 2,
    title: "Kompyuter Fanlari",
    description: "Raqamli davr uchun dasturlash, algoritmlar va dasturiy ta'minotni ishlab chiqishni o'rganing.",
    icon: Code,
    color: "bg-college-100 text-college-700",
    image: "https://etimg.etb2bimg.com/photo/75729614.cms",
  },
  {
    id: 3,
    title: "Tabiiy Fanlar",
    description: "Laboratoriya tajribalari orqali biologiya, kimyo va fizikani o'rganing.",
    icon: Flask,
    color: "bg-college-100 text-college-700",
    image: "https://etimg.etb2bimg.com/photo/75729614.cms",
  },
  {
    id: 4,
    title: "Matematika",
    description:
      "Ilg'or matematik tushunchalar orqali analitik va muammolarni hal qilish ko'nikmalarini rivojlantiring.",
    icon: Calculator,
    color: "bg-college-100 text-college-700",
    image: "https://etimg.etb2bimg.com/photo/75729614.cms",
  },
  {
    id: 5,
    title: "Xalqaro Tadqiqotlar",
    description: "Siyosat, iqtisodiyot va madaniy xilma-xillik bo'yicha global nuqtai nazarni oling.",
    icon: Globe,
    color: "bg-college-100 text-college-700",
    image: "https://etimg.etb2bimg.com/photo/75729614.cms",
  },
  {
    id: 6,
    title: "Liberal San'at",
    description: "Gumanitar fanlar, san'at va ijtimoiy fanlar bo'yicha har tomonlama ta'lim oling.",
    icon: BookOpen,
    color: "bg-college-100 text-college-700",
    image: "https://etimg.etb2bimg.com/photo/75729614.cms",
  },
]

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-16 bg-college-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-college-900 mb-4">Bizning Akademik Dasturlarimiz</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Tanlagan sohangizdagi muvaffaqiyatga tayyorlash uchun mo'ljallangan bakalavr va magistratura
            dasturlarimizning xilma-xilligini kashf eting.
          </p>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {programs.map((program, index) => (
            <AnimateOnView key={program.id} type="fade-up" delay={index * 100} className="h-full">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full overflow-hidden">
                <div className="relative h-40 w-full overflow-hidden group">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-2 md:pb-4">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${program.color} flex items-center justify-center mb-2 md:mb-4 transition-transform hover:scale-110`}
                  >
                    <program.icon size={20} />
                  </div>
                  <CardTitle className="text-lg md:text-xl text-college-900">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs md:text-sm text-gray-600">{program.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-college-700 text-college-700 hover:bg-college-700 hover:text-white text-sm md:text-base transition-all duration-300"
                  >
                    Batafsil
                  </Button>
                </CardFooter>
              </Card>
            </AnimateOnView>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gold-500 hover:bg-gold-600 text-college-950 transition-transform hover:scale-105">
            Barcha Dasturlarni Ko'rish
          </Button>
        </div>
      </div>
    </section>
  )
}

