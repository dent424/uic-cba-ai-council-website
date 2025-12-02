export interface BrownbagEvent {
  date: string;
  speaker: string;
  speakerInfo: string;
  topic: string;
  status: "upcoming" | "past";
  videoUrl?: string;
}

export const brownbagEvents: BrownbagEvent[] = [
  {
    date: "2025-07-09",
    speaker: "Alex Moore",
    speakerInfo: "UIC Marketing",
    topic: "Current and near future capabilities of Generative AI with applications to business courses",
    status: "upcoming",
  },
  {
    date: "2025-07-16",
    speaker: "Brad Stuart",
    speakerInfo: "UIC IDS",
    topic: "Assignment and assessment styles and structures in the age of AI",
    status: "upcoming",
  },
  {
    date: "2025-07-23",
    speaker: "Alex Moore",
    speakerInfo: "UIC Marketing",
    topic: "Creating Custom GPTs - specialized versions of ChatGPT tailored for your classroom needs",
    status: "upcoming",
  },
  {
    date: "2025-07-30",
    speaker: "Yingda Lu",
    speakerInfo: "UIC IDS",
    topic: "Using AI-assisted Programming Tools in our Curriculum",
    status: "upcoming",
  },
  {
    date: "2025-08-06",
    speaker: "Ozgur Arslan Ayaydin and Sayna Razi",
    speakerInfo: "UIC Finance & Marketing",
    topic: "CBA AI statement and guidance on CBA syllabus policies",
    status: "upcoming",
  },
  {
    date: "2025-08-13",
    speaker: "Open Session",
    speakerInfo: "All Faculty",
    topic: "Open Q&A session",
    status: "upcoming",
  },
  {
    date: "2025-08-20",
    speaker: "Doug Lundquist",
    speakerInfo: "UIC IDS",
    topic: "Summer 2025 pilot effort in IDS 200 to introduce AI fundamentals to students and using AI to assist with course grading",
    status: "upcoming",
  },
  {
    date: "2025-09-24",
    speaker: "Dominique Badoer",
    speakerInfo: "UIC Finance",
    topic: "Custom GPTs for classroom use",
    status: "upcoming",
  },
  {
    date: "2025-10-22",
    speaker: "Danny Katz",
    speakerInfo: "Northeastern Marketing",
    topic: "Creating custom AI textbooks",
    status: "upcoming",
  },
  {
    date: "2025-11-12",
    speaker: "Patrick Horton",
    speakerInfo: "UIC CATE",
    topic: "TBD",
    status: "upcoming",
  },
  {
    date: "TBD",
    speaker: "Barb Barney-McNamara",
    speakerInfo: "UIC Marketing",
    topic: "TBD",
    status: "upcoming",
  },
];

export function getUpcomingEvents(): BrownbagEvent[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return brownbagEvents.filter(event => {
    if (event.date === "TBD") return true;
    const eventDate = new Date(event.date);
    return eventDate >= today && event.status === "upcoming";
  });
}

export function getPastEvents(): BrownbagEvent[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return brownbagEvents.filter(event => {
    if (event.date === "TBD") return false;
    const eventDate = new Date(event.date);
    return eventDate < today || event.status === "past";
  });
}

export function formatDate(dateString: string): string {
  if (dateString === "TBD") return "TBD";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
