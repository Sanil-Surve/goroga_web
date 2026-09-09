import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StudyDetailView from "@/components/science/StudyDetailView";
import { clinicalStudies } from "@/data/scienceData";

const study = clinicalStudies.find((s) => s.slug === "study-hrv");

export const metadata: Metadata = {
  title: "Heart Rate Variability (HRV) Study - Clinical Evidence | Roga",
  description:
    "Heart rate variability improvements through non-invasive vagus nerve stimulation: Results from a placebo controlled study demonstrating a 48% increase in HF HRV.",
};

export default function StudyHrvPage() {
  if (!study) {
    notFound();
  }
  return <StudyDetailView study={study} />;
}
