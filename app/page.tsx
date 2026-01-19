import Hero from "@/components/Hero"
import Navigation from "@/components/Navigation"
import NewDrip from "@/components/NewDrip"
import Category from "@/components/Category"
import Story from "@/components/Story"
import Community from "@/components/Community"
import Footer from "@/components/Footer"

const page = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <NewDrip />
      <Category />
      <Story />
      <Community />
      <Footer />
    </div>
  )
}

export default page