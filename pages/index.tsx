import RecommendCardScroll from "@/src/components/RecommendCardScroll";
import Layout from "@/src/components/Layout";
import CardScrollWrapper from "@/src/components/CardScrollWrapper";
// import HeroSection from "@/src/components/HeroSection";
import ActionHero from "@/src/components/ActionHero";
import StackedCards from "@/src/components/StackedCards";
import AttractiveHero from "@/src/components/hero/AttractiveHero";
import DisplacedStats from "@/src/components/DisplacedStats";
import CausesSection from "@/src/components/CausesSection";
import HeroFeature from "@/src/components/hero/HeroFeature";
import FundraiserCardScroll from "@/src/components/scroll/FundraiserCardScroll";
import MoreWaysScroll from "@/src/components/scroll/MoreWaysScroll";
import FunctionalitiesGrid from "@/src/components/sections/FunctionalitiesGrid";
import TrustAndSafetySection from "@/src/components/sections/TrustAndSafetySection";
import FundraisersFor from "@/src/components/sections/FundraisersFor";

export default function Home() {
  return (
    <Layout title='Exocrowd Home | We are stronger united'>
      <AttractiveHero />
      <HeroFeature />
      {/* <DisplacedStats /> */}
      <MoreWaysScroll />
      <FunctionalitiesGrid />
      <ActionHero />

      {/* <StackedCards /> */}
      {/* <HeroSection /> */}
      {/* <CardScrollWrapper /> */}
      {/* <RecommendCardScroll /> */}
      <FundraiserCardScroll />

      {/* <CausesSection /> */}
      <TrustAndSafetySection />
      {/* <FundraisersFor /> */}
    </Layout>
  );
}
