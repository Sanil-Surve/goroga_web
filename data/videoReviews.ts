export interface VideoReview {
  id: string;
  title: string;
  author: string;
  handle?: string;
  streamId: string;
}

export const videoReviews: VideoReview[] = [
  {
    id: "v1",
    title: "Stress Relief Routine",
    author: "Roga Member",
    streamId: "dc495d12c406fbb51991e993383c02b5",
  },
  {
    id: "v2",
    title: "Calming Vagus Pulses",
    author: "Mindfulness Journey",
    streamId: "a7ed306fcf8cb5e8be4135165dd80b2d",
  },
  {
    id: "v3",
    title: "Sleep Improvement",
    author: "Wellness Creator",
    streamId: "1edd419ded96644287c1356b45c7177a",
  },
  {
    id: "v4",
    title: "ADHD & Focus Reset",
    author: "Tech Professional",
    streamId: "8efdb2ff9ead493f49600dfac3c619f9",
  },
  {
    id: "v5",
    title: "Morning Routine with Roga",
    author: "Busy Parent",
    streamId: "0e9e71b9e962f7280562732e3f686fac",
  },
  {
    id: "v6",
    title: "Workday Burnout Antidote",
    author: "Entrepreneur",
    streamId: "9f9c89b959db64cecc61ac2e4a40ab5b",
  },
  {
    id: "v7",
    title: "Deep Relaxation",
    author: "Biohacker",
    streamId: "27862cbbec8ffe09b372646b30349176",
  },
  {
    id: "v8",
    title: "Resting Heart Rate Drops",
    author: "Health Coach",
    streamId: "1bab814b6cc2cf7d58a64729f5daf8df",
  },
  {
    id: "v9",
    title: "Better Nights, Calmer Days",
    author: "Verified Buyer",
    streamId: "d778332d61be2257c7efd8376b7d6fb7",
  },
  {
    id: "v10",
    title: "Instant Meditation Boost",
    author: "Yoga Instructor",
    streamId: "3a8d06baaadd54e6b6b0934a37a4d88f",
  },
];
