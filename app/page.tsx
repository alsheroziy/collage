import Header from "@/components/header"
import AboutSection from "@/components/about-section"
import ProgramsSection from "@/components/programs-section"
import CampusSection from "@/components/campus-section"
import FacultySection from "@/components/faculty-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AnimateOnView from "@/components/animate-on-view"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <AnimateOnView>
        <AboutSection />
      </AnimateOnView>
      <AnimateOnView delay={100}>
        <ProgramsSection />
      </AnimateOnView>
      <AnimateOnView delay={200}>
        <CampusSection />
      </AnimateOnView>
      <AnimateOnView delay={300}>
        <FacultySection />
      </AnimateOnView>
      <AnimateOnView delay={400}>
        <ContactSection />
      </AnimateOnView>
      <Footer />
    </main>
  )
}

