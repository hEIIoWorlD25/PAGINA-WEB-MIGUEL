import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Trucks from "./components/Trucks"
import AboutSeller from "./components/AboutSeller"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Trucks />
        <AboutSeller />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App