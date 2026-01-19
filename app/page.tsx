import Hero from "@/components/Hero"
import Navigation from "@/components/Navigation"
import NewDrip from "@/components/NewDrip"
import Category from "@/components/Category"
import Story from "@/components/Story"

const page = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <NewDrip />
      <Category />
      <Story />
    </div>
  )
}

export default page