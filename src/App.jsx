import AppScreens from "./components/AppScreens"
import ContactSection from "./components/ContactSection"
import DownloadApp from "./components/DownloadApp"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductShowcase from "./components/ProductShowcase"
import SahalChatbot from "./components/SahalChatbot"
import SahalCurrency from "./components/SahalCurrency"
import VendorSection from "./components/VendorSection"

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <ProductShowcase/>
    <VendorSection/>
    <SahalCurrency/>
    <AppScreens/>
    <DownloadApp/>
    <ContactSection/>
    <Footer/>
    <SahalChatbot/>
    </>
  )
}

export default App