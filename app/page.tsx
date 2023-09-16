import { Navbar } from "@/components/component"
import { BlogPosts, Freebie, HardSoftSkills, Hero, Objetivos, Programa, ProximasFechas } from "@/components/sections"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProximasFechas />
      <Programa />
      <BlogPosts />
      <Objetivos />
      <HardSoftSkills />
      <Freebie />
    </>
  )
}
