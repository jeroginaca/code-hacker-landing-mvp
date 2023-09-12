import { Navbar } from "@/components/component"
import { BlogPosts, Hero, Programa, ProximasFechas } from "@/components/sections"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProximasFechas />
      <Programa />
      <BlogPosts />
    </>
  )
}
