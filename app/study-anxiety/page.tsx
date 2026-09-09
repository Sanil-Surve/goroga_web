import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StudyDetailView from "@/components/science/StudyDetailView";
import { clinicalStudies } from "@/data/scienceData";

const study = clinicalStudies.find((s) => s.slug === "study-anxiety");

export const metadata: Metadata = {
  title: "Anxiety Study - Clinical Evidence | Roga",
  description:
    "Longitudinal randomised controlled study on Auricular Transcutaneous Vagus Nerve Stimulation (tVNS) reducing anxiety symptoms by 47% on GAD-7 scores.",
};

export default function StudyAnxietyPage() {
  if (!study) {
    notFound();
  }
  return <StudyDetailView study={study} />;
}
