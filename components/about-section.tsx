import Image from "next/image"
import { Button } from "@/components/ui/button"
import CountUp from "@/components/count-up"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-college-900 mb-4">Biz Haqimizda</h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          <div className="relative h-[250px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://www.eschoolnews.com/files/2020/12/education-system-students.jpg"
              alt="Kollej Kampusi"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-college-800">1985 yildan beri ta'limdagi mukammallik</h3>
            <p className="text-sm md:text-base text-gray-700">
              Bizning kollejimiz tez o'zgaruvchan dunyoda muvaffaqiyatga erishish uchun talabalarni tayyorlaydigan
              transformatsion ta'lim tajribasini taqdim etishga bag'ishlangan. Akademik mukammallik, innovatsiya va
              inklyuzivlikka sodiqlik bilan biz talabalarimizga o'z salohiyatlarini to'liq ro'yobga chiqarishga imkon
              beramiz.
            </p>
            <div className="grid grid-cols-2 gap-2 md:gap-4 pt-2 md:pt-4">
              <div className="bg-college-50 p-2 md:p-4 rounded-lg text-center">
                <h4 className="text-xl md:text-3xl font-bold text-college-700">
                  <CountUp end={5000} suffix="+" />
                </h4>
                <p className="text-xs md:text-sm text-gray-600">Talabalar</p>
              </div>
              <div className="bg-college-50 p-2 md:p-4 rounded-lg text-center">
                <h4 className="text-xl md:text-3xl font-bold text-college-700">
                  <CountUp end={300} suffix="+" />
                </h4>
                <p className="text-xs md:text-sm text-gray-600">O'qituvchilar</p>
              </div>
              <div className="bg-college-50 p-2 md:p-4 rounded-lg text-center">
                <h4 className="text-xl md:text-3xl font-bold text-college-700">
                  <CountUp end={50} suffix="+" />
                </h4>
                <p className="text-xs md:text-sm text-gray-600">Dasturlar</p>
              </div>
              <div className="bg-college-50 p-2 md:p-4 rounded-lg text-center">
                <h4 className="text-xl md:text-3xl font-bold text-college-700">
                  <CountUp end={95} suffix="%" />
                </h4>
                <p className="text-xs md:text-sm text-gray-600">Bitiruvchilar Bandligi</p>
              </div>
            </div>
            <Button className="bg-college-700 hover:bg-college-800 mt-4">Biz Haqimizda Ko'proq</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

