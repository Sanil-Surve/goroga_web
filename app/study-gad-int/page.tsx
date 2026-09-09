import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StudyDetailView from "@/components/science/StudyDetailView";
import { clinicalStudies } from "@/data/scienceData";

const study = clinicalStudies.find((s) => s.slug === "study-gad-int");

export const metadata: Metadata = {
  title: "4-Week Anxiety User Study - Clinical Evidence | Roga",
  description:
    "Efficacy of non-invasive vagus nerve stimulation in reducing anxiety symptoms: A 4-week user study showing a 54% reduction in GAD-7 scores.",
};

export default function StudyGadIntPage() {
  if (!study) {
    notFound();
  }
  return <StudyDetailView study={study} />;
}
