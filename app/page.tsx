import AboutSection from "@/components/AboutSection"
import ChallengeSection from "@/components/ChallengeSection"
import ContactSection from "@/components/Contact"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectSection"


export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      {/* <ChallengeSection/> */}
      <ContactSection/> 
    </main>
  )
}
