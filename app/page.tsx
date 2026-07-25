import { AboutSection } from "./components/AboutSection";
import { CtaSection } from "./components/CtaSection";
import { HeroSection } from "./components/HeroSection";
import { SiteFooter } from "./components/SiteFooter";
import { StackSection } from "./components/StackSection";
import { StatementSection } from "./components/StatementSection";
import { WorkSection } from "./components/WorkSection";

export default function Home() {
  return (
    <main id="page-scroll-root" className="landing-page">
      <div className="paper-continuum">
        <HeroSection />
        <WorkSection />
      </div>
      <StatementSection />
      <AboutSection />
      <StackSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
