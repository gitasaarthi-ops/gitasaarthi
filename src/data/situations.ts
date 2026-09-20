import { LifeSituation } from '../types/gita';

export const LIFE_SITUATIONS: LifeSituation[] = [
  {
    id: "anxiety",
    titleEn: "Anxiety & Overthinking",
    titleTe: "ఆందోళన & అతిగా ఆలోచించడం",
    icon: "BrainCircuit",
    descriptionEn: "When thoughts are racing, outcomes feel uncertain, and fear of the future paralyzes you.",
    shlokaIds: ["2-47", "2-70"]
  },
  {
    id: "work-stress",
    titleEn: "Burnout & Workplace Pressure",
    titleTe: "వృత్తిపరమైన ఒత్తిడి & అలసట",
    icon: "Briefcase",
    descriptionEn: "Working hard without fulfillment, facing toxic competition, or fearing failure in career.",
    shlokaIds: ["2-47", "6-5"]
  },
  {
    id: "anger",
    titleEn: "Anger & Frustration",
    titleTe: "కోపం & అసహనం",
    icon: "Flame",
    descriptionEn: "Losing control when provoked, holding grudges, or being disturbed by difficult people.",
    shlokaIds: ["2-70", "12-15"]
  },
  {
    id: "self-doubt",
    titleEn: "Self-Doubt & Low Motivation",
    titleTe: "ఆత్మవిశ్వాసం కోల్పోవడం",
    icon: "TrendingUp",
    descriptionEn: "Feeling unworthy, procrastinating, or struggling to maintain daily habits and discipline.",
    shlokaIds: ["6-5", "2-47"]
  },
  {
    id: "grief",
    titleEn: "Grief, Guilt & Regret",
    titleTe: "దుఃఖం, అపరాధ భావం & పశ్చాత్తాపం",
    icon: "HeartHandshake",
    descriptionEn: "Carrying painful memories, mourning a loss, or burdened by past mistakes you cannot undo.",
    shlokaIds: ["18-66", "2-70"]
  },
  {
    id: "faith",
    titleEn: "Seeking Protection & Hope",
    titleTe: "దివ్య రక్షణ & శాంతి కోసం",
    icon: "Shield",
    descriptionEn: "When feeling alone in the world and longing for unconditional divine reassurance.",
    shlokaIds: ["9-22", "18-66"]
  }
];
