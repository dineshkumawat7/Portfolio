import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import { ThemeProvider } from "./context/ThemeContext"
function App() {

  return (
    <ThemeProvider>
      <>
        <Navbar />
        <Hero />
        <Contact />
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
