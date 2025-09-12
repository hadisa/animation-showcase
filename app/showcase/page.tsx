import AnimationShowcase from "@/components/animation-showcase"
import { Navigation } from "@/components/navigation"
import { AnimatedTabsDemo } from "@/components/sections/tab/newTabs"

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto">

        {/* <AnimationShowcase /> */}
        <AnimatedTabsDemo />
      </div>
    </div>
  )
}
