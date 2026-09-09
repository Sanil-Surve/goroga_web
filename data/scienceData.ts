export interface ResearchPartner {
  id: string;
  name: string;
  logo: string;
}

export interface ScienceMetric {
  id: string;
  title: string;
  stat: string;
  isPositive: boolean;
  icon: string;
}

export interface StudyFigure {
  caption?: string;
  image: string;
  label?: string;
}

export interface ClinicalStudy {
  slug: string;
  title: string;
  shortTitle: string;
  publishedIn: string;
  tags: string[];
  summary: string;
  sourceText: string;
  mainImage: string;
  abstract: string;
  background: string;
  materialsAndMethods: string[];
  resultsSummary: string;
  resultsParagraphs: string[];
  figures: StudyFigure[];
  conclusion: string[];
  keywords: string[];
}

export const sciencePartners: ResearchPartner[] = [
  {
    id: "mitacs-partner",
    name: "Mitacs",
    logo: "/assets/science/mitacs.png",
  },
  {
    id: "waterloo-partner",
    name: "University of Waterloo",
    logo: "/assets/science/waterloo.png",
  },
  {
    id: "neuro-partner",
    name: "Society for Neuroscience",
    logo: "/assets/science/sfn.png",
  },
  {
    id: "brain-partner",
    name: "Brain & Behavior Journal",
    logo: "/assets/science/brain-behavior.png",
  },
  {
    id: "advances-partner",
    name: "Advances in Neuroscience",
    logo: "/assets/science/advances-neuro.png",
  },
  {
    id: "brain-stim-partner",
    name: "Brain Stimulation",
    logo: "/assets/science/brain-stim.png",
  },
  {
    id: "cabhi-partner",
    name: "CABHI Research",
    logo: "/assets/science/cabhi.png",
  },
];

export const scienceMetrics: ScienceMetric[] = [
  {
    id: "vagus-nerve",
    title: "Vagus Nerve Activation",
    stat: "48% increase",
    isPositive: true,
    icon: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b2856824af393e93a1e434_5.png",
  },
  {
    id: "anxiety",
    title: "Anxiety",
    stat: "47% reduction",
    isPositive: true,
    icon: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b28568c454f21ccc4689eb_1.png",
  },
  {
    id: "sleep",
    title: "Sleep",
    stat: "22% improvement",
    isPositive: true,
    icon: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b2856855767e4fa8b8dcec_3.png",
  },
  {
    id: "hrv",
    title: "Heart Rate Variability",
    stat: "17% increase",
    isPositive: true,
    icon: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b2856800634d2595b0687c_2.png",
  },
  {
    id: "focus",
    title: "Focus",
    stat: "29% increase",
    isPositive: true,
    icon: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b285686885f975de6b0ddd_4.png",
  },
  {
    id: "alpha-power",
    title: "Alpha Power",
    stat: "35% increase",
    isPositive: true,
    icon: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b28568c35638d62c334e6f_6.png",
  },
];

export const clinicalStudies: ClinicalStudy[] = [
  {
    slug: "study-anxiety",
    title: "Auricular Transcutaneous Vagus Nerve Stimulation (tVNS) Reduces Anxiety Symptoms: A Longitudinal Randomised Controlled Study",
    shortTitle: "Longitudinal Anxiety RCT",
    publishedIn: "The Society for Neuroscience and The Brain & Behavior Journal.",
    tags: ["Stress Management", "GAD-7", "STAI-S", "Anxiety Relief"],
    summary:
      "Anxiety disorders affect a significant portion of the population, leading to a growing interest in new treatment approaches. In a study on the Roga tVNS device, researchers found that daily use of auricular transcutaneous vagus nerve stimulation (tVNS) over four weeks significantly reduced anxiety in participants with moderate to severe anxiety. The active treatment group experienced a 47% decrease in GAD-7 scores and a 14% decrease in STAI-S scores, demonstrating that tVNS is a promising and effective non-invasive treatment for long-term stress relief.",
    sourceText:
      "Controlled study using Roga devices, funded by MITACS Accelerate grant in Canada. Independently evaluated and approved by the University of Waterloo Human Research Ethics Board (HREB). Published in The Society for Neuroscience and The Brain & Behavior Journal.",
    mainImage:
      "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b240dde5494eb8e6796e63_Fig.%20A%20(11).png",
    abstract:
      "Anxiety disorders are highly prevalent and carry significant personal and societal costs. Auricular transcutaneous vagus nerve stimulation (tVNS) is a non-invasive neuromodulation approach that targets vagal afferents to regulate autonomic tone and emotional responses.\n\nIn this longitudinal, randomised, controlled study (N=32, ages 18–31), participants with moderate to severe baseline anxiety received daily sessions of active tVNS or placebo stimulation for four weeks. Self-reported anxiety was measured using the Generalized Anxiety Disorder Scale (GAD-7) and the State-Trait Anxiety Inventory–State scale (STAI-S) at baseline, two weeks, and four weeks.\n\nActive tVNS produced significant improvements. By week four, GAD-7 scores decreased by 47% (t(31)=7.92, p<0.001), representing a shift from severe to mild anxiety. STAI-S scores decreased by 14% (t(31)=2.85, p=0.008), reflecting a transition from high to moderate anxiety. Placebo recipients showed only modest early reductions that plateaued or rebounded by week 4.\n\nThese findings demonstrate that auricular tVNS provides sustained, longitudinal anxiolytic effects when administered daily, with meaningful improvements emerging as early as the two week mark and consolidating by four weeks.",
    background:
      "Anxiety disorders affect nearly one third of adults during their lifetime. There is growing interest in neuromodulation approaches that directly regulate autonomic and limbic activity.\n\nThe vagus nerve serves as a bidirectional conduit between the brainstem and major organs, helping regulate stress, heart activity, and inflammation. Reduced vagal activity is often linked to anxiety symptoms. Auricular tVNS offers a non-invasive way to stimulate the auricular branch of the vagus nerve and engage its central pathways. While past work shows it can quickly change stress responses, few studies have tested its longer term effects. This study evaluated whether daily tVNS could lower anxiety over four weeks, using validated self report questionnaires.",
    materialsAndMethods: [
      "Design: Randomised, placebo controlled longitudinal study.",
      "Participants: N=32 healthy young adults (18–31 years) with moderate to severe anxiety (GAD-7 ≥ 9).",
      "Intervention - Active group: Daily stimulation using a Roga tVNS device, applied for 1-hour sessions twice per day over 4 consecutive weeks.",
      "Intervention - Placebo group: Identical sham device that mimicked setup but delivered no effective stimulation.",
      "Assessment timeline: GAD-7 and STAI-S were administered at baseline, week 2, and week 4.",
      "Generalized Anxiety Disorder Scale (GAD-7): A validated, self administered 7 item questionnaire assessing generalised anxiety severity (0–21 scale; mild = 5–9, moderate = 10–14, severe ≥15).",
      "State Trait Anxiety Inventory – State scale (STAI-S): A validated, self administered 20 item questionnaire measuring current state anxiety (20–80 scale; low = 20–37, moderate = 38–44, high = 45–80).",
      "Statistical analysis: Changes in anxiety scores were compared across the three time points and interpreted against clinical thresholds to determine whether reductions reflected meaningful shifts in severity.",
    ],
    resultsSummary:
      "Across the 4 week intervention, participants receiving active auricular tVNS showed sustained reductions in anxiety, with improvements evident by week 2 and consolidating by week 4. Placebo participants showed only modest early reductions that later plateaued or reversed. On the GAD-7, the active group shifted from severe to mild anxiety, while on the STAI-S they moved from high to moderate.",
    resultsParagraphs: [
      "As shown in Figure A, GAD-7 scores began in the severe range (~15) for both groups. By week 2, the active tVNS group demonstrated a sharp reduction to single digit values (~9), while placebo participants remained elevated (~12). At week 4, the active group achieved a 47% reduction from baseline (~8), a clinically meaningful shift into the mild range [t(31)=7.92, p<0.001]. In contrast, placebo scores plateaued in the moderate range, showing no sustained improvement.",
      "In Figure B, STAI-S scores started in the high anxiety range (~49). At week 2, the active group declined to ~44, crossing into the moderate range, whereas placebo participants showed only a minimal decrease. By week 4, the active group reached ~42, a 14% reduction [t(31)=2.85, p=0.008]. Placebo participants, however, exhibited a slight rebound toward baseline, suggesting their early improvement reflected transient expectancy rather than a durable effect.",
    ],
    figures: [
      {
        label: "Figure A: GAD-7 Longitudinal Trajectory",
        image: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b0c3e21e018f81e9b025d6_Fig.%20A%20(2).png",
        caption: "Reduction in GAD-7 anxiety severity over 4 weeks across active vs. sham groups.",
      },
      {
        label: "Figure B: STAI-S Score Changes",
        image: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b0c3ee28c18bdc5bc0e664_Fig.%20B%20(1).png",
        caption: "State anxiety inventory scores tracking baseline, week 2, and week 4.",
      },
    ],
    conclusion: [
      "This longitudinal study demonstrates that daily auricular tVNS can produce sustained reductions in anxiety over a 4 week course, with measurable improvements by the 2-week mark. Both GAD-7 and STAI-S, validated self reported measures, confirmed clinically significant changes.",
      "Vagus Nerve Stimulation represents a promising approach that can deliver longitudinal anxiety relief. Further research should investigate durability beyond 4 weeks and its potential integration with pharmacological, behavioural and mindfulness therapies.",
    ],
    keywords: [
      "Anxiety",
      "Transcutaneous Vagus Nerve Stimulation (tVNS)",
      "Generalized Anxiety Disorder (GAD-7)",
      "State-Trait Anxiety Inventory (STAI-S)",
    ],
  },
  {
    slug: "study-hrv",
    title: "Heart Rate Variability Improvements Through Non-Invasive Vagus Nerve Stimulation: Results from a Placebo Controlled Study",
    shortTitle: "Heart Rate Variability (HRV)",
    publishedIn: "Advances in Neuroscience Research Journal",
    tags: [
      "Heart Rate Variability (HRV)",
      "Parasympathetic Activity",
      "RMSSD",
      "pNN50",
      "High Frequency (HF) HRV",
    ],
    summary:
      "The vagus nerve is vital for regulating stress and recovery, with its function measured by heart rate variability (HRV). This study showed that a single 1 hour tVNS session significantly enhanced vagal activity. The stimulation increased HRV's high frequency (HF) power by 48%, while other markers like RMSSD and the LF/HF ratio also indicated a strong shift toward parasympathetic dominance. The study confirms that tVNS can effectively increase HRV and improves autonomic balance.",
    sourceText:
      "Controlled study using Roga stimulation, independently evaluated and funded, published in The Advances in Neuroscience Research Journal.",
    mainImage:
      "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b234b6d0ca4428835ba08d_Fig.%20A%20(9).png",
    abstract:
      "The vagus nerve regulates autonomic function and heart rate variability (HRV). Auricular tVNS may improve autonomic balance by enhancing parasympathetic activity. In this controlled study, a single one-hour session of tVNS increased vagal activity by 48%, measured through the High Frequency (HF) component of HRV. The LF/HF ratio also emerged as a key marker predicting responsiveness to stimulation.",
    background:
      "The vagus nerve is a central pathway of the parasympathetic nervous system, responsible for maintaining balance across multiple physiological systems and promoting recovery following stress. Its function can be directly assessed through heart rate variability (HRV), which measures the subtle fluctuations in the intervals between heartbeats. These small variations reflect the body’s ability to adapt to internal and external demands.\n\nHigh HRV indicates greater autonomic flexibility, resilience, and capacity for relaxation, while low HRV reflects reduced adaptability and sustained sympathetic dominance, often linked to stress and negative health outcomes. For this reason, HRV serves as a robust and widely accepted biomarker of vagal activity and stress regulation.",
    materialsAndMethods: [
      "Design: Randomised, placebo controlled longitudinal study.",
      "Participants: N=32, ages 18–31.",
      "Intervention - Active group: 1 single stimulation session using a Roga tVNS device, applied for 1-hour.",
      "Intervention - Placebo group: Identical sham device that mimicked setup but delivered no effective stimulation.",
      "Lab Equipment: Participants were equipped with a five-lead Shimmer ECG, which was collected at 512 Hz with Shimmer ConsensysPro software (v.1.6.0, Shimmer Sensing, Dublin, IR).",
      "Data Extraction: The ECG record from Lead II was imported into ARTiiFACT software (v2.13) to extract the interbeat intervals (IBIs) and compute values.",
      "Measurements: Mean heart rate (HR), Low Frequency spectral power [0.04–0.15 Hz] (LF), High Frequency spectral power [.15 to .4 Hz] (HF), LF/HF Ratio, and Percentage of successive Normal-to-Normal intervals >50ms apart (pNN50).",
    ],
    resultsSummary:
      "Active tVNS stimulation produced a marked increase in parasympathetic activity compared to placebo. Most notably, HF power, a direct index of vagal tone, increased by 48% under active stimulation, demonstrating significant effectiveness. While both active and sham conditions showed some change over time, the active group exhibited clearer and more sustained autonomic modulation.",
    resultsParagraphs: [
      "The high frequency (HF) component of HRV (Fig. A) is the clearest marker of vagal activity and parasympathetic tone. Under active stimulation, HF power increased by +37% at 20 minutes and by +48% at 1 hour, demonstrating a strong and sustained enhancement of vagal activity, while the sham condition showed no recovery.",
      "The LF/HF ratio (Fig. C) reflects the balance between sympathetic and parasympathetic influences. In the active group, this ratio declined by -27%, indicating a progressive shift toward parasympathetic dominance. In contrast, the sham group showed increases over the same period, consistent with sympathetic predominance.",
      "RMSSD is a key index of HRV, reflecting short term beat-to-beat variability in heart rhythms. Because RMSSD is strongly linked to vagal modulation, higher values indicate stronger parasympathetic activity and better autonomic flexibility. Under the active tVNS session, RMSSD increased by +17% (Fig. D), while the sham condition showed only minimal change.",
      "pNN50 provides another sensitive measure of parasympathetic tone, capturing the proportion of large fluctuations in heartbeats. Active stimulation produced a +14% increase in pNN50 at 1 hour (Fig. E), compared with a smaller change in the sham condition.",
    ],
    figures: [
      {
        label: "Figure A: High Frequency (HF) Power",
        image: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b1015e1b240643c1327b46_Fig.%20A%20(3).png",
        caption: "HF power increases by 48% at 1 hour under active tVNS stimulation.",
      },
      {
        label: "Figure B: Low Frequency (LF) Power",
        image: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b101eba9e72e698a2e6f53_Fig.%20B%20(3).png",
        caption: "Low frequency spectral component across stimulation timeline.",
      },
      {
        label: "Figure C: LF/HF Ratio Modulation",
        image: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b101f6720add64fca18460_Fig.%20C%20(2).png",
        caption: "LF/HF autonomic balance drops by 27% towards parasympathetic recovery.",
      },
      {
        label: "Figure D: RMSSD Short-Term Variability",
        image: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b10697d456aadf090bf27b_Fig.%20D%20(1).png",
        caption: "Beat-to-beat variability increased by 17% in active session.",
      },
      {
        label: "Figure E: pNN50 Successive Differences",
        image: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b106c69bc5dec4afee53d7_Fig.%20E%20(2).png",
        caption: "14% rise in pNN50 reflecting enhanced autonomic parasympathetic tone.",
      },
    ],
    conclusion: [
      "Vagus nerve stimulation significantly enhanced parasympathetic activity. HF power increased by 48% in a single 1 hour Roga session, indicating a clear shift toward vagal dominance. HRV indices such as RMSSD and pNN50 also rose, reflecting greater beat-to-beat variability and autonomic flexibility.",
      "Together, these results demonstrate that Roga strengthened vagal regulation and improved stress-related autonomic balance. Future studies should confirm these effects using longer protocols, larger cohorts, and expanded biometrics.",
    ],
    keywords: [
      "Vagus Nerve",
      "Heart Rate Variability (HRV)",
      "Parasympathetic Activity",
      "Autonomic Nervous System",
      "RMSSD",
      "pNN50",
      "High Frequency HRV",
    ],
  },
  {
    slug: "study-eeg",
    title: "Non-Invasive Vagus Nerve Stimulation Effects on Brain Waves: A Study of Alpha Power and Stress-Related Attention Signals",
    shortTitle: "Alpha Brainwaves & EEG Study",
    publishedIn: "The Society for Neuroscience and The Brain and Behavior journals.",
    tags: [
      "Brain oscillations",
      "Electroencephalography (EEG)",
      "Event-related potentials (ERPs)",
      "Alpha State",
      "Default Mode Network (DMN)",
      "High Beta",
    ],
    summary:
      "Brainwave activity studies are crucial for understanding how non-invasive techniques like auricular transcutaneous vagus nerve stimulation (tVNS) can help patients regulate their stress levels. This study found that the stimulation can significantly increase alpha brainwave activity, a state linked to relaxed mental processing. The stimulation also boosted neural responses for attention and emotional control, which suggests it may help to downregulate stress related brain networks and rumination.",
    sourceText:
      "Clinical trial funded by MITACS Accelerate grant in Canada. Independently evaluated and approved by the University of Waterloo Human Research Ethics Board (HREB). Published in The Society for Neuroscience and The Brain & Behavior Journal.",
    mainImage:
      "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b23c884cf527cc7323f881_Untitled%20(42%20x%2045.4%20cm)%20(2).png",
    abstract:
      "Auricular transcutaneous vagus nerve stimulation (tVNS) is a non-invasive technique that delivers mild electrical impulses to a branch of the vagus nerve located in the outer ear. The vagus nerve is a key communication pathway between the body and the brain, influencing mood, and emotions.\n\nIn this study, we investigated the acute effects of a single one hour tVNS session in healthy young adults using electroencephalography (EEG), a method that records brainwave activity.\n\nThe analysis revealed significant increases in the alpha frequency band (8–12 Hz). Alpha power is typically linked to relaxation and self-related awareness. The increase was observed in regions associated with self-related cognition and tactile sensation. These findings suggest that tVNS can modulate brain oscillatory activity in circuits tied to stress regulation and emotional balance.",
    background:
      "The vagus nerve helps regulate stress by shaping attention, mood, and self-related cognition. One major target of vagal activity is a set of midline brain regions engaged during self-reflection and emotion regulation, known as the default mode network (DMN). Because this network is often disrupted when anxiety arises, it serves as an important marker of stress-related brain activity.\n\nIn response to stimuli, the brain can generate rapid electrical signals called event-related potentials (ERPs). These can be recorded with an electroencephalograph using an electrode cap (EEG). Two well-studied ERPs are the error-related negativity (ERN), which reflects neural reactions to mistakes, and the visual N2, which reflects attention to visual stimuli. Both signals are often elevated in individuals with heightened stress, and they indicate the brain’s capacity to regulate emotion and maintain cognitive control.",
    materialsAndMethods: [
      "Quantitative, open-label study (N=32, ages 18–31).",
      "Design: 1 single tVNS stimulation session of 1 hour using a Roga Device with Pre- and Post-Intervention phases.",
      "EEG recorded with a 64-channel cap, electrodes placed per international 10–20 System with impedance under 5 kΩ.",
      "Data collected with 60 Hz notch filter, digitized at 500 Hz, downsampled to 250 Hz in EEGLAB.",
      "Independent component analysis (ICA) used to eliminate eye blinks and motor artifacts.",
      "Exported into LORETA for source analysis across delta, theta, alpha, beta1, beta2, and gamma bands.",
      "ERP Analysis: Stimulus-locked and response-locked epochs. N2 measured at FCz (200-350 ms). ERN measured at FCz (0-100 ms).",
    ],
    resultsSummary:
      "tVNS stimulation led to clear increases in alpha activity within specific areas of the left hemisphere, along with sharp enhancement in ERN and N2 ERP amplitudes, indicating strengthened engagement of cognitive focus and calmer mental processing.",
    resultsParagraphs: [
      "Alpha Power: Reflecting oscillatory activity in the 7.5–14 Hz range, is commonly linked to internal attention, memory, and regulation of stress responses. This range of brain activity is often referred to as the alpha state, a condition associated with relaxed but alert mental processing and reduced external distraction. There was a significant increase in alpha power in the left precuneus (BA7) [t=3.20, p<.05] and the left postcentral gyrus head region (BA1) [t=3.65, p<.05].",
      "Event Related Potentials (ERPs): ERPs showed significant increases in ERN and N2 amplitudes, with no changes in their timing. There were significant pre-to-post increases in ERN amplitude [t(31)=5.9, p<.001] and N2 amplitude [t(31)=7.1, p<.001]. These changes suggest enhanced activity in the anterior cingulate cortex, improved focus and emotional control.",
      "Theta and High Beta Activity: Theta power rose modestly, consistent with a more relaxed state often observed during meditation, while high beta power increased across both frontocentral (+11%) and posterior (+33%) regions, suggesting downregulation of default mode network (DMN) rumination.",
    ],
    figures: [
      {
        label: "Figure H1 & H2: LORETA Alpha Power Source Localization",
        image: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68ae68f99b4f20b7d56af65c_Screenshot%202025-08-26%208.09.35%20PM.png",
        caption: "Localized increase in alpha power in left precuneus (BA7) and somatosensory head region.",
      },
      {
        label: "Figure ERP: ERN & N2 Waveforms",
        image: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b12aab95e227f43eacfeb9_Fig.%20A%20(5).png",
        caption: "Substantial increase in Error-Related Negativity amplitude following Roga stimulation.",
      },
      {
        label: "Figure Beta: Frontocentral & Posterior Beta/Theta",
        image: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b12aab24ef4f812b276d93_Fig.%20C%20(4).png",
        caption: "Modulation of theta and beta bands associated with downregulation of mind wandering.",
      },
    ],
    conclusion: [
      "Our ROI analysis showed increased alpha power in the left parietal lobe, specifically in the precuneus and the head region of the postcentral gyrus. This reflects increased capacity for working memory and relaxed attention.",
      "Such increases in alpha activity are consistent with a shift into an alpha state, a condition marked by relaxed internal attention and reduced external distraction, which aligns with the observed modulation of stress and attention networks.",
    ],
    keywords: [
      "Vagus Nerve Stimulation",
      "Electroencephalography (EEG)",
      "Event-related potentials (ERPs)",
      "Brain oscillations",
      "Default Mode Network (DMN)",
      "Alpha State",
      "Theta Power",
      "High Beta",
    ],
  },
  {
    slug: "study-gad-int",
    title: "Efficacy of Non-Invasive Vagus Nerve Stimulation in Reducing Anxiety Symptoms: A 4-Week User Study",
    shortTitle: "4-Week Clinical User Trial",
    publishedIn: "Brain Stimulation Journal",
    tags: ["Stress Management", "GAD-7", "ZUNG-20", "Anxiety Relief"],
    summary:
      "In today's fast-paced world, stress, burnout, and anxiety are a widespread concern affecting millions. This study used non-invasive vagus nerve stimulation (nVNS) to attempt to alleviate some of the anxiety symptoms. The results were primarily measured using the Generalized Anxiety Disorder 7-item (GAD-7) scale, a widely used clinical tool to assess the severity of anxiety symptoms. Participants with moderate to severe anxiety saw a 54% reduction in their GAD-7 scores within just two weeks, moving from the severe to the mild range.",
    sourceText: "Pilot study using Roga technology, independently evaluated and funded, published in Brain Stimulation.",
    mainImage:
      "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b2411ca1a578724c0f13fb_Fig.%20A%20(10)2.png",
    abstract:
      "Stress and anxiety are prevalent conditions with significant personal and societal burden. This study evaluated the effects of non-invasive vagus nerve stimulation (nVNS) on anxiety severity in individuals with moderate to severe anxiety symptoms.\n\nThirty-eight participants were recruited from a pool of 220 applicants, selected based on GAD-7 scores ≥9 and Zung Anxiety Scale scores ≥50. Participants used an auricular nVNS device daily for 60 minutes over a 4-week period. Anxiety symptoms were assessed biweekly using the GAD-7 scale.\n\nBoth the GAD-7 and Zung scales were used to capture different dimensions of anxiety. Results showed a 54% reduction in GAD-7 scores at 4 weeks, with average severity improving from severe to mild within 2 weeks. At 6-month follow-up, 73% of participants reported continued use of the device at least 3 times weekly. These findings suggest nVNS is a promising alternative for anxiety reduction with sustained adherence.",
    background:
      "Anxiety disorders are among the most common mental health conditions globally, contributing to impaired quality of life, reduced productivity, and increased healthcare costs. Traditional treatments may be associated with side effects, limited access, or variable efficacy.\n\nThe vagus nerve plays a central role in autonomic regulation and emotional processing. Non-invasive vagus nerve stimulation (nVNS), delivered through auricular branches, has emerged as a potential intervention for modulating parasympathetic activity and reducing anxiety symptoms. This study aimed to evaluate the efficacy of daily nVNS on anxiety symptoms over a 4-week intervention period in individuals with moderate to severe anxiety.",
    materialsAndMethods: [
      "Applicants: 220 applicants screened; final sample of 37 subjects with moderate-to-severe anxiety.",
      "Inclusion criteria: GAD-7 ≥ 9 and Zung Anxiety Scale ≥ 50.",
      "Intervention: Roga non-invasive vagus nerve stimulator, 60 minutes daily for 4 consecutive weeks.",
      "Assessments: GAD-7 (0-4: Minimal, 5-9: Mild, 10-14: Moderate, 15-21: Severe) and Zung-20 Scale.",
      "Measurement Intervals: Baseline, Week 2, and Week 4.",
      "Retention & Durability: 6-month post-trial follow-up on self-reported device usage frequency.",
      "Study Design: Prospective, single-arm, open-label user study.",
    ],
    resultsSummary:
      "Both self-reported measures showed substantial reductions in symptoms, with the greatest improvements occurring in the first 2 weeks and additional gains sustained through week 4. GAD-7 scores dropped by 54% and 73% of participants retained long-term habituation.",
    resultsParagraphs: [
      "GAD-7 scores started at 15 (severe range) (Fig. A). By week 2, scores dropped to 9, a 41% reduction, indicating a shift from severe to mild anxiety. By week 4, scores further declined to 7, representing a 54% total reduction from baseline and placing patients in a much lower anxiety range.",
      "Zung Anxiety Scale scores began at 61 (severe range) (Fig. B). At 2 weeks, scores declined to 45, a 26% reduction, and by week 4 fell further to 42, a 31% reduction overall. This trajectory reflects a steady improvement from severe toward moderate anxiety levels.",
      "At the 6-month follow-up, 27 out of 37 participants or 73% reported still using the product at least three times per week. This sustained engagement indicates that many patients found continued value in ongoing use beyond the initial study period.",
    ],
    figures: [
      {
        label: "Figure A: GAD-7 4-Week Trajectory",
        image: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b241589e00373ecf7f7f8d_Fig.%20A%20(10).png",
        caption: "54% decline in clinical anxiety symptoms from week 0 to week 4.",
      },
      {
        label: "Figure B: Zung Anxiety Scale Reduction",
        image: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b14126c9bb3f2485846ae8_Fig.%20B%20(7).png",
        caption: "Steady decrease across psychological and somatic anxiety dimensions.",
      },
    ],
    conclusion: [
      "Daily use of non-invasive vagus nerve stimulation was associated with rapid and clinically significant reductions in anxiety severity, with participants improving from severe to mild anxiety within 2 weeks and maintaining benefits at 4 weeks.",
      "High retention at 6 months (73%) suggests strong user acceptability and continued perceived benefit. These findings support nVNS as a safe, accessible, and effective adjunctive intervention for anxiety disorders.",
    ],
    keywords: [
      "Vagus Nerve",
      "Heart Rate Variability (HRV)",
      "GAD-7",
      "ZUNG-20",
      "Anxiety Relief",
      "Non-Invasive Neuromodulation",
    ],
  },
];
