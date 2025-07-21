import { HeroSection } from "@/components/sections/hero-section"
import { AccountOfferings } from "@/components/sections/account-offerings"
import { LoanTools } from "@/components/sections/loan-tools"
import { SecuritySection } from "@/components/sections/security-section"
import { DashboardPreview } from "@/components/sections/dashboard-preview"
import { OnboardingSection } from "@/components/sections/onboarding-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AccountOfferings />
      <LoanTools />
      <SecuritySection />
      <DashboardPreview />
      <OnboardingSection />
    </div>
  )
}
