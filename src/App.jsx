import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import { ToastViewport } from "./components/toast/ToastViewport"
import { ToastProvider } from "./context/ToastContext"
function App() {

  return (
    <ToastProvider maxToasts={5} defaultDuration={5000}>
      <>
        <Navbar />
        <Hero />
        <Contact />
        <Footer />
      </>
      <ToastViewport />
    </ToastProvider>
  )
}

export default App
