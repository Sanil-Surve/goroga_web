import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StudyDetailView from "@/components/science/StudyDetailView";
import { clinicalStudies } from "@/data/scienceData";

const study = clinicalStudies.find((s) => s.slug === "study-eeg");

export const metadata: Metadata = {
  title: "EEG & Brain Waves Study - Clinical Evidence | Roga",
  description:
    "Non-invasive vagus nerve stimulation effects on brain waves: A study of alpha power, ERPs, and stress-related attention signals in healthy subjects.",
};

export default function StudyEegPage() {
  if (!study) {
    notFound();
  }
  return <StudyDetailView study={study} />;
}
