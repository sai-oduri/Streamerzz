import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks"
import KeyFeatures from "./components/KeyFeatures"
import Navbar from "./components/Navbar"
import PricingPlans from "./components/PricingPlans"

const App = () => {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <KeyFeatures />
      <PricingPlans />
    </main>
  )
}

export default App