import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { RoiCalculator } from "@/components/roi/RoiCalculator";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "ROI Calculator | Blair Health",
  description:
    "Estimate what the long road to a specialist answer costs your organization.",
};

export default function RoiPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col bg-espresso">
        <RoiCalculator />
        <section className="w-full pb-16">
          <Container className="px-6 xl:px-18">
            <p className="type-body-sm text-taupe">
              Methodology &amp; sources: Estimates modeled from published
              research: Mayo Clinic Proceedings (menopause symptoms cost US
              employers $1.8B/yr in lost work time; $26.6B including medical
              expenses; 13% of women 45–60 report adverse work outcomes; ~11%
              miss ≥1 workday/yr) · national survey data (~40% of women report
              perimenopause misdiagnosis) · commercial E/M reimbursement
              benchmarks (new-patient specialist visits, CPT 99204–99205:
              $215–395+) · Mercer National Survey of Employer-Sponsored Health
              Plans (avg $17,496/employee, 2025). Presenteeism and attrition
              figures are modeled estimates, not measured outcomes; assumptions
              shown are adjustable. This tool provides directional estimates for
              planning purposes and does not constitute actuarial, financial, or
              clinical advice.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
