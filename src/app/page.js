import BostonProcess from "@/components/Bostonprocess";
import HealthRisks from "@/components/Healthrisks";
import Hero from "@/components/Hero";
import MouseVsRat from "@/components/MouseVsRat";
import PeaceOfMind from "@/components/PeaceOfMind";
import ProcessSection from "@/components/ProcessSection";
import QuoteSection from "@/components/QuoteSection";
import ReviewsSlider from "@/components/ReviewsSlider";
import RodentRemoval from "@/components/RodentRemoval";


export default function Home() {
  return (
    <>
      <Hero />
      <ProcessSection />
      <RodentRemoval />
      <QuoteSection />
      <HealthRisks />
      <BostonProcess />
      <ReviewsSlider />
      <MouseVsRat />
      <PeaceOfMind />
    </>
  );
}
