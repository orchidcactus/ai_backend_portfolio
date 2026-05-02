import AutomationHero from "@/components/AutomationHero";
import AutomationUseCases from "@/components/AutomationUseCases";

export const metadata = {
  title: "AI Automation Services | Small Businesses",
  description: "Custom AI automation services for small businesses. Reclaim your time and streamline your workflow with intelligent agents.",
};

export default function AutomationPage() {
  return (
    <>
      <AutomationHero />
      <AutomationUseCases />
    </>
  );
}
