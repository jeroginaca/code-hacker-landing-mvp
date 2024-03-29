import { Navbar } from "@/components/component"
import { BlogPosts, Contact, Footer, Freebie, HardSoftSkills, Hero, Objetivos, Payment, Programa, ProximasFechas } from "@/components/sections"

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
       <ProximasFechas />
      <Programa />
      <BlogPosts />
      <Objetivos />
      <HardSoftSkills />
      <Freebie />
      <Payment />
      <Contact />
      <Footer />
    </div>
  )
}
