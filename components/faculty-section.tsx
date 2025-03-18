import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Mail } from "lucide-react"
import AnimateOnView from "@/components/animate-on-view"

const faculty = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    position: "Biznes Maktabi Dekani",
    department: "Biznes Boshqaruvi",
    image: "https://www.eschoolnews.com/files/2020/12/education-system-students.jpg",
    bio: "Biznes Boshqaruvi bo'yicha doktorlik darajasi, akademiya va sanoat konsaltingida 15 yildan ortiq tajribaga ega.",
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    position: "Kafedra Mudiri",
    department: "Kompyuter Fanlari",
    image: "https://etimg.etb2bimg.com/photo/75729614.cms",
    bio: "Yetakchi sun'iy intellekt va mashinali o'rganish tadqiqotchisi, nufuzli jurnallarda ko'plab nashrlar chop etgan.",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    position: "Dotsent",
    department: "Tabiiy Fanlar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXkLhizFtBrSnbKcWoyr8qqcwRk2XUPGnkUg&s",
    bio: "Tibbiyotda genetik tadqiqotlar va ularning qo'llanilishiga e'tibor qaratgan molekulyar biologiya bo'yicha mutaxassis.",
  },
  {
    id: 4,
    name: "Prof. David Wilson",
    position: "Faxriy Professor",
    department: "Matematika",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eqqfxOmlrNDNfUfzP_rZsKOJpjUjs5crFfoL-HQc44IJBSxM4pXChb9f8pmLPVBDltM&usqp=CAU",
    bio: "Sonlar nazariyasi va kriptografiyaga hissa qo'shgan mukofotga sazovor bo'lgan matematik.",
  },
]

export default function FacultySection() {
  return (
    <section id="faculty" className="py-16 bg-college-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-college-900 mb-4">Bizning Ajoyib O'qituvchilarimiz</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            O'z sohasida yetakchi va talabalar muvaffaqiyatiga bag'ishlangan jahon darajasidagi professorlardan ta'lim
            oling.
          </p>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {faculty.map((member, index) => (
            <AnimateOnView
              key={member.id}
              type={index % 2 === 0 ? "fade-up" : "fade-down"}
              delay={index * 100}
              className="h-full"
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="relative h-48 md:h-64 w-full overflow-hidden group">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-1 md:pb-2">
                  <CardTitle className="text-lg md:text-xl text-college-900">{member.name}</CardTitle>
                  <CardDescription className="text-college-700 font-medium text-sm md:text-base">
                    {member.position}
                  </CardDescription>
                  <CardDescription className="text-gray-600 text-xs md:text-sm">{member.department}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs md:text-sm text-gray-600">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-center space-x-4 pt-0">
                  <button
                    className="text-college-700 hover:text-college-900 transition-transform hover:scale-125"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </button>
                  <button
                    className="text-college-700 hover:text-college-900 transition-transform hover:scale-125"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </button>
                  <button
                    className="text-college-700 hover:text-college-900 transition-transform hover:scale-125"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </button>
                </CardFooter>
              </Card>
            </AnimateOnView>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-college-700 hover:bg-college-800 transition-transform hover:scale-105">
            Barcha O'qituvchilarni Ko'rish
          </Button>
        </div>
      </div>
    </section>
  )
}

