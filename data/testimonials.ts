const CF_HASH = "ixOdK5-nQLTSS5scU61ahw";

export interface Testimonial {
  id: string;
  image: string;
  avatar: string;
  title: string;
  quote: string;
  name: string;
  handle: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    image: `https://imagedelivery.net/${CF_HASH}/23479968-6219-49f7-373e-473f6728ce00/public`,
    avatar: `https://imagedelivery.net/${CF_HASH}/bd94f768-a7fd-49ce-9e09-80b8e7da3600/public`,
    title: '"Ok this is weird"',
    quote:
      '"This is weird, I can only describe it like a mute button for my brain. I just put it on and after 20 minutes I get this huge release, my stress is not triggering as much."',
    name: "Devin Hayes",
    handle: "@devinhayes",
    rating: 5,
  },
  {
    id: "2",
    image: `https://imagedelivery.net/${CF_HASH}/598d8aca-ee43-46d8-ddcf-31cab6cc7000/public`,
    avatar: `https://imagedelivery.net/${CF_HASH}/4681e933-d62b-4ed0-5766-46e443546300/public`,
    title: '"Mastering my stress as a busy mom"',
    quote:
      '"I\'m a mum of two, and my house is usually full chaos. I discovered Roga and noticed real difference in my stress. I use it whenever I feel overwhelmed or need help regulating my emotions, and it honestly helped me stay sane in the middle of the daily madness."',
    name: "Colleen Chambers",
    handle: "@colleenchambersofficial",
    rating: 5,
  },
  {
    id: "3",
    image: `https://imagedelivery.net/${CF_HASH}/eb702584-5a48-4260-0c62-5e233fcfd400/public`,
    avatar: `https://imagedelivery.net/${CF_HASH}/48f814a4-d0ff-404c-f281-74265e940200/public`,
    title: '"Finally, a Vagus Stimulator with no gel mess"',
    quote:
      '"I\'ve tried a lot of Vagus Stimulators to help improve my sleep, and most of them involve gels and sticky guck that gets everywhere. Roga is super clean, no mess at all."',
    name: "Mollie Eastman",
    handle: "@mollie.eastman",
    rating: 5,
  },
  {
    id: "4",
    image: `https://imagedelivery.net/${CF_HASH}/9789516a-7b95-4cae-bc41-2ad939baf600/public`,
    avatar: `https://imagedelivery.net/${CF_HASH}/716191a8-9ef6-4a84-abf2-80202b815d00/public`,
    title: '"20 minutes a day changed my workflow"',
    quote:
      '"I tried Roga for 20 minutes a day and things actually felt a little bit lighter, it kinda changed the way I handle stress triggers. It reminded me how to reset."',
    name: "Adam",
    handle: "@adampikelivin",
    rating: 5,
  },
  {
    id: "5",
    image: `https://imagedelivery.net/${CF_HASH}/5c8832d2-d465-4b52-f836-73c8675fa700/public`,
    avatar: `https://imagedelivery.net/${CF_HASH}/4d842dec-cb61-4711-ef3c-7f234e0b8900/public`,
    title: '"Great content! Specially the breathwork sessions"',
    quote:
      '"I loved the breathwork sessions in the app because they really helped me reset and learn new breathing techniques."',
    name: "Kendra",
    handle: "@kendrasonia",
    rating: 5,
  },
  {
    id: "6",
    image: `https://imagedelivery.net/${CF_HASH}/203741d4-aad7-49c1-8a8d-490904b4f900/public`,
    avatar: `https://imagedelivery.net/${CF_HASH}/fda23633-9599-4be0-1ff2-e99513b6a400/public`,
    title: '"Focus mode is awesome if you have ADHD"',
    quote:
      '"I struggle with ADHD, so I really love the Focus mode. I use it while I work, and it helps me zone in. I feel less distracted and actually get more work done."',
    name: "Bella",
    handle: "@bellabhungary",
    rating: 5,
  },
  {
    id: "7",
    image: `https://imagedelivery.net/${CF_HASH}/7d31bf16-1a60-4449-b25b-7b64d9870400/public`,
    avatar: `https://imagedelivery.net/${CF_HASH}/2f75a918-cbeb-4509-f3d0-89e10c499500/public`,
    title: '"My resting heart rate dropped from 70 BPM to 62 BPM in 3 days"',
    quote:
      '"My resting heart rate dropped from 70 BPM to 62 BPM in just three days after starting to use Roga. I\'ve never seen a change like that in my biomarkers before. I\'ll keep using it and keep an eye on the rest of my metrics."',
    name: "Chris",
    handle: "@chris.and.suzanny",
    rating: 5,
  },
  {
    id: "8",
    image: `https://imagedelivery.net/${CF_HASH}/1618d325-c909-4b9e-9833-949643dfbc00/public`,
    avatar: `https://imagedelivery.net/${CF_HASH}/f67d63df-35ba-4356-2133-fd275f7a5000/public`,
    title: '"Vagus Nerve Stimulation to calm my mind"',
    quote:
      '"Vagus Nerve Stimulation might be the easiest way to lower my stress and just feel good every day, so I felt a deep sense of calm, balanced, and in control."',
    name: "Terrell McDonald",
    handle: "@tyxmcdonald",
    rating: 5,
  },
  {
    id: "9",
    image: `https://imagedelivery.net/${CF_HASH}/3a1e934a-5194-45d0-3c70-9d847df68700/public`,
    avatar: `https://imagedelivery.net/${CF_HASH}/f3f6025f-4c21-4acb-12e6-4a016141de00/public`,
    title: '"Finally, a way to stay focused without the burnout"',
    quote:
      '"This Roga device has been a game-changer, it helps me feel calm and focused while staying on top of everything. I\'ve noticed my sleep has been so much better, waking up refreshed and ready to tackle my crazy schedule is a huge win."',
    name: "Stephanie",
    handle: "@smartinixoxo",
    rating: 5,
  },
  {
    id: "10",
    image: `https://imagedelivery.net/${CF_HASH}/8949461e-e482-4312-a8db-d59b43b72c00/public`,
    avatar: `https://imagedelivery.net/${CF_HASH}/51aedf6e-4941-4813-2897-303006a17a00/public`,
    title: '"I was skeptical, but I\'m getting more work done"',
    quote:
      '"This is incredible! I tend to procrastinate a lot, especially with work. So the fact that I\'m getting more work done is great."',
    name: "Nick",
    handle: "@nicholasmccuen",
    rating: 5,
  },
  {
    id: "11",
    image: `https://imagedelivery.net/${CF_HASH}/bae07a9a-0d35-4344-fe30-888038597200/public`,
    avatar: `https://imagedelivery.net/${CF_HASH}/ede4ced9-cfb2-4686-2068-4530746c7000/public`,
    title: '"This knocks me out"',
    quote:
      '"After using it for a few weeks while, my sleep improved considerably. I use it every night before going to bed and it gets me sleepy everytime."',
    name: "Natalie",
    handle: "@natalie_aley",
    rating: 5,
  },
  {
    id: "12",
    image: `https://imagedelivery.net/${CF_HASH}/60cbf80f-2419-4d36-b9f9-2a94c08b8600/public`,
    avatar: `https://imagedelivery.net/${CF_HASH}/c1cbf063-8b8f-403b-428b-1da90677de00/public`,
    title: '"No one noticed I was wearing it"',
    quote:
      '"I love the fact that it\'s super discreet, you wear behind the ears, so no one can really tell you are wearing a Vagus Nerve Stimulator for stress in public, that\'s wild to me!"',
    name: "Chan",
    handle: "@chanification_",
    rating: 5,
  },
  {
    id: "13",
    image: `https://imagedelivery.net/${CF_HASH}/eec30838-5182-42b1-fada-739b0f1ac800/public`,
    avatar: `https://imagedelivery.net/${CF_HASH}/6820d947-f861-4e67-d7f1-3e5b4f3ef600/public`,
    title: '"This would\'ve saved me so much money"',
    quote:
      '"If I had found this first, it could have saved me thousands of dollars in therapy and treatments that didn\'t work. It is like instant meditation no matter what\'s going on around me, and it\'s given me patience, calmness, and I get happy again now."',
    name: "August",
    handle: "@augustw1965",
    rating: 5,
  },
  {
    id: "14",
    image: `https://imagedelivery.net/${CF_HASH}/57218b73-aefe-4318-2e20-29b184e04c00/public`,
    avatar: `https://imagedelivery.net/${CF_HASH}/5aec9c0e-6726-4ddb-da53-690f56b40500/public`,
    title: '"My anxiety is not in control anymore"',
    quote:
      '"Roga is helping to modulate the amygdala, the fear center in the brain. Helps to quiet the mind, also strengthens the vagus nerve..."',
    name: "Emma",
    handle: "@intothefoldwithemma",
    rating: 5,
  },
];
