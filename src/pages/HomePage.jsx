import BMICalculator from "../components/Home/BMICalculator";
import CTASection from "../components/Home/CTASection";
import DoctorsSection from "../components/Home/DoctorsSection";
import ExpertsSection from "../components/Home/ExpertsSection";
import Finden from "../components/Home/Finden";
import HeroSection from "../components/Home/HeroSection";
import StatsScrollSection from "../components/Home/StatsScrollSection";
import Testimonials from "../components/Home/Testimonials";
import TimelineSection from "../components/Home/TimelineSection";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <StatsScrollSection/>
         <ExpertsSection />
         <Finden/>
      <BMICalculator />
      <DoctorsSection />
      <TimelineSection />
      <Testimonials />
      <CTASection />
    </div>
  )
}
