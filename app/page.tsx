import { Navbar } from "@/components/component"
import { BlogPosts, Hero, Objetivos, Programa, ProximasFechas } from "@/components/sections"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProximasFechas />
      <Programa />
      <BlogPosts />
      <Objetivos />
    </>
  )
}
