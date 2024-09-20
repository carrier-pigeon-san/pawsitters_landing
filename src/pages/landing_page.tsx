import HeroSection from "../components/hero_section"
import NavBar from "../components/navbar"
import Features from "../components/features"
import About from "../components/about"
import Footer from "../components/footer"

const LandingPage = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection/>
      <NavBar/>
      <Features/>
      <About/>
      <Footer/>
    </main>
  )
}

export default LandingPage